"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Package, Truck, CheckCircle2, XCircle, Clock, ArrowLeft, ChevronRight, X, MapPin, CreditCard, Copy, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const TABS = [
    { label: "Semua", value: "semua" },
    { label: "Diproses", value: "diproses", icon: Clock },
    { label: "Dikirim", value: "dikirim", icon: Truck },
    { label: "Selesai", value: "selesai", icon: CheckCircle2 },
    { label: "Dibatalkan", value: "dibatalkan", icon: XCircle },
]

interface OrderItem {
    image: string
    title: string
    qty: number
    price: string
}

interface Order {
    id: string
    date: string
    status: string
    statusLabel: string
    statusColor: string
    items: OrderItem[]
    total: string
    seller: string
    shippingAddress: string
    shippingMethod: string
    paymentMethod: string
    trackingNumber: string | null
    timeline: { label: string; date: string; done: boolean }[]
}

const ORDERS: Order[] = [
    {
        id: "ORD-20250310-001",
        date: "10 Maret 2025",
        status: "dikirim",
        statusLabel: "Sedang Dikirim",
        statusColor: "bg-blue-100 text-blue-700",
        items: [
            { image: "/hero-section-bg.png", title: "Beras Organik Premium Cianjur", qty: 2, price: "Rp 36.000" },
            { image: "/hero-section-bg.png", title: "Cabai Merah Keriting Segar", qty: 1, price: "Rp 45.000" },
        ],
        total: "Rp 81.000",
        seller: "Tani Makmur",
        shippingAddress: "Jl. Merdeka No. 123, RT 05/RW 02, Kel. Sukamaju, Kec. Cianjur, Kab. Cianjur, Jawa Barat 43211",
        shippingMethod: "JNE Reguler (2-3 hari)",
        paymentMethod: "Transfer Bank BCA",
        trackingNumber: "JNE1234567890",
        timeline: [
            { label: "Pesanan dibuat", date: "10 Mar 2025, 09:00", done: true },
            { label: "Pembayaran dikonfirmasi", date: "10 Mar 2025, 09:15", done: true },
            { label: "Sedang dikemas", date: "10 Mar 2025, 14:00", done: true },
            { label: "Dalam pengiriman", date: "11 Mar 2025, 08:30", done: true },
            { label: "Diterima", date: "-", done: false },
        ],
    },
    {
        id: "ORD-20250308-002",
        date: "8 Maret 2025",
        status: "diproses",
        statusLabel: "Sedang Diproses",
        statusColor: "bg-amber-100 text-amber-700",
        items: [
            { image: "/hero-section-bg.png", title: "Kopi Arabika Toraja Premium", qty: 1, price: "Rp 120.000" },
        ],
        total: "Rp 120.000",
        seller: "Kopi Nusantara",
        shippingAddress: "Jl. Merdeka No. 123, RT 05/RW 02, Kel. Sukamaju, Kec. Cianjur, Kab. Cianjur, Jawa Barat 43211",
        shippingMethod: "SiCepat Reguler (3-4 hari)",
        paymentMethod: "GoPay",
        trackingNumber: null,
        timeline: [
            { label: "Pesanan dibuat", date: "8 Mar 2025, 16:30", done: true },
            { label: "Pembayaran dikonfirmasi", date: "8 Mar 2025, 16:35", done: true },
            { label: "Sedang dikemas", date: "-", done: false },
            { label: "Dalam pengiriman", date: "-", done: false },
            { label: "Diterima", date: "-", done: false },
        ],
    },
    {
        id: "ORD-20250305-003",
        date: "5 Maret 2025",
        status: "selesai",
        statusLabel: "Selesai",
        statusColor: "bg-emerald-100 text-emerald-700",
        items: [
            { image: "/hero-section-bg.png", title: "Madu Hutan Asli Sumbawa", qty: 2, price: "Rp 170.000" },
            { image: "/hero-section-bg.png", title: "Gula Aren Organik", qty: 1, price: "Rp 45.000" },
        ],
        total: "Rp 215.000",
        seller: "Madu Asli",
        shippingAddress: "Jl. Sudirman No. 45, Gedung Graha Lt. 3, Jakarta Selatan, DKI Jakarta 12190",
        shippingMethod: "J&T Express (2-3 hari)",
        paymentMethod: "Transfer Bank Mandiri",
        trackingNumber: "JT9876543210",
        timeline: [
            { label: "Pesanan dibuat", date: "5 Mar 2025, 10:00", done: true },
            { label: "Pembayaran dikonfirmasi", date: "5 Mar 2025, 10:10", done: true },
            { label: "Sedang dikemas", date: "5 Mar 2025, 15:00", done: true },
            { label: "Dalam pengiriman", date: "6 Mar 2025, 09:00", done: true },
            { label: "Diterima", date: "8 Mar 2025, 14:00", done: true },
        ],
    },
    {
        id: "ORD-20250301-004",
        date: "1 Maret 2025",
        status: "selesai",
        statusLabel: "Selesai",
        statusColor: "bg-emerald-100 text-emerald-700",
        items: [
            { image: "/hero-section-bg.png", title: "Tomat Cherry Hidroponik", qty: 3, price: "Rp 105.000" },
        ],
        total: "Rp 105.000",
        seller: "Green Farm",
        shippingAddress: "Jl. Merdeka No. 123, RT 05/RW 02, Kel. Sukamaju, Kec. Cianjur, Kab. Cianjur, Jawa Barat 43211",
        shippingMethod: "AnterAja Reguler (2-3 hari)",
        paymentMethod: "OVO",
        trackingNumber: "ANT1122334455",
        timeline: [
            { label: "Pesanan dibuat", date: "1 Mar 2025, 11:00", done: true },
            { label: "Pembayaran dikonfirmasi", date: "1 Mar 2025, 11:05", done: true },
            { label: "Sedang dikemas", date: "1 Mar 2025, 16:00", done: true },
            { label: "Dalam pengiriman", date: "2 Mar 2025, 08:00", done: true },
            { label: "Diterima", date: "3 Mar 2025, 15:30", done: true },
        ],
    },
    {
        id: "ORD-20250225-005",
        date: "25 Februari 2025",
        status: "dibatalkan",
        statusLabel: "Dibatalkan",
        statusColor: "bg-red-100 text-red-700",
        items: [
            { image: "/hero-section-bg.png", title: "Monstera Deliciosa", qty: 1, price: "Rp 150.000" },
        ],
        total: "Rp 150.000",
        seller: "Green Decor",
        shippingAddress: "Jl. Merdeka No. 123, RT 05/RW 02, Kel. Sukamaju, Kec. Cianjur, Kab. Cianjur, Jawa Barat 43211",
        shippingMethod: "JNE Reguler (2-3 hari)",
        paymentMethod: "Transfer Bank BRI",
        trackingNumber: null,
        timeline: [
            { label: "Pesanan dibuat", date: "25 Feb 2025, 13:00", done: true },
            { label: "Pembayaran dikonfirmasi", date: "25 Feb 2025, 13:10", done: true },
            { label: "Dibatalkan oleh pembeli", date: "25 Feb 2025, 14:00", done: true },
        ],
    },
]

const PesananContent = () => {
    const [activeTab, setActiveTab] = useState("semua")
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

    const filtered = activeTab === "semua" ? ORDERS : ORDERS.filter(o => o.status === activeTab)

    const copyTracking = (trackingNumber: string) => {
        navigator.clipboard.writeText(trackingNumber)
        toast.success("Nomor resi disalin ke clipboard")
    }

    const handleConfirmReceived = (orderId: string) => {
        toast.success("Pesanan dikonfirmasi telah diterima")
        setSelectedOrder(null)
    }

    const handleBuyAgain = () => {
        toast.info("Menambahkan produk ke keranjang...")
        setSelectedOrder(null)
    }

    return (
        <>
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <Link href="/marketplace" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </Link>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Pesanan Saya</h1>
                        <p className="text-gray-500 text-sm mt-0.5">Lihat dan pantau semua pesanan Anda</p>
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

                {/* Orders List */}
                {filtered.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                            <Package className="w-10 h-10 text-gray-300" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1">Belum Ada Pesanan</h3>
                        <p className="text-gray-500 text-sm mb-5">Pesanan dengan status ini belum ada</p>
                        <Link href="/marketplace">
                            <Button className="bg-[#609A26] hover:bg-[#4e7e1f] text-white font-semibold px-6 cursor-pointer">
                                Belanja Sekarang
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filtered.map((order) => (
                            <Card key={order.id} className="rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                {/* Order Header */}
                                <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <Package className="w-4 h-4 text-gray-400" />
                                        <div>
                                            <p className="text-xs font-mono text-gray-500">{order.id}</p>
                                            <p className="text-[11px] text-gray-400">{order.date}</p>
                                        </div>
                                    </div>
                                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${order.statusColor}`}>
                                        {order.statusLabel}
                                    </span>
                                </div>

                                {/* Order Items */}
                                <div className="p-5">
                                    <div className="space-y-3">
                                        {order.items.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-800 truncate">{item.title}</p>
                                                    <p className="text-xs text-gray-400">{item.qty}x</p>
                                                </div>
                                                <p className="text-sm font-semibold text-gray-700 shrink-0">{item.price}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Order Footer */}
                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                        <div>
                                            <p className="text-xs text-gray-400">Penjual: <span className="font-medium text-gray-600">{order.seller}</span></p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="text-right">
                                                <p className="text-xs text-gray-400">Total</p>
                                                <p className="text-sm font-bold text-[#1a4528]">{order.total}</p>
                                            </div>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="text-xs border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 cursor-pointer gap-1"
                                                onClick={() => setSelectedOrder(order)}
                                            >
                                                Detail
                                                <ChevronRight className="w-3 h-3" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </section>

            {/* ===== MODAL: Order Detail ===== */}
            {selectedOrder && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedOrder(null)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white rounded-t-2xl z-10">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Detail Pesanan</h2>
                                <p className="text-xs text-gray-500 font-mono">{selectedOrder.id}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${selectedOrder.statusColor}`}>
                                    {selectedOrder.statusLabel}
                                </span>
                                <button onClick={() => setSelectedOrder(null)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="px-6 py-5 space-y-6">
                            {/* Timeline / Status Tracking */}
                            <div>
                                <h3 className="text-sm font-bold text-gray-800 mb-3">Status Pesanan</h3>
                                <div className="relative pl-6">
                                    {selectedOrder.timeline.map((step, idx) => {
                                        const isLast = idx === selectedOrder.timeline.length - 1
                                        return (
                                            <div key={idx} className="relative pb-4 last:pb-0">
                                                {/* Vertical line */}
                                                {!isLast && (
                                                    <div className={`absolute left-[-16px] top-3 w-0.5 h-full ${step.done ? "bg-[#609A26]" : "bg-gray-200"}`} />
                                                )}
                                                {/* Dot */}
                                                <div className={`absolute left-[-20px] top-1 w-2.5 h-2.5 rounded-full border-2 ${
                                                    step.done
                                                        ? "bg-[#609A26] border-[#609A26]"
                                                        : "bg-white border-gray-300"
                                                }`} />
                                                <div>
                                                    <p className={`text-sm ${step.done ? "font-medium text-gray-800" : "text-gray-400"}`}>{step.label}</p>
                                                    <p className="text-[11px] text-gray-400">{step.date}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <Separator />

                            {/* Products */}
                            <div>
                                <h3 className="text-sm font-bold text-gray-800 mb-3">Produk Dipesan</h3>
                                <div className="space-y-3">
                                    {selectedOrder.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                                            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                                                <Image src={item.image} alt={item.title} fill className="object-cover" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-800">{item.title}</p>
                                                <p className="text-xs text-gray-400 mt-0.5">{item.qty}x · {item.price}</p>
                                            </div>
                                            <p className="text-sm font-bold text-gray-700 shrink-0">{item.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Separator />

                            {/* Shipping & Payment Info */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4 text-[#609A26]" />
                                        Alamat Pengiriman
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{selectedOrder.shippingAddress}</p>
                                    <p className="text-xs text-gray-400 mt-2">{selectedOrder.shippingMethod}</p>
                                    {selectedOrder.trackingNumber && (
                                        <div className="flex items-center gap-2 mt-2">
                                            <p className="text-xs text-gray-500">Resi: <span className="font-mono font-semibold text-gray-700">{selectedOrder.trackingNumber}</span></p>
                                            <button
                                                onClick={() => copyTracking(selectedOrder.trackingNumber!)}
                                                className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-[#206536] cursor-pointer transition-colors"
                                            >
                                                <Copy className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-1.5">
                                        <CreditCard className="w-4 h-4 text-[#609A26]" />
                                        Pembayaran
                                    </h3>
                                    <p className="text-sm text-gray-600">{selectedOrder.paymentMethod}</p>
                                    <div className="mt-3 space-y-1.5">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-400">Subtotal</span>
                                            <span className="text-gray-600">{selectedOrder.total}</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-400">Ongkir</span>
                                            <span className="text-gray-600">Rp 15.000</span>
                                        </div>
                                        <Separator className="!my-2" />
                                        <div className="flex justify-between">
                                            <span className="text-sm font-bold text-gray-800">Total</span>
                                            <span className="text-sm font-extrabold text-[#1a4528]">{selectedOrder.total}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Seller Info */}
                            <div className="p-4 rounded-xl bg-[#609A26]/5 border border-[#609A26]/20">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-[#206536] flex items-center justify-center">
                                            <Package className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800">{selectedOrder.seller}</p>
                                            <p className="text-[11px] text-gray-500">Penjual Terverifikasi</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm" className="text-xs border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 cursor-pointer">
                                        Chat Penjual
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl sticky bottom-0">
                            {selectedOrder.status === "dikirim" && (
                                <Button
                                    onClick={() => handleConfirmReceived(selectedOrder.id)}
                                    className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer gap-1.5 text-sm"
                                >
                                    <CheckCircle2 className="w-4 h-4" />
                                    Pesanan Diterima
                                </Button>
                            )}
                            {selectedOrder.status === "selesai" && (
                                <>
                                    <Button
                                        variant="outline"
                                        onClick={handleBuyAgain}
                                        className="border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 cursor-pointer gap-1.5 text-sm"
                                    >
                                        <Package className="w-4 h-4" />
                                        Beli Lagi
                                    </Button>
                                    <Button
                                        className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer gap-1.5 text-sm"
                                        onClick={() => { toast.info("Fitur ulasan akan segera hadir!"); setSelectedOrder(null) }}
                                    >
                                        <Star className="w-4 h-4" />
                                        Beri Ulasan
                                    </Button>
                                </>
                            )}
                            {selectedOrder.status === "dibatalkan" && (
                                <Button
                                    variant="outline"
                                    onClick={handleBuyAgain}
                                    className="border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 cursor-pointer gap-1.5 text-sm"
                                >
                                    <Package className="w-4 h-4" />
                                    Pesan Lagi
                                </Button>
                            )}
                            <Button variant="outline" size="sm" onClick={() => setSelectedOrder(null)} className="cursor-pointer text-sm">
                                Tutup
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PesananContent
