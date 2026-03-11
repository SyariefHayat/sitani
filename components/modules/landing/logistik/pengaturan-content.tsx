"use client"

import { Bell, Settings, Shield, Moon, Globe, Eye } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

const PengaturanContent = () => {
    return (
        <div className="px-4 sm:px-10 lg:px-16 py-8 sm:py-12 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Pengaturan</h1>
                    <p className="text-gray-500 mt-1">Kelola preferensi dan pengaturan akun Anda</p>
                </div>

                {/* Notifikasi */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#206536]/10 flex items-center justify-center">
                            <Bell className="w-5 h-5 text-[#206536]" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Notifikasi</h2>
                            <p className="text-sm text-gray-500">Atur preferensi notifikasi Anda</p>
                        </div>
                    </div>
                    <Separator />
                    <div className="space-y-5">
                        <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium text-gray-700">Notifikasi Order Baru</Label>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium text-gray-700">Notifikasi Jadwal Pickup</Label>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium text-gray-700">Notifikasi Status Armada</Label>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium text-gray-700">Notifikasi Email</Label>
                            <Switch />
                        </div>
                    </div>
                </div>

                {/* Keamanan */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#206536]/10 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-[#206536]" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Keamanan</h2>
                            <p className="text-sm text-gray-500">Pengaturan keamanan akun</p>
                        </div>
                    </div>
                    <Separator />
                    <div className="space-y-5">
                        <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium text-gray-700">Autentikasi Dua Faktor</Label>
                            <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium text-gray-700">Login dengan Biometrik</Label>
                            <Switch />
                        </div>
                    </div>
                </div>

                {/* Tampilan */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#206536]/10 flex items-center justify-center">
                            <Eye className="w-5 h-5 text-[#206536]" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Tampilan</h2>
                            <p className="text-sm text-gray-500">Sesuaikan tampilan aplikasi</p>
                        </div>
                    </div>
                    <Separator />
                    <div className="space-y-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Moon className="w-4 h-4 text-gray-500" />
                                <Label className="text-sm font-medium text-gray-700">Mode Gelap</Label>
                            </div>
                            <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-gray-500" />
                                <Label className="text-sm font-medium text-gray-700">Bahasa Indonesia</Label>
                            </div>
                            <Switch defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PengaturanContent
