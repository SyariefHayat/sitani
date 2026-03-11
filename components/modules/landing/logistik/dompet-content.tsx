"use client"

import { Wallet, ArrowUpRight, ArrowDownLeft, TrendingUp, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const TRANSACTIONS = [
    { type: "in", title: "Pembayaran Order #ORD-0847", amount: "+ Rp 2.450.000", date: "11 Mar 2026", status: "Selesai" },
    { type: "out", title: "Penarikan Dana", amount: "- Rp 5.000.000", date: "10 Mar 2026", status: "Selesai" },
    { type: "in", title: "Pembayaran Order #ORD-0839", amount: "+ Rp 1.870.000", date: "9 Mar 2026", status: "Selesai" },
    { type: "in", title: "Pembayaran Order #ORD-0835", amount: "+ Rp 3.120.000", date: "8 Mar 2026", status: "Selesai" },
    { type: "pending", title: "Pembayaran Order #ORD-0851", amount: "+ Rp 1.650.000", date: "11 Mar 2026", status: "Menunggu" },
    { type: "in", title: "Bonus Pengiriman On-Time", amount: "+ Rp 500.000", date: "7 Mar 2026", status: "Selesai" },
    { type: "out", title: "Penarikan Dana", amount: "- Rp 3.000.000", date: "5 Mar 2026", status: "Selesai" },
]

const DompetContent = () => {
    return (
        <div className="px-4 sm:px-10 lg:px-16 py-8 sm:py-12 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dompet</h1>
                    <p className="text-gray-500 mt-1">Kelola keuangan dan riwayat transaksi Anda</p>
                </div>

                {/* Balance Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-[#206536] to-[#609A26] rounded-2xl p-6 text-white">
                        <div className="flex items-center gap-2 mb-3">
                            <Wallet className="w-5 h-5 text-white/70" />
                            <span className="text-sm text-white/70">Saldo Tersedia</span>
                        </div>
                        <p className="text-2xl font-bold">Rp 9.850.000</p>
                        <Button size="sm" className="mt-4 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold cursor-pointer">
                            <ArrowUpRight className="w-3.5 h-3.5 mr-1" />
                            Tarik Dana
                        </Button>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center gap-2 mb-3">
                            <TrendingUp className="w-5 h-5 text-[#206536]" />
                            <span className="text-sm text-gray-500">Total Penghasilan</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">Rp 15.320.000</p>
                        <p className="text-xs text-green-600 font-medium mt-2">↑ 12.5% dari bulan lalu</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center gap-2 mb-3">
                            <CreditCard className="w-5 h-5 text-amber-600" />
                            <span className="text-sm text-gray-500">Menunggu Pencairan</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">Rp 5.470.000</p>
                        <p className="text-xs text-amber-600 font-medium mt-2">3 transaksi pending</p>
                    </div>
                </div>

                {/* Transaction History */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">Riwayat Transaksi</h2>
                    </div>
                    <Separator />
                    <div className="divide-y divide-gray-100">
                        {TRANSACTIONS.map((tx, index) => (
                            <div key={index} className="flex items-center justify-between p-5 sm:px-6 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        "w-10 h-10 rounded-xl flex items-center justify-center",
                                        tx.type === "in" ? "bg-green-50 text-green-600" :
                                        tx.type === "out" ? "bg-red-50 text-red-600" :
                                        "bg-amber-50 text-amber-600"
                                    )}>
                                        {tx.type === "in" ? <ArrowDownLeft className="w-5 h-5" /> :
                                         tx.type === "out" ? <ArrowUpRight className="w-5 h-5" /> :
                                         <CreditCard className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{tx.title}</p>
                                        <p className="text-xs text-gray-400 mt-0.5">{tx.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className={cn(
                                        "text-sm font-semibold",
                                        tx.type === "in" ? "text-green-600" :
                                        tx.type === "out" ? "text-red-600" :
                                        "text-amber-600"
                                    )}>{tx.amount}</p>
                                    <span className={cn(
                                        "text-xs font-medium",
                                        tx.status === "Selesai" ? "text-gray-400" : "text-amber-600"
                                    )}>{tx.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DompetContent
