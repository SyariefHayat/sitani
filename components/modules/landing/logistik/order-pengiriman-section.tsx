"use client"

import { Package, User, Calendar, ChevronRight, Filter, MapPin, Truck } from "lucide-react"
import { useState } from "react"

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const orderData = [
    {
        id: "LOG-20260216001",
        pengirim: "PT Pangan Sejahtera",
        asal: "Surabaya",
        tujuan: "Jakarta",
        komoditas: "Beras Premium",
        berat: "12 Ton",
        armada: "TRK-001",
        tanggal: "16 Feb 2026",
        status: "menunggu_pickup",
        prioritas: "tinggi",
    },
    {
        id: "LOG-20260216002",
        pengirim: "CV Tani Makmur",
        asal: "Bandung",
        tujuan: "Semarang",
        komoditas: "Jagung Manis",
        berat: "8 Ton",
        armada: "TRK-002",
        tanggal: "16 Feb 2026",
        status: "dalam_pengiriman",
        prioritas: "sedang",
    },
    {
        id: "LOG-20260215003",
        pengirim: "UD Sumber Rezeki",
        asal: "Yogyakarta",
        tujuan: "Surabaya",
        komoditas: "Kedelai",
        berat: "5 Ton",
        armada: "TRK-003",
        tanggal: "15 Feb 2026",
        status: "dalam_pengiriman",
        prioritas: "tinggi",
    },
    {
        id: "LOG-20260215004",
        pengirim: "PT Agro Nusantara",
        asal: "Malang",
        tujuan: "Denpasar",
        komoditas: "Cabai Merah",
        berat: "3 Ton",
        armada: "TRK-005",
        tanggal: "15 Feb 2026",
        status: "selesai",
        prioritas: "rendah",
    },
    {
        id: "LOG-20260214005",
        pengirim: "Koperasi Tani Jaya",
        asal: "Solo",
        tujuan: "Bandung",
        komoditas: "Bawang Merah",
        berat: "6 Ton",
        armada: "TRK-006",
        tanggal: "14 Feb 2026",
        status: "selesai",
        prioritas: "sedang",
    },
    {
        id: "LOG-20260217006",
        pengirim: "PT Food Indonesia",
        asal: "Jakarta",
        tujuan: "Medan",
        komoditas: "Beras Organik",
        berat: "15 Ton",
        armada: "-",
        tanggal: "17 Feb 2026",
        status: "menunggu_pickup",
        prioritas: "tinggi",
    },
]

const statusConfig: Record<string, { label: string; className: string }> = {
    menunggu_pickup: {
        label: "Menunggu Pickup",
        className: "bg-orange-100 text-orange-700",
    },
    dalam_pengiriman: {
        label: "Dalam Pengiriman",
        className: "bg-blue-100 text-blue-700",
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

type FilterStatus = "semua" | "menunggu_pickup" | "dalam_pengiriman" | "selesai"

const filterTabs: { key: FilterStatus; label: string }[] = [
    { key: "semua", label: "Semua" },
    { key: "menunggu_pickup", label: "Menunggu Pickup" },
    { key: "dalam_pengiriman", label: "Dalam Pengiriman" },
    { key: "selesai", label: "Selesai" },
]

const OrderPengirimanSection = () => {
    const [activeFilter, setActiveFilter] = useState<FilterStatus>("semua")

    const filteredOrders =
        activeFilter === "semua"
            ? orderData
            : orderData.filter((o) => o.status === activeFilter)

    const countByStatus = (status: string) =>
        orderData.filter((o) => o.status === status).length

    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 py-8 sm:py-12">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#609A26]/10 rounded-xl">
                        <Package className="h-6 w-6 text-[#609A26]" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Order Pengiriman</h2>
                        <p className="text-sm text-muted-foreground">
                            {orderData.length} order &middot; {countByStatus("menunggu_pickup")} menunggu pickup
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
                                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Pengirim</th>
                                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Rute</th>
                                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Komoditas</th>
                                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Berat</th>
                                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Armada</th>
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
                                                <span className="text-sm text-foreground">{order.pengirim}</span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <div className="flex items-center gap-1.5 text-sm text-foreground">
                                                <MapPin className="h-3 w-3 text-muted-foreground shrink-0" />
                                                <span>{order.asal} → {order.tujuan}</span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-3.5 text-sm text-foreground">{order.komoditas}</td>
                                        <td className="px-5 py-3.5 text-sm font-semibold text-foreground">{order.berat}</td>
                                        <td className="px-5 py-3.5">
                                            <div className="flex items-center gap-1.5 text-sm">
                                                <Truck className="h-3 w-3 text-muted-foreground" />
                                                <span className="font-mono text-foreground">{order.armada}</span>
                                            </div>
                                        </td>
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
                                        <p className="text-sm font-semibold text-foreground mt-0.5">{order.pengirim}</p>
                                    </div>
                                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${statusConfig[order.status].className}`}>
                                        {statusConfig[order.status].label}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <MapPin className="h-3 w-3" />
                                    <span>{order.asal} → {order.tujuan}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div>
                                        <p className="text-xs text-muted-foreground">Komoditas</p>
                                        <p className="font-medium text-foreground">{order.komoditas}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Berat</p>
                                        <p className="font-semibold text-foreground">{order.berat}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Armada</p>
                                        <p className="font-mono text-foreground">{order.armada}</p>
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

export default OrderPengirimanSection
