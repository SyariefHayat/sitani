"use client"

import { useState } from "react"
import { Bell, Heart, MessageSquare, BookOpen, CheckCheck, Trash2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const NOTIFICATIONS = [
    { id: 1, type: "article", icon: BookOpen, title: "Artikel baru: Tips Menanam Padi 🌾", desc: "Dr. Ahmad Fauzi menerbitkan artikel baru", time: "15 menit yang lalu", read: false },
    { id: 2, type: "like", icon: Heart, title: "Artikel Anda mendapat 50 likes 👍", desc: "\"Budidaya Padi Modern\" mendapat banyak respon", time: "1 jam yang lalu", read: false },
    { id: 3, type: "comment", icon: MessageSquare, title: "3 komentar baru di artikel Anda 💬", desc: "Seseorang mengomentari \"Tips Pertanian Organik\"", time: "3 jam yang lalu", read: false },
    { id: 4, type: "like", icon: Heart, title: "Artikel Anda mendapat 25 likes", desc: "\"Panduan Investasi Pertanian\" makin ramai", time: "5 jam yang lalu", read: true },
    { id: 5, type: "article", icon: BookOpen, title: "Artikel baru dari penulis yang Anda ikuti", desc: "Maya Sari menerbitkan \"Smart Farming 2026\"", time: "1 hari yang lalu", read: true },
    { id: 6, type: "comment", icon: MessageSquare, title: "Balasan komentar Anda", desc: "Budi Santoso membalas komentar Anda", time: "2 hari yang lalu", read: true },
]

const FILTERS = ["Semua", "Belum Dibaca", "Artikel", "Likes", "Komentar"]

const NotifikasiContent = () => {
    const [notifications, setNotifications] = useState(NOTIFICATIONS)
    const [activeFilter, setActiveFilter] = useState("Semua")

    const filtered = notifications.filter(n => {
        if (activeFilter === "Semua") return true
        if (activeFilter === "Belum Dibaca") return !n.read
        if (activeFilter === "Artikel") return n.type === "article"
        if (activeFilter === "Likes") return n.type === "like"
        if (activeFilter === "Komentar") return n.type === "comment"
        return true
    })

    const handleMarkAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })))
        toast.success("Semua notifikasi ditandai telah dibaca")
    }

    const handleDelete = (id: number) => {
        setNotifications(prev => prev.filter(n => n.id !== id))
        toast.success("Notifikasi dihapus")
    }

    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Notifikasi</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        {notifications.filter(n => !n.read).length} notifikasi belum dibaca
                    </p>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    className="border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 cursor-pointer"
                    onClick={handleMarkAllRead}
                >
                    <CheckCheck className="w-4 h-4 mr-1.5" />
                    Tandai Semua Dibaca
                </Button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide mb-6">
                {FILTERS.map(f => (
                    <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${activeFilter === f ? "bg-[#206536] text-white shadow-sm" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Notification List */}
            {filtered.length === 0 ? (
                <div className="text-center py-16">
                    <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-gray-700 mb-1">Tidak ada notifikasi</h3>
                    <p className="text-sm text-gray-400">Semua notifikasi telah dibaca</p>
                </div>
            ) : (
                <div className="space-y-2">
                    {filtered.map(notif => {
                        const Icon = notif.icon
                        return (
                            <Card
                                key={notif.id}
                                className={`p-4 rounded-xl border transition-all hover:shadow-md ${notif.read ? "border-gray-200 bg-white" : "border-[#206536]/20 bg-[#206536]/5"}`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className={`p-2 rounded-lg shrink-0 ${notif.read ? "bg-gray-100" : "bg-[#206536]/15"}`}>
                                        <Icon className={`w-5 h-5 ${notif.read ? "text-gray-400" : "text-[#206536]"}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className={`text-sm font-bold truncate ${notif.read ? "text-gray-700" : "text-gray-900"}`}>{notif.title}</h4>
                                        <p className="text-xs text-gray-500 mt-0.5">{notif.desc}</p>
                                        <p className="text-[10px] text-gray-400 mt-1">{notif.time}</p>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleDelete(notif.id)}
                                        className="text-gray-400 hover:text-red-500 hover:bg-red-50 shrink-0 cursor-pointer"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            )}
        </section>
    )
}

export default NotifikasiContent
