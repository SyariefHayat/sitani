import { NextRequest, NextResponse } from "next/server";
import {
  db,
  users,
  petaniProfiles,
  investorProfiles,
  pembeliProfiles,
  pesertaProfiles,
} from "@/lib/db/schema";
import { eq, ilike, or, and } from "drizzle-orm";
import bcrypt from "bcryptjs";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const role = searchParams.get("role") || "";
    const status = searchParams.get("status") || "";

    const conditions = [];

    if (search) {
      conditions.push(
        or(
          ilike(users.name, `%${search}%`),
          ilike(users.email, `%${search}%`),
          ilike(users.id, `%${search}%`),
        ),
      );
    }

    if (role && role !== "Semua") {
      conditions.push(eq(users.role, role.toLowerCase()));
    }

    const allUsers = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        role: users.role,
        telepon: users.telepon,
        createdAt: users.createdAt,
      })
      .from(users)
      .where(conditions.length > 0 ? and(...conditions) : undefined);

    // Fetch provinsi/kota from profile tables for each user
    const usersWithRegion = await Promise.all(
      allUsers.map(async (user) => {
        let provinsi: string | null = null;
        let kota: string | null = null;

        if (user.role === "petani" || user.role === "distributor") {
          const [profile] = await db
            .select({ provinsi: petaniProfiles.provinsi, kota: petaniProfiles.kota })
            .from(petaniProfiles)
            .where(eq(petaniProfiles.userId, user.id))
            .limit(1);
          if (profile) {
            provinsi = profile.provinsi;
            kota = profile.kota;
          }
        } else if (user.role === "pembeli") {
          const [profile] = await db
            .select({ provinsi: pembeliProfiles.provinsi, kota: pembeliProfiles.kota })
            .from(pembeliProfiles)
            .where(eq(pembeliProfiles.userId, user.id))
            .limit(1);
          if (profile) {
            provinsi = profile.provinsi;
            kota = profile.kota;
          }
        }

        return { ...user, provinsi, kota };
      }),
    );

    return NextResponse.json(usersWithRegion);
  } catch (error) {
    console.error("GET users error:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data user" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password, role, telepon } = body;

    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { error: "Nama, email, password, dan role wajib diisi" },
        { status: 400 },
      );
    }

    // Check if email already exists
    const [existing] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existing) {
      return NextResponse.json(
        { error: "Email sudah terdaftar" },
        { status: 409 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const [newUser] = await db
      .insert(users)
      .values({
        name,
        email,
        password: hashedPassword,
        role,
        telepon: telepon || null,
      })
      .returning();

    return NextResponse.json(
      {
        message: "User berhasil dibuat",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST user error:", error);
    return NextResponse.json(
      { error: "Gagal membuat user" },
      { status: 500 },
    );
  }
}
