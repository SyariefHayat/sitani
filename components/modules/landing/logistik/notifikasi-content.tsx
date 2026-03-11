"use client"

import { Bell, Truck, Package, Wrench, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const NOTIFICATIONS = [
    { icon: Package, color: "text-blue-600 bg-blue-50", title: "Order pengiriman baru masuk 🚛", description: "Order #ORD-2024-0847 dari Toko Segar Jaya membutuhkan pengiriman 500kg beras.", time: "5 menit yang lalu", unread: true },
    { icon: Truck, color: "text-green-600 bg-green-50", title: "Pengiriman #SHP-0831 selesai ✅", description: "Pengiriman ke Pasar Induk Kramat Jati telah dikonfirmasi oleh penerima.", time: "30 menit yang lalu", unread: true },
    { icon: Wrench, color: "text-amber-600 bg-amber-50", title: "Armada Truk-05 selesai maintenance", description: "Truk-05 sudah siap digunakan kembali setelah servis rutin.", time: "1 jam yang lalu", unread: true },
    { icon: Package, color: "text-blue-600 bg-blue-50", title: "Pickup dijadwalkan untuk besok", description: "3 pickup point di wilayah Cianjur, total estimasi 2 ton.", time: "2 jam yang lalu", unread: false },
    { icon: CheckCircle2, color: "text-green-600 bg-green-50", title: "Pencairan dana berhasil 💰", description: "Dana sebesar Rp 3.250.000 telah ditransfer ke rekening Anda.", time: "3 jam yang lalu", unread: false },
    { icon: Truck, color: "text-green-600 bg-green-50", title: "Rute baru ditambahkan", description: "Rute Cianjur - Jakarta Timur telah ditambahkan ke jadwal distribusi.", time: "5 jam yang lalu", unread: false },
    { icon: Wrench, color: "text-amber-600 bg-amber-50", title: "Reminder: Servis Truk-02", description: "Truk-02 akan memasuki jadwal servis rutin minggu depan.", time: "1 hari yang lalu", unread: false },
]

const NotifikasiContent = () => {
    return (
        <div className="px-4 sm:px-10 lg:px-16 py-8 sm:py-12 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Notifikasi</h1>
                        <p className="text-gray-500 mt-1">Pantau semua aktivitas dan pemberitahuan</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-[#206536] text-white text-xs font-semibold rounded-full">
                            3 Baru
                        </span>
                    </div>
                </div>

                {/* Notifications List */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
                    {NOTIFICATIONS.map((notif, index) => {
                        const Icon = notif.icon
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "flex items-start gap-4 p-5 sm:p-6 hover:bg-gray-50 transition-colors cursor-pointer",
                                    notif.unread && "bg-[#206536]/[0.02]"
                                )}
                            >
                                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", notif.color)}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-3">
                                        <p className={cn("text-sm", notif.unread ? "font-semibold text-gray-900" : "font-medium text-gray-700")}>
                                            {notif.title}
                                        </p>
                                        {notif.unread && (
                                            <span className="w-2.5 h-2.5 bg-[#206536] rounded-full shrink-0 mt-1.5" />
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{notif.description}</p>
                                    <p className="text-xs text-gray-400 mt-2">{notif.time}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default NotifikasiContent
