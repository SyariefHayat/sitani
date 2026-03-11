"use client"

import { useState } from "react"
import { ArrowLeft, User, Lock, Bell, MapPin, Eye, EyeOff, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { toast } from "sonner"

const PengaturanContent = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [emailNotif, setEmailNotif] = useState(true)
    const [promoNotif, setPromoNotif] = useState(true)
    const [orderNotif, setOrderNotif] = useState(true)

    const handleSave = (section: string) => {
        toast.success(`${section} berhasil disimpan`)
    }

    return (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <Link href="/marketplace" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Pengaturan</h1>
                    <p className="text-gray-500 text-sm mt-0.5">Kelola pengaturan akun Anda</p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Informasi Akun */}
                <Card className="p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-9 h-9 rounded-lg bg-[#206536]/10 flex items-center justify-center">
                            <User className="w-4.5 h-4.5 text-[#206536]" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Informasi Akun</h3>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="text-xs text-gray-500 font-medium mb-1.5 block">Nama Lengkap</label>
                            <input
                                type="text"
                                defaultValue="Andi Pratama"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-[#206536] focus:ring-1 focus:ring-[#206536]/20 transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 font-medium mb-1.5 block">Email</label>
                            <input
                                type="email"
                                defaultValue="andi@sitani.id"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-[#206536] focus:ring-1 focus:ring-[#206536]/20 transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 font-medium mb-1.5 block">No. Telepon</label>
                            <input
                                type="tel"
                                defaultValue="+62 812-3456-7890"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-[#206536] focus:ring-1 focus:ring-[#206536]/20 transition-all"
                            />
                        </div>
                        <div className="flex justify-end pt-1">
                            <Button
                                onClick={() => handleSave("Informasi akun")}
                                className="bg-[#206536] hover:bg-[#1a5530] text-white font-semibold text-sm cursor-pointer gap-1.5"
                            >
                                <Save className="w-4 h-4" />
                                Simpan Perubahan
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* Keamanan */}
                <Card className="p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
                            <Lock className="w-4.5 h-4.5 text-amber-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Keamanan</h3>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="text-xs text-gray-500 font-medium mb-1.5 block">Password Saat Ini</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Masukkan password saat ini"
                                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-[#206536] focus:ring-1 focus:ring-[#206536]/20 transition-all pr-10"
                                />
                                <button
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 font-medium mb-1.5 block">Password Baru</label>
                            <input
                                type="password"
                                placeholder="Masukkan password baru"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-[#206536] focus:ring-1 focus:ring-[#206536]/20 transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 font-medium mb-1.5 block">Konfirmasi Password Baru</label>
                            <input
                                type="password"
                                placeholder="Konfirmasi password baru"
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-[#206536] focus:ring-1 focus:ring-[#206536]/20 transition-all"
                            />
                        </div>
                        <div className="flex justify-end pt-1">
                            <Button
                                onClick={() => handleSave("Password")}
                                className="bg-[#206536] hover:bg-[#1a5530] text-white font-semibold text-sm cursor-pointer gap-1.5"
                            >
                                <Lock className="w-4 h-4" />
                                Ubah Password
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* Notifikasi */}
                <Card className="p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                            <Bell className="w-4.5 h-4.5 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Notifikasi</h3>
                    </div>

                    <div className="space-y-4">
                        {[
                            { label: "Notifikasi Email", desc: "Terima pemberitahuan melalui email", state: emailNotif, toggle: setEmailNotif },
                            { label: "Notifikasi Promo", desc: "Dapatkan info diskon & promo terbaru", state: promoNotif, toggle: setPromoNotif },
                            { label: "Update Pesanan", desc: "Notifikasi status pesanan real-time", state: orderNotif, toggle: setOrderNotif },
                        ].map((item) => (
                            <div key={item.label} className="flex items-center justify-between py-2">
                                <div>
                                    <p className="text-sm font-medium text-gray-800">{item.label}</p>
                                    <p className="text-xs text-gray-400">{item.desc}</p>
                                </div>
                                <button
                                    onClick={() => item.toggle(!item.state)}
                                    className={`relative w-11 h-6 rounded-full transition-colors duration-200 cursor-pointer ${item.state ? "bg-[#609A26]" : "bg-gray-300"}`}
                                >
                                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${item.state ? "translate-x-5" : "translate-x-0"}`} />
                                </button>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Alamat */}
                <Card className="p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                <MapPin className="w-4.5 h-4.5 text-emerald-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">Alamat Pengiriman</h3>
                        </div>
                        <Link href="/marketplace/profil">
                            <Button variant="outline" size="sm" className="text-xs border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 cursor-pointer">
                                Kelola Alamat
                            </Button>
                        </Link>
                    </div>

                    <div className="p-4 rounded-xl border border-[#609A26]/30 bg-[#609A26]/5">
                        <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-4 h-4 text-[#609A26]" />
                            <span className="text-sm font-semibold text-gray-800">Rumah (Utama)</span>
                            <span className="text-[10px] bg-[#609A26] text-white px-2 py-0.5 rounded-full font-medium">Utama</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Jl. Merdeka No. 123, RT 05/RW 02, Kel. Sukamaju, Kec. Cianjur, Kab. Cianjur, Jawa Barat 43211
                        </p>
                    </div>
                </Card>

                <Separator />

                {/* Danger Zone */}
                <Card className="p-5 sm:p-6 rounded-xl border border-red-200 shadow-sm">
                    <h3 className="text-lg font-bold text-red-600 mb-2">Zona Bahaya</h3>
                    <p className="text-sm text-gray-500 mb-4">Tindakan di bawah ini bersifat permanen dan tidak dapat dibatalkan.</p>
                    <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700 text-sm cursor-pointer">
                        Hapus Akun
                    </Button>
                </Card>
            </div>
        </section>
    )
}

export default PengaturanContent
