"use client"

import Link from "next/link"
import { ArrowLeft, Video, Calendar, Clock, Users, ExternalLink, Play } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const WEBINARS = [
    {
        id: "1",
        title: "Tips Pertanian Modern untuk Petani Milenial",
        speaker: "Dr. Ahmad Fauzi",
        speakerRole: "Ahli Pertanian Padi",
        date: "12 Maret 2026",
        time: "10:00 - 12:00 WIB",
        attendees: 156,
        status: "upcoming" as const,
        description: "Pelajari teknik pertanian modern yang cocok untuk generasi milenial dan bagaimana memanfaatkan teknologi untuk meningkatkan produktivitas.",
    },
    {
        id: "2",
        title: "IoT untuk Pertanian Presisi",
        speaker: "Dr. Rika Puspitasari",
        speakerRole: "Pakar IoT Pertanian",
        date: "15 Maret 2026",
        time: "14:00 - 16:00 WIB",
        attendees: 98,
        status: "upcoming" as const,
        description: "Workshop hands-on tentang implementasi sensor IoT dan monitoring real-time untuk lahan pertanian.",
    },
    {
        id: "3",
        title: "Strategi Pemasaran Produk Organik",
        speaker: "Maya Sari, MBA",
        speakerRole: "Praktisi Pemasaran Agri",
        date: "8 Maret 2026",
        time: "10:00 - 12:00 WIB",
        attendees: 210,
        status: "past" as const,
        description: "Tips dan trik memasarkan produk organik di era digital, termasuk branding dan marketplace.",
    },
    {
        id: "4",
        title: "Manajemen Keuangan Usaha Tani",
        speaker: "Hendra Kusuma, MBA",
        speakerRole: "Konsultan Agribisnis",
        date: "5 Maret 2026",
        time: "09:00 - 11:00 WIB",
        attendees: 178,
        status: "past" as const,
        description: "Belajar mengelola keuangan usaha tani secara efektif dan efisien.",
    },
]

const WebinarContent = () => {
    const upcomingWebinars = WEBINARS.filter(w => w.status === "upcoming")
    const pastWebinars = WEBINARS.filter(w => w.status === "past")

    return (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <Link href="/academy" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Webinar</h1>
                    <p className="text-gray-500 text-sm mt-0.5">Webinar dan workshop pertanian</p>
                </div>
            </div>

            {/* Upcoming */}
            <div className="mb-10">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Webinar Mendatang
                </h2>
                <div className="space-y-4">
                    {upcomingWebinars.map((webinar) => (
                        <Card key={webinar.id} className="rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="sm:w-20 h-20 sm:h-auto bg-gradient-to-br from-[#206536] to-[#2d8a4e] rounded-xl flex items-center justify-center shrink-0">
                                    <Video className="w-8 h-8 text-white/70" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base font-bold text-gray-900 mb-1">{webinar.title}</h3>
                                    <p className="text-sm text-gray-500 mb-2">{webinar.speaker} · {webinar.speakerRole}</p>
                                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{webinar.description}</p>
                                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
                                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {webinar.date}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {webinar.time}</span>
                                        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {webinar.attendees} peserta</span>
                                    </div>
                                    <Button size="sm" className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer text-xs gap-1.5">
                                        <ExternalLink className="w-3.5 h-3.5" /> Daftar Sekarang
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Past */}
            <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Webinar Sebelumnya</h2>
                <div className="space-y-4">
                    {pastWebinars.map((webinar) => (
                        <Card key={webinar.id} className="rounded-2xl border border-gray-200 shadow-sm p-5 opacity-80 hover:opacity-100 transition-opacity">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="sm:w-20 h-20 sm:h-auto bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                                    <Video className="w-8 h-8 text-gray-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base font-bold text-gray-900 mb-1">{webinar.title}</h3>
                                    <p className="text-sm text-gray-500 mb-2">{webinar.speaker} · {webinar.speakerRole}</p>
                                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
                                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {webinar.date}</span>
                                        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {webinar.attendees} peserta</span>
                                    </div>
                                    <Button size="sm" variant="outline" className="border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 cursor-pointer text-xs gap-1.5">
                                        <Play className="w-3.5 h-3.5" /> Tonton Rekaman
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WebinarContent
