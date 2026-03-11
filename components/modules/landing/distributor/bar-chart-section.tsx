"use client"

import { useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Truck, MapPin, Calendar } from "lucide-react"

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
import Link from "next/link"

const chartData: Record<string, { month: string; stok: number; permintaan: number }[]> = {
    "1bulan": [
        { month: "Minggu 1", stok: 420, permintaan: 380 },
        { month: "Minggu 2", stok: 390, permintaan: 410 },
        { month: "Minggu 3", stok: 450, permintaan: 395 },
        { month: "Minggu 4", stok: 410, permintaan: 430 },
    ],
    "3bulan": [
        { month: "Desember", stok: 350, permintaan: 320 },
        { month: "Januari", stok: 420, permintaan: 380 },
        { month: "Februari", stok: 450, permintaan: 410 },
    ],
    "6bulan": [
        { month: "September", stok: 310, permintaan: 290 },
        { month: "Oktober", stok: 340, permintaan: 310 },
        { month: "November", stok: 360, permintaan: 345 },
        { month: "Desember", stok: 350, permintaan: 320 },
        { month: "Januari", stok: 420, permintaan: 380 },
        { month: "Februari", stok: 450, permintaan: 410 },
    ],
    "1tahun": [
        { month: "Mar", stok: 280, permintaan: 260 },
        { month: "Apr", stok: 300, permintaan: 290 },
        { month: "Mei", stok: 310, permintaan: 305 },
        { month: "Jun", stok: 295, permintaan: 310 },
        { month: "Jul", stok: 320, permintaan: 300 },
        { month: "Agu", stok: 330, permintaan: 325 },
        { month: "Sep", stok: 310, permintaan: 290 },
        { month: "Okt", stok: 340, permintaan: 310 },
        { month: "Nov", stok: 360, permintaan: 345 },
        { month: "Des", stok: 350, permintaan: 320 },
        { month: "Jan", stok: 420, permintaan: 380 },
        { month: "Feb", stok: 450, permintaan: 410 },
    ],
}

const chartConfig = {
    stok: {
        label: "Stok Nasional",
        color: "#609A26",
    },
    permintaan: {
        label: "Permintaan",
        color: "#F59E0B",
    },
} satisfies ChartConfig

const periods = [
    { key: "1bulan", label: "1 Bulan" },
    { key: "3bulan", label: "3 Bulan" },
    { key: "6bulan", label: "6 Bulan" },
    { key: "1tahun", label: "1 Tahun" },
]

const scheduleData = [
    {
        id: 1,
        tanggal: "16 Feb 2026",
        rute: "Surabaya → Jakarta",
        komoditas: "Beras Premium",
        jumlah: "12 Ton",
        status: "terjadwal",
    },
    {
        id: 2,
        tanggal: "17 Feb 2026",
        rute: "Bandung → Semarang",
        komoditas: "Jagung Manis",
        jumlah: "8 Ton",
        status: "terjadwal",
    },
    {
        id: 3,
        tanggal: "15 Feb 2026",
        rute: "Yogyakarta → Surabaya",
        komoditas: "Kedelai",
        jumlah: "5 Ton",
        status: "dalam_perjalanan",
    },
    {
        id: 4,
        tanggal: "14 Feb 2026",
        rute: "Malang → Denpasar",
        komoditas: "Cabai Merah",
        jumlah: "3 Ton",
        status: "selesai",
    },
    {
        id: 5,
        tanggal: "18 Feb 2026",
        rute: "Solo → Bandung",
        komoditas: "Bawang Merah",
        jumlah: "6 Ton",
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
                            Stok Nasional vs Permintaan
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
                                <Bar dataKey="stok" fill="var(--color-stok)" radius={[6, 6, 0, 0]} barSize={24} />
                                <Bar dataKey="permintaan" fill="var(--color-permintaan)" radius={[6, 6, 0, 0]} barSize={24} />
                            </BarChart>
                        </ChartContainer>
                        <div className="flex items-center justify-center gap-6 mt-4">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-sm bg-[#609A26]" />
                                <span className="text-sm text-muted-foreground">Stok Nasional</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-sm bg-[#F59E0B]" />
                                <span className="text-sm text-muted-foreground">Permintaan</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Jadwal Distribusi - Right Side */}
                <Card className="lg:col-span-2">
                    <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-[#609A26]/10 rounded-lg">
                                    <Truck className="h-5 w-5 text-[#609A26]" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground">Jadwal Distribusi</h3>
                            </div>
                            <Link href="/distributor/jadwal-distribusi">
                                <button className="text-sm text-[#609A26] hover:underline cursor-pointer font-medium">
                                    Lihat Semua
                                </button>
                            </Link>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {scheduleData.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col gap-2 p-3 rounded-xl border border-border/60 hover:border-[#609A26]/30 hover:bg-[#609A26]/200 transition-all"
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-foreground truncate">
                                            {item.komoditas}
                                        </p>
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <MapPin className="h-3 w-3 text-muted-foreground shrink-0" />
                                            <span className="text-xs text-muted-foreground truncate">
                                                {item.rute}
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
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="h-3 w-3" />
                                        <span>{item.tanggal}</span>
                                    </div>
                                    <span className="font-semibold text-foreground">{item.jumlah}</span>
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