"use client"

import { BookOpen, Clock, Users, Star, Play } from "lucide-react"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const kelasData = [
    {
        id: 1,
        judul: "Budidaya Padi Modern",
        instruktur: "Dr. Ahmad Fauzi",
        kategori: "Pertanian",
        durasi: "8 Jam",
        peserta: 1240,
        rating: 4.8,
        progress: 75,
        thumbnail: "🌾",
        level: "Menengah",
    },
    {
        id: 2,
        judul: "Teknik Hidroponik untuk Pemula",
        instruktur: "Ir. Sari Dewi",
        kategori: "Teknologi Tani",
        durasi: "6 Jam",
        peserta: 890,
        rating: 4.9,
        progress: 40,
        thumbnail: "🥬",
        level: "Pemula",
    },
    {
        id: 3,
        judul: "Manajemen Rantai Pasok Pertanian",
        instruktur: "Prof. Budi Santoso",
        kategori: "Bisnis",
        durasi: "10 Jam",
        peserta: 650,
        rating: 4.7,
        progress: 100,
        thumbnail: "📦",
        level: "Lanjutan",
    },
    {
        id: 4,
        judul: "Pengendalian Hama Terpadu",
        instruktur: "Dr. Rina Wulandari",
        kategori: "Pertanian",
        durasi: "5 Jam",
        peserta: 1100,
        rating: 4.6,
        progress: 0,
        thumbnail: "🐛",
        level: "Pemula",
    },
    {
        id: 5,
        judul: "Agribusiness & Digital Marketing",
        instruktur: "Hendra Kusuma, MBA",
        kategori: "Bisnis",
        durasi: "7 Jam",
        peserta: 780,
        rating: 4.8,
        progress: 20,
        thumbnail: "📱",
        level: "Menengah",
    },
    {
        id: 6,
        judul: "Pengolahan Hasil Panen",
        instruktur: "Ir. Made Dharma",
        kategori: "Pasca Panen",
        durasi: "4 Jam",
        peserta: 520,
        rating: 4.5,
        progress: 0,
        thumbnail: "🏭",
        level: "Pemula",
    },
]

const levelConfig: Record<string, string> = {
    Pemula: "bg-green-100 text-green-700",
    Menengah: "bg-blue-100 text-blue-700",
    Lanjutan: "bg-purple-100 text-purple-700",
}

const KelasPopulerSection = () => {
    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 py-8 sm:py-12">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#609A26]/10 rounded-xl">
                        <BookOpen className="h-6 w-6 text-[#609A26]" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Kelas Populer</h2>
                        <p className="text-sm text-muted-foreground">Kelas yang paling banyak diminati peserta</p>
                    </div>
                </div>
                <Button variant="outline" size="sm" className="cursor-pointer font-medium text-[#609A26] border-[#609A26]/30 hover:bg-[#609A26]/5">
                    Lihat Semua Kelas
                </Button>
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {kelasData.map((kelas) => (
                    <Card key={kelas.id} className="hover:shadow-md transition-shadow overflow-hidden group cursor-pointer">
                        {/* Thumbnail Area */}
                        <div className="h-36 bg-linar-to-br from-[#609A26]/10 to-[#206536]/10 flex items-center justify-center relative">
                            <span className="text-5xl">{kelas.thumbnail}</span>
                            {kelas.progress > 0 && kelas.progress < 100 && (
                                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-muted">
                                    <div
                                        className="h-full bg-[#609A26] transition-all"
                                        style={{ width: `${kelas.progress}%` }}
                                    />
                                </div>
                            )}
                            {kelas.progress === 100 && (
                                <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    SELESAI
                                </div>
                            )}
                            {kelas.progress === 0 && (
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg">
                                        <Play className="h-6 w-6 text-[#609A26] fill-[#609A26]" />
                                    </div>
                                </div>
                            )}
                        </div>

                        <CardContent className="p-4 space-y-3">
                            <div className="flex items-center gap-2">
                                <span className={`px-2 py-0.5 text-[11px] font-medium rounded-full ${levelConfig[kelas.level]}`}>
                                    {kelas.level}
                                </span>
                                <span className="text-[11px] text-muted-foreground">{kelas.kategori}</span>
                            </div>

                            <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2">
                                {kelas.judul}
                            </h3>

                            <p className="text-xs text-muted-foreground">
                                oleh <span className="font-medium text-foreground">{kelas.instruktur}</span>
                            </p>

                            <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/40">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        <span>{kelas.durasi}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="h-3 w-3" />
                                        <span>{kelas.peserta.toLocaleString()}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-amber-500">
                                    <Star className="h-3 w-3 fill-amber-500" />
                                    <span className="font-semibold">{kelas.rating}</span>
                                </div>
                            </div>

                            {kelas.progress > 0 && kelas.progress < 100 && (
                                <div className="text-xs text-[#609A26] font-medium">
                                    Progress: {kelas.progress}%
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default KelasPopulerSection
