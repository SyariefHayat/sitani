"use client"

import { useState } from "react"
import { Search, LayoutGrid, Tag, ChevronRight, Sprout, Wheat, Leaf, Bug, Droplets, Sun } from "lucide-react"
import { Card } from "@/components/ui/card"

const CATEGORIES = [
    { name: "Budidaya Tanaman", icon: Sprout, count: 245, color: "bg-emerald-100 text-emerald-700" },
    { name: "Padi & Beras", icon: Wheat, count: 189, color: "bg-amber-100 text-amber-700" },
    { name: "Pertanian Organik", icon: Leaf, count: 156, color: "bg-green-100 text-green-700" },
    { name: "Hama & Penyakit", icon: Bug, count: 134, color: "bg-red-100 text-red-700" },
    { name: "Irigasi & Air", icon: Droplets, count: 98, color: "bg-blue-100 text-blue-700" },
    { name: "Cuaca & Musim", icon: Sun, count: 87, color: "bg-orange-100 text-orange-700" },
]

const ARTICLES_BY_CATEGORY = [
    { title: "Cara Menanam Padi dengan Metode SRI", category: "Budidaya Tanaman", date: "10 Mar 2026", reads: "2.3K", author: "Dr. Ahmad Fauzi" },
    { title: "Panduan Lengkap Pertanian Organik untuk Pemula", category: "Pertanian Organik", date: "9 Mar 2026", reads: "1.8K", author: "Budi Santoso" },
    { title: "Mengenal Varietas Padi Unggul Terbaru 2026", category: "Padi & Beras", date: "8 Mar 2026", reads: "3.1K", author: "Rina Wulandari" },
    { title: "Cara Mengatasi Hama Wereng pada Tanaman Padi", category: "Hama & Penyakit", date: "7 Mar 2026", reads: "1.5K", author: "Eko Prasetyo" },
    { title: "Sistem Irigasi Tetes untuk Lahan Kering", category: "Irigasi & Air", date: "6 Mar 2026", reads: "980", author: "Dwi Cahyono" },
    { title: "Prakiraan Musim Tanam 2026/2027", category: "Cuaca & Musim", date: "5 Mar 2026", reads: "2.7K", author: "Maya Sari" },
]

const KategoriContent = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const filtered = ARTICLES_BY_CATEGORY.filter(a => {
        const matchCategory = !selectedCategory || a.category === selectedCategory
        const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase())
        return matchCategory && matchSearch
    })

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Kategori Artikel</h1>
                <p className="text-gray-500 text-sm mt-1">Jelajahi artikel berdasarkan kategori</p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
                {CATEGORIES.map(cat => {
                    const Icon = cat.icon
                    const isSelected = selectedCategory === cat.name
                    return (
                        <Card
                            key={cat.name}
                            onClick={() => setSelectedCategory(isSelected ? null : cat.name)}
                            className={`p-4 rounded-xl cursor-pointer transition-all text-center hover:shadow-md ${isSelected ? "ring-2 ring-[#206536] bg-[#206536]/5" : "border border-gray-200"}`}
                        >
                            <div className={`w-10 h-10 rounded-lg ${cat.color} flex items-center justify-center mx-auto mb-2`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <p className="text-xs font-semibold text-gray-800 truncate">{cat.name}</p>
                            <p className="text-[10px] text-gray-400 mt-0.5">{cat.count} artikel</p>
                        </Card>
                    )
                })}
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Cari artikel..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                />
            </div>

            {/* Articles */}
            {filtered.length === 0 ? (
                <div className="text-center py-16">
                    <LayoutGrid className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-gray-700 mb-1">Tidak ada artikel</h3>
                    <p className="text-sm text-gray-400">Ubah kategori atau kata kunci pencarian</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {filtered.map((article, idx) => (
                        <Card key={idx} className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 rounded-lg bg-[#206536]/10 shrink-0">
                                    <Tag className="w-5 h-5 text-[#206536]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-bold text-gray-900 truncate">{article.title}</h3>
                                    <p className="text-xs text-gray-500 mt-0.5">{article.category} · {article.author}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">{article.date} · {article.reads} pembaca</p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </section>
    )
}

export default KategoriContent
