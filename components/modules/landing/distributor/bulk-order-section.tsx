"use client"

import { ShoppingCart, User, Calendar, ChevronRight, Filter } from "lucide-react"
import { useState } from "react"

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const bulkOrders = [
    {
        id: "BO-20260215001",
        pembeli: "PT Pangan Sejahtera",
        komoditas: "Beras Premium",
        jumlah: "25 Ton",
        totalHarga: "Rp 375.000.000",
        tanggal: "15 Feb 2026",
        status: "menunggu",
        prioritas: "tinggi",
    },
    {
        id: "BO-20260215002",
        pembeli: "CV Tani Makmur",
        komoditas: "Jagung Manis",
        jumlah: "15 Ton",
        totalHarga: "Rp 180.000.000",
        tanggal: "15 Feb 2026",
        status: "menunggu",
        prioritas: "sedang",
    },
    {
        id: "BO-20260214003",
        pembeli: "UD Sumber Rezeki",
        komoditas: "Kedelai",
        jumlah: "10 Ton",
        totalHarga: "Rp 140.000.000",
        tanggal: "14 Feb 2026",
        status: "diproses",
        prioritas: "tinggi",
    },
    {
        id: "BO-20260214004",
        pembeli: "PT Agro Nusantara",
        komoditas: "Cabai Merah",
        jumlah: "8 Ton",
        totalHarga: "Rp 200.000.000",
        tanggal: "14 Feb 2026",
        status: "diproses",
        prioritas: "sedang",
    },
    {
        id: "BO-20260213005",
        pembeli: "Koperasi Tani Jaya",
        komoditas: "Bawang Merah",
        jumlah: "12 Ton",
        totalHarga: "Rp 156.000.000",
        tanggal: "13 Feb 2026",
        status: "dikirim",
        prioritas: "rendah",
    },
    {
        id: "BO-20260213006",
        pembeli: "PT Food Indonesia",
        komoditas: "Beras Organik",
        jumlah: "20 Ton",
        totalHarga: "Rp 340.000.000",
        tanggal: "13 Feb 2026",
        status: "selesai",
        prioritas: "tinggi",
    },
]

const statusConfig: Record<string, { label: string; className: string }> = {
    menunggu: {
        label: "Menunggu",
        className: "bg-orange-100 text-orange-700",
    },
    diproses: {
        label: "Diproses",
        className: "bg-blue-100 text-blue-700",
    },
    dikirim: {
        label: "Dikirim",
        className: "bg-amber-100 text-amber-700",
    },
    selesai: {
        label: "Selesai",
        className: "bg-green-100 text-green-700",
    },
}

const prioritasConfig: Record<string, { label: string; className: string }> = {
    tinggi: {
        label: "Tinggi",
        className: "bg-red-50 text-red-600 border border-red-200",
    },
    sedang: {
        label: "Sedang",
        className: "bg-yellow-50 text-yellow-700 border border-yellow-200",
    },
    rendah: {
        label: "Rendah",
        className: "bg-gray-50 text-gray-600 border border-gray-200",
    },
}

type FilterStatus = "semua" | "menunggu" | "diproses" | "dikirim" | "selesai"

const filterTabs: { key: FilterStatus; label: string }[] = [
    { key: "semua", label: "Semua" },
    { key: "menunggu", label: "Menunggu" },
    { key: "diproses", label: "Diproses" },
    { key: "dikirim", label: "Dikirim" },
    { key: "selesai", label: "Selesai" },
]

const BulkOrderSection = () => {
    const [activeFilter, setActiveFilter] = useState<FilterStatus>("semua")

    const filteredOrders =
        activeFilter === "semua"
            ? bulkOrders
            : bulkOrders.filter((o) => o.status === activeFilter)

    const countByStatus = (status: string) =>
        bulkOrders.filter((o) => o.status === status).length

    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 py-8 sm:py-12">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#609A26]/10 rounded-xl">
                        <ShoppingCart className="h-6 w-6 text-[#609A26]" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Bulk Order Masuk</h2>
                        <p className="text-sm text-muted-foreground">
                            {bulkOrders.length} order &middot; {countByStatus("menunggu")} menunggu konfirmasi
                        </p>
                    </div>
                </div>
                <Button variant="outline" size="sm" className="gap-2 cursor-pointer">
                    <Filter className="h-4 w-4" />
                    Export
                </Button>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1 mb-6 w-fit">
                {filterTabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveFilter(tab.key)}
                        className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all cursor-pointer ${activeFilter === tab.key
                                ? "bg-white text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Order Table */}
            <Card>
                <CardHeader className="pb-0 hidden" />
                <CardContent className="p-0">
                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-border/60">
                                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">ID Order</th>
                                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Pembeli</th>
                                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Komoditas</th>
                                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Jumlah</th>
                                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Total</th>
                                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Prioritas</th>
                                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Status</th>
                                    <th className="px-5 py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.map((order) => (
                                    <tr
                                        key={order.id}
                                        className="border-b border-border/40 last:border-0 hover:bg-muted/30 transition-colors"
                                    >
                                        <td className="px-5 py-3.5">
                                            <span className="text-sm font-mono font-medium text-foreground">{order.id}</span>
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-7 h-7 rounded-full bg-[#609A26]/10 flex items-center justify-center shrink-0">
                                                    <User className="h-3.5 w-3.5 text-[#609A26]" />
                                                </div>
                                                <span className="text-sm text-foreground">{order.pembeli}</span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-3.5 text-sm text-foreground">{order.komoditas}</td>
                                        <td className="px-5 py-3.5 text-sm font-semibold text-foreground">{order.jumlah}</td>
                                        <td className="px-5 py-3.5 text-sm font-semibold text-foreground">{order.totalHarga}</td>
                                        <td className="px-5 py-3.5">
                                            <span className={`px-2 py-0.5 text-[11px] font-medium rounded-full ${prioritasConfig[order.prioritas].className}`}>
                                                {prioritasConfig[order.prioritas].label}
                                            </span>
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${statusConfig[order.status].className}`}>
                                                {statusConfig[order.status].label}
                                            </span>
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <button className="p-1.5 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-3 p-4">
                        {filteredOrders.map((order) => (
                            <div
                                key={order.id}
                                className="p-4 rounded-xl border border-border/60 space-y-3"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-xs font-mono text-muted-foreground">{order.id}</p>
                                        <p className="text-sm font-semibold text-foreground mt-0.5">{order.pembeli}</p>
                                    </div>
                                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${statusConfig[order.status].className}`}>
                                        {statusConfig[order.status].label}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div>
                                        <p className="text-xs text-muted-foreground">Komoditas</p>
                                        <p className="font-medium text-foreground">{order.komoditas}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Jumlah</p>
                                        <p className="font-semibold text-foreground">{order.jumlah}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Total Harga</p>
                                        <p className="font-semibold text-foreground">{order.totalHarga}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Prioritas</p>
                                        <span className={`inline-block mt-0.5 px-2 py-0.5 text-[11px] font-medium rounded-full ${prioritasConfig[order.prioritas].className}`}>
                                            {prioritasConfig[order.prioritas].label}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-2 border-t border-border/40">
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <Calendar className="h-3 w-3" />
                                        <span>{order.tanggal}</span>
                                    </div>
                                    <button className="text-xs text-[#609A26] font-medium hover:underline cursor-pointer flex items-center gap-0.5">
                                        Detail <ChevronRight className="h-3 w-3" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export default BulkOrderSection
