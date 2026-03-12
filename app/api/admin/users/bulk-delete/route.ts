import { NextRequest, NextResponse } from "next/server";
import { db, users } from "@/lib/db/schema";
import { inArray } from "drizzle-orm";

export async function DELETE(req: NextRequest) {
  try {
    const { ids } = await req.json();
    if (!ids?.length)
      return NextResponse.json({ error: "Tidak ada ID" }, { status: 400 });

    await db.delete(users).where(inArray(users.id, ids));
    return NextResponse.json({
      message: `${ids.length} user berhasil dihapus`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal menghapus user" },
      { status: 500 },
    );
  }
}
