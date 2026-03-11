"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bell, BookOpen, Award, Video, HelpCircle, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Notification {
    id: string
    title: string
    description: string
    time: string
    type: "kelas" | "webinar" | "sertifikat" | "info"
    isRead: boolean
}

const NOTIFICATIONS: Notification[] = [
    { id: "1", title: "Kelas baru tersedia: Budidaya Padi 🌾", description: "Kelas baru tentang teknik budidaya padi modern telah tersedia", time: "10 menit yang lalu", type: "kelas", isRead: false },
    { id: "2", title: "Webinar besok: Tips Pertanian Modern", description: "Jangan lupa menghadiri webinar besok pukul 10:00 WIB", time: "1 jam yang lalu", type: "webinar", isRead: false },
    { id: "3", title: "Sertifikat Anda sudah siap diunduh 📜", description: "Sertifikat kelas Budidaya Padi Modern telah diterbitkan", time: "2 jam yang lalu", type: "sertifikat", isRead: false },
    { id: "4", title: "Progress kelas Smart Farming: 75%", description: "Anda sudah menyelesaikan 6 dari 8 modul", time: "3 jam yang lalu", type: "info", isRead: true },
    { id: "5", title: "Kelas Agribisnis & Pemasaran dibuka", description: "Kelas baru dari Maya Sari, MBA sudah tersedia", time: "5 jam yang lalu", type: "kelas", isRead: true },
    { id: "6", title: "Webinar minggu depan: IoT untuk Pertanian", description: "Daftar sekarang untuk mengamankan tempat Anda", time: "6 jam yang lalu", type: "webinar", isRead: true },
    { id: "7", title: "Selamat! Anda mendapat badge Learner 🎖️", description: "Badge diberikan setelah menyelesaikan 10 kelas", time: "1 hari yang lalu", type: "info", isRead: true },
    { id: "8", title: "Sertifikat Manajemen Keuangan tersedia", description: "Unduh sertifikat kelulusan Anda sekarang", time: "2 hari yang lalu", type: "sertifikat", isRead: true },
]

const iconMap = {
    kelas: BookOpen,
    webinar: Video,
    sertifikat: Award,
    info: HelpCircle,
}

const colorMap = {
    kelas: "bg-blue-100 text-blue-600",
    webinar: "bg-purple-100 text-purple-600",
    sertifikat: "bg-amber-100 text-amber-600",
    info: "bg-gray-100 text-gray-600",
}

const NotifikasiContent = () => {
    const [notifications, setNotifications] = useState(NOTIFICATIONS)
    const [filter, setFilter] = useState<"all" | "unread">("all")

    const filtered = filter === "unread" ? notifications.filter(n => !n.isRead) : notifications

    const markAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, isRead: true })))
    }

    const toggleRead = (id: string) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: !n.isRead } : n))
    }

    return (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <Link href="/academy" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Notifikasi</h1>
                    <p className="text-gray-500 text-sm mt-0.5">{notifications.filter(n => !n.isRead).length} notifikasi belum dibaca</p>
                </div>
                <Button variant="outline" size="sm" onClick={markAllRead} className="text-xs cursor-pointer border-[#206536]/30 text-[#206536]">
                    <Check className="w-3.5 h-3.5 mr-1" /> Tandai Semua Dibaca
                </Button>
            </div>

            {/* Filter */}
            <div className="flex gap-2 mb-6">
                {(["all", "unread"] as const).map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${filter === f ? "bg-[#206536] text-white" : "text-gray-500 hover:bg-gray-100"}`}
                    >
                        {f === "all" ? "Semua" : "Belum Dibaca"}
                    </button>
                ))}
            </div>

            {/* Notification List */}
            <div className="space-y-3">
                {filtered.length === 0 ? (
                    <div className="text-center py-16">
                        <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-gray-700 mb-1">Tidak ada notifikasi</h3>
                        <p className="text-sm text-gray-400">Semua notifikasi telah dibaca</p>
                    </div>
                ) : (
                    filtered.map(n => {
                        const Icon = iconMap[n.type]
                        return (
                            <Card
                                key={n.id}
                                className={`p-4 rounded-xl border cursor-pointer transition-all hover:shadow-sm ${n.isRead ? "border-gray-200 bg-white" : "border-[#206536]/20 bg-[#206536]/5"}`}
                                onClick={() => toggleRead(n.id)}
                            >
                                <div className="flex items-start gap-3">
                                    <div className={`p-2 rounded-lg shrink-0 ${colorMap[n.type]}`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <h4 className={`text-sm leading-snug ${n.isRead ? "font-medium text-gray-700" : "font-bold text-gray-900"}`}>{n.title}</h4>
                                            {!n.isRead && <span className="w-2 h-2 rounded-full bg-[#609A26] shrink-0 mt-1.5" />}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">{n.description}</p>
                                        <p className="text-[11px] text-gray-400 mt-1.5">{n.time}</p>
                                    </div>
                                </div>
                            </Card>
                        )
                    })
                )}
            </div>
        </section>
    )
}

export default NotifikasiContent
