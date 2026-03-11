"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, TrendingUp, TrendingDown, Clock, CheckCircle2, ChevronRight, X, MapPin, Calendar, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const TABS = [
    { label: "Semua", value: "semua" },
    { label: "Aktif", value: "aktif", icon: TrendingUp },
    { label: "Selesai", value: "selesai", icon: CheckCircle2 },
    { label: "Menunggu", value: "menunggu", icon: Clock },
]

interface Investment {
    id: string
    name: string
    image: string
    amount: string
    returnRate: string
    status: string
    statusLabel: string
    statusColor: string
    progress: number
    location: string
    duration: string
    investors: number
    targetFund: string
    currentFund: string
    nextPayout: string
    description: string
}

const INVESTMENTS: Investment[] = [
    {
        id: "INV-001",
        name: "Proyek Padi Organik Cianjur",
        image: "/hero-section-bg.png",
        amount: "Rp 3.000.000",
        returnRate: "18,2%",
        status: "aktif",
        statusLabel: "Aktif",
        statusColor: "bg-emerald-100 text-emerald-700",
        progress: 75,
        location: "Cianjur, Jawa Barat",
        duration: "12 bulan",
        investors: 124,
        targetFund: "Rp 500.000.000",
        currentFund: "Rp 375.000.000",
        nextPayout: "15 April 2025",
        description: "Investasi budidaya padi organik premium dengan sistem pertanian modern di lahan 10 hektar.",
    },
    {
        id: "INV-002",
        name: "Perkebunan Kopi Toraja",
        image: "/hero-section-bg.png",
        amount: "Rp 5.000.000",
        returnRate: "22,5%",
        status: "aktif",
        statusLabel: "Aktif",
        statusColor: "bg-emerald-100 text-emerald-700",
        progress: 45,
        location: "Toraja, Sulawesi Selatan",
        duration: "18 bulan",
        investors: 89,
        targetFund: "Rp 800.000.000",
        currentFund: "Rp 360.000.000",
        nextPayout: "1 Mei 2025",
        description: "Proyek pengembangan perkebunan kopi arabika premium di dataran tinggi Toraja.",
    },
    {
        id: "INV-003",
        name: "Budidaya Udang Vaname",
        image: "/hero-section-bg.png",
        amount: "Rp 2.500.000",
        returnRate: "15,8%",
        status: "selesai",
        statusLabel: "Selesai",
        statusColor: "bg-blue-100 text-blue-700",
        progress: 100,
        location: "Karawang, Jawa Barat",
        duration: "6 bulan",
        investors: 67,
        targetFund: "Rp 300.000.000",
        currentFund: "Rp 300.000.000",
        nextPayout: "Selesai",
        description: "Budidaya udang vaname intensif dengan teknologi biofloc di tambak modern.",
    },
    {
        id: "INV-004",
        name: "Pertanian Sayur Organik",
        image: "/hero-section-bg.png",
        amount: "Rp 2.000.000",
        returnRate: "16,5%",
        status: "aktif",
        statusLabel: "Aktif",
        statusColor: "bg-emerald-100 text-emerald-700",
        progress: 60,
        location: "Lembang, Jawa Barat",
        duration: "9 bulan",
        investors: 55,
        targetFund: "Rp 200.000.000",
        currentFund: "Rp 120.000.000",
        nextPayout: "20 Maret 2025",
        description: "Pertanian sayur organik hidroponik dan konvensional di dataran tinggi Lembang.",
    },
    {
        id: "INV-005",
        name: "Kebun Jeruk Mandarin",
        image: "/hero-section-bg.png",
        amount: "Rp 1.500.000",
        returnRate: "-",
        status: "menunggu",
        statusLabel: "Menunggu",
        statusColor: "bg-amber-100 text-amber-700",
        progress: 30,
        location: "Batu, Jawa Timur",
        duration: "12 bulan",
        investors: 32,
        targetFund: "Rp 400.000.000",
        currentFund: "Rp 120.000.000",
        nextPayout: "Menunggu pendanaan",
        description: "Pengembangan kebun jeruk mandarin premium dengan bibit unggul di Kota Batu.",
    },
]

const PortofolioContent = () => {
    const [activeTab, setActiveTab] = useState("semua")
    const [selectedInv, setSelectedInv] = useState<Investment | null>(null)

    const filtered = activeTab === "semua" ? INVESTMENTS : INVESTMENTS.filter(i => i.status === activeTab)

    const totalInvested = "Rp 14.000.000"
    const totalReturn = "Rp 1.850.000"

    return (
        <>
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <Link href="/investasi" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </Link>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Portofolio Saya</h1>
                        <p className="text-gray-500 text-sm mt-0.5">Pantau semua investasi Anda</p>
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <Card className="p-5 rounded-xl border border-gray-200 shadow-sm bg-gradient-to-br from-[#206536]/5 to-transparent">
                        <p className="text-xs text-gray-500">Total Investasi</p>
                        <p className="text-xl font-extrabold text-[#1a4528] mt-1">{totalInvested}</p>
                        <p className="text-[11px] text-gray-400 mt-1">{INVESTMENTS.length} proyek</p>
                    </Card>
                    <Card className="p-5 rounded-xl border border-gray-200 shadow-sm bg-gradient-to-br from-amber-500/5 to-transparent">
                        <p className="text-xs text-gray-500">Total Bagi Hasil</p>
                        <p className="text-xl font-extrabold text-amber-600 mt-1">{totalReturn}</p>
                        <div className="flex items-center gap-1 mt-1">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-[11px] text-emerald-600 font-semibold">+13,2%</span>
                        </div>
                    </Card>
                    <Card className="p-5 rounded-xl border border-gray-200 shadow-sm bg-gradient-to-br from-blue-500/5 to-transparent">
                        <p className="text-xs text-gray-500">Proyek Aktif</p>
                        <p className="text-xl font-extrabold text-blue-600 mt-1">{INVESTMENTS.filter(i => i.status === "aktif").length}</p>
                        <p className="text-[11px] text-gray-400 mt-1">dari {INVESTMENTS.length} total</p>
                    </Card>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 sm:gap-1.5 mb-6 overflow-x-auto pb-1 scrollbar-hide">
                    {TABS.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                                activeTab === tab.value
                                    ? "bg-[#206536] text-white shadow-sm"
                                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            {tab.icon && <tab.icon className="w-3.5 h-3.5" />}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Investment List */}
                <div className="space-y-4">
                    {filtered.map((inv) => (
                        <Card key={inv.id} className="rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                            <div className="flex flex-col sm:flex-row">
                                <div className="relative w-full sm:w-40 h-36 sm:h-auto bg-gray-100 shrink-0">
                                    <Image src={inv.image} alt={inv.name} fill className="object-cover" />
                                </div>
                                <div className="flex-1 p-5">
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <h3 className="text-base font-bold text-gray-900">{inv.name}</h3>
                                            <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                                                <MapPin className="w-3 h-3" /> {inv.location}
                                            </p>
                                        </div>
                                        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${inv.statusColor}`}>
                                            {inv.statusLabel}
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mt-3">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-gray-400">Pendanaan</span>
                                            <span className="font-semibold text-gray-700">{inv.progress}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-[#206536] to-[#609A26] rounded-full transition-all duration-500"
                                                style={{ width: `${inv.progress}%` }}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <p className="text-xs text-gray-400">Investasi Anda</p>
                                                <p className="text-sm font-bold text-[#1a4528]">{inv.amount}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400">Imbal Hasil</p>
                                                <p className={`text-sm font-bold ${inv.returnRate !== "-" ? "text-emerald-600" : "text-gray-400"}`}>{inv.returnRate}</p>
                                            </div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="text-xs border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 cursor-pointer gap-1"
                                            onClick={() => setSelectedInv(inv)}
                                        >
                                            Detail <ChevronRight className="w-3 h-3" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Detail Modal */}
            {selectedInv && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedInv(null)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white rounded-t-2xl z-10">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Detail Investasi</h2>
                                <p className="text-xs text-gray-500 font-mono">{selectedInv.id}</p>
                            </div>
                            <button onClick={() => setSelectedInv(null)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="px-6 py-5 space-y-5">
                            <div className="relative w-full h-40 rounded-xl overflow-hidden bg-gray-100">
                                <Image src={selectedInv.image} alt={selectedInv.name} fill className="object-cover" />
                                <span className={`absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded-full ${selectedInv.statusColor}`}>
                                    {selectedInv.statusLabel}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{selectedInv.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">{selectedInv.description}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: MapPin, label: "Lokasi", value: selectedInv.location },
                                    { icon: Calendar, label: "Durasi", value: selectedInv.duration },
                                    { icon: Users, label: "Investor", value: `${selectedInv.investors} orang` },
                                    { icon: Target, label: "Target", value: selectedInv.targetFund },
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
                            <Separator />
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm"><span className="text-gray-500">Investasi Anda</span><span className="font-bold text-[#1a4528]">{selectedInv.amount}</span></div>
                                <div className="flex justify-between text-sm"><span className="text-gray-500">Imbal Hasil</span><span className="font-bold text-emerald-600">{selectedInv.returnRate}</span></div>
                                <div className="flex justify-between text-sm"><span className="text-gray-500">Bagi Hasil Berikutnya</span><span className="font-semibold text-gray-700">{selectedInv.nextPayout}</span></div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 px-6 py-4 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
                            {selectedInv.status === "aktif" && (
                                <Button
                                    className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer gap-1.5 text-sm"
                                    onClick={() => { toast.info("Fitur tambah investasi akan segera hadir!"); setSelectedInv(null) }}
                                >
                                    <TrendingUp className="w-4 h-4" /> Tambah Investasi
                                </Button>
                            )}
                            <Button variant="outline" size="sm" onClick={() => setSelectedInv(null)} className="cursor-pointer text-sm">Tutup</Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PortofolioContent
