"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Wallet, ArrowUpRight, ArrowDownLeft, TrendingUp, History, X, CreditCard, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const TRANSACTIONS = [
    { id: "TRX-001", type: "topup", label: "Top Up Saldo", amount: "+ Rp 5.000.000", date: "10 Mar 2025", method: "Transfer BCA", color: "text-emerald-600" },
    { id: "TRX-002", type: "invest", label: "Investasi - Padi Organik", amount: "- Rp 3.000.000", date: "9 Mar 2025", method: "Saldo SiTani", color: "text-red-500" },
    { id: "TRX-003", type: "return", label: "Bagi Hasil - Udang Vaname", amount: "+ Rp 450.000", date: "7 Mar 2025", method: "Otomatis", color: "text-emerald-600" },
    { id: "TRX-004", type: "topup", label: "Top Up Saldo", amount: "+ Rp 10.000.000", date: "5 Mar 2025", method: "Transfer Mandiri", color: "text-emerald-600" },
    { id: "TRX-005", type: "invest", label: "Investasi - Kopi Toraja", amount: "- Rp 5.000.000", date: "3 Mar 2025", method: "Saldo SiTani", color: "text-red-500" },
    { id: "TRX-006", type: "withdraw", label: "Tarik Dana", amount: "- Rp 2.000.000", date: "1 Mar 2025", method: "Transfer BCA", color: "text-red-500" },
    { id: "TRX-007", type: "return", label: "Bagi Hasil - Sayur Organik", amount: "+ Rp 320.000", date: "28 Feb 2025", method: "Otomatis", color: "text-emerald-600" },
]

const DompetContent = () => {
    const [showTopUp, setShowTopUp] = useState(false)
    const [showWithdraw, setShowWithdraw] = useState(false)
    const [topUpAmount, setTopUpAmount] = useState("")
    const [withdrawAmount, setWithdrawAmount] = useState("")

    const handleTopUp = () => {
        if (!topUpAmount) { toast.error("Masukkan jumlah top up"); return }
        toast.success(`Top up Rp ${parseInt(topUpAmount).toLocaleString("id-ID")} berhasil diproses`)
        setTopUpAmount("")
        setShowTopUp(false)
    }

    const handleWithdraw = () => {
        if (!withdrawAmount) { toast.error("Masukkan jumlah penarikan"); return }
        toast.success(`Penarikan Rp ${parseInt(withdrawAmount).toLocaleString("id-ID")} berhasil diproses`)
        setWithdrawAmount("")
        setShowWithdraw(false)
    }

    return (
        <>
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <Link href="/investasi" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </Link>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dompet Saya</h1>
                        <p className="text-gray-500 text-sm mt-0.5">Kelola saldo dan transaksi investasi</p>
                    </div>
                </div>

                {/* Balance Card */}
                <Card className="rounded-2xl overflow-hidden mb-6 shadow-md">
                    <div className="bg-gradient-to-r from-[#206536] to-[#2d8a4e] p-6 sm:p-8">
                        <p className="text-white/70 text-sm">Total Saldo</p>
                        <p className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Rp 12.500.000</p>
                        <div className="flex items-center gap-4 mt-4">
                            <div>
                                <p className="text-white/60 text-xs">Tersedia</p>
                                <p className="text-white font-semibold text-sm">Rp 8.200.000</p>
                            </div>
                            <div className="w-px h-8 bg-white/20" />
                            <div>
                                <p className="text-white/60 text-xs">Mengendap</p>
                                <p className="text-amber-300 font-semibold text-sm">Rp 4.300.000</p>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <Button
                                className="bg-white text-[#206536] hover:bg-white/90 font-semibold cursor-pointer gap-1.5"
                                onClick={() => setShowTopUp(true)}
                            >
                                <ArrowDownLeft className="w-4 h-4" /> Top Up
                            </Button>
                            <Button
                                variant="outline"
                                className="border-white/30 text-white hover:bg-white/10 font-semibold cursor-pointer gap-1.5"
                                onClick={() => setShowWithdraw(true)}
                            >
                                <ArrowUpRight className="w-4 h-4" /> Tarik Dana
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                    <Card className="p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                        <TrendingUp className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
                        <p className="text-xs text-gray-400">Bulan Ini</p>
                        <p className="text-sm font-bold text-emerald-600 mt-0.5">+ Rp 770.000</p>
                    </Card>
                    <Card className="p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                        <ArrowDownLeft className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                        <p className="text-xs text-gray-400">Total Top Up</p>
                        <p className="text-sm font-bold text-blue-600 mt-0.5">Rp 15.000.000</p>
                    </Card>
                    <Card className="p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                        <ArrowUpRight className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                        <p className="text-xs text-gray-400">Total Ditarik</p>
                        <p className="text-sm font-bold text-amber-600 mt-0.5">Rp 2.000.000</p>
                    </Card>
                </div>

                {/* Transaction History */}
                <Card className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <History className="w-5 h-5 text-[#609A26]" />
                            <h3 className="text-base font-bold text-gray-900">Riwayat Transaksi</h3>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {TRANSACTIONS.map((trx) => (
                            <div key={trx.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                                        trx.type === "topup" ? "bg-emerald-50" :
                                        trx.type === "return" ? "bg-amber-50" :
                                        trx.type === "invest" ? "bg-blue-50" : "bg-red-50"
                                    }`}>
                                        {trx.type === "topup" && <ArrowDownLeft className="w-4 h-4 text-emerald-600" />}
                                        {trx.type === "return" && <TrendingUp className="w-4 h-4 text-amber-600" />}
                                        {trx.type === "invest" && <Wallet className="w-4 h-4 text-blue-600" />}
                                        {trx.type === "withdraw" && <ArrowUpRight className="w-4 h-4 text-red-500" />}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">{trx.label}</p>
                                        <p className="text-[11px] text-gray-400">{trx.date} · {trx.method}</p>
                                    </div>
                                </div>
                                <p className={`text-sm font-bold ${trx.color}`}>{trx.amount}</p>
                            </div>
                        ))}
                    </div>
                </Card>
            </section>

            {/* Top Up Modal */}
            {showTopUp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowTopUp(false)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-6 animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Top Up Saldo</h2>
                                <p className="text-sm text-[#609A26]">Tambah saldo untuk investasi</p>
                            </div>
                            <button onClick={() => setShowTopUp(false)} className="p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer"><X className="w-5 h-5 text-gray-400" /></button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">Jumlah (Rp)</label>
                                <input
                                    type="number"
                                    value={topUpAmount}
                                    onChange={(e) => setTopUpAmount(e.target.value)}
                                    placeholder="Contoh: 5000000"
                                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                                />
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {["1000000", "2000000", "5000000", "10000000"].map((v) => (
                                    <button
                                        key={v}
                                        onClick={() => setTopUpAmount(v)}
                                        className="px-3 py-1.5 text-xs font-medium border border-gray-200 rounded-lg hover:border-[#609A26] hover:text-[#609A26] cursor-pointer transition-colors"
                                    >
                                        Rp {parseInt(v).toLocaleString("id-ID")}
                                    </button>
                                ))}
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">Metode Pembayaran</label>
                                <div className="space-y-2">
                                    {[
                                        { icon: Building2, label: "Transfer Bank", desc: "BCA, Mandiri, BRI, BNI" },
                                        { icon: CreditCard, label: "E-Wallet", desc: "GoPay, OVO, DANA" },
                                    ].map((m) => (
                                        <div key={m.label} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-[#609A26]/40 cursor-pointer transition-colors">
                                            <m.icon className="w-5 h-5 text-[#609A26]" />
                                            <div>
                                                <p className="text-sm font-medium text-gray-800">{m.label}</p>
                                                <p className="text-[11px] text-gray-400">{m.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-6">
                            <Button variant="outline" onClick={() => setShowTopUp(false)} className="cursor-pointer">Batal</Button>
                            <Button onClick={handleTopUp} className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer gap-1.5">
                                <ArrowDownLeft className="w-4 h-4" /> Top Up Sekarang
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Withdraw Modal */}
            {showWithdraw && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowWithdraw(false)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-6 animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Tarik Dana</h2>
                                <p className="text-sm text-[#609A26]">Tarik saldo ke rekening bank</p>
                            </div>
                            <button onClick={() => setShowWithdraw(false)} className="p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer"><X className="w-5 h-5 text-gray-400" /></button>
                        </div>
                        <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 mb-4">
                            <p className="text-xs text-amber-700">Saldo tersedia: <span className="font-bold">Rp 8.200.000</span></p>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">Jumlah Penarikan (Rp)</label>
                                <input
                                    type="number"
                                    value={withdrawAmount}
                                    onChange={(e) => setWithdrawAmount(e.target.value)}
                                    placeholder="Contoh: 2000000"
                                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">Rekening Tujuan</label>
                                <div className="p-3 rounded-xl border border-gray-200 bg-gray-50">
                                    <p className="text-sm font-medium text-gray-800">BCA - 1234567890</p>
                                    <p className="text-xs text-gray-400">a.n. Andi Pratama</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-6">
                            <Button variant="outline" onClick={() => setShowWithdraw(false)} className="cursor-pointer">Batal</Button>
                            <Button onClick={handleWithdraw} className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer gap-1.5">
                                <ArrowUpRight className="w-4 h-4" /> Tarik Dana
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DompetContent
