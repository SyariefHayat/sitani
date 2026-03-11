"use client"

import { TrendingUp, Clock, Eye, Heart, MessageCircle, Bookmark } from "lucide-react"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { toast } from "sonner"

const artikelData = [
    {
        id: 1,
        judul: "Revolusi Pertanian 4.0: Bagaimana IoT Mengubah Cara Bertani",
        ringkasan: "Teknologi Internet of Things kini mulai merambah dunia pertanian Indonesia. Simak bagaimana petani modern memanfaatkan sensor dan data.",
        penulis: "Dr. Ahmad Fauzi",
        kategori: "Teknologi",
        tanggal: "15 Feb 2026",
        bacaan: "8 menit",
        views: 12400,
        likes: 342,
        komentar: 56,
        thumbnail: "🌐",
        trending: true,
    },
    {
        id: 2,
        judul: "Panduan Lengkap Budidaya Padi Organik untuk Pemula",
        ringkasan: "Langkah demi langkah memulai budidaya padi organik, dari persiapan lahan hingga panen pertama Anda.",
        penulis: "Ir. Sari Dewi",
        kategori: "Budidaya",
        tanggal: "14 Feb 2026",
        bacaan: "12 menit",
        views: 8900,
        likes: 267,
        komentar: 34,
        thumbnail: "🌾",
        trending: true,
    },
    {
        id: 3,
        judul: "5 Strategi Pemasaran Digital untuk Petani Milenial",
        ringkasan: "Pelajari cara memanfaatkan media sosial dan marketplace online untuk meningkatkan penjualan hasil tani.",
        penulis: "Maya Sari, MBA",
        kategori: "Bisnis",
        tanggal: "13 Feb 2026",
        bacaan: "6 menit",
        views: 7200,
        likes: 198,
        komentar: 28,
        thumbnail: "📱",
        trending: true,
    },
    {
        id: 4,
        judul: "Mengenal Hidroponik: Bertani Tanpa Tanah di Lahan Sempit",
        ringkasan: "Solusi urban farming yang semakin populer. Panduan lengkap sistem hidroponik dari NFT hingga DWC.",
        penulis: "Prof. Budi Santoso",
        kategori: "Teknologi",
        tanggal: "12 Feb 2026",
        bacaan: "10 menit",
        views: 6500,
        likes: 175,
        komentar: 42,
        thumbnail: "🥬",
        trending: false,
    },
    {
        id: 5,
        judul: "Dampak Perubahan Iklim terhadap Produktivitas Pertanian",
        ringkasan: "Analisis mendalam tentang bagaimana perubahan iklim mempengaruhi pola tanam dan hasil panen di Indonesia.",
        penulis: "Dr. Rina Wulandari",
        kategori: "Riset",
        tanggal: "11 Feb 2026",
        bacaan: "15 menit",
        views: 5800,
        likes: 156,
        komentar: 38,
        thumbnail: "🌍",
        trending: false,
    },
    {
        id: 6,
        judul: "Resep Pupuk Organik dari Limbah Dapur",
        ringkasan: "Cara mudah membuat pupuk organik berkualitas dari bahan-bahan yang ada di sekitar rumah Anda.",
        penulis: "Hendra Kusuma",
        kategori: "Tips & Trik",
        tanggal: "10 Feb 2026",
        bacaan: "5 menit",
        views: 9300,
        likes: 412,
        komentar: 67,
        thumbnail: "♻️",
        trending: false,
    },
]

const kategoriConfig: Record<string, string> = {
    "Teknologi": "bg-blue-100 text-blue-700",
    "Budidaya": "bg-green-100 text-green-700",
    "Bisnis": "bg-purple-100 text-purple-700",
    "Riset": "bg-amber-100 text-amber-700",
    "Tips & Trik": "bg-pink-100 text-pink-700",
}

const FeaturedArticleSection = () => {
    const featured = artikelData[0]
    const trending = artikelData.filter((a) => a.trending).slice(1)
    const latest = artikelData.filter((a) => !a.trending)

    const handleBookmark = (e: React.MouseEvent, judul: string) => {
        e.preventDefault()
        e.stopPropagation()
        toast.success("Artikel disimpan ke bookmark", {
            description: `"${judul}" telah ditambahkan ke koleksi Anda`,
        })
    }

    const handleLike = (e: React.MouseEvent, judul: string) => {
        e.preventDefault()
        e.stopPropagation()
        toast.success("Artikel disukai!", {
            description: `Anda menyukai "${judul}"`,
        })
    }

    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 py-8 sm:py-12">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#609A26]/10 rounded-xl">
                        <TrendingUp className="h-6 w-6 text-[#609A26]" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Artikel Pilihan</h2>
                        <p className="text-sm text-muted-foreground">Artikel terpopuler dan terbaru untuk Anda</p>
                    </div>
                </div>
                <Button asChild variant="outline" size="sm" className="cursor-pointer font-medium text-[#609A26] border-[#609A26]/30 hover:bg-[#609A26]/5">
                    <Link href="/article/trending">Lihat Semua</Link>
                </Button>
            </div>

            {/* Featured + Trending Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
                {/* Main Featured Article */}
                <Link href="/article/trending" className="lg:col-span-3">
                    <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all h-full">
                        <div className="h-56 sm:h-64 bg-linear-to-br from-[#609A26]/15 to-[#206536]/15 flex items-center justify-center relative">
                            <span className="text-7xl">{featured.thumbnail}</span>
                            {featured.trending && (
                                <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                                    <TrendingUp className="h-3 w-3" /> TRENDING
                                </div>
                            )}
                            <span className={`absolute top-3 right-3 px-2.5 py-1 text-[11px] font-medium rounded-full ${kategoriConfig[featured.kategori] || "bg-gray-100 text-gray-700"}`}>
                                {featured.kategori}
                            </span>
                        </div>
                        <CardContent className="p-5 space-y-3">
                            <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-[#609A26] transition-colors">
                                {featured.judul}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {featured.ringkasan}
                            </p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/40">
                                <div className="flex items-center gap-3">
                                    <span className="font-medium text-foreground">{featured.penulis}</span>
                                    <span>{featured.tanggal}</span>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        <span>{featured.bacaan}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                        <Eye className="h-3 w-3" />
                                        <span>{(featured.views / 1000).toFixed(1)}K</span>
                                    </div>
                                    <button onClick={(e) => handleLike(e, featured.judul)} className="flex items-center gap-1 hover:text-rose-500 transition-colors cursor-pointer">
                                        <Heart className="h-3 w-3" />
                                        <span>{featured.likes}</span>
                                    </button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                {/* Trending Sidebar */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-red-500" />
                        Trending Sekarang
                    </h3>
                    {trending.map((artikel, idx) => (
                        <Link key={artikel.id} href="/article/trending">
                            <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                                <CardContent className="p-4 flex gap-4">
                                    <div className="w-16 h-16 bg-linear-to-br from-[#609A26]/10 to-[#206536]/10 rounded-xl flex items-center justify-center shrink-0">
                                        <span className="text-2xl">{artikel.thumbnail}</span>
                                    </div>
                                    <div className="min-w-0 space-y-1.5">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-bold text-red-500">#{idx + 2}</span>
                                            <span className={`px-1.5 py-0.5 text-[10px] font-medium rounded-full ${kategoriConfig[artikel.kategori] || "bg-gray-100 text-gray-700"}`}>
                                                {artikel.kategori}
                                            </span>
                                        </div>
                                        <h4 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-[#609A26] transition-colors">
                                            {artikel.judul}
                                        </h4>
                                        <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                                            <span>{artikel.penulis}</span>
                                            <div className="flex items-center gap-1">
                                                <Eye className="h-3 w-3" />
                                                <span>{(artikel.views / 1000).toFixed(1)}K</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Latest Articles */}
            <div className="space-y-4">
                <h3 className="text-base font-semibold text-foreground">Artikel Terbaru</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {latest.map((artikel) => (
                        <Link key={artikel.id} href="/article/trending">
                            <Card className="hover:shadow-md transition-shadow overflow-hidden group cursor-pointer h-full">
                                <div className="h-36 bg-linear-to-br from-[#609A26]/10 to-[#206536]/10 flex items-center justify-center relative">
                                    <span className="text-4xl">{artikel.thumbnail}</span>
                                    <span className={`absolute top-3 right-3 px-2 py-0.5 text-[11px] font-medium rounded-full ${kategoriConfig[artikel.kategori] || "bg-gray-100 text-gray-700"}`}>
                                        {artikel.kategori}
                                    </span>
                                </div>
                                <CardContent className="p-4 space-y-2.5">
                                    <h4 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-[#609A26] transition-colors">
                                        {artikel.judul}
                                    </h4>
                                    <p className="text-xs text-muted-foreground line-clamp-2">
                                        {artikel.ringkasan}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/40">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium text-foreground">{artikel.penulis}</span>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                <span>{artikel.bacaan}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button onClick={(e) => handleLike(e, artikel.judul)} className="flex items-center gap-1 hover:text-rose-500 transition-colors cursor-pointer">
                                                <Heart className="h-3 w-3" />
                                                <span>{artikel.likes}</span>
                                            </button>
                                            <div className="flex items-center gap-1">
                                                <MessageCircle className="h-3 w-3" />
                                                <span>{artikel.komentar}</span>
                                            </div>
                                            <button onClick={(e) => handleBookmark(e, artikel.judul)} className="hover:text-[#609A26] cursor-pointer transition-colors">
                                                <Bookmark className="h-3.5 w-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedArticleSection
