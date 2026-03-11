"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bell, TrendingUp, Megaphone, Info, Trash2, CheckCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { toast } from "sonner"

const TABS = [
    { label: "Semua", value: "semua" },
    { label: "Investasi", value: "investasi", icon: TrendingUp },
    { label: "Promo", value: "promo", icon: Megaphone },
    { label: "Sistem", value: "sistem", icon: Info },
]

interface Notification {
    id: string
    title: string
    description: string
    time: string
    type: string
    isRead: boolean
}

const INITIAL_NOTIFICATIONS: Notification[] = [
    { id: "1", title: "Proyek Padi Organik berhasil didanai! 🎉", description: "Target pendanaan Rp 500 juta telah tercapai. Proyek akan segera dimulai.", time: "2 menit yang lalu", type: "investasi", isRead: false },
    { id: "2", title: "Bagi hasil Rp 450.000 telah masuk", description: "Bagi hasil dari proyek Budidaya Udang Vaname periode Q4 2024.", time: "1 jam yang lalu", type: "investasi", isRead: false },
    { id: "3", title: "Laporan kuartal Q4 tersedia", description: "Laporan kinerja proyek Q4 2024 sudah dapat diunduh.", time: "3 jam yang lalu", type: "investasi", isRead: false },
    { id: "4", title: "Promo: Investasi tanpa biaya admin! 💰", description: "Gratis biaya admin untuk investasi pertama di bulan Maret.", time: "5 jam yang lalu", type: "promo", isRead: true },
    { id: "5", title: "Proyek baru: Kebun Jeruk Mandarin", description: "Proyek investasi baru tersedia! Imbal hasil estimasi 20% per tahun.", time: "1 hari yang lalu", type: "investasi", isRead: true },
    { id: "6", title: "Verifikasi KTP berhasil ✓", description: "Akun Anda telah terverifikasi. Nikmati limit investasi lebih tinggi.", time: "2 hari yang lalu", type: "sistem", isRead: true },
    { id: "7", title: "Pemeliharaan sistem terjadwal", description: "Sistem akan dimaintenans pada 15 Maret 2025 pukul 02:00-04:00 WIB.", time: "3 hari yang lalu", type: "sistem", isRead: true },
]

const NotifikasiContent = () => {
    const [activeTab, setActiveTab] = useState("semua")
    const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS)

    const filtered = activeTab === "semua" ? notifications : notifications.filter(n => n.type === activeTab)
    const unreadCount = notifications.filter(n => !n.isRead).length

    const markAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, isRead: true })))
        toast.success("Semua notifikasi ditandai telah dibaca")
    }

    const deleteRead = () => {
        setNotifications(prev => prev.filter(n => !n.isRead))
        toast.success("Notifikasi yang sudah dibaca telah dihapus")
    }

    return (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <Link href="/investasi" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Notifikasi</h1>
                    <p className="text-gray-500 text-sm mt-0.5">{unreadCount > 0 ? `${unreadCount} notifikasi belum dibaca` : "Semua notifikasi telah dibaca"}</p>
                </div>
                <div className="flex items-center gap-2">
                    {unreadCount > 0 && (
                        <Button variant="outline" size="sm" onClick={markAllRead} className="text-xs cursor-pointer gap-1 border-[#206536]/30 text-[#206536]">
                            <CheckCheck className="w-3.5 h-3.5" /> Baca Semua
                        </Button>
                    )}
                    <Button variant="outline" size="sm" onClick={deleteRead} className="text-xs cursor-pointer gap-1 border-red-300 text-red-500 hover:bg-red-50">
                        <Trash2 className="w-3.5 h-3.5" /> Hapus Dibaca
                    </Button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 sm:gap-1.5 mb-6 overflow-x-auto pb-1 scrollbar-hide">
                {TABS.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => setActiveTab(tab.value)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                            activeTab === tab.value
                                ? "bg-[#206536] text-white shadow-sm"
                                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                        {tab.icon && <tab.icon className="w-3.5 h-3.5" />}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Notification List */}
            {filtered.length === 0 ? (
                <div className="text-center py-16">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                        <Bell className="w-10 h-10 text-gray-300" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Tidak Ada Notifikasi</h3>
                    <p className="text-gray-500 text-sm">Notifikasi dengan kategori ini belum ada</p>
                </div>
            ) : (
                <div className="space-y-2">
                    {filtered.map((notif) => (
                        <Card
                            key={notif.id}
                            className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer hover:shadow-sm ${
                                notif.isRead
                                    ? "border-gray-100 bg-white"
                                    : "border-[#609A26]/20 bg-[#609A26]/[0.03]"
                            }`}
                            onClick={() => {
                                setNotifications(prev => prev.map(n => n.id === notif.id ? { ...n, isRead: true } : n))
                            }}
                        >
                            <div className="flex items-start gap-3">
                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                                    notif.type === "investasi" ? "bg-emerald-50" :
                                    notif.type === "promo" ? "bg-amber-50" : "bg-blue-50"
                                }`}>
                                    {notif.type === "investasi" && <TrendingUp className="w-4 h-4 text-emerald-600" />}
                                    {notif.type === "promo" && <Megaphone className="w-4 h-4 text-amber-600" />}
                                    {notif.type === "sistem" && <Info className="w-4 h-4 text-blue-600" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2">
                                        <p className={`text-sm leading-snug ${notif.isRead ? "text-gray-700" : "font-semibold text-gray-900"}`}>{notif.title}</p>
                                        {!notif.isRead && <span className="w-2 h-2 bg-[#609A26] rounded-full shrink-0 mt-1.5" />}
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">{notif.description}</p>
                                    <p className="text-[11px] text-gray-300 mt-1.5">{notif.time}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </section>
    )
}

export default NotifikasiContent
