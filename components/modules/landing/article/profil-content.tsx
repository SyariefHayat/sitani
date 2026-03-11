"use client"

import { User, Mail, MapPin, Calendar, BookOpen, Eye, Heart, Edit, Camera } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const RECENT_ARTICLES = [
    { title: "Cara Menanam Padi dengan Metode SRI", date: "10 Mar 2026", reads: "2.3K", likes: 156 },
    { title: "Tips Memilih Pupuk Organik Berkualitas", date: "8 Mar 2026", reads: "1.8K", likes: 98 },
    { title: "Panduan Pertanian Berkelanjutan", date: "5 Mar 2026", reads: "3.1K", likes: 234 },
]

const ProfilContent = () => {
    const handleEditProfile = () => {
        toast.info("Fitur edit profil sedang dalam pengembangan")
    }

    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Profil Saya</h1>
                <p className="text-gray-500 text-sm mt-1">Kelola informasi profil penulis Anda</p>
            </div>

            {/* Profile Card */}
            <Card className="rounded-2xl border border-gray-200 overflow-hidden mb-6">
                <div className="h-32 bg-gradient-to-r from-[#206536] to-[#609A26]" />
                <div className="px-6 pb-6">
                    <div className="flex items-end gap-4 -mt-12 mb-4">
                        <div className="relative">
                            <Avatar className="w-24 h-24 ring-4 ring-white shadow-lg">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback className="text-2xl bg-[#206536] text-white">AN</AvatarFallback>
                            </Avatar>
                            <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#206536] rounded-full flex items-center justify-center text-white shadow-md cursor-pointer hover:bg-[#1a5530] transition-colors">
                                <Camera className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="flex-1 pb-1">
                            <h2 className="text-xl font-bold text-gray-900">Andi</h2>
                            <p className="text-sm text-gray-500">Penulis · SiTani</p>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 cursor-pointer"
                            onClick={handleEditProfile}
                        >
                            <Edit className="w-4 h-4 mr-1.5" />
                            Edit Profil
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                        {[
                            { icon: BookOpen, label: "Artikel", value: "12" },
                            { icon: Eye, label: "Total Dibaca", value: "8.4K" },
                            { icon: Heart, label: "Total Likes", value: "1.2K" },
                            { icon: Calendar, label: "Bergabung", value: "Jan 2026" },
                        ].map(stat => (
                            <Card key={stat.label} className="p-3 rounded-xl border border-gray-200 text-center">
                                <stat.icon className="w-4 h-4 text-[#206536] mx-auto mb-1" />
                                <p className="text-lg font-extrabold text-gray-900">{stat.value}</p>
                                <p className="text-[10px] text-gray-400">{stat.label}</p>
                            </Card>
                        ))}
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-2">
                        <div className="flex items-center gap-3 text-sm">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-500">Nama Lengkap:</span>
                            <span className="font-semibold text-gray-800">Andi Pratama</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-500">Email:</span>
                            <span className="font-semibold text-gray-800">andi@sitani.id</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-500">Lokasi:</span>
                            <span className="font-semibold text-gray-800">Jakarta, Indonesia</span>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Recent Articles */}
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Artikel Terbaru</h3>
                <div className="space-y-3">
                    {RECENT_ARTICLES.map((article, idx) => (
                        <Card key={idx} className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 rounded-lg bg-[#206536]/10 shrink-0">
                                    <BookOpen className="w-5 h-5 text-[#206536]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-bold text-gray-900 truncate">{article.title}</h4>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar className="w-3 h-3" />{article.date}</span>
                                        <span className="text-xs text-gray-400 flex items-center gap-1"><Eye className="w-3 h-3" />{article.reads}</span>
                                        <span className="text-xs text-gray-400 flex items-center gap-1"><Heart className="w-3 h-3" />{article.likes}</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProfilContent
