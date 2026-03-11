"use client"

import { useState } from "react"
import { Search, TrendingUp, Eye, Heart, MessageSquare, ChevronRight, Flame } from "lucide-react"
import { Card } from "@/components/ui/card"

const TRENDING_ARTICLES = [
    { rank: 1, title: "Revolusi Pertanian 4.0: IoT untuk Petani", author: "Dr. Rika Puspitasari", reads: "12.5K", likes: 845, comments: 127, trending: "+250%", date: "10 Mar 2026" },
    { rank: 2, title: "Cara Meningkatkan Hasil Panen Padi 2x Lipat", author: "Dr. Ahmad Fauzi", reads: "9.8K", likes: 623, comments: 89, trending: "+180%", date: "9 Mar 2026" },
    { rank: 3, title: "Panduan Investasi di Sektor Pertanian 2026", author: "Hendra Kusuma", reads: "8.2K", likes: 534, comments: 76, trending: "+150%", date: "8 Mar 2026" },
    { rank: 4, title: "Budidaya Hidroponik di Lahan Sempit", author: "Maya Sari", reads: "7.1K", likes: 412, comments: 65, trending: "+120%", date: "7 Mar 2026" },
    { rank: 5, title: "Mengenal Pupuk Organik Cair Buatan Sendiri", author: "Budi Santoso", reads: "6.5K", likes: 389, comments: 54, trending: "+100%", date: "6 Mar 2026" },
    { rank: 6, title: "Strategi Pemasaran Produk Pertanian Online", author: "Dewi Anggraini", reads: "5.8K", likes: 312, comments: 43, trending: "+85%", date: "5 Mar 2026" },
    { rank: 7, title: "Teknik Irigasi Modern untuk Lahan Kering", author: "Dwi Cahyono", reads: "5.2K", likes: 287, comments: 38, trending: "+72%", date: "4 Mar 2026" },
    { rank: 8, title: "Potensi Besar Agritech di Indonesia", author: "Eko Prasetyo", reads: "4.9K", likes: 256, comments: 31, trending: "+65%", date: "3 Mar 2026" },
]

const PERIODS = ["Hari Ini", "Minggu Ini", "Bulan Ini"]

const TrendingContent = () => {
    const [activePeriod, setActivePeriod] = useState("Minggu Ini")
    const [searchQuery, setSearchQuery] = useState("")

    const filtered = TRENDING_ARTICLES.filter(a =>
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.author.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-1">
                    <Flame className="w-6 h-6 text-orange-500" />
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Trending</h1>
                </div>
                <p className="text-gray-500 text-sm">Artikel paling populer dan banyak dibaca</p>
            </div>

            {/* Period Filter & Search */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Cari artikel trending..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                    />
                </div>
                <div className="flex items-center gap-1.5">
                    {PERIODS.map(p => (
                        <button
                            key={p}
                            onClick={() => setActivePeriod(p)}
                            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${activePeriod === p ? "bg-[#206536] text-white shadow-sm" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            </div>

            {/* Trending List */}
            {filtered.length === 0 ? (
                <div className="text-center py-16">
                    <TrendingUp className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-gray-700 mb-1">Tidak ada artikel trending</h3>
                    <p className="text-sm text-gray-400">Ubah periode atau kata kunci pencarian</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {filtered.map(article => (
                        <Card key={article.rank} className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-lg shrink-0 ${article.rank <= 3 ? "bg-gradient-to-br from-orange-400 to-red-500 text-white" : "bg-gray-100 text-gray-500"}`}>
                                    {article.rank}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-bold text-gray-900 truncate">{article.title}</h3>
                                    <p className="text-xs text-gray-500 mt-0.5">{article.author} · {article.date}</p>
                                    <div className="flex items-center gap-3 mt-1.5">
                                        <span className="text-xs text-gray-400 flex items-center gap-1"><Eye className="w-3 h-3" />{article.reads}</span>
                                        <span className="text-xs text-gray-400 flex items-center gap-1"><Heart className="w-3 h-3" />{article.likes}</span>
                                        <span className="text-xs text-gray-400 flex items-center gap-1"><MessageSquare className="w-3 h-3" />{article.comments}</span>
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                                        <TrendingUp className="w-3 h-3" />{article.trending}
                                    </span>
                                    <ChevronRight className="w-4 h-4 text-gray-400 ml-auto mt-1" />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </section>
    )
}

export default TrendingContent
