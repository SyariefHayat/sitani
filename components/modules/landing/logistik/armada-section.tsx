"use client"

import { Truck, MapPin, Fuel, Wrench, Search } from "lucide-react"
import { useState } from "react"

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"

const armadaData = [
    {
        id: "TRK-001",
        nama: "Truk Fuso #01",
        jenis: "Fuso Fighter",
        kapasitas: "8 Ton",
        supir: "Agus Santoso",
        lokasi: "Surabaya",
        bbm: 75,
        status: "aktif",
        kilometer: "12.450 km",
    },
    {
        id: "TRK-002",
        nama: "Truk CDE #02",
        jenis: "Mitsubishi CDE",
        kapasitas: "4 Ton",
        supir: "Rudi Hartono",
        lokasi: "Jakarta",
        bbm: 45,
        status: "dalam_perjalanan",
        kilometer: "28.320 km",
    },
    {
        id: "TRK-003",
        nama: "Truk Fuso #03",
        jenis: "Fuso Fighter",
        kapasitas: "8 Ton",
        supir: "Dedi Prasetyo",
        lokasi: "Bandung",
        bbm: 90,
        status: "aktif",
        kilometer: "8.150 km",
    },
    {
        id: "TRK-004",
        nama: "Truk Engkel #04",
        jenis: "Toyota Dyna",
        kapasitas: "2 Ton",
        supir: "-",
        lokasi: "Bengkel Surabaya",
        bbm: 20,
        status: "maintenance",
        kilometer: "45.800 km",
    },
    {
        id: "TRK-005",
        nama: "Truk CDD #05",
        jenis: "Hino Dutro",
        kapasitas: "6 Ton",
        supir: "Wahyu Pratama",
        lokasi: "Semarang",
        bbm: 60,
        status: "dalam_perjalanan",
        kilometer: "19.720 km",
    },
    {
        id: "TRK-006",
        nama: "Truk Fuso #06",
        jenis: "Fuso Fighter",
        kapasitas: "8 Ton",
        supir: "Hendra Wijaya",
        lokasi: "Yogyakarta",
        bbm: 55,
        status: "aktif",
        kilometer: "15.600 km",
    },
]

const statusConfig: Record<string, { label: string; className: string; dot: string }> = {
    aktif: {
        label: "Aktif",
        className: "bg-green-100 text-green-700",
        dot: "bg-green-500",
    },
    dalam_perjalanan: {
        label: "Dalam Perjalanan",
        className: "bg-blue-100 text-blue-700",
        dot: "bg-blue-500",
    },
    maintenance: {
        label: "Maintenance",
        className: "bg-red-100 text-red-700",
        dot: "bg-red-500",
    },
}

function FuelBar({ level }: { level: number }) {
    const barColor =
        level <= 25 ? "bg-red-500" : level <= 50 ? "bg-amber-500" : "bg-[#609A26]"

    return (
        <div className="w-full">
            <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-muted-foreground flex items-center gap-1">
                    <Fuel className="h-3 w-3" /> BBM
                </span>
                <span className="font-semibold text-foreground">{level}%</span>
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full transition-all ${barColor}`}
                    style={{ width: `${level}%` }}
                />
            </div>
        </div>
    )
}

const ArmadaSection = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredArmada = armadaData.filter((a) =>
        a.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.supir.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.lokasi.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const countByStatus = (status: string) =>
        armadaData.filter((a) => a.status === status).length

    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 py-8 sm:py-12">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#609A26]/10 rounded-xl">
                        <Truck className="h-6 w-6 text-[#609A26]" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Armada & Fleet</h2>
                        <p className="text-sm text-muted-foreground">
                            {armadaData.length} unit &middot; {countByStatus("aktif")} aktif &middot; {countByStatus("maintenance")} maintenance
                        </p>
                    </div>
                </div>
                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Cari armada..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26] transition-all"
                    />
                </div>
            </div>

            {/* Armada Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredArmada.map((armada) => (
                    <Card key={armada.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-base font-semibold text-foreground">{armada.nama}</h3>
                                        <span
                                            className={`px-2 py-0.5 text-[11px] font-medium rounded-full ${statusConfig[armada.status].className}`}
                                        >
                                            {statusConfig[armada.status].label}
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-0.5">{armada.jenis} &middot; {armada.kapasitas}</p>
                                </div>
                                <div className="p-1.5 bg-muted rounded-lg">
                                    <Truck className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-0 space-y-3">
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Supir</p>
                                    <p className="font-medium text-foreground mt-0.5">{armada.supir}</p>
                                </div>
                                <div>
                                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Kilometer</p>
                                    <p className="font-medium text-foreground mt-0.5">{armada.kilometer}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <MapPin className="h-3.5 w-3.5" />
                                <span>{armada.lokasi}</span>
                            </div>

                            <FuelBar level={armada.bbm} />

                            {armada.status === "maintenance" && (
                                <div className="flex items-center gap-1.5 text-xs text-red-600 bg-red-50 px-2.5 py-1.5 rounded-lg">
                                    <Wrench className="h-3.5 w-3.5" />
                                    <span className="font-medium">Sedang dalam perawatan</span>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default ArmadaSection
