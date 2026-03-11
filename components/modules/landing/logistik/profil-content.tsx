"use client"

import { User, Mail, Phone, MapPin, Building2, Shield, Camera } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

const ProfilContent = () => {
    return (
        <div className="px-4 sm:px-10 lg:px-16 py-8 sm:py-12 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Profil Saya</h1>
                    <p className="text-gray-500 mt-1">Kelola informasi profil akun logistik Anda</p>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Cover */}
                    <div className="h-32 bg-gradient-to-r from-[#206536] to-[#609A26]" />

                    {/* Avatar & Name */}
                    <div className="px-6 sm:px-8 pb-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-12">
                            <div className="relative">
                                <Avatar className="w-24 h-24 ring-4 ring-white shadow-lg">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback className="bg-[#206536] text-white text-2xl font-bold">BU</AvatarFallback>
                                </Avatar>
                                <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#206536] rounded-full flex items-center justify-center text-white shadow-md hover:bg-[#185028] transition-colors">
                                    <Camera className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-bold text-gray-900">Budi Santoso</h2>
                                <p className="text-sm text-gray-500 flex items-center gap-1.5">
                                    <Shield className="w-3.5 h-3.5" />
                                    Manajer Logistik
                                </p>
                            </div>
                            <Button className="bg-[#206536] hover:bg-[#185028] text-white font-semibold cursor-pointer">
                                Simpan Perubahan
                            </Button>
                        </div>
                    </div>

                    <Separator />

                    {/* Form */}
                    <div className="p-6 sm:p-8 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <User className="w-4 h-4 text-[#206536]" />
                                    Nama Lengkap
                                </Label>
                                <Input defaultValue="Budi Santoso" className="border-gray-200 focus-visible:ring-[#206536]" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-[#206536]" />
                                    Email
                                </Label>
                                <Input defaultValue="budi@sitani.id" className="border-gray-200 focus-visible:ring-[#206536]" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-[#206536]" />
                                    No. Telepon
                                </Label>
                                <Input defaultValue="+62 812-3456-7890" className="border-gray-200 focus-visible:ring-[#206536]" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-[#206536]" />
                                    Perusahaan
                                </Label>
                                <Input defaultValue="PT Logistik Nusantara" className="border-gray-200 focus-visible:ring-[#206536]" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-[#206536]" />
                                Alamat
                            </Label>
                            <Input defaultValue="Jl. Raya Logistik No. 45, Jakarta Timur" className="border-gray-200 focus-visible:ring-[#206536]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilContent
