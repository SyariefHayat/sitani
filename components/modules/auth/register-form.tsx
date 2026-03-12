"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Sprout, Eye, EyeOff, Loader2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";

// ─── Zod Schema ─────────────────────────────────────────────────────

const registerSchema = z
  .object({
    nama: z
      .string()
      .min(3, "Nama minimal 3 karakter")
      .max(100, "Nama maksimal 100 karakter"),
    email: z
      .string()
      .min(1, "Email wajib diisi")
      .email("Format email tidak valid"),
    telepon: z
      .string()
      .min(10, "No. telepon minimal 10 digit")
      .max(15, "No. telepon maksimal 15 digit")
      .regex(/^08\d+$/, "No. telepon harus diawali 08"),
    nik: z
      .string()
      .length(16, "NIK harus 16 digit")
      .regex(/^\d+$/, "NIK hanya boleh angka"),
    password: z
      .string()
      .min(8, "Password minimal 8 karakter")
      .regex(/[A-Z]/, "Harus mengandung huruf besar")
      .regex(/[a-z]/, "Harus mengandung huruf kecil")
      .regex(/[0-9]/, "Harus mengandung angka"),
    confirmPassword: z.string().min(1, "Konfirmasi password wajib diisi"),
    provinsi: z.string().min(1, "Provinsi wajib dipilih"),
    kota: z.string().min(1, "Kota/Kabupaten wajib dipilih"),
    alamat: z
      .string()
      .min(10, "Alamat minimal 10 karakter")
      .max(255, "Alamat maksimal 255 karakter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

// ─── API Types ──────────────────────────────────────────────────────

type Wilayah = { code: string; name: string };

// ─── Component ──────────────────────────────────────────────────────

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [provinsiList, setProvinsiList] = useState<Wilayah[]>([]);
  const [kotaList, setKotaList] = useState<Wilayah[]>([]);
  const [loadingProvinsi, setLoadingProvinsi] = useState(true);
  const [loadingKota, setLoadingKota] = useState(false);

  const router = useRouter();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nama: "",
      email: "",
      telepon: "",
      nik: "",
      password: "",
      confirmPassword: "",
      provinsi: "",
      kota: "",
      alamat: "",
    },
  });

  // Fetch provinces on mount
  useEffect(() => {
    const fetchProvinsi = async () => {
      try {
        const res = await fetch("/api/wilayah/provinces");
        const data: Wilayah[] = await res.json();
        setProvinsiList(data);
      } catch (err) {
        console.error("Gagal memuat data provinsi:", err);
      } finally {
        setLoadingProvinsi(false);
      }
    };
    fetchProvinsi();
  }, []);

  // Fetch regencies when province changes
  const handleProvinsiChange = async (provinsiId: string) => {
    const selected = provinsiList.find((p) => p.code === provinsiId);
    form.setValue("provinsi", selected?.name || "");
    form.setValue("kota", "");
    setKotaList([]);
    setLoadingKota(true);

    try {
      const res = await fetch(`/api/wilayah/regencies/${provinsiId}`);
      const data: Wilayah[] = await res.json();
      setKotaList(data);
    } catch (err) {
      console.error("Gagal memuat data kota:", err);
    } finally {
      setLoadingKota(false);
    }
  };

  const onSubmit = async (values: RegisterFormValues) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: "petani", // hardcode karena form ini khusus petani
          nama: values.nama,
          email: values.email,
          telepon: values.telepon,
          nik: values.nik,
          password: values.password,
          // profile data petani
          provinsi: values.provinsi,
          kota: values.kota,
          alamat: values.alamat,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error("Registrasi gagal", {
          description: data.error,
        });
        return;
      }

      toast.success("Registrasi berhasil!", {
        description: "Silakan masuk dengan akun Anda",
      });

      router.push("/login");
    } catch (error) {
      toast.error("Terjadi kesalahan", {
        description: "Coba lagi beberapa saat",
      });
    }
  };

  return (
    <Card className="w-full max-w-lg shadow-[0_2px_16px_rgba(0,0,0,0.06)] border-gray-100">
      <Toaster />
      <CardHeader className="text-center space-y-2 pb-2">
        <div className="flex items-center justify-center gap-2">
          <Sprout className="w-6 h-6 text-[#2d7a3a]" />
          <CardTitle className="text-xl sm:text-2xl font-bold text-[#1a4528]">
            Daftar sebagai Petani
          </CardTitle>
        </div>
        <CardDescription className="text-gray-500 text-sm">
          Bergabung dengan ekosistem pertanian digital SiTani
        </CardDescription>
      </CardHeader>

      <Separator />

      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Nama Lengkap */}
            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-[#1a4528]">
                    Nama Lengkap
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukkan nama lengkap"
                      className="focus-visible:ring-[#2d7a3a]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email & Telepon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#1a4528]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="contoh@email.com"
                        className="focus-visible:ring-[#2d7a3a]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telepon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#1a4528]">
                      No. Telepon
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="08xxxxxxxxxx"
                        className="focus-visible:ring-[#2d7a3a]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* NIK */}
            <FormField
              control={form.control}
              name="nik"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-[#1a4528]">
                    NIK (Nomor Induk Kependudukan)
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="16 digit NIK"
                      maxLength={16}
                      className="focus-visible:ring-[#2d7a3a]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password & Confirm */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#1a4528]">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Min. 8 karakter"
                          className="pr-10 focus-visible:ring-[#2d7a3a]"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#1a4528]">
                      Konfirmasi Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirm ? "text" : "password"}
                          placeholder="Ulangi password"
                          className="pr-10 focus-visible:ring-[#2d7a3a]"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirm(!showConfirm)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          {showConfirm ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator className="my-2" />

            {/* Provinsi & Kota from API */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="provinsi"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#1a4528]">
                      Provinsi
                    </FormLabel>
                    <Select
                      onValueChange={handleProvinsiChange}
                      disabled={loadingProvinsi}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full focus:ring-[#2d7a3a]">
                          <SelectValue
                            placeholder={
                              loadingProvinsi ? "Memuat..." : "Pilih provinsi"
                            }
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent position="popper" className="max-h-60">
                        {provinsiList.map((prov) => (
                          <SelectItem key={prov.code} value={prov.code}>
                            {prov.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="kota"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#1a4528]">
                      Kota / Kabupaten
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      disabled={!kotaList.length || loadingKota}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full focus:ring-[#2d7a3a]">
                          <SelectValue
                            placeholder={
                              loadingKota
                                ? "Memuat..."
                                : !kotaList.length
                                  ? "Pilih provinsi dulu"
                                  : "Pilih kota"
                            }
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent position="popper" className="max-h-60">
                        {kotaList.map((kota) => (
                          <SelectItem key={kota.code} value={kota.name}>
                            {kota.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Alamat */}
            <FormField
              control={form.control}
              name="alamat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-[#1a4528]">
                    Alamat Lengkap
                  </FormLabel>
                  <FormControl>
                    <textarea
                      rows={3}
                      placeholder="Masukkan alamat lengkap (RT/RW, desa, kecamatan)"
                      className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2d7a3a] disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full bg-[#206536] hover:bg-[#1a5530] text-white font-semibold py-5 cursor-pointer transition-colors duration-200"
            >
              {form.formState.isSubmitting && (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              )}
              Daftar Sekarang
            </Button>

            <p className="text-center text-sm text-gray-500">
              Sudah punya akun?{" "}
              <Link
                href="/login"
                className="text-[#2d7a3a] hover:text-[#1a4528] font-semibold transition-colors"
              >
                Masuk
              </Link>
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
