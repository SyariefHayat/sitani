"use client"

import { useState } from "react"
import { Search, Filter, Package, MapPin, Calendar, Clock, ChevronRight, X, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const STATUSES = ["Semua", "Menunggu", "Diproses", "Dikirim", "Selesai"]

interface Order {
    id: string
    buyer: string
    items: string
    quantity: string
    total: string
    date: string
    location: string
    status: string
    statusColor: string
}

const ORDERS: Order[] = [
    { id: "BO-001", buyer: "Toko Segar Jaya", items: "Beras Organik Premium", quantity: "2 Ton", total: "Rp 4.500.000", date: "10 Mar 2026", location: "Jakarta Selatan", status: "Menunggu", statusColor: "bg-amber-100 text-amber-700" },
    { id: "BO-002", buyer: "Supermarket Hijau", items: "Sayuran Organik Campuran", quantity: "500 kg", total: "Rp 2.750.000", date: "9 Mar 2026", location: "Bandung", status: "Diproses", statusColor: "bg-blue-100 text-blue-700" },
    { id: "BO-003", buyer: "Resto Alam Segar", items: "Buah-buahan Segar", quantity: "300 kg", total: "Rp 1.800.000", date: "8 Mar 2026", location: "Bogor", status: "Dikirim", statusColor: "bg-purple-100 text-purple-700" },
    { id: "BO-004", buyer: "Toko Berkah Tani", items: "Beras Merah Organik", quantity: "1 Ton", total: "Rp 3.200.000", date: "7 Mar 2026", location: "Depok", status: "Selesai", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "BO-005", buyer: "Warung Sehat Alami", items: "Rempah-rempah Segar", quantity: "100 kg", total: "Rp 950.000", date: "6 Mar 2026", location: "Tangerang", status: "Selesai", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "BO-006", buyer: "Catering Nusantara", items: "Jagung Manis + Sayuran", quantity: "750 kg", total: "Rp 2.100.000", date: "5 Mar 2026", location: "Bekasi", status: "Selesai", statusColor: "bg-emerald-100 text-emerald-700" },
]

const BulkOrderContent = () => {
    const [activeStatus, setActiveStatus] = useState("Semua")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

    const filtered = ORDERS.filter(o => {
        const matchStatus = activeStatus === "Semua" || o.status === activeStatus
        const matchSearch = o.buyer.toLowerCase().includes(searchQuery.toLowerCase()) || o.items.toLowerCase().includes(searchQuery.toLowerCase())
        return matchStatus && matchSearch
    })

    const handleProcess = (order: Order) => {
        toast.success(`Order ${order.id} sedang diproses`, { description: `Pesanan dari ${order.buyer}` })
        setSelectedOrder(null)
    }

    return (
        <>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Bulk Order</h1>
                    <p className="text-gray-500 text-sm mt-1">Kelola pesanan dalam jumlah besar</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {[
                        { label: "Total Order", value: ORDERS.length.toString(), color: "text-[#206536]" },
                        { label: "Menunggu", value: ORDERS.filter(o => o.status === "Menunggu").length.toString(), color: "text-amber-600" },
                        { label: "Diproses", value: ORDERS.filter(o => o.status === "Diproses").length.toString(), color: "text-blue-600" },
                        { label: "Selesai", value: ORDERS.filter(o => o.status === "Selesai").length.toString(), color: "text-emerald-600" },
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
                            placeholder="Cari pesanan..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                        />
                    </div>
                    <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
                        {STATUSES.map(s => (
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

                {/* Order List */}
                {filtered.length === 0 ? (
                    <div className="text-center py-16">
                        <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-gray-700 mb-1">Tidak ada pesanan</h3>
                        <p className="text-sm text-gray-400">Ubah filter atau kata kunci pencarian</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {filtered.map(order => (
                            <Card key={order.id} className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all cursor-pointer" onClick={() => setSelectedOrder(order)}>
                                <div className="flex items-center gap-4">
                                    <div className="p-2.5 rounded-lg bg-[#206536]/10 shrink-0">
                                        <Package className="w-5 h-5 text-[#206536]" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-sm font-bold text-gray-900 truncate">{order.buyer}</h3>
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${order.statusColor}`}>{order.status}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-0.5">{order.items} · {order.quantity}</p>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="text-xs text-gray-400 flex items-center gap-1"><MapPin className="w-3 h-3" />{order.location}</span>
                                            <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar className="w-3 h-3" />{order.date}</span>
                                        </div>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <p className="text-sm font-bold text-[#206536]">{order.total}</p>
                                        <ChevronRight className="w-4 h-4 text-gray-400 ml-auto mt-1" />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </section>

            {/* Order Detail Modal */}
            {selectedOrder && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedOrder(null)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                        <div className="sticky top-0 bg-white rounded-t-2xl z-10 flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h2 className="text-lg font-bold text-gray-900">Detail Order</h2>
                            <button onClick={() => setSelectedOrder(null)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 cursor-pointer"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="px-6 py-5 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">{selectedOrder.id}</span>
                                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${selectedOrder.statusColor}`}>{selectedOrder.status}</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{selectedOrder.buyer}</h3>
                                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1"><MapPin className="w-3.5 h-3.5" />{selectedOrder.location}</p>
                            </div>
                            <Separator />
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { label: "Produk", value: selectedOrder.items },
                                    { label: "Kuantitas", value: selectedOrder.quantity },
                                    { label: "Total", value: selectedOrder.total },
                                    { label: "Tanggal", value: selectedOrder.date },
                                ].map(item => (
                                    <div key={item.label} className="p-3 rounded-xl bg-gray-50">
                                        <p className="text-[11px] text-gray-400">{item.label}</p>
                                        <p className="text-sm font-semibold text-gray-800 mt-0.5">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 px-6 py-4 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
                            <Button variant="outline" onClick={() => setSelectedOrder(null)} className="cursor-pointer text-sm">Tutup</Button>
                            {selectedOrder.status === "Menunggu" && (
                                <Button onClick={() => handleProcess(selectedOrder)} className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer gap-1.5 text-sm">
                                    <TrendingUp className="w-4 h-4" /> Proses Order
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default BulkOrderContent
