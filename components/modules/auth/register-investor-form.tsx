"use client"

import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { TrendingUp, Eye, EyeOff, Loader2 } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

// ─── Zod Schema ─────────────────────────────────────────────────────

const investorSchema = z.object({
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
    confirmPassword: z
        .string()
        .min(1, "Konfirmasi password wajib diisi"),
    tipeInvestor: z
        .string()
        .min(1, "Tipe investor wajib dipilih"),
    sumberDana: z
        .string()
        .min(1, "Sumber dana wajib dipilih"),
    pengalaman: z
        .string()
        .min(1, "Pengalaman investasi wajib dipilih"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
})

type InvestorFormValues = z.infer<typeof investorSchema>

// ─── Component ──────────────────────────────────────────────────────

const RegisterInvestorForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    const form = useForm<InvestorFormValues>({
        resolver: zodResolver(investorSchema),
        defaultValues: {
            nama: "",
            email: "",
            telepon: "",
            nik: "",
            password: "",
            confirmPassword: "",
            tipeInvestor: "",
            sumberDana: "",
            pengalaman: "",
        },
    })

    const onSubmit = (values: InvestorFormValues) => {
        console.log("Investor register data:", values)
        // TODO: kirim ke API backend
    }

    return (
        <Card className="w-full max-w-lg shadow-[0_2px_16px_rgba(0,0,0,0.06)] border-gray-100">
            <CardHeader className="text-center space-y-2 pb-2">
                <div className="flex items-center justify-center gap-2">
                    <TrendingUp className="w-6 h-6 text-[#2d7a3a]" />
                    <CardTitle className="text-xl sm:text-2xl font-bold text-[#1a4528]">
                        Gabung sebagai Investor
                    </CardTitle>
                </div>
                <CardDescription className="text-gray-500 text-sm">
                    Investasi di sektor pertanian Indonesia bersama SiTani
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
                                    <FormLabel className="text-sm font-medium text-[#1a4528]">Nama Lengkap</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Masukkan nama lengkap" className="focus-visible:ring-[#2d7a3a]" {...field} />
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
                                        <FormLabel className="text-sm font-medium text-[#1a4528]">Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="contoh@email.com" className="focus-visible:ring-[#2d7a3a]" {...field} />
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
                                        <FormLabel className="text-sm font-medium text-[#1a4528]">No. Telepon</FormLabel>
                                        <FormControl>
                                            <Input type="tel" placeholder="08xxxxxxxxxx" className="focus-visible:ring-[#2d7a3a]" {...field} />
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
                                    <FormLabel className="text-sm font-medium text-[#1a4528]">NIK (Nomor Induk Kependudukan)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="16 digit NIK" maxLength={16} className="focus-visible:ring-[#2d7a3a]" {...field} />
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
                                        <FormLabel className="text-sm font-medium text-[#1a4528]">Password</FormLabel>
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
                                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
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
                                        <FormLabel className="text-sm font-medium text-[#1a4528]">Konfirmasi Password</FormLabel>
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
                                                    {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Separator className="my-2" />

                        {/* Tipe Investor */}
                        <FormField
                            control={form.control}
                            name="tipeInvestor"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-medium text-[#1a4528]">Tipe Investor</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="w-full focus:ring-[#2d7a3a]">
                                                <SelectValue placeholder="Pilih tipe investor" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent position="popper">
                                            <SelectItem value="individu">Individu / Perorangan</SelectItem>
                                            <SelectItem value="institusi">Institusi / Perusahaan</SelectItem>
                                            <SelectItem value="komunitas">Komunitas / Kelompok</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Sumber Dana & Pengalaman */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="sumberDana"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium text-[#1a4528]">Sumber Dana</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-full focus:ring-[#2d7a3a]">
                                                    <SelectValue placeholder="Pilih sumber dana" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent position="popper">
                                                <SelectItem value="pribadi">Dana Pribadi</SelectItem>
                                                <SelectItem value="perusahaan">Dana Perusahaan</SelectItem>
                                                <SelectItem value="campuran">Campuran</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pengalaman"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium text-[#1a4528]">Pengalaman Investasi</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-full focus:ring-[#2d7a3a]">
                                                    <SelectValue placeholder="Pilih pengalaman" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent position="popper">
                                                <SelectItem value="pemula">Pemula (belum pernah)</SelectItem>
                                                <SelectItem value="menengah">Menengah (1-3 tahun)</SelectItem>
                                                <SelectItem value="berpengalaman">Berpengalaman (3+ tahun)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                            className="w-full bg-[#206536] hover:bg-[#1a5530] text-white font-semibold py-5 cursor-pointer transition-colors duration-200"
                        >
                            {form.formState.isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                            Gabung Sekarang
                        </Button>

                        <p className="text-center text-sm text-gray-500">
                            Sudah punya akun?{" "}
                            <Link href="/login" className="text-[#2d7a3a] hover:text-[#1a4528] font-semibold transition-colors">
                                Masuk
                            </Link>
                        </p>
                        <p className="text-center text-sm text-gray-500">
                            Ingin daftar sebagai petani?{" "}
                            <Link href="/register" className="text-[#2d7a3a] hover:text-[#1a4528] font-semibold transition-colors">
                                Daftar Petani
                            </Link>
                        </p>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default RegisterInvestorForm
