"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Search, TrendingUp, Users, MapPin, Calendar, Target, Clock, Filter, ChevronRight, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const CATEGORIES = ["Semua", "Pertanian", "Perkebunan", "Perikanan", "Peternakan"]

interface Project {
    id: string
    name: string
    image: string
    category: string
    location: string
    targetFund: string
    currentFund: string
    progress: number
    returnRate: string
    duration: string
    minInvest: string
    investors: number
    rating: number
    description: string
    status: "open" | "closing" | "funded"
    statusLabel: string
    statusColor: string
    highlights: string[]
}

const PROJECTS: Project[] = [
    {
        id: "PRJ-001",
        name: "Padi Organik Premium Cianjur",
        image: "/hero-section-bg.png",
        category: "Pertanian",
        location: "Cianjur, Jawa Barat",
        targetFund: "Rp 500.000.000",
        currentFund: "Rp 375.000.000",
        progress: 75,
        returnRate: "18,2%",
        duration: "12 bulan",
        minInvest: "Rp 500.000",
        investors: 124,
        rating: 4.8,
        description: "Budidaya padi organik premium dengan sistem SRI di lahan 10 hektar. Produk bersertifikat organik nasional.",
        status: "open",
        statusLabel: "Pendanaan Dibuka",
        statusColor: "bg-emerald-100 text-emerald-700",
        highlights: ["Sertifikat Organik", "Asuransi Pertanian", "Laporan Bulanan"],
    },
    {
        id: "PRJ-002",
        name: "Kopi Arabika Toraja Premium",
        image: "/hero-section-bg.png",
        category: "Perkebunan",
        location: "Toraja, Sulawesi Selatan",
        targetFund: "Rp 800.000.000",
        currentFund: "Rp 360.000.000",
        progress: 45,
        returnRate: "22,5%",
        duration: "18 bulan",
        minInvest: "Rp 1.000.000",
        investors: 89,
        rating: 4.9,
        description: "Pengembangan perkebunan kopi arabika specialty di dataran tinggi Toraja. Grade specialty dengan cupping score 85+.",
        status: "open",
        statusLabel: "Pendanaan Dibuka",
        statusColor: "bg-emerald-100 text-emerald-700",
        highlights: ["Specialty Grade", "Fair Trade", "Direct Trade"],
    },
    {
        id: "PRJ-003",
        name: "Budidaya Udang Vaname Intensif",
        image: "/hero-section-bg.png",
        category: "Perikanan",
        location: "Karawang, Jawa Barat",
        targetFund: "Rp 300.000.000",
        currentFund: "Rp 285.000.000",
        progress: 95,
        returnRate: "15,8%",
        duration: "6 bulan",
        minInvest: "Rp 500.000",
        investors: 67,
        rating: 4.6,
        description: "Budidaya udang vaname intensif dengan teknologi biofloc di tambak modern seluas 5 hektar.",
        status: "closing",
        statusLabel: "Segera Ditutup",
        statusColor: "bg-amber-100 text-amber-700",
        highlights: ["Biofloc Technology", "Export Quality", "3 Siklus/Tahun"],
    },
    {
        id: "PRJ-004",
        name: "Kebun Jeruk Mandarin Batu",
        image: "/hero-section-bg.png",
        category: "Pertanian",
        location: "Batu, Jawa Timur",
        targetFund: "Rp 400.000.000",
        currentFund: "Rp 120.000.000",
        progress: 30,
        returnRate: "20,0%",
        duration: "12 bulan",
        minInvest: "Rp 500.000",
        investors: 32,
        rating: 4.5,
        description: "Pengembangan kebun jeruk mandarin premium dengan bibit unggul di dataran tinggi Kota Batu.",
        status: "open",
        statusLabel: "Pendanaan Dibuka",
        statusColor: "bg-emerald-100 text-emerald-700",
        highlights: ["Bibit Unggul", "Irigasi Modern", "Pasar Terjamin"],
    },
    {
        id: "PRJ-005",
        name: "Peternakan Sapi Perah Modern",
        image: "/hero-section-bg.png",
        category: "Peternakan",
        location: "Lembang, Jawa Barat",
        targetFund: "Rp 1.200.000.000",
        currentFund: "Rp 480.000.000",
        progress: 40,
        returnRate: "16,5%",
        duration: "24 bulan",
        minInvest: "Rp 2.000.000",
        investors: 45,
        rating: 4.7,
        description: "Peternakan sapi perah modern dengan sistem free-stall dan automated milking di dataran tinggi Lembang.",
        status: "open",
        statusLabel: "Pendanaan Dibuka",
        statusColor: "bg-emerald-100 text-emerald-700",
        highlights: ["Automated Milking", "ISO Certified", "Kontrak Offtaker"],
    },
    {
        id: "PRJ-006",
        name: "Pertanian Sayur Organik Hidroponik",
        image: "/hero-section-bg.png",
        category: "Pertanian",
        location: "Lembang, Jawa Barat",
        targetFund: "Rp 200.000.000",
        currentFund: "Rp 200.000.000",
        progress: 100,
        returnRate: "16,5%",
        duration: "9 bulan",
        minInvest: "Rp 500.000",
        investors: 55,
        rating: 4.8,
        description: "Pertanian sayur organik dengan teknologi hidroponik NFT dan konvensional di dataran tinggi.",
        status: "funded",
        statusLabel: "Pendanaan Penuh",
        statusColor: "bg-blue-100 text-blue-700",
        highlights: ["Hidroponik NFT", "Sertifikat Organik", "B2B Supply"],
    },
]

const InvestasiContent = () => {
    const [activeCategory, setActiveCategory] = useState("Semua")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [investAmount, setInvestAmount] = useState("")

    const filtered = PROJECTS.filter(p => {
        const matchCat = activeCategory === "Semua" || p.category === activeCategory
        const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase())
        return matchCat && matchSearch
    })

    const handleInvest = () => {
        if (!investAmount || parseInt(investAmount) <= 0) {
            toast.error("Masukkan jumlah investasi yang valid")
            return
        }
        toast.success(`Investasi Rp ${parseInt(investAmount).toLocaleString("id-ID")} berhasil diproses!`, {
            description: `Proyek: ${selectedProject?.name}`,
        })
        setInvestAmount("")
        setSelectedProject(null)
    }

    return (
        <>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Proyek Investasi</h1>
                    <p className="text-gray-500 text-sm mt-1">Temukan proyek pertanian terbaik untuk investasi Anda</p>
                </div>

                {/* Search & Filter */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cari proyek investasi..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                        />
                    </div>
                    <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                                    activeCategory === cat
                                        ? "bg-[#206536] text-white shadow-sm"
                                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {[
                        { label: "Total Proyek", value: PROJECTS.length.toString(), color: "text-[#206536]" },
                        { label: "Pendanaan Dibuka", value: PROJECTS.filter(p => p.status === "open").length.toString(), color: "text-emerald-600" },
                        { label: "Segera Ditutup", value: PROJECTS.filter(p => p.status === "closing").length.toString(), color: "text-amber-600" },
                        { label: "Rata-rata Return", value: "18,2%", color: "text-blue-600" },
                    ].map((s) => (
                        <Card key={s.label} className="p-3 rounded-xl border border-gray-200 shadow-sm text-center">
                            <p className="text-xs text-gray-400">{s.label}</p>
                            <p className={`text-xl font-extrabold ${s.color} mt-0.5`}>{s.value}</p>
                        </Card>
                    ))}
                </div>

                {/* Project Grid */}
                {filtered.length === 0 ? (
                    <div className="text-center py-16">
                        <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-gray-700 mb-1">Tidak ditemukan</h3>
                        <p className="text-sm text-gray-400">Coba ubah filter atau kata kunci pencarian</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filtered.map((project) => (
                            <Card key={project.id} className="rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                                <div className="relative w-full h-40 bg-gray-100">
                                    <Image src={project.image} alt={project.name} fill className="object-cover" />
                                    <span className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${project.statusColor}`}>
                                        {project.statusLabel}
                                    </span>
                                    <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 rounded-full px-2 py-0.5">
                                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                        <span className="text-white text-[11px] font-semibold">{project.rating}</span>
                                    </div>
                                </div>
                                <div className="p-4 space-y-3">
                                    <div>
                                        <p className="text-xs text-[#609A26] font-semibold">{project.category}</p>
                                        <h3 className="text-sm font-bold text-gray-900 mt-0.5 line-clamp-2">{project.name}</h3>
                                        <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                                            <MapPin className="w-3 h-3" /> {project.location}
                                        </p>
                                    </div>

                                    {/* Progress */}
                                    <div>
                                        <div className="flex justify-between text-[11px] mb-1">
                                            <span className="text-gray-400">Terkumpul</span>
                                            <span className="font-semibold text-gray-700">{project.progress}%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-[#206536] to-[#609A26] rounded-full" style={{ width: `${project.progress}%` }} />
                                        </div>
                                    </div>

                                    {/* Key Info */}
                                    <div className="grid grid-cols-3 gap-2 text-center">
                                        <div className="p-2 rounded-lg bg-gray-50">
                                            <p className="text-[10px] text-gray-400">Return</p>
                                            <p className="text-xs font-bold text-emerald-600">{project.returnRate}</p>
                                        </div>
                                        <div className="p-2 rounded-lg bg-gray-50">
                                            <p className="text-[10px] text-gray-400">Durasi</p>
                                            <p className="text-xs font-bold text-gray-700">{project.duration}</p>
                                        </div>
                                        <div className="p-2 rounded-lg bg-gray-50">
                                            <p className="text-[10px] text-gray-400">Investor</p>
                                            <p className="text-xs font-bold text-gray-700">{project.investors}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 pt-1">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex-1 text-xs border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 cursor-pointer"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            Detail
                                        </Button>
                                        {project.status !== "funded" ? (
                                            <Button
                                                size="sm"
                                                className="flex-1 bg-[#206536] hover:bg-[#1a5530] text-white text-xs cursor-pointer gap-1"
                                                onClick={() => { setSelectedProject(project); setInvestAmount("") }}
                                            >
                                                <TrendingUp className="w-3 h-3" /> Investasi
                                            </Button>
                                        ) : (
                                            <Button size="sm" disabled className="flex-1 text-xs">
                                                Pendanaan Penuh
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </section>

            {/* Project Detail / Invest Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                        <div className="sticky top-0 bg-white rounded-t-2xl z-10 flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h2 className="text-lg font-bold text-gray-900">Detail Proyek</h2>
                            <button onClick={() => setSelectedProject(null)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 cursor-pointer"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="px-6 py-5 space-y-5">
                            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gray-100">
                                <Image src={selectedProject.image} alt={selectedProject.name} fill className="object-cover" />
                                <span className={`absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full ${selectedProject.statusColor}`}>{selectedProject.statusLabel}</span>
                            </div>
                            <div>
                                <p className="text-xs text-[#609A26] font-semibold">{selectedProject.category}</p>
                                <h3 className="text-lg font-bold text-gray-900 mt-0.5">{selectedProject.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">{selectedProject.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.highlights.map((h) => (
                                    <span key={h} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#609A26]/10 text-[#206536]">{h}</span>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: MapPin, label: "Lokasi", value: selectedProject.location },
                                    { icon: Calendar, label: "Durasi", value: selectedProject.duration },
                                    { icon: Users, label: "Investor", value: `${selectedProject.investors} orang` },
                                    { icon: Target, label: "Target", value: selectedProject.targetFund },
                                ].map((item) => (
                                    <div key={item.label} className="p-3 rounded-xl bg-gray-50">
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <item.icon className="w-3.5 h-3.5 text-[#609A26]" />
                                            <span className="text-[11px] text-gray-400">{item.label}</span>
                                        </div>
                                        <p className="text-sm font-semibold text-gray-800">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-1.5">
                                    <span className="text-gray-400">{selectedProject.currentFund} / {selectedProject.targetFund}</span>
                                    <span className="font-bold text-[#206536]">{selectedProject.progress}%</span>
                                </div>
                                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-[#206536] to-[#609A26] rounded-full transition-all" style={{ width: `${selectedProject.progress}%` }} />
                                </div>
                            </div>
                            <Separator />
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm"><span className="text-gray-500">Estimasi Return</span><span className="font-bold text-emerald-600">{selectedProject.returnRate} / tahun</span></div>
                                <div className="flex justify-between text-sm"><span className="text-gray-500">Min. Investasi</span><span className="font-semibold text-gray-800">{selectedProject.minInvest}</span></div>
                            </div>

                            {selectedProject.status !== "funded" && (
                                <>
                                    <Separator />
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">Jumlah Investasi (Rp)</label>
                                        <input
                                            type="number"
                                            value={investAmount}
                                            onChange={(e) => setInvestAmount(e.target.value)}
                                            placeholder="Contoh: 1000000"
                                            className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                                        />
                                        <div className="flex gap-2 mt-2">
                                            {["500000", "1000000", "2000000", "5000000"].map((v) => (
                                                <button key={v} onClick={() => setInvestAmount(v)} className="px-2.5 py-1 text-[11px] font-medium border border-gray-200 rounded-lg hover:border-[#609A26] hover:text-[#609A26] cursor-pointer transition-colors">
                                                    {parseInt(v) >= 1000000 ? `${parseInt(v)/1000000}jt` : `${parseInt(v)/1000}rb`}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="flex justify-end gap-2 px-6 py-4 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
                            <Button variant="outline" onClick={() => setSelectedProject(null)} className="cursor-pointer text-sm">Tutup</Button>
                            {selectedProject.status !== "funded" && (
                                <Button onClick={handleInvest} className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer gap-1.5 text-sm">
                                    <TrendingUp className="w-4 h-4" /> Investasi Sekarang
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default InvestasiContent
