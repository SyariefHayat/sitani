"use client"

import { useState } from "react"
import { Search, Truck, MapPin, Calendar, Clock, ChevronRight, X, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const FILTER_STATUS = ["Semua", "Dijadwalkan", "Dalam Perjalanan", "Selesai"]

interface Schedule {
    id: string
    destination: string
    items: string
    quantity: string
    driver: string
    vehicle: string
    date: string
    time: string
    route: string
    status: string
    statusColor: string
}

const SCHEDULES: Schedule[] = [
    { id: "DST-001", destination: "Toko Segar Jaya, Jakarta Selatan", items: "Beras Organik Premium", quantity: "2 Ton", driver: "Pak Supardi", vehicle: "B 1234 XYZ", date: "12 Mar 2026", time: "06:00", route: "Cianjur → Jakarta", status: "Dijadwalkan", statusColor: "bg-amber-100 text-amber-700" },
    { id: "DST-002", destination: "Supermarket Hijau, Bandung", items: "Sayuran Organik", quantity: "500 kg", driver: "Pak Hendra", vehicle: "D 5678 ABC", date: "12 Mar 2026", time: "07:30", route: "Bandung → Bandung Kota", status: "Dijadwalkan", statusColor: "bg-amber-100 text-amber-700" },
    { id: "DST-003", destination: "Resto Alam, Bogor", items: "Buah-buahan Segar", quantity: "300 kg", driver: "Pak Dedi", vehicle: "F 9012 DEF", date: "11 Mar 2026", time: "08:00", route: "Cianjur → Bogor", status: "Dalam Perjalanan", statusColor: "bg-blue-100 text-blue-700" },
    { id: "DST-004", destination: "Toko Berkah Tani, Depok", items: "Beras Merah", quantity: "1 Ton", driver: "Pak Agus", vehicle: "B 3456 GHI", date: "10 Mar 2026", time: "06:30", route: "Cianjur → Depok", status: "Selesai", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "DST-005", destination: "Warung Sehat, Tangerang", items: "Rempah Segar", quantity: "100 kg", driver: "Pak Budi", vehicle: "B 7890 JKL", date: "10 Mar 2026", time: "05:00", route: "Bandung → Tangerang", status: "Selesai", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "DST-006", destination: "Catering Nusantara, Bekasi", items: "Jagung + Sayuran", quantity: "750 kg", driver: "Pak Supardi", vehicle: "B 1234 XYZ", date: "9 Mar 2026", time: "07:00", route: "Cianjur → Bekasi", status: "Selesai", statusColor: "bg-emerald-100 text-emerald-700" },
]

const JadwalDistribusiContent = () => {
    const [activeStatus, setActiveStatus] = useState("Semua")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null)

    const filtered = SCHEDULES.filter(s => {
        const matchStatus = activeStatus === "Semua" || s.status === activeStatus
        const matchSearch = s.destination.toLowerCase().includes(searchQuery.toLowerCase()) || s.items.toLowerCase().includes(searchQuery.toLowerCase()) || s.driver.toLowerCase().includes(searchQuery.toLowerCase())
        return matchStatus && matchSearch
    })

    const handleConfirm = (schedule: Schedule) => {
        toast.success(`Jadwal ${schedule.id} dikonfirmasi`, { description: `Pengiriman ke ${schedule.destination}` })
        setSelectedSchedule(null)
    }

    return (
        <>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Jadwal Distribusi</h1>
                    <p className="text-gray-500 text-sm mt-1">Kelola jadwal pengiriman dan distribusi</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {[
                        { label: "Total Jadwal", value: SCHEDULES.length.toString(), color: "text-[#206536]" },
                        { label: "Dijadwalkan", value: SCHEDULES.filter(s => s.status === "Dijadwalkan").length.toString(), color: "text-amber-600" },
                        { label: "Dalam Perjalanan", value: SCHEDULES.filter(s => s.status === "Dalam Perjalanan").length.toString(), color: "text-blue-600" },
                        { label: "Selesai", value: SCHEDULES.filter(s => s.status === "Selesai").length.toString(), color: "text-emerald-600" },
                    ].map(s => (
                        <Card key={s.label} className="p-3 rounded-xl border border-gray-200 shadow-sm text-center">
                            <p className="text-xs text-gray-400">{s.label}</p>
                            <p className={`text-xl font-extrabold ${s.color} mt-0.5`}>{s.value}</p>
                        </Card>
                    ))}
                </div>

                {/* Search & Filter */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cari jadwal distribusi..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                        />
                    </div>
                    <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
                        {FILTER_STATUS.map(s => (
                            <button
                                key={s}
                                onClick={() => setActiveStatus(s)}
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${activeStatus === s ? "bg-[#206536] text-white shadow-sm" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Schedule List */}
                {filtered.length === 0 ? (
                    <div className="text-center py-16">
                        <Truck className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-gray-700 mb-1">Tidak ada jadwal</h3>
                        <p className="text-sm text-gray-400">Ubah filter atau kata kunci pencarian</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {filtered.map(schedule => (
                            <Card key={schedule.id} className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all cursor-pointer" onClick={() => setSelectedSchedule(schedule)}>
                                <div className="flex items-center gap-4">
                                    <div className={`p-2.5 rounded-lg shrink-0 ${schedule.status === "Dalam Perjalanan" ? "bg-blue-100" : schedule.status === "Dijadwalkan" ? "bg-amber-100" : "bg-emerald-100"}`}>
                                        <Truck className={`w-5 h-5 ${schedule.status === "Dalam Perjalanan" ? "text-blue-600" : schedule.status === "Dijadwalkan" ? "text-amber-600" : "text-emerald-600"}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-sm font-bold text-gray-900 truncate">{schedule.destination}</h3>
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${schedule.statusColor}`}>{schedule.status}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-0.5">{schedule.items} · {schedule.quantity}</p>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar className="w-3 h-3" />{schedule.date}</span>
                                            <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" />{schedule.time}</span>
                                            <span className="text-xs text-gray-400 flex items-center gap-1"><MapPin className="w-3 h-3" />{schedule.route}</span>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </section>

            {/* Detail Modal */}
            {selectedSchedule && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedSchedule(null)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                        <div className="sticky top-0 bg-white rounded-t-2xl z-10 flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h2 className="text-lg font-bold text-gray-900">Detail Jadwal</h2>
                            <button onClick={() => setSelectedSchedule(null)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 cursor-pointer"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="px-6 py-5 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">{selectedSchedule.id}</span>
                                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${selectedSchedule.statusColor}`}>{selectedSchedule.status}</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{selectedSchedule.destination}</h3>
                            <Separator />
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { label: "Produk", value: selectedSchedule.items },
                                    { label: "Kuantitas", value: selectedSchedule.quantity },
                                    { label: "Tanggal", value: selectedSchedule.date },
                                    { label: "Waktu", value: selectedSchedule.time },
                                    { label: "Rute", value: selectedSchedule.route },
                                    { label: "Driver", value: selectedSchedule.driver },
                                    { label: "Kendaraan", value: selectedSchedule.vehicle },
                                    { label: "Status", value: selectedSchedule.status },
                                ].map(d => (
                                    <div key={d.label} className="p-3 rounded-xl bg-gray-50">
                                        <p className="text-[11px] text-gray-400">{d.label}</p>
                                        <p className="text-sm font-semibold text-gray-800 mt-0.5">{d.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 px-6 py-4 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
                            <Button variant="outline" onClick={() => setSelectedSchedule(null)} className="cursor-pointer text-sm">Tutup</Button>
                            {selectedSchedule.status === "Dijadwalkan" && (
                                <Button onClick={() => handleConfirm(selectedSchedule)} className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer gap-1.5 text-sm">
                                    <Truck className="w-4 h-4" /> Konfirmasi Pengiriman
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default JadwalDistribusiContent
