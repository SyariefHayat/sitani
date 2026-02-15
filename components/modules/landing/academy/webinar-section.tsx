"use client"

import { Video, Calendar, Clock, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"

const webinarData = [
    {
        id: 1,
        judul: "Strategi Pertanian Berkelanjutan 2026",
        pembicara: "Prof. Dr. Agus Hermawan",
        tanggal: "18 Feb 2026",
        waktu: "09:00 - 11:00 WIB",
        peserta: 320,
        maxPeserta: 500,
        status: "upcoming",
        kategori: "Sustainability",
    },
    {
        id: 2,
        judul: "Teknologi IoT dalam Smart Farming",
        pembicara: "Dr. Rika Puspitasari",
        tanggal: "20 Feb 2026",
        waktu: "13:00 - 15:00 WIB",
        peserta: 185,
        maxPeserta: 300,
        status: "upcoming",
        kategori: "Teknologi",
    },
    {
        id: 3,
        judul: "Mengoptimalkan Hasil Panen dengan Data",
        pembicara: "Ir. Dimas Prasetyo",
        tanggal: "15 Feb 2026",
        waktu: "10:00 - 12:00 WIB",
        peserta: 450,
        maxPeserta: 450,
        status: "selesai",
        kategori: "Data & Analitik",
    },
    {
        id: 4,
        judul: "Pemasaran Digital untuk Petani",
        pembicara: "Maya Sari, MBA",
        tanggal: "22 Feb 2026",
        waktu: "14:00 - 16:00 WIB",
        peserta: 95,
        maxPeserta: 400,
        status: "upcoming",
        kategori: "Bisnis",
    },
]

const statusConfig: Record<string, { label: string; className: string }> = {
    upcoming: { label: "Upcoming", className: "bg-blue-100 text-blue-700" },
    live: { label: "LIVE", className: "bg-red-100 text-red-700 animate-pulse" },
    selesai: { label: "Rekaman", className: "bg-green-100 text-green-700" },
}

const WebinarSection = () => {
    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 py-8 sm:py-12">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#609A26]/10 rounded-xl">
                        <Video className="h-6 w-6 text-[#609A26]" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Webinar & Event</h2>
                        <p className="text-sm text-muted-foreground">Tingkatkan pengetahuan melalui webinar dari para ahli</p>
                    </div>
                </div>
                <Button variant="outline" size="sm" className="cursor-pointer font-medium text-[#609A26] border-[#609A26]/30 hover:bg-[#609A26]/5">
                    Semua Webinar
                </Button>
            </div>

            {/* Webinar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {webinarData.map((webinar) => (
                    <Card key={webinar.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <div className="flex items-start justify-between gap-3">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className={`px-2 py-0.5 text-[11px] font-medium rounded-full ${statusConfig[webinar.status].className}`}>
                                            {statusConfig[webinar.status].label}
                                        </span>
                                        <span className="text-[11px] text-muted-foreground">{webinar.kategori}</span>
                                    </div>
                                    <h3 className="text-base font-semibold text-foreground leading-snug">
                                        {webinar.judul}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        Pembicara: <span className="font-medium text-foreground">{webinar.pembicara}</span>
                                    </p>
                                </div>
                                <div className="p-2 bg-muted rounded-lg shrink-0">
                                    <Video className="h-5 w-5 text-muted-foreground" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="h-3 w-3" />
                                    <span>{webinar.tanggal}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="h-3 w-3" />
                                    <span>{webinar.waktu}</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-1.5 text-muted-foreground">
                                        <Users className="h-3 w-3" />
                                        <span>{webinar.peserta}/{webinar.maxPeserta} peserta</span>
                                    </div>
                                    <span className="font-medium text-foreground">
                                        {Math.round((webinar.peserta / webinar.maxPeserta) * 100)}%
                                    </span>
                                </div>
                                <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full transition-all ${webinar.peserta >= webinar.maxPeserta ? "bg-red-500" : "bg-[#609A26]"
                                            }`}
                                        style={{ width: `${Math.min((webinar.peserta / webinar.maxPeserta) * 100, 100)}%` }}
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                {webinar.status === "upcoming" && webinar.peserta < webinar.maxPeserta && (
                                    <Button size="sm" className="w-full bg-[#609A26] hover:bg-[#528520] text-white cursor-pointer gap-1.5">
                                        Daftar Sekarang
                                    </Button>
                                )}
                                {webinar.status === "upcoming" && webinar.peserta >= webinar.maxPeserta && (
                                    <Button size="sm" variant="outline" className="w-full cursor-pointer" disabled>
                                        Kuota Penuh
                                    </Button>
                                )}
                                {webinar.status === "selesai" && (
                                    <Button size="sm" variant="outline" className="w-full cursor-pointer gap-1.5 text-[#609A26] border-[#609A26]/30 hover:bg-[#609A26]/5">
                                        <ExternalLink className="h-3.5 w-3.5" /> Tonton Rekaman
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default WebinarSection
