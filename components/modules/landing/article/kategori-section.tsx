"use client"

import { LayoutDashboard, BookOpen, ChevronRight } from "lucide-react"
import {
    Card,
    CardContent,
} from "@/components/ui/card"

const kategoriData = [
    { nama: "Budidaya", emoji: "🌾", jumlahArtikel: 245, warna: "from-green-500/10 to-green-600/10 hover:from-green-500/15 hover:to-green-600/15", border: "hover:border-green-300" },
    { nama: "Teknologi", emoji: "🌐", jumlahArtikel: 189, warna: "from-blue-500/10 to-blue-600/10 hover:from-blue-500/15 hover:to-blue-600/15", border: "hover:border-blue-300" },
    { nama: "Bisnis", emoji: "💼", jumlahArtikel: 156, warna: "from-purple-500/10 to-purple-600/10 hover:from-purple-500/15 hover:to-purple-600/15", border: "hover:border-purple-300" },
    { nama: "Riset", emoji: "🔬", jumlahArtikel: 132, warna: "from-amber-500/10 to-amber-600/10 hover:from-amber-500/15 hover:to-amber-600/15", border: "hover:border-amber-300" },
    { nama: "Tips & Trik", emoji: "💡", jumlahArtikel: 210, warna: "from-pink-500/10 to-pink-600/10 hover:from-pink-500/15 hover:to-pink-600/15", border: "hover:border-pink-300" },
    { nama: "Pasca Panen", emoji: "🏭", jumlahArtikel: 98, warna: "from-orange-500/10 to-orange-600/10 hover:from-orange-500/15 hover:to-orange-600/15", border: "hover:border-orange-300" },
    { nama: "Agrikultur", emoji: "🚜", jumlahArtikel: 175, warna: "from-teal-500/10 to-teal-600/10 hover:from-teal-500/15 hover:to-teal-600/15", border: "hover:border-teal-300" },
    { nama: "Organik", emoji: "🌿", jumlahArtikel: 143, warna: "from-lime-500/10 to-lime-600/10 hover:from-lime-500/15 hover:to-lime-600/15", border: "hover:border-lime-300" },
]

const KategoriSection = () => {
    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 py-8 sm:py-12">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#609A26]/10 rounded-xl">
                        <LayoutDashboard className="h-6 w-6 text-[#609A26]" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Jelajahi Kategori</h2>
                        <p className="text-sm text-muted-foreground">Temukan artikel berdasarkan topik favorit Anda</p>
                    </div>
                </div>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {kategoriData.map((kategori) => (
                    <Card
                        key={kategori.nama}
                        className={`cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${kategori.border}`}
                    >
                        <CardContent className="p-0">
                            <div className={`h-20 bg-linear-to-br ${kategori.warna} flex items-center justify-center transition-all`}>
                                <span className="text-3xl">{kategori.emoji}</span>
                            </div>
                            <div className="p-3 flex items-center justify-between">
                                <div>
                                    <h3 className="text-sm font-semibold text-foreground">{kategori.nama}</h3>
                                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground mt-0.5">
                                        <BookOpen className="h-3 w-3" />
                                        <span>{kategori.jumlahArtikel} artikel</span>
                                    </div>
                                </div>
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default KategoriSection
