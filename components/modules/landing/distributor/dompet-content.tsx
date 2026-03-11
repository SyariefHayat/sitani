"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, ArrowDownLeft, Wallet, TrendingUp, Receipt } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const TRANSACTIONS = [
    { id: "TRX-001", type: "in" as const, title: "Pembayaran Order - Toko Segar Jaya", amount: "Rp 4.500.000", date: "10 Mar 2026", status: "Berhasil", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "TRX-002", type: "out" as const, title: "Pencairan Dana ke Rekening", amount: "Rp 8.000.000", date: "8 Mar 2026", status: "Berhasil", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "TRX-003", type: "in" as const, title: "Pembayaran Order - Supermarket Hijau", amount: "Rp 2.750.000", date: "7 Mar 2026", status: "Berhasil", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "TRX-004", type: "out" as const, title: "Pencairan Dana ke Rekening", amount: "Rp 5.000.000", date: "5 Mar 2026", status: "Diproses", statusColor: "bg-amber-100 text-amber-700" },
    { id: "TRX-005", type: "in" as const, title: "Pembayaran Order - Toko Berkah Tani", amount: "Rp 3.200.000", date: "3 Mar 2026", status: "Berhasil", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "TRX-006", type: "in" as const, title: "Pembayaran Order - Resto Alam", amount: "Rp 1.800.000", date: "1 Mar 2026", status: "Berhasil", statusColor: "bg-emerald-100 text-emerald-700" },
]

const DompetContent = () => {
    const [filter, setFilter] = useState<"all" | "in" | "out">("all")

    const filtered = filter === "all" ? TRANSACTIONS : TRANSACTIONS.filter(t => t.type === filter)

    const handleTarikDana = () => {
        toast.success("Permintaan pencairan dana berhasil diproses!", {
            description: "Dana akan masuk ke rekening dalam 1-3 hari kerja",
        })
    }

    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <Link href="/distributor" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dompet</h1>
                    <p className="text-gray-500 text-sm mt-0.5">Kelola pendapatan dan pencairan dana</p>
                </div>
            </div>

            {/* Balance Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <Card className="p-5 rounded-2xl bg-gradient-to-br from-[#206536] to-[#2d8a4e] text-white">
                    <div className="flex items-center gap-2 mb-3">
                        <Wallet className="w-5 h-5 text-white/70" />
                        <span className="text-sm text-white/70">Total Pendapatan</span>
                    </div>
                    <p className="text-2xl font-bold">Rp 28.750.000</p>
                </Card>
                <Card className="p-5 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm text-gray-500">Saldo Tersedia</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">Rp 18.200.000</p>
                </Card>
                <Card className="p-5 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                        <Receipt className="w-5 h-5 text-amber-500" />
                        <span className="text-sm text-gray-500">Menunggu Pencairan</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">Rp 10.550.000</p>
                </Card>
            </div>

            {/* Action */}
            <div className="flex justify-end mb-6">
                <Button onClick={handleTarikDana} className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer gap-1.5 text-sm">
                    <ArrowUpRight className="w-4 h-4" /> Tarik Dana
                </Button>
            </div>

            <Separator className="mb-6" />

            {/* Filter */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Riwayat Transaksi</h2>
                <div className="flex gap-1.5">
                    {([
                        { key: "all" as const, label: "Semua" },
                        { key: "in" as const, label: "Masuk" },
                        { key: "out" as const, label: "Keluar" },
                    ]).map(f => (
                        <button
                            key={f.key}
                            onClick={() => setFilter(f.key)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${filter === f.key ? "bg-[#206536] text-white" : "text-gray-500 hover:bg-gray-100"}`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Transaction List */}
            <div className="space-y-3">
                {filtered.map(trx => (
                    <Card key={trx.id} className="p-4 rounded-xl border border-gray-200 hover:shadow-sm transition-all">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg shrink-0 ${trx.type === "in" ? "bg-emerald-100" : "bg-red-100"}`}>
                                {trx.type === "in" ? (
                                    <ArrowDownLeft className="w-4 h-4 text-emerald-600" />
                                ) : (
                                    <ArrowUpRight className="w-4 h-4 text-red-600" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-800 truncate">{trx.title}</p>
                                <p className="text-xs text-gray-400 mt-0.5">{trx.date} · {trx.id}</p>
                            </div>
                            <div className="text-right shrink-0">
                                <p className={`text-sm font-bold ${trx.type === "in" ? "text-emerald-600" : "text-red-600"}`}>
                                    {trx.type === "in" ? "+" : "-"}{trx.amount}
                                </p>
                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${trx.statusColor}`}>
                                    {trx.status}
                                </span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default DompetContent
