"use client"

import { useState } from "react"
import { User, Bell, Shield, Palette, Globe, Moon, Sun } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const PengaturanContent = () => {
    const [emailNotif, setEmailNotif] = useState(true)
    const [pushNotif, setPushNotif] = useState(true)
    const [darkMode, setDarkMode] = useState(false)
    const [language, setLanguage] = useState("id")

    const handleSave = () => {
        toast.success("Pengaturan disimpan", {
            description: "Perubahan pengaturan berhasil diterapkan",
        })
    }

    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Pengaturan</h1>
                <p className="text-gray-500 text-sm mt-1">Kelola preferensi akun penulis Anda</p>
            </div>

            <div className="space-y-6">
                {/* Profil */}
                <Card className="p-6 rounded-2xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                        <User className="w-5 h-5 text-[#206536]" />
                        <h3 className="text-lg font-bold text-gray-900">Informasi Profil</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Nama Lengkap</label>
                                <input defaultValue="Andi Pratama" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email</label>
                                <input defaultValue="andi@sitani.id" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]" />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1.5 block">Bio</label>
                            <textarea defaultValue="Penulis artikel tentang pertanian modern dan berkelanjutan" rows={3} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26] resize-none" />
                        </div>
                    </div>
                </Card>

                {/* Notifikasi */}
                <Card className="p-6 rounded-2xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                        <Bell className="w-5 h-5 text-[#206536]" />
                        <h3 className="text-lg font-bold text-gray-900">Notifikasi</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-800">Notifikasi Email</p>
                                <p className="text-xs text-gray-400">Terima pemberitahuan via email</p>
                            </div>
                            <button
                                onClick={() => setEmailNotif(!emailNotif)}
                                className={`w-11 h-6 rounded-full transition-colors cursor-pointer ${emailNotif ? "bg-[#206536]" : "bg-gray-300"}`}
                            >
                                <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${emailNotif ? "translate-x-5.5" : "translate-x-0.5"}`} />
                            </button>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-800">Notifikasi Push</p>
                                <p className="text-xs text-gray-400">Terima pemberitahuan di browser</p>
                            </div>
                            <button
                                onClick={() => setPushNotif(!pushNotif)}
                                className={`w-11 h-6 rounded-full transition-colors cursor-pointer ${pushNotif ? "bg-[#206536]" : "bg-gray-300"}`}
                            >
                                <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${pushNotif ? "translate-x-5.5" : "translate-x-0.5"}`} />
                            </button>
                        </div>
                    </div>
                </Card>

                {/* Tampilan */}
                <Card className="p-6 rounded-2xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                        <Palette className="w-5 h-5 text-[#206536]" />
                        <h3 className="text-lg font-bold text-gray-900">Tampilan</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                {darkMode ? <Moon className="w-4 h-4 text-gray-500" /> : <Sun className="w-4 h-4 text-amber-500" />}
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Mode Gelap</p>
                                    <p className="text-xs text-gray-400">Beralih ke tampilan gelap</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className={`w-11 h-6 rounded-full transition-colors cursor-pointer ${darkMode ? "bg-[#206536]" : "bg-gray-300"}`}
                            >
                                <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${darkMode ? "translate-x-5.5" : "translate-x-0.5"}`} />
                            </button>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-gray-500" />
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Bahasa</p>
                                    <p className="text-xs text-gray-400">Pilih bahasa tampilan</p>
                                </div>
                            </div>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#609A26]/30"
                            >
                                <option value="id">Bahasa Indonesia</option>
                                <option value="en">English</option>
                            </select>
                        </div>
                    </div>
                </Card>

                {/* Keamanan */}
                <Card className="p-6 rounded-2xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                        <Shield className="w-5 h-5 text-[#206536]" />
                        <h3 className="text-lg font-bold text-gray-900">Keamanan</h3>
                    </div>
                    <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start border-gray-200 text-gray-700 cursor-pointer">
                            Ubah Kata Sandi
                        </Button>
                        <Button variant="outline" className="w-full justify-start border-gray-200 text-gray-700 cursor-pointer">
                            Verifikasi Dua Langkah
                        </Button>
                    </div>
                </Card>

                {/* Save */}
                <div className="flex justify-end">
                    <Button
                        className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer px-8"
                        onClick={handleSave}
                    >
                        Simpan Pengaturan
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default PengaturanContent
