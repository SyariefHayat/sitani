"use client"

import { useState } from "react"
import { ArrowLeft, Bell, Package, Tag, Info, CheckCheck, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { toast } from "sonner"

const TABS = [
    { label: "Semua", value: "semua" },
    { label: "Pesanan", value: "pesanan", icon: Package },
    { label: "Promo", value: "promo", icon: Tag },
    { label: "Sistem", value: "sistem", icon: Info },
]

const NOTIFICATIONS = [
    {
        id: 1,
        type: "pesanan",
        icon: Package,
        iconColor: "text-blue-600 bg-blue-100",
        title: "Pesanan Anda sedang diproses!",
        description: "Pesanan #ORD-20250310-001 telah dikonfirmasi dan sedang diproses oleh penjual Tani Makmur.",
        time: "2 menit yang lalu",
        isRead: false,
    },
    {
        id: 2,
        type: "promo",
        icon: Tag,
        iconColor: "text-[#609A26] bg-[#609A26]/10",
        title: "Diskon 20% untuk produk organik! 🎉",
        description: "Nikmati diskon spesial 20% untuk semua produk organik hingga 15 Maret 2025. Gunakan kode: ORGANIK20",
        time: "1 jam yang lalu",
        isRead: false,
    },
    {
        id: 3,
        type: "pesanan",
        icon: Package,
        iconColor: "text-emerald-600 bg-emerald-100",
        title: "Pengiriman dalam perjalanan 🚚",
        description: "Pesanan #ORD-20250308-002 sedang dalam perjalanan. Estimasi tiba: 12 Maret 2025.",
        time: "3 jam yang lalu",
        isRead: false,
    },
    {
        id: 4,
        type: "sistem",
        icon: Info,
        iconColor: "text-gray-600 bg-gray-100",
        title: "Selamat datang di SiTani Marketplace! 👋",
        description: "Akun Anda telah berhasil terverifikasi. Mulai belanja produk pertanian terbaik dari petani Indonesia.",
        time: "1 hari yang lalu",
        isRead: true,
    },
    {
        id: 5,
        type: "promo",
        icon: Tag,
        iconColor: "text-[#609A26] bg-[#609A26]/10",
        title: "Flash Sale: Beras Premium mulai Rp 15.000/kg",
        description: "Jangan lewatkan! Flash sale beras premium hanya 2 jam. Stok terbatas.",
        time: "2 hari yang lalu",
        isRead: true,
    },
    {
        id: 6,
        type: "pesanan",
        icon: Package,
        iconColor: "text-emerald-600 bg-emerald-100",
        title: "Pesanan telah selesai ✅",
        description: "Pesanan #ORD-20250305-003 telah selesai. Jangan lupa berikan ulasan untuk produk yang Anda beli!",
        time: "5 hari yang lalu",
        isRead: true,
    },
    {
        id: 7,
        type: "sistem",
        icon: Info,
        iconColor: "text-gray-600 bg-gray-100",
        title: "Update kebijakan privasi",
        description: "Kami telah memperbarui kebijakan privasi. Silakan baca perubahan terbaru untuk kenyamanan Anda.",
        time: "1 minggu yang lalu",
        isRead: true,
    },
]

const NotifikasiContent = () => {
    const [activeTab, setActiveTab] = useState("semua")
    const [notifications, setNotifications] = useState(NOTIFICATIONS)

    const filtered = activeTab === "semua" ? notifications : notifications.filter(n => n.type === activeTab)
    const unreadCount = notifications.filter(n => !n.isRead).length

    const markAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, isRead: true })))
        toast.success("Semua notifikasi ditandai telah dibaca")
    }

    const deleteRead = () => {
        setNotifications(prev => prev.filter(n => !n.isRead))
        toast.success("Notifikasi yang telah dibaca dihapus")
    }

    return (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <Link href="/marketplace" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </Link>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Notifikasi</h1>
                            {unreadCount > 0 && (
                                <span className="bg-red-500 text-white text-[11px] font-bold rounded-full min-w-[22px] h-[22px] flex items-center justify-center px-1.5">
                                    {unreadCount}
                                </span>
                            )}
                        </div>
                        <p className="text-gray-500 text-sm mt-0.5">Semua pemberitahuan Anda</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {unreadCount > 0 && (
                        <Button variant="ghost" size="sm" onClick={markAllRead} className="text-xs text-[#206536] hover:bg-[#206536]/5 cursor-pointer gap-1">
                            <CheckCheck className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Tandai Dibaca</span>
                        </Button>
                    )}
                    <Button variant="ghost" size="sm" onClick={deleteRead} className="text-xs text-gray-500 hover:text-red-500 hover:bg-red-50 cursor-pointer gap-1">
                        <Trash2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Hapus Dibaca</span>
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
                    <p className="text-gray-500 text-sm">Belum ada notifikasi untuk kategori ini</p>
                </div>
            ) : (
                <div className="space-y-2">
                    {filtered.map((notif) => {
                        const Icon = notif.icon
                        return (
                            <Card
                                key={notif.id}
                                className={`p-4 sm:p-5 rounded-xl border shadow-sm transition-all hover:shadow-md cursor-pointer ${
                                    notif.isRead
                                        ? "border-gray-100 bg-white"
                                        : "border-[#609A26]/20 bg-[#609A26]/[0.02]"
                                }`}
                            >
                                <div className="flex gap-3 sm:gap-4">
                                    <div className={`w-10 h-10 rounded-xl ${notif.iconColor} flex items-center justify-center shrink-0`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <h4 className={`text-sm leading-snug ${notif.isRead ? "font-medium text-gray-700" : "font-bold text-gray-900"}`}>
                                                {notif.title}
                                            </h4>
                                            {!notif.isRead && (
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#609A26] shrink-0 mt-1" />
                                            )}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-2">{notif.description}</p>
                                        <p className="text-[11px] text-gray-400 mt-2">{notif.time}</p>
                                    </div>
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
