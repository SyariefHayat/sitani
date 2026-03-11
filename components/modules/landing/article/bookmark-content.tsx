"use client"

import { useState } from "react"
import { Search, Bookmark, Trash2, Clock, Eye, Heart, BookOpen } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const BOOKMARKED_ARTICLES = [
    { id: 1, title: "Revolusi Pertanian 4.0: IoT untuk Petani", author: "Dr. Rika Puspitasari", savedDate: "10 Mar 2026", reads: "12.5K", likes: 845, category: "Teknologi" },
    { id: 2, title: "Cara Meningkatkan Hasil Panen Padi 2x Lipat", author: "Dr. Ahmad Fauzi", savedDate: "9 Mar 2026", reads: "9.8K", likes: 623, category: "Budidaya" },
    { id: 3, title: "Panduan Investasi di Sektor Pertanian 2026", author: "Hendra Kusuma", savedDate: "8 Mar 2026", reads: "8.2K", likes: 534, category: "Bisnis" },
    { id: 4, title: "Budidaya Hidroponik di Lahan Sempit", author: "Maya Sari", savedDate: "7 Mar 2026", reads: "7.1K", likes: 412, category: "Budidaya" },
    { id: 5, title: "Mengenal Pupuk Organik Cair Buatan Sendiri", author: "Budi Santoso", savedDate: "6 Mar 2026", reads: "6.5K", likes: 389, category: "Organik" },
]

const BookmarkContent = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [articles, setArticles] = useState(BOOKMARKED_ARTICLES)

    const filtered = articles.filter(a =>
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.author.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleRemove = (id: number) => {
        setArticles(prev => prev.filter(a => a.id !== id))
        toast.success("Bookmark dihapus", { description: "Artikel telah dihapus dari bookmark" })
    }

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-1">
                    <Bookmark className="w-6 h-6 text-[#206536]" />
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Artikel Tersimpan</h1>
                </div>
                <p className="text-gray-500 text-sm">{articles.length} artikel tersimpan</p>
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Cari artikel tersimpan..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                />
            </div>

            {/* Bookmarks List */}
            {filtered.length === 0 ? (
                <div className="text-center py-16">
                    <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-gray-700 mb-1">Tidak ada bookmark</h3>
                    <p className="text-sm text-gray-400">Simpan artikel favoritmu untuk dibaca nanti</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {filtered.map(article => (
                        <Card key={article.id} className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all">
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 rounded-lg bg-[#206536]/10 shrink-0">
                                    <Bookmark className="w-5 h-5 text-[#206536]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-sm font-bold text-gray-900 truncate">{article.title}</h3>
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#206536]/10 text-[#206536] shrink-0">{article.category}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-0.5">{article.author}</p>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" />{article.savedDate}</span>
                                        <span className="text-xs text-gray-400 flex items-center gap-1"><Eye className="w-3 h-3" />{article.reads}</span>
                                        <span className="text-xs text-gray-400 flex items-center gap-1"><Heart className="w-3 h-3" />{article.likes}</span>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleRemove(article.id)}
                                    className="text-gray-400 hover:text-red-500 hover:bg-red-50 shrink-0 cursor-pointer"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </section>
    )
}

export default BookmarkContent
