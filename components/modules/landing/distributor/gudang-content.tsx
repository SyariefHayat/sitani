"use client"

import { useState } from "react"
import { Search, Warehouse, Package, AlertTriangle, ChevronRight, X, MapPin, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface StockItem {
    id: string
    name: string
    category: string
    stock: string
    minStock: string
    unit: string
    warehouse: string
    location: string
    status: "normal" | "low" | "critical"
    statusLabel: string
    statusColor: string
}

const STOCK_ITEMS: StockItem[] = [
    { id: "STK-001", name: "Beras Organik Premium", category: "Beras", stock: "4.500", minStock: "1.000", unit: "kg", warehouse: "Gudang A", location: "Cianjur", status: "normal", statusLabel: "Normal", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "STK-002", name: "Beras Merah Organik", category: "Beras", stock: "500", minStock: "1.000", unit: "kg", warehouse: "Gudang A", location: "Cianjur", status: "low", statusLabel: "Menipis", statusColor: "bg-amber-100 text-amber-700" },
    { id: "STK-003", name: "Jagung Manis Segar", category: "Sayuran", stock: "200", minStock: "500", unit: "kg", warehouse: "Gudang B", location: "Bandung", status: "critical", statusLabel: "Kritis", statusColor: "bg-red-100 text-red-700" },
    { id: "STK-004", name: "Kopi Arabika Toraja", category: "Perkebunan", stock: "2.800", minStock: "500", unit: "kg", warehouse: "Gudang C", location: "Surabaya", status: "normal", statusLabel: "Normal", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "STK-005", name: "Sayuran Organik Campuran", category: "Sayuran", stock: "750", minStock: "300", unit: "kg", warehouse: "Gudang B", location: "Bandung", status: "normal", statusLabel: "Normal", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "STK-006", name: "Cabai Merah Keriting", category: "Sayuran", stock: "150", minStock: "200", unit: "kg", warehouse: "Gudang A", location: "Cianjur", status: "low", statusLabel: "Menipis", statusColor: "bg-amber-100 text-amber-700" },
    { id: "STK-007", name: "Kunyit Segar", category: "Rempah", stock: "320", minStock: "100", unit: "kg", warehouse: "Gudang C", location: "Surabaya", status: "normal", statusLabel: "Normal", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "STK-008", name: "Jahe Merah Organik", category: "Rempah", stock: "80", minStock: "100", unit: "kg", warehouse: "Gudang B", location: "Bandung", status: "low", statusLabel: "Menipis", statusColor: "bg-amber-100 text-amber-700" },
]

const WAREHOUSES = ["Semua", "Gudang A", "Gudang B", "Gudang C"]

const GudangContent = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeWarehouse, setActiveWarehouse] = useState("Semua")
    const [selectedItem, setSelectedItem] = useState<StockItem | null>(null)

    const filtered = STOCK_ITEMS.filter(item => {
        const matchWarehouse = activeWarehouse === "Semua" || item.warehouse === activeWarehouse
        const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.category.toLowerCase().includes(searchQuery.toLowerCase())
        return matchWarehouse && matchSearch
    })

    return (
        <>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Manajemen Gudang</h1>
                    <p className="text-gray-500 text-sm mt-1">Pantau stok dan kelola inventaris gudang</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {[
                        { label: "Total Produk", value: STOCK_ITEMS.length.toString(), icon: Package, color: "text-[#206536] bg-[#206536]/10" },
                        { label: "Stok Normal", value: STOCK_ITEMS.filter(i => i.status === "normal").length.toString(), icon: TrendingUp, color: "text-emerald-600 bg-emerald-50" },
                        { label: "Stok Menipis", value: STOCK_ITEMS.filter(i => i.status === "low").length.toString(), icon: AlertTriangle, color: "text-amber-600 bg-amber-50" },
                        { label: "Stok Kritis", value: STOCK_ITEMS.filter(i => i.status === "critical").length.toString(), icon: AlertTriangle, color: "text-red-600 bg-red-50" },
                    ].map(s => (
                        <Card key={s.label} className="p-3 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-2 mb-1">
                                <div className={`p-1.5 rounded-md ${s.color}`}><s.icon className="w-3.5 h-3.5" /></div>
                                <span className="text-xs text-gray-400">{s.label}</span>
                            </div>
                            <p className="text-xl font-extrabold text-gray-900">{s.value}</p>
                        </Card>
                    ))}
                </div>

                {/* Search & Filter */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cari produk..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                        />
                    </div>
                    <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
                        {WAREHOUSES.map(w => (
                            <button
                                key={w}
                                onClick={() => setActiveWarehouse(w)}
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${activeWarehouse === w ? "bg-[#206536] text-white shadow-sm" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}
                            >
                                {w}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stock List */}
                {filtered.length === 0 ? (
                    <div className="text-center py-16">
                        <Warehouse className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-gray-700 mb-1">Tidak ada stok ditemukan</h3>
                        <p className="text-sm text-gray-400">Ubah filter atau kata kunci pencarian</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {filtered.map(item => (
                            <Card key={item.id} className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all cursor-pointer" onClick={() => setSelectedItem(item)}>
                                <div className="flex items-center gap-4">
                                    <div className={`p-2.5 rounded-lg shrink-0 ${item.status === "critical" ? "bg-red-100" : item.status === "low" ? "bg-amber-100" : "bg-emerald-100"}`}>
                                        <Package className={`w-5 h-5 ${item.status === "critical" ? "text-red-600" : item.status === "low" ? "text-amber-600" : "text-emerald-600"}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-sm font-bold text-gray-900 truncate">{item.name}</h3>
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.statusColor}`}>{item.statusLabel}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-0.5">{item.category} · {item.warehouse}</p>
                                        <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5"><MapPin className="w-3 h-3" />{item.location}</p>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <p className="text-sm font-bold text-gray-900">{item.stock} {item.unit}</p>
                                        <p className="text-[11px] text-gray-400">Min: {item.minStock} {item.unit}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </section>

            {/* Detail Modal */}
            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedItem(null)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h2 className="text-lg font-bold text-gray-900">Detail Stok</h2>
                            <button onClick={() => setSelectedItem(null)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 cursor-pointer"><X className="w-5 h-5" /></button>
                        </div>
                        <div className="px-6 py-5 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">{selectedItem.id}</span>
                                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${selectedItem.statusColor}`}>{selectedItem.statusLabel}</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{selectedItem.name}</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { label: "Kategori", value: selectedItem.category },
                                    { label: "Gudang", value: selectedItem.warehouse },
                                    { label: "Stok Saat Ini", value: `${selectedItem.stock} ${selectedItem.unit}` },
                                    { label: "Min. Stok", value: `${selectedItem.minStock} ${selectedItem.unit}` },
                                    { label: "Lokasi", value: selectedItem.location },
                                    { label: "Status", value: selectedItem.statusLabel },
                                ].map(d => (
                                    <div key={d.label} className="p-3 rounded-xl bg-gray-50">
                                        <p className="text-[11px] text-gray-400">{d.label}</p>
                                        <p className="text-sm font-semibold text-gray-800 mt-0.5">{d.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-end px-6 py-4 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
                            <Button variant="outline" onClick={() => setSelectedItem(null)} className="cursor-pointer text-sm">Tutup</Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default GudangContent
