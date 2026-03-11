"use client"

import { useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Award, Download, Calendar, ExternalLink } from "lucide-react"

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
import { Button } from "@/components/ui/button"

const chartData: Record<string, { month: string; kelas: number; jam: number }[]> = {
    "1bulan": [
        { month: "Minggu 1", kelas: 3, jam: 6 },
        { month: "Minggu 2", kelas: 2, jam: 4 },
        { month: "Minggu 3", kelas: 4, jam: 8 },
        { month: "Minggu 4", kelas: 3, jam: 5 },
    ],
    "3bulan": [
        { month: "Desember", kelas: 8, jam: 18 },
        { month: "Januari", kelas: 10, jam: 22 },
        { month: "Februari", kelas: 12, jam: 26 },
    ],
    "6bulan": [
        { month: "Sep", kelas: 5, jam: 10 },
        { month: "Okt", kelas: 7, jam: 14 },
        { month: "Nov", kelas: 6, jam: 12 },
        { month: "Des", kelas: 8, jam: 18 },
        { month: "Jan", kelas: 10, jam: 22 },
        { month: "Feb", kelas: 12, jam: 26 },
    ],
    "1tahun": [
        { month: "Mar", kelas: 3, jam: 6 },
        { month: "Apr", kelas: 4, jam: 8 },
        { month: "Mei", kelas: 5, jam: 10 },
        { month: "Jun", kelas: 4, jam: 9 },
        { month: "Jul", kelas: 6, jam: 12 },
        { month: "Agu", kelas: 5, jam: 11 },
        { month: "Sep", kelas: 5, jam: 10 },
        { month: "Okt", kelas: 7, jam: 14 },
        { month: "Nov", kelas: 6, jam: 12 },
        { month: "Des", kelas: 8, jam: 18 },
        { month: "Jan", kelas: 10, jam: 22 },
        { month: "Feb", kelas: 12, jam: 26 },
    ],
}

const chartConfig = {
    kelas: {
        label: "Kelas Selesai",
        color: "#609A26",
    },
    jam: {
        label: "Jam Belajar",
        color: "#3B82F6",
    },
} satisfies ChartConfig

const periods = [
    { key: "1bulan", label: "1 Bulan" },
    { key: "3bulan", label: "3 Bulan" },
    { key: "6bulan", label: "6 Bulan" },
    { key: "1tahun", label: "1 Tahun" },
]

const sertifikatData = [
    {
        id: 1,
        judul: "Budidaya Padi Modern",
        tanggal: "10 Jan 2026",
        instruktur: "Dr. Ahmad Fauzi",
        nomor: "CERT-2026-001",
    },
    {
        id: 2,
        judul: "Teknik Hidroponik untuk Pemula",
        tanggal: "25 Des 2025",
        instruktur: "Ir. Sari Dewi",
        nomor: "CERT-2025-048",
    },
    {
        id: 3,
        judul: "Manajemen Rantai Pasok Pertanian",
        tanggal: "15 Nov 2025",
        instruktur: "Prof. Budi Santoso",
        nomor: "CERT-2025-032",
    },
    {
        id: 4,
        judul: "Dasar-dasar Agribisnis",
        tanggal: "20 Okt 2025",
        instruktur: "Hendra Kusuma, MBA",
        nomor: "CERT-2025-019",
    },
    {
        id: 5,
        judul: "Pengendalian Hama Organik",
        tanggal: "05 Sep 2025",
        instruktur: "Dr. Rina Wulandari",
        nomor: "CERT-2025-008",
    },
]

const ProgressChartSection = () => {
    const [activePeriod, setActivePeriod] = useState("6bulan")

    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 py-8 sm:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Bar Chart - Left Side */}
                <Card className="lg:col-span-3">
                    <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4">
                        <h3 className="text-lg font-semibold text-foreground">
                            Progress Belajar
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
                                <Bar dataKey="kelas" fill="var(--color-kelas)" radius={[6, 6, 0, 0]} barSize={24} />
                                <Bar dataKey="jam" fill="var(--color-jam)" radius={[6, 6, 0, 0]} barSize={24} />
                            </BarChart>
                        </ChartContainer>
                        <div className="flex items-center justify-center gap-6 mt-4">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-sm bg-[#609A26]" />
                                <span className="text-sm text-muted-foreground">Kelas Selesai</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-sm bg-[#3B82F6]" />
                                <span className="text-sm text-muted-foreground">Jam Belajar</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Sertifikat - Right Side */}
                <Card className="lg:col-span-2">
                    <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-amber-500/10 rounded-lg">
                                    <Award className="h-5 w-5 text-amber-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground">Sertifikat Saya</h3>
                            </div>
                            <button className="text-sm text-[#609A26] hover:underline cursor-pointer font-medium">
                                Lihat Semua
                            </button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {sertifikatData.map((sertifikat) => (
                            <div
                                key={sertifikat.id}
                                className="flex flex-col gap-2 p-3 rounded-xl border border-border/60 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all"
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-foreground truncate">
                                            {sertifikat.judul}
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-0.5">
                                            {sertifikat.instruktur}
                                        </p>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0 cursor-pointer text-muted-foreground hover:text-[#609A26]">
                                        <Download className="h-3.5 w-3.5" />
                                    </Button>
                                </div>
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="h-3 w-3" />
                                        <span>{sertifikat.tanggal}</span>
                                    </div>
                                    <span className="font-mono text-[11px]">{sertifikat.nomor}</span>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default ProgressChartSection
