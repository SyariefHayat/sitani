"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, FileText, Download, TrendingUp, TrendingDown, BarChart3, PieChart, Calendar, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const PERIODS = ["3 Bulan", "6 Bulan", "1 Tahun", "Semua"]

const REPORTS = [
    {
        id: "RPT-001",
        title: "Laporan Investasi Q4 2024",
        period: "Oktober - Desember 2024",
        date: "15 Jan 2025",
        type: "Kuartal",
        totalInvested: "Rp 12.500.000",
        totalReturn: "Rp 770.000",
        returnPct: "+6,16%",
        isPositive: true,
    },
    {
        id: "RPT-002",
        title: "Laporan Investasi Q3 2024",
        period: "Juli - September 2024",
        date: "15 Okt 2024",
        type: "Kuartal",
        totalInvested: "Rp 10.000.000",
        totalReturn: "Rp 580.000",
        returnPct: "+5,80%",
        isPositive: true,
    },
    {
        id: "RPT-003",
        title: "Laporan Tahunan 2024",
        period: "Januari - Desember 2024",
        date: "31 Des 2024",
        type: "Tahunan",
        totalInvested: "Rp 14.000.000",
        totalReturn: "Rp 1.850.000",
        returnPct: "+13,21%",
        isPositive: true,
    },
    {
        id: "RPT-004",
        title: "Laporan Investasi Q2 2024",
        period: "April - Juni 2024",
        date: "15 Jul 2024",
        type: "Kuartal",
        totalInvested: "Rp 7.500.000",
        totalReturn: "Rp 350.000",
        returnPct: "+4,67%",
        isPositive: true,
    },
    {
        id: "RPT-005",
        title: "Laporan Investasi Q1 2024",
        period: "Januari - Maret 2024",
        date: "15 Apr 2024",
        type: "Kuartal",
        totalInvested: "Rp 5.000.000",
        totalReturn: "Rp 150.000",
        returnPct: "+3,00%",
        isPositive: true,
    },
]

const PROJECT_PERFORMANCE = [
    { name: "Padi Organik Cianjur", return: "+18,2%", status: "Aktif", allocation: "21%", isPositive: true },
    { name: "Kopi Arabika Toraja", return: "+22,5%", status: "Aktif", allocation: "36%", isPositive: true },
    { name: "Budidaya Udang Vaname", return: "+15,8%", status: "Selesai", allocation: "18%", isPositive: true },
    { name: "Pertanian Sayur Organik", return: "+16,5%", status: "Aktif", allocation: "14%", isPositive: true },
    { name: "Kebun Jeruk Mandarin", return: "-", status: "Menunggu", allocation: "11%", isPositive: false },
]

const LaporanContent = () => {
    const [activePeriod, setActivePeriod] = useState("Semua")

    return (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <Link href="/investasi" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Laporan Investasi</h1>
                    <p className="text-gray-500 text-sm mt-0.5">Analisis kinerja dan ringkasan investasi Anda</p>
                </div>
            </div>

            {/* Performance Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <Card className="p-4 rounded-xl border border-gray-200 shadow-sm bg-gradient-to-br from-[#206536]/5 to-transparent">
                    <BarChart3 className="w-5 h-5 text-[#609A26] mb-2" />
                    <p className="text-xs text-gray-400">Total Investasi</p>
                    <p className="text-lg font-extrabold text-[#1a4528] mt-0.5">Rp 14jt</p>
                </Card>
                <Card className="p-4 rounded-xl border border-gray-200 shadow-sm bg-gradient-to-br from-emerald-500/5 to-transparent">
                    <TrendingUp className="w-5 h-5 text-emerald-500 mb-2" />
                    <p className="text-xs text-gray-400">Total Return</p>
                    <p className="text-lg font-extrabold text-emerald-600 mt-0.5">Rp 1,85jt</p>
                </Card>
                <Card className="p-4 rounded-xl border border-gray-200 shadow-sm bg-gradient-to-br from-blue-500/5 to-transparent">
                    <PieChart className="w-5 h-5 text-blue-500 mb-2" />
                    <p className="text-xs text-gray-400">ROI Rata-rata</p>
                    <p className="text-lg font-extrabold text-blue-600 mt-0.5">13,21%</p>
                </Card>
                <Card className="p-4 rounded-xl border border-gray-200 shadow-sm bg-gradient-to-br from-amber-500/5 to-transparent">
                    <Calendar className="w-5 h-5 text-amber-500 mb-2" />
                    <p className="text-xs text-gray-400">Periode Aktif</p>
                    <p className="text-lg font-extrabold text-amber-600 mt-0.5">12 bln</p>
                </Card>
            </div>

            {/* Period Filter */}
            <div className="flex items-center gap-1.5 mb-6">
                {PERIODS.map((p) => (
                    <button
                        key={p}
                        onClick={() => setActivePeriod(p)}
                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                            activePeriod === p
                                ? "bg-[#206536] text-white shadow-sm"
                                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                        {p}
                    </button>
                ))}
            </div>

            {/* Project Performance */}
            <Card className="rounded-2xl border border-gray-200 shadow-sm mb-6 overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100">
                    <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                        <PieChart className="w-4.5 h-4.5 text-[#609A26]" /> Kinerja Per Proyek
                    </h3>
                </div>
                <div className="divide-y divide-gray-100">
                    {PROJECT_PERFORMANCE.map((proj) => (
                        <div key={proj.name} className="px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-800">{proj.name}</p>
                                <p className="text-xs text-gray-400 mt-0.5">Alokasi: {proj.allocation}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`text-sm font-bold ${proj.isPositive ? "text-emerald-600" : "text-gray-400"}`}>{proj.return}</span>
                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                    proj.status === "Aktif" ? "bg-emerald-100 text-emerald-700" :
                                    proj.status === "Selesai" ? "bg-blue-100 text-blue-700" :
                                    "bg-amber-100 text-amber-700"
                                }`}>{proj.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Reports List */}
            <Card className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                        <FileText className="w-4.5 h-4.5 text-[#609A26]" /> Daftar Laporan
                    </h3>
                </div>
                <div className="divide-y divide-gray-100">
                    {REPORTS.map((report) => (
                        <div key={report.id} className="px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                            <div className="flex items-center gap-3 flex-1">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                                    report.type === "Tahunan" ? "bg-amber-50" : "bg-blue-50"
                                }`}>
                                    <FileText className={`w-4.5 h-4.5 ${report.type === "Tahunan" ? "text-amber-600" : "text-blue-600"}`} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-medium text-gray-800 truncate">{report.title}</p>
                                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                                            report.type === "Tahunan" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"
                                        }`}>{report.type}</span>
                                    </div>
                                    <p className="text-[11px] text-gray-400 mt-0.5">{report.period} · {report.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-bold text-emerald-600">{report.returnPct}</p>
                                    <p className="text-[11px] text-gray-400">{report.totalReturn}</p>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs gap-1 cursor-pointer border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 opacity-0 group-hover:opacity-100 transition-opacity"
                                    onClick={() => toast.success(`Laporan ${report.title} sedang diunduh...`)}
                                >
                                    <Download className="w-3 h-3" /> Unduh
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </section>
    )
}

export default LaporanContent
