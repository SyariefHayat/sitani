"use client"

import { useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Clock, MapPin, Calendar, Package } from "lucide-react"

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

const chartData: Record<string, { month: string; pengiriman: number; pickup: number }[]> = {
    "1bulan": [
        { month: "Minggu 1", pengiriman: 85, pickup: 72 },
        { month: "Minggu 2", pengiriman: 92, pickup: 80 },
        { month: "Minggu 3", pengiriman: 78, pickup: 68 },
        { month: "Minggu 4", pengiriman: 95, pickup: 88 },
    ],
    "3bulan": [
        { month: "Desember", pengiriman: 310, pickup: 280 },
        { month: "Januari", pengiriman: 350, pickup: 310 },
        { month: "Februari", pengiriman: 380, pickup: 340 },
    ],
    "6bulan": [
        { month: "September", pengiriman: 260, pickup: 230 },
        { month: "Oktober", pengiriman: 290, pickup: 260 },
        { month: "November", pengiriman: 300, pickup: 275 },
        { month: "Desember", pengiriman: 310, pickup: 280 },
        { month: "Januari", pengiriman: 350, pickup: 310 },
        { month: "Februari", pengiriman: 380, pickup: 340 },
    ],
    "1tahun": [
        { month: "Mar", pengiriman: 220, pickup: 195 },
        { month: "Apr", pengiriman: 235, pickup: 210 },
        { month: "Mei", pengiriman: 240, pickup: 220 },
        { month: "Jun", pengiriman: 230, pickup: 215 },
        { month: "Jul", pengiriman: 255, pickup: 230 },
        { month: "Agu", pengiriman: 270, pickup: 245 },
        { month: "Sep", pengiriman: 260, pickup: 230 },
        { month: "Okt", pengiriman: 290, pickup: 260 },
        { month: "Nov", pengiriman: 300, pickup: 275 },
        { month: "Des", pengiriman: 310, pickup: 280 },
        { month: "Jan", pengiriman: 350, pickup: 310 },
        { month: "Feb", pengiriman: 380, pickup: 340 },
    ],
}

const chartConfig = {
    pengiriman: {
        label: "Pengiriman",
        color: "#609A26",
    },
    pickup: {
        label: "Pickup",
        color: "#3B82F6",
    },
} satisfies ChartConfig

const periods = [
    { key: "1bulan", label: "1 Bulan" },
    { key: "3bulan", label: "3 Bulan" },
    { key: "6bulan", label: "6 Bulan" },
    { key: "1tahun", label: "1 Tahun" },
]

const pickupSchedule = [
    {
        id: 1,
        tanggal: "16 Feb 2026",
        waktu: "08:00",
        lokasi: "Gudang Surabaya",
        komoditas: "Beras Premium",
        jumlah: "12 Ton",
        status: "terjadwal",
    },
    {
        id: 2,
        tanggal: "16 Feb 2026",
        waktu: "10:30",
        lokasi: "Farm Malang",
        komoditas: "Jagung Manis",
        jumlah: "8 Ton",
        status: "terjadwal",
    },
    {
        id: 3,
        tanggal: "16 Feb 2026",
        waktu: "13:00",
        lokasi: "Gudang Bandung",
        komoditas: "Kedelai",
        jumlah: "5 Ton",
        status: "dalam_perjalanan",
    },
    {
        id: 4,
        tanggal: "15 Feb 2026",
        waktu: "09:00",
        lokasi: "Farm Bogor",
        komoditas: "Cabai Merah",
        jumlah: "3 Ton",
        status: "selesai",
    },
    {
        id: 5,
        tanggal: "17 Feb 2026",
        waktu: "07:30",
        lokasi: "Gudang Jakarta",
        komoditas: "Bawang Merah",
        jumlah: "10 Ton",
        status: "terjadwal",
    },
]

const statusConfig: Record<string, { label: string; className: string }> = {
    terjadwal: {
        label: "Terjadwal",
        className: "bg-blue-100 text-blue-700",
    },
    dalam_perjalanan: {
        label: "Dalam Perjalanan",
        className: "bg-amber-100 text-amber-700",
    },
    selesai: {
        label: "Selesai",
        className: "bg-green-100 text-green-700",
    },
}

const BarChartSection = () => {
    const [activePeriod, setActivePeriod] = useState("6bulan")

    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 py-8 sm:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Bar Chart - Left Side */}
                <Card className="lg:col-span-3">
                    <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4">
                        <h3 className="text-lg font-semibold text-foreground">
                            Pengiriman vs Pickup
                        </h3>
                        <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
                            {periods.map((period) => (
                                <button
                                    key={period.key}
                                    onClick={() => setActivePeriod(period.key)}
                                    className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all cursor-pointer ${activePeriod === period.key
                                        ? "bg-white text-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {period.label}
                                </button>
                            ))}
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
                            <BarChart accessibilityLayer data={chartData[activePeriod]}>
                                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                />
                                <YAxis
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `${value}`}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent />}
                                />
                                <Bar dataKey="pengiriman" fill="var(--color-pengiriman)" radius={[6, 6, 0, 0]} barSize={24} />
                                <Bar dataKey="pickup" fill="var(--color-pickup)" radius={[6, 6, 0, 0]} barSize={24} />
                            </BarChart>
                        </ChartContainer>
                        <div className="flex items-center justify-center gap-6 mt-4">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-sm bg-[#609A26]" />
                                <span className="text-sm text-muted-foreground">Pengiriman</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-sm bg-[#3B82F6]" />
                                <span className="text-sm text-muted-foreground">Pickup</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Jadwal Pickup - Right Side */}
                <Card className="lg:col-span-2">
                    <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-[#3B82F6]/10 rounded-lg">
                                    <Clock className="h-5 w-5 text-[#3B82F6]" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground">Jadwal Pickup</h3>
                            </div>
                            <button className="text-sm text-[#609A26] hover:underline cursor-pointer font-medium">
                                Lihat Semua
                            </button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {pickupSchedule.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col gap-2 p-3 rounded-xl border border-border/60 hover:border-[#3B82F6]/30 hover:bg-[#3B82F6]/5 transition-all"
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-foreground truncate">
                                            {item.komoditas}
                                        </p>
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <MapPin className="h-3 w-3 text-muted-foreground shrink-0" />
                                            <span className="text-xs text-muted-foreground truncate">
                                                {item.lokasi}
                                            </span>
                                        </div>
                                    </div>
                                    <span
                                        className={`shrink-0 px-2 py-0.5 text-[11px] font-medium rounded-full ${statusConfig[item.status].className}`}
                                    >
                                        {statusConfig[item.status].label}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="h-3 w-3" />
                                            <span>{item.tanggal}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="h-3 w-3" />
                                            <span>{item.waktu}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Package className="h-3 w-3" />
                                        <span className="font-semibold text-foreground">{item.jumlah}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default BarChartSection
