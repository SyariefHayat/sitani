import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import bcrypt from "bcryptjs";
import {
  users,
  petaniProfiles,
  investorProfiles,
  pembeliProfiles,
  pesertaProfiles,
} from "./schema";

// ─── DB Connection ───────────────────────────────────────────────────

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not defined");
}

const queryClient = postgres(DATABASE_URL);
const db = drizzle({ client: queryClient });

// ─── Helper ──────────────────────────────────────────────────────────

const hash = (plain: string) => bcrypt.hash(plain, 10);

// ─── Seed Data ───────────────────────────────────────────────────────

async function seed() {
  console.log("🌱 Seeding database...");

  // ── 1. Users ────────────────────────────────────────────────────────

  const [petani] = await db
    .insert(users)
    .values({
      name: "Budi Santoso",
      email: "budi.petani@example.com",
      password: await hash("password_petani"),
      telepon: "081234567890",
      nik: "3271010101800001",
      role: "petani",
    })
    .returning();

  const [investor] = await db
    .insert(users)
    .values({
      name: "Rina Kusuma",
      email: "rina.investor@example.com",
      password: await hash("password_investor"),
      telepon: "082345678901",
      nik: "3271010101850002",
      role: "investor",
    })
    .returning();

  const [pembeli] = await db
    .insert(users)
    .values({
      name: "Siti Rahayu",
      email: "siti.pembeli@example.com",
      password: await hash("password_pembeli"),
      telepon: "083456789012",
      nik: "3271010101900003",
      role: "pembeli",
    })
    .returning();

  const [peserta] = await db
    .insert(users)
    .values({
      name: "Ahmad Fauzi",
      email: "ahmad.peserta@example.com",
      password: await hash("password_peserta"),
      telepon: "084567890123",
      nik: "3271010101950004",
      role: "peserta",
    })
    .returning();

  const [admin] = await db
    .insert(users)
    .values({
      name: "Admin Utama",
      email: "admin@example.com",
      password: await hash("password_admin"),
      telepon: "085678901234",
      nik: "3271010101700005",
      role: "admin",
    })
    .returning();

  console.log(
    "✅ Users seeded:",
    [petani, investor, pembeli, peserta, admin].map((u) => u.email),
  );

  // ── 2. Petani Profile ───────────────────────────────────────────────

  await db.insert(petaniProfiles).values({
    userId: petani.id,
    provinsi: "Jawa Tengah",
    kota: "Semarang",
    alamat: "Jl. Pertanian No. 1, Kel. Tani Makmur",
  });

  console.log("✅ Petani profile seeded");

  // ── 3. Investor Profile ─────────────────────────────────────────────

  await db.insert(investorProfiles).values({
    userId: investor.id,
    tipeInvestor: "individu",
    sumberDana: "pribadi",
    pengalaman: "menengah",
  });

  console.log("✅ Investor profile seeded");

  // ── 4. Pembeli Profile ──────────────────────────────────────────────

  await db.insert(pembeliProfiles).values({
    userId: pembeli.id,
    provinsi: "DKI Jakarta",
    kota: "Jakarta Selatan",
    alamat: "Jl. Sudirman No. 99, RT 01/RW 02",
  });

  console.log("✅ Pembeli profile seeded");

  // ── 5. Peserta Profile ──────────────────────────────────────────────

  await db.insert(pesertaProfiles).values({
    userId: peserta.id,
    pekerjaan: "petani",
    pendidikan: "s1",
    minat: "budidaya",
  });

  console.log("✅ Peserta profile seeded");

  console.log("\n🎉 Seeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
