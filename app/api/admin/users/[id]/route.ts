import { NextRequest, NextResponse } from "next/server";
import {
  db,
  users,
  petaniProfiles,
  investorProfiles,
  pembeliProfiles,
  pesertaProfiles,
} from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, params.id))
      .limit(1);
    if (!user)
      return NextResponse.json(
        { error: "User tidak ditemukan" },
        { status: 404 },
      );

    // Ambil profile sesuai role
    let profile = null;
    if (user.role === "petani") {
      [profile] = await db
        .select()
        .from(petaniProfiles)
        .where(eq(petaniProfiles.userId, user.id));
    } else if (user.role === "investor") {
      [profile] = await db
        .select()
        .from(investorProfiles)
        .where(eq(investorProfiles.userId, user.id));
    } else if (user.role === "pembeli") {
      [profile] = await db
        .select()
        .from(pembeliProfiles)
        .where(eq(pembeliProfiles.userId, user.id));
    } else if (user.role === "peserta") {
      [profile] = await db
        .select()
        .from(pesertaProfiles)
        .where(eq(pesertaProfiles.userId, user.id));
    }

    return NextResponse.json({ ...user, profile });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil detail user" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const body = await req.json();
    const { name, email, telepon, role } = body;

    const [updated] = await db
      .update(users)
      .set({ name, email, telepon, role, updatedAt: new Date() })
      .where(eq(users.id, params.id))
      .returning();

    if (!updated)
      return NextResponse.json(
        { error: "User tidak ditemukan" },
        { status: 404 },
      );

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengupdate user" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const [deleted] = await db
      .delete(users)
      .where(eq(users.id, params.id))
      .returning();
    if (!deleted)
      return NextResponse.json(
        { error: "User tidak ditemukan" },
        { status: 404 },
      );
    return NextResponse.json({ message: "User berhasil dihapus" });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal menghapus user" },
      { status: 500 },
    );
  }
}
