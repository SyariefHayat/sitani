"use client"

import { Warehouse, Package, ArrowUpRight, ArrowDownRight, MapPin, Search } from "lucide-react"
import { useState } from "react"

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"

const warehouseData = [
    {
        id: 1,
        nama: "Gudang Utama Surabaya",
        lokasi: "Surabaya, Jawa Timur",
        kapasitas: 500,
        terisi: 385,
        stok: [
            { komoditas: "Beras Premium", jumlah: 120, satuan: "Ton", trend: "up", persentase: 8 },
            { komoditas: "Jagung Manis", jumlah: 85, satuan: "Ton", trend: "down", persentase: 3 },
            { komoditas: "Kedelai", jumlah: 60, satuan: "Ton", trend: "up", persentase: 12 },
            { komoditas: "Cabai Merah", jumlah: 45, satuan: "Ton", trend: "down", persentase: 5 },
            { komoditas: "Bawang Merah", jumlah: 75, satuan: "Ton", trend: "up", persentase: 2 },
        ],
    },
    {
        id: 2,
        nama: "Gudang Jakarta Barat",
        lokasi: "Jakarta Barat, DKI Jakarta",
        kapasitas: 400,
        terisi: 310,
        stok: [
            { komoditas: "Beras Premium", jumlah: 95, satuan: "Ton", trend: "up", persentase: 5 },
            { komoditas: "Jagung Manis", jumlah: 70, satuan: "Ton", trend: "up", persentase: 7 },
            { komoditas: "Kedelai", jumlah: 50, satuan: "Ton", trend: "down", persentase: 2 },
            { komoditas: "Bawang Putih", jumlah: 55, satuan: "Ton", trend: "up", persentase: 10 },
            { komoditas: "Kentang", jumlah: 40, satuan: "Ton", trend: "down", persentase: 4 },
        ],
    },
    {
        id: 3,
        nama: "Gudang Bandung",
        lokasi: "Bandung, Jawa Barat",
        kapasitas: 350,
        terisi: 280,
        stok: [
            { komoditas: "Beras Organik", jumlah: 80, satuan: "Ton", trend: "up", persentase: 15 },
            { komoditas: "Cabai Rawit", jumlah: 55, satuan: "Ton", trend: "down", persentase: 8 },
            { komoditas: "Tomat", jumlah: 45, satuan: "Ton", trend: "up", persentase: 3 },
            { komoditas: "Wortel", jumlah: 60, satuan: "Ton", trend: "up", persentase: 6 },
            { komoditas: "Buncis", jumlah: 40, satuan: "Ton", trend: "down", persentase: 1 },
        ],
    },
]

function CapacityBar({ kapasitas, terisi }: { kapasitas: number; terisi: number }) {
    const persen = Math.round((terisi / kapasitas) * 100)
    const barColor =
        persen >= 90 ? "bg-red-500" : persen >= 70 ? "bg-amber-500" : "bg-[#609A26]"

    return (
        <div className="w-full">
            <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-muted-foreground">Kapasitas Terisi</span>
                <span className="font-semibold text-foreground">{persen}%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full transition-all ${barColor}`}
                    style={{ width: `${persen}%` }}
                />
            </div>
            <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-1">
                <span>{terisi} Ton terisi</span>
                <span>{kapasitas} Ton total</span>
            </div>
        </div>
    )
}

const WarehouseStockSection = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredWarehouses = warehouseData.filter((wh) =>
        wh.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        wh.lokasi.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 py-8 sm:py-12">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#609A26]/10 rounded-xl">
                        <Warehouse className="h-6 w-6 text-[#609A26]" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Gudang & Stok</h2>
                        <p className="text-sm text-muted-foreground">Monitoring kapasitas dan stok gudang distribusi</p>
                    </div>
                </div>
                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Cari gudang..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26] transition-all"
                    />
                </div>
            </div>

            {/* Warehouse Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredWarehouses.map((warehouse) => (
                    <Card key={warehouse.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-base font-semibold text-foreground">{warehouse.nama}</h3>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                                        <span className="text-xs text-muted-foreground">{warehouse.lokasi}</span>
                                    </div>
                                </div>
                                <div className="p-1.5 bg-[#609A26]/10 rounded-lg">
                                    <Package className="h-4 w-4 text-[#609A26]" />
                                </div>
                            </div>
                            <div className="mt-3">
                                <CapacityBar kapasitas={warehouse.kapasitas} terisi={warehouse.terisi} />
                            </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <div className="border-t border-border/60 pt-3">
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2.5">
                                    Detail Stok
                                </p>
                                <div className="space-y-2">
                                    {warehouse.stok.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-muted/50 transition-colors"
                                        >
                                            <span className="text-sm text-foreground">{item.komoditas}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-semibold text-foreground">
                                                    {item.jumlah} <span className="text-xs font-normal text-muted-foreground">{item.satuan}</span>
                                                </span>
                                                <div className={`flex items-center gap-0.5 text-[11px] font-medium ${item.trend === "up" ? "text-green-600" : "text-red-500"}`}>
                                                    {item.trend === "up" ? (
                                                        <ArrowUpRight className="h-3 w-3" />
                                                    ) : (
                                                        <ArrowDownRight className="h-3 w-3" />
                                                    )}
                                                    {item.persentase}%
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default WarehouseStockSection
