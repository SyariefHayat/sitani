"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, User, Lock, Bell, Shield, Eye, EyeOff, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { toast } from "sonner"

const PengaturanContent = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [notifications, setNotifications] = useState({
        kelasBaru: true,
        webinar: true,
        sertifikat: true,
        promo: false,
        email: true,
    })

    const handleSaveAccount = () => toast.success("Informasi akun berhasil disimpan")
    const handleChangePassword = () => toast.success("Password berhasil diperbarui")

    const toggleNotification = (key: keyof typeof notifications) => {
        setNotifications(prev => ({ ...prev, [key]: !prev[key] }))
        toast.success("Preferensi notifikasi diperbarui")
    }

    return (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <Link href="/academy" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Pengaturan</h1>
                    <p className="text-gray-500 text-sm mt-0.5">Kelola akun dan preferensi Academy Anda</p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Account Info */}
                <Card className="rounded-2xl border border-gray-200 shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-5">
                        <User className="w-5 h-5 text-[#609A26]" />
                        <h3 className="text-base font-bold text-gray-900">Informasi Akun</h3>
                    </div>
                    <div className="space-y-4">
                        {[
                            { label: "Nama Lengkap", value: "Siti Nurhaliza", type: "text" },
                            { label: "Email", value: "siti@sitani.id", type: "email" },
                            { label: "No. Telepon", value: "+62 812-9876-5432", type: "tel" },
                        ].map((f) => (
                            <div key={f.label}>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">{f.label}</label>
                                <input
                                    type={f.type}
                                    defaultValue={f.value}
                                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                                />
                            </div>
                        ))}
                        <div className="flex justify-end">
                            <Button onClick={handleSaveAccount} className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer gap-1.5 text-sm">
                                <Save className="w-4 h-4" /> Simpan Perubahan
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* Security */}
                <Card className="rounded-2xl border border-gray-200 shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-5">
                        <Lock className="w-5 h-5 text-[#609A26]" />
                        <h3 className="text-base font-bold text-gray-900">Keamanan</h3>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">Password Saat Ini</label>
                            <div className="relative">
                                <input
                                    type={showCurrentPassword ? "text" : "password"}
                                    placeholder="Masukkan password saat ini"
                                    className="w-full px-3 py-2.5 pr-10 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                                />
                                <button onClick={() => setShowCurrentPassword(!showCurrentPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer">
                                    {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">Password Baru</label>
                            <div className="relative">
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    placeholder="Masukkan password baru"
                                    className="w-full px-3 py-2.5 pr-10 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                                />
                                <button onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer">
                                    {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button onClick={handleChangePassword} className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer gap-1.5 text-sm">
                                <Lock className="w-4 h-4" /> Ubah Password
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* Notifications */}
                <Card className="rounded-2xl border border-gray-200 shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-5">
                        <Bell className="w-5 h-5 text-[#609A26]" />
                        <h3 className="text-base font-bold text-gray-900">Notifikasi</h3>
                    </div>
                    <div className="space-y-3">
                        {[
                            { key: "kelasBaru" as const, label: "Kelas Baru", desc: "Notifikasi saat ada kelas baru tersedia" },
                            { key: "webinar" as const, label: "Webinar", desc: "Pengingat jadwal webinar mendatang" },
                            { key: "sertifikat" as const, label: "Sertifikat", desc: "Notifikasi saat sertifikat siap diunduh" },
                            { key: "promo" as const, label: "Promo & Penawaran", desc: "Penawaran khusus dan diskon kelas" },
                            { key: "email" as const, label: "Email Report", desc: "Laporan progress belajar mingguan via email" },
                        ].map((item) => (
                            <div key={item.key} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                                <div>
                                    <p className="text-sm font-medium text-gray-800">{item.label}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                                </div>
                                <button
                                    onClick={() => toggleNotification(item.key)}
                                    className={`relative w-11 h-6 rounded-full transition-colors duration-200 cursor-pointer ${notifications[item.key] ? "bg-[#609A26]" : "bg-gray-200"}`}
                                >
                                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${notifications[item.key] ? "translate-x-5" : ""}`} />
                                </button>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Account Status */}
                <Card className="rounded-2xl border border-gray-200 shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-5">
                        <Shield className="w-5 h-5 text-[#609A26]" />
                        <h3 className="text-base font-bold text-gray-900">Status Akun</h3>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                        <div>
                            <p className="text-sm font-semibold text-emerald-800">Akun Terverifikasi ✓</p>
                            <p className="text-xs text-emerald-600 mt-0.5">Terakhir login: 11 Maret 2026</p>
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-200 text-emerald-800">Aktif</span>
                    </div>
                </Card>

                {/* Danger Zone */}
                <Card className="rounded-2xl border border-red-200 shadow-sm p-6">
                    <h3 className="text-base font-bold text-red-600 mb-2">Zona Bahaya</h3>
                    <p className="text-sm text-gray-500 mb-4">Tindakan ini tidak dapat dibatalkan. Semua data pembelajaran akan dihapus secara permanen.</p>
                    <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 cursor-pointer text-sm" onClick={() => toast.error("Fitur hapus akun memerlukan verifikasi lebih lanjut")}>
                        Hapus Akun
                    </Button>
                </Card>
            </div>
        </section>
    )
}

export default PengaturanContent
