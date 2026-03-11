"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowDownLeft, ArrowUpRight, TrendingUp, Wallet, Search, Calendar, Filter, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const TABS = [
    { label: "Semua", value: "semua" },
    { label: "Top Up", value: "topup" },
    { label: "Investasi", value: "invest" },
    { label: "Bagi Hasil", value: "return" },
    { label: "Penarikan", value: "withdraw" },
]

const TRANSACTIONS = [
    { id: "TRX-001", type: "topup", label: "Top Up Saldo", amount: "+ Rp 5.000.000", date: "10 Mar 2025", time: "14:23", method: "Transfer BCA", status: "Berhasil", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "TRX-002", type: "invest", label: "Investasi - Padi Organik Cianjur", amount: "- Rp 3.000.000", date: "9 Mar 2025", time: "09:15", method: "Saldo SiTani", status: "Berhasil", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "TRX-003", type: "return", label: "Bagi Hasil - Udang Vaname Q4", amount: "+ Rp 450.000", date: "7 Mar 2025", time: "00:00", method: "Otomatis", status: "Berhasil", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "TRX-004", type: "topup", label: "Top Up Saldo", amount: "+ Rp 10.000.000", date: "5 Mar 2025", time: "11:42", method: "Transfer Mandiri", status: "Berhasil", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "TRX-005", type: "invest", label: "Investasi - Kopi Arabika Toraja", amount: "- Rp 5.000.000", date: "3 Mar 2025", time: "16:08", method: "Saldo SiTani", status: "Berhasil", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "TRX-006", type: "withdraw", label: "Tarik Dana ke BCA", amount: "- Rp 2.000.000", date: "1 Mar 2025", time: "10:30", method: "Transfer BCA ****7890", status: "Berhasil", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "TRX-007", type: "return", label: "Bagi Hasil - Sayur Organik Q4", amount: "+ Rp 320.000", date: "28 Feb 2025", time: "00:00", method: "Otomatis", status: "Berhasil", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "TRX-008", type: "invest", label: "Investasi - Pertanian Sayur Organik", amount: "- Rp 2.000.000", date: "25 Feb 2025", time: "13:55", method: "Saldo SiTani", status: "Berhasil", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "TRX-009", type: "topup", label: "Top Up Saldo", amount: "+ Rp 3.000.000", date: "20 Feb 2025", time: "08:20", method: "Transfer BNI", status: "Berhasil", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "TRX-010", type: "invest", label: "Investasi - Budidaya Udang Vaname", amount: "- Rp 2.500.000", date: "15 Feb 2025", time: "15:05", method: "Saldo SiTani", status: "Berhasil", statusColor: "bg-emerald-100 text-emerald-700" },
]

const RiwayatContent = () => {
    const [activeTab, setActiveTab] = useState("semua")
    const [searchQuery, setSearchQuery] = useState("")

    const filtered = TRANSACTIONS.filter(trx => {
        const matchTab = activeTab === "semua" || trx.type === activeTab
        const matchSearch = trx.label.toLowerCase().includes(searchQuery.toLowerCase())
        return matchTab && matchSearch
    })

    const totalIn = TRANSACTIONS.filter(t => t.type === "topup" || t.type === "return").length
    const totalOut = TRANSACTIONS.filter(t => t.type === "invest" || t.type === "withdraw").length

    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <Link href="/investasi" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Riwayat Transaksi</h1>
                    <p className="text-gray-500 text-sm mt-0.5">Lacak seluruh aktivitas keuangan investasi Anda</p>
                </div>
                <Button variant="outline" size="sm" className="text-xs cursor-pointer gap-1.5 border-[#206536]/30 text-[#206536]">
                    <Download className="w-3.5 h-3.5" /> Export
                </Button>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <Card className="p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                    <p className="text-xs text-gray-400">Total Transaksi</p>
                    <p className="text-lg font-bold text-gray-800 mt-0.5">{TRANSACTIONS.length}</p>
                </Card>
                <Card className="p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                    <p className="text-xs text-gray-400">Dana Masuk</p>
                    <p className="text-lg font-bold text-emerald-600 mt-0.5">{totalIn}x</p>
                </Card>
                <Card className="p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                    <p className="text-xs text-gray-400">Dana Keluar</p>
                    <p className="text-lg font-bold text-red-500 mt-0.5">{totalOut}x</p>
                </Card>
                <Card className="p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                    <p className="text-xs text-gray-400">Bulan Ini</p>
                    <p className="text-lg font-bold text-[#206536] mt-0.5">6</p>
                </Card>
            </div>

            {/* Search */}
            <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Cari transaksi..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                />
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 sm:gap-1.5 mb-6 overflow-x-auto pb-1 scrollbar-hide">
                {TABS.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => setActiveTab(tab.value)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                            activeTab === tab.value
                                ? "bg-[#206536] text-white shadow-sm"
                                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Transaction List */}
            {filtered.length === 0 ? (
                <div className="text-center py-16">
                    <Wallet className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-gray-700 mb-1">Tidak ada transaksi</h3>
                    <p className="text-sm text-gray-400">Belum ada transaksi dengan filter ini</p>
                </div>
            ) : (
                <Card className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="divide-y divide-gray-100">
                        {filtered.map((trx) => (
                            <div key={trx.id} className="px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                        trx.type === "topup" ? "bg-emerald-50" :
                                        trx.type === "return" ? "bg-amber-50" :
                                        trx.type === "invest" ? "bg-blue-50" : "bg-red-50"
                                    }`}>
                                        {trx.type === "topup" && <ArrowDownLeft className="w-4.5 h-4.5 text-emerald-600" />}
                                        {trx.type === "return" && <TrendingUp className="w-4.5 h-4.5 text-amber-600" />}
                                        {trx.type === "invest" && <Wallet className="w-4.5 h-4.5 text-blue-600" />}
                                        {trx.type === "withdraw" && <ArrowUpRight className="w-4.5 h-4.5 text-red-500" />}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">{trx.label}</p>
                                        <p className="text-[11px] text-gray-400">{trx.date} · {trx.time} · {trx.method}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className={`text-sm font-bold ${trx.amount.startsWith("+") ? "text-emerald-600" : "text-red-500"}`}>{trx.amount}</p>
                                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${trx.statusColor}`}>{trx.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            )}
        </section>
    )
}

export default RiwayatContent
