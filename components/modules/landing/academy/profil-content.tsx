"use client"

import { useState } from "react"
import { ArrowLeft, Camera, Edit, MapPin, Phone, Mail, Calendar, Shield, BookOpen, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner"
import Link from "next/link"

const ProfilContent = () => {
    const [profile, setProfile] = useState({
        name: "Siti Nurhaliza",
        email: "siti@sitani.id",
        phone: "+62 812-9876-5432",
        address: "Bogor, Jawa Barat",
        joinDate: "Maret 2024",
        status: "Aktif",
    })
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
    const [showEditModal, setShowEditModal] = useState(false)
    const [editForm, setEditForm] = useState(profile)

    const handleSaveProfile = () => {
        setProfile(editForm)
        setShowEditModal(false)
        toast.success("Profil berhasil diperbarui")
    }

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const url = URL.createObjectURL(file)
            setAvatarPreview(url)
            toast.success("Foto profil berhasil diperbarui")
        }
    }

    return (
        <>
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <Link href="/academy" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </Link>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Profil Peserta</h1>
                        <p className="text-gray-500 text-sm mt-0.5">Kelola informasi profil Academy Anda</p>
                    </div>
                </div>

                {/* Profile Card */}
                <Card className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-6">
                    <div className="bg-gradient-to-r from-[#206536] to-[#2d8a4e] h-28 sm:h-36" />
                    <div className="px-6 pb-6 -mt-12 sm:-mt-14">
                        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
                            <div className="relative">
                                <Avatar className="w-24 h-24 sm:w-28 sm:h-28 ring-4 ring-white shadow-lg">
                                    <AvatarImage src={avatarPreview || "https://github.com/shadcn.png"} />
                                    <AvatarFallback className="text-2xl font-bold bg-[#206536] text-white">SI</AvatarFallback>
                                </Avatar>
                                <label className="absolute bottom-1 right-1 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 cursor-pointer transition-colors border border-gray-200">
                                    <Camera className="w-4 h-4 text-gray-600" />
                                    <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
                                </label>
                            </div>
                            <div className="flex-1 pt-2 sm:pt-0 sm:pb-1">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{profile.name}</h2>
                                <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                                    <MapPin className="w-3.5 h-3.5" /> {profile.address}
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                className="border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 cursor-pointer gap-1.5 text-sm shrink-0"
                                onClick={() => { setEditForm(profile); setShowEditModal(true) }}
                            >
                                <Edit className="w-4 h-4" /> Edit Profil
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                    {[
                        { label: "Kelas Diikuti", value: "12", icon: BookOpen, color: "text-emerald-600 bg-emerald-50" },
                        { label: "Jam Belajar", value: "48 Jam", icon: Calendar, color: "text-blue-600 bg-blue-50" },
                        { label: "Sertifikat", value: "5", icon: Award, color: "text-amber-600 bg-amber-50" },
                        { label: "Status", value: profile.status, icon: Shield, color: "text-green-600 bg-green-50" },
                    ].map((stat) => (
                        <Card key={stat.label} className="p-4 rounded-xl border border-gray-200 shadow-sm">
                            <div className={`w-9 h-9 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                                <stat.icon className="w-4.5 h-4.5" />
                            </div>
                            <p className="text-xs text-gray-500">{stat.label}</p>
                            <p className="text-lg font-bold text-gray-900 mt-0.5">{stat.value}</p>
                        </Card>
                    ))}
                </div>

                {/* Personal Info */}
                <Card className="rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
                    <h3 className="text-base font-bold text-gray-900 mb-4">Informasi Pribadi</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: Mail, label: "Email", value: profile.email },
                            { icon: Phone, label: "No. Telepon", value: profile.phone },
                            { icon: MapPin, label: "Alamat", value: profile.address },
                            { icon: Calendar, label: "Bergabung Sejak", value: profile.joinDate },
                        ].map((item) => (
                            <div key={item.label} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                                <div className="p-2 rounded-lg bg-white shadow-sm">
                                    <item.icon className="w-4 h-4 text-[#609A26]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">{item.label}</p>
                                    <p className="text-sm font-medium text-gray-800">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Learning Summary */}
                <Card className="rounded-2xl border border-gray-200 shadow-sm p-6">
                    <h3 className="text-base font-bold text-gray-900 mb-4">Ringkasan Pembelajaran</h3>
                    <div className="space-y-3">
                        {[
                            { name: "Budidaya Padi Modern", progress: "100%", status: "Selesai", statusColor: "bg-emerald-100 text-emerald-700" },
                            { name: "Smart Farming & IoT", progress: "75%", status: "Sedang Belajar", statusColor: "bg-blue-100 text-blue-700" },
                            { name: "Manajemen Keuangan Petani", progress: "45%", status: "Sedang Belajar", statusColor: "bg-blue-100 text-blue-700" },
                            { name: "Pertanian Organik Lanjutan", progress: "0%", status: "Belum Dimulai", statusColor: "bg-gray-100 text-gray-600" },
                        ].map((course) => (
                            <div key={course.name} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div>
                                    <p className="text-sm font-medium text-gray-800">{course.name}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">Progress: {course.progress}</p>
                                </div>
                                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${course.statusColor}`}>
                                    {course.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>
            </section>

            {/* Edit Modal */}
            {showEditModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowEditModal(false)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 animate-in fade-in zoom-in-95 duration-200">
                        <h2 className="text-lg font-bold text-gray-900 mb-1">Edit Profil</h2>
                        <p className="text-sm text-[#609A26] mb-5">Perbarui informasi pribadi Anda</p>
                        <div className="space-y-4">
                            {[
                                { label: "Nama Lengkap", key: "name" as const, type: "text" },
                                { label: "Email", key: "email" as const, type: "email" },
                                { label: "No. Telepon", key: "phone" as const, type: "tel" },
                                { label: "Alamat", key: "address" as const, type: "text" },
                            ].map((f) => (
                                <div key={f.key}>
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">{f.label}</label>
                                    <input
                                        type={f.type}
                                        value={editForm[f.key]}
                                        onChange={(e) => setEditForm({ ...editForm, [f.key]: e.target.value })}
                                        className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end gap-2 mt-6">
                            <Button variant="outline" onClick={() => setShowEditModal(false)} className="cursor-pointer">Batal</Button>
                            <Button onClick={handleSaveProfile} className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer gap-1.5">
                                <Edit className="w-4 h-4" /> Simpan
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProfilContent
