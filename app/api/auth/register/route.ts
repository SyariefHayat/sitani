import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import {
  db,
  users,
  petaniProfiles,
  investorProfiles,
  pembeliProfiles,
  pesertaProfiles,
} from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { role, nama, email, telepon, nik, password, ...profileData } = body;

    // Validate required fields
    if (!nama || !email || !password || !role) {
      return NextResponse.json(
        { error: "Nama, email, password, dan role wajib diisi" },
        { status: 400 },
      );
    }

    // Check if user already exists
    const [existingUser] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existingUser) {
      return NextResponse.json(
        { error: "Email sudah terdaftar" },
        { status: 409 },
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const [newUser] = await db
      .insert(users)
      .values({
        name: nama,
        email,
        telepon: telepon || null,
        nik: nik || null,
        password: hashedPassword,
        role,
      })
      .returning();

    // Create role-specific profile
    switch (role) {
      case "petani":
        await db.insert(petaniProfiles).values({
          userId: newUser.id,
          provinsi: profileData.provinsi || null,
          kota: profileData.kota || null,
          alamat: profileData.alamat || null,
        });
        break;

      case "investor":
        await db.insert(investorProfiles).values({
          userId: newUser.id,
          tipeInvestor: profileData.tipeInvestor || null,
          sumberDana: profileData.sumberDana || null,
          pengalaman: profileData.pengalaman || null,
        });
        break;

      case "pembeli":
        await db.insert(pembeliProfiles).values({
          userId: newUser.id,
          provinsi: profileData.provinsi || null,
          kota: profileData.kota || null,
          alamat: profileData.alamat || null,
        });
        break;

      case "peserta":
        await db.insert(pesertaProfiles).values({
          userId: newUser.id,
          pekerjaan: profileData.pekerjaan || null,
          pendidikan: profileData.pendidikan || null,
          minat: profileData.minat || null,
        });
        break;

      default:
        return NextResponse.json(
          { error: "Role tidak valid" },
          { status: 400 },
        );
    }

    return NextResponse.json(
      {
        message: "Registrasi berhasil",
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
    console.error("Register error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat registrasi" },
      { status: 500 },
    );
  }
}
