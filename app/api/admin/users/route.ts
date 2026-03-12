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

    return NextResponse.json(allUsers);
  } catch (error) {
    console.error("GET users error:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data user" },
      { status: 500 },
    );
  }
}
