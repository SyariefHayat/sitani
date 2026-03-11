"use client"

import React, { useState } from 'react'
import {
    Users,
    ShoppingBasket,
    Truck,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    ChevronRight,
    Leaf,
    Package,
    Circle
} from 'lucide-react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from 'recharts'

// ==================== DATA ====================

const statCards = [
    { label: 'User terdaftar', value: '525.3K', change: '+12%', up: true, icon: Users, color: 'from-emerald-500 to-emerald-600', bgIcon: 'bg-emerald-50', textIcon: 'text-emerald-600' },
    { label: 'Produk Aktif', value: '2.480', change: '+8%', up: true, icon: ShoppingBasket, color: 'from-amber-500 to-amber-600', bgIcon: 'bg-amber-50', textIcon: 'text-amber-600' },
    { label: 'Logistik Investasi Tertium', value: '1.275', change: '-3%', up: false, icon: Truck, color: 'from-blue-500 to-blue-600', bgIcon: 'bg-blue-50', textIcon: 'text-blue-600' },
    { label: 'Investasi Investasi tani', value: '10.25M', change: '+15%', up: true, icon: TrendingUp, color: 'from-violet-500 to-violet-600', bgIcon: 'bg-violet-50', textIcon: 'text-violet-600' },
]

const transactionData = [
    { name: 'Apr', value: 12000000 },
    { name: '3.4', value: 15000000 },
    { name: '5', value: 9000000 },
    { name: '5', value: 11000000 },
    { name: '6', value: 14000000 },
    { name: '7', value: 17000000 },
    { name: '8', value: 22000000 },
    { name: '9', value: 19000000 },
    { name: '10', value: 25000000 },
    { name: '12', value: 30000000 },
    { name: '14', value: 28000000 },
    { name: '15', value: 35000000 },
    { name: '16', value: 45000000 },
    { name: '18', value: 50000000 },
    { name: '20', value: 55000000 },
]

const userStatsData = [
    { name: 'Petani', value: 45.4, color: '#1a4528' },
    { name: 'Pembeli', value: 27.2, color: '#2d7a4a' },
    { name: 'Distributor', value: 18.8, color: '#f59e0b' },
    { name: 'Investor', value: 6.3, color: '#3b82f6' },
    { name: 'Akademi', value: 1.3, color: '#8b5cf6' },
]

const proyekInvestasi = [
    { komoditas: 'IR64.', petani: 'Kelompok Maju', lokasi: 'Jatik Tugas', target: 'Rp 75 Juta', status: 'Detail', statusColor: 'bg-emerald-100 text-emerald-700', emoji: '🌾' },
    { komoditas: 'Hortikultura Sayur', petani: 'Tugu Iiji Jitsme', lokasi: '', target: 'Rp 80 Juta', status: 'Diproses', statusColor: 'bg-blue-100 text-blue-700', emoji: '🥬' },
    { komoditas: 'Jagung Hibrida', petani: 'Usan Retman - Nida Sognata', lokasi: '', target: 'Rp 95 Juta', status: 'Dinegosiasi', statusColor: 'bg-orange-100 text-orange-700', emoji: '🌽' },
    { komoditas: 'Kota', petani: 'Verun', lokasi: 'Lampung', target: 'Rp 4.800 —', status: 'Update', statusColor: 'bg-gray-100 text-gray-700', emoji: '🫑' },
]

const nasionalStats = [
    { label: 'Petani Aktif', sublabel: 'Perkiraan Beberithags', value: '350.2K', icon: '👨‍🌾' },
    { label: 'Komoditas', sublabel: 'Jojyung Irsa', value: '475 Jenis', icon: '🌿' },
    { label: 'Total Proyek Terdanai', sublabel: 'Total Lampung', value: '320 Proyek', icon: '📊' },
    { label: 'Peserta Pelatihan', sublabel: 'Lampung', value: '15.8K', icon: '🎓' },
]

const produkHasilTani = [
    { foto: '🌾', produk: 'IR64.', kelompok: 'Kelompok Tani Jaya', lokasi: 'Kab. Kudus', hargaLama: '', harga: 'Rp 8.500', status: 'Detail', statusColor: 'bg-emerald-100 text-emerald-700' },
    { foto: '🍚', produk: 'Menthik Wangi', kelompok: 'H. Serbani', lokasi: 'H. Subandi', hargaLama: '', harga: 'Rp 11.000', status: 'Detail', statusColor: 'bg-emerald-100 text-emerald-700' },
    { foto: '🌽', produk: 'Jagung', kelompok: 'Mertrk Texta', lokasi: 'Lampung', hargaLama: 'Rp 0.009.', harga: 'Rp 4.800', status: 'Approve', statusColor: 'bg-green-100 text-green-700' },
]

const logistikAktif = [
    { produk: 'Jagung|rwik', proses: 'Diproses', statusColor: 'bg-blue-100 text-blue-700', detail: 'Abatmen Dertumanus' },
    { produk: 'Sortifikasi Agus Karmo', proses: 'Diproses', statusColor: 'bg-blue-100 text-blue-700', detail: 'Lahst Lahs' },
    { produk: 'Hidroponik', proses: 'Approve', statusColor: 'bg-green-100 text-green-700', detail: 'Anprosea - Reky Aputar' },
    { produk: '5.600 — 5.200 kg', proses: 'Approve', statusColor: 'bg-green-100 text-green-700', detail: '' },
]

const pengirimanData = [
    { id: '#00128942', tujuan: 'Kab. Kudus', status: 'Diproses', statusColor: 'bg-blue-100 text-blue-700', supir: 'L300-XYZ', kendaraan: 'L300-XYZ' },
    { id: '#00127631', tujuan: 'Surabaya', status: 'Djemput', statusColor: 'bg-amber-100 text-amber-700', supir: 'Box. BD-7338', kendaraan: 'Box BD-7328' },
    { id: '#00128556', tujuan: 'Paser Sentral', status: 'Diproses', statusColor: 'bg-blue-100 text-blue-700', supir: 'B0 983 860', kendaraan: 'Tornton' },
]

// ==================== COMPONENTS ====================

const DashboardContent = () => {
    const [chartTab, setChartTab] = useState<'Harian' | 'Mingguan' | 'Bulanan'>('Bulanan')

    return (
        <div className="space-y-6">
            {/* Welcome Header */}
            <div className="bg-gradient-to-r from-[#1a4528] via-[#2d5a3d] to-[#3d7a52] rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 right-20 w-40 h-40 bg-white/5 rounded-full translate-y-1/2"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-1">Selamat datang, Andi Admin!</h2>
                    <p className="text-white/70 text-sm">Pantau aktivitas ekosistem pertanian <span className="font-semibold text-white">SiTani</span></p>
                </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((card, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-start justify-between mb-3">
                            <div className={`w-10 h-10 rounded-xl ${card.bgIcon} flex items-center justify-center`}>
                                <card.icon className={`w-5 h-5 ${card.textIcon}`} />
                            </div>
                            <span className={`text-xs font-medium flex items-center gap-0.5 ${card.up ? 'text-emerald-600' : 'text-red-500'}`}>
                                {card.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                {card.change}
                            </span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                        <p className="text-xs text-gray-500 mt-1">{card.label}</p>
                    </div>
                ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Transaction Chart */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 p-5">
                    <div className="flex items-center justify-between mb-1">
                        <div>
                            <h3 className="text-base font-bold text-gray-900">Transaksi <span className="text-gray-500 font-normal">30 Hari Terakhir</span></h3>
                            <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-lg font-bold text-gray-900">↗ 1.9x</span>
                                    <span className="text-xs text-gray-500">Transaksi Gain</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-lg font-bold text-emerald-600">← Rp 78.3M</span>
                                    <span className="text-xs text-gray-500">Uptick Transaksi Totalamen</span>
                                </div>
                            </div>
                        </div>
                        <button className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors font-medium">
                            Masukkan pasar →
                        </button>
                    </div>

                    <div className="h-[200px] mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={transactionData}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#1a4528" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#1a4528" stopOpacity={0.02} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v / 1000000}%`} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '12px' }}
                                    formatter={(value: number) => [`Rp ${(value / 1000000).toFixed(1)}M`, 'Transaksi']}
                                />
                                <Area type="monotone" dataKey="value" stroke="#1a4528" strokeWidth={2} fill="url(#colorValue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Chart Tabs */}
                    <div className="flex gap-1 mt-3 bg-gray-100 rounded-lg p-1 w-fit">
                        {(['Harian', 'Mingguan', 'Bulanan'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setChartTab(tab)}
                                className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${
                                    chartTab === tab
                                        ? 'bg-[#1a4528] text-white shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* User Statistics Pie Chart */}
                <div className="bg-white rounded-xl border border-gray-100 p-5">
                    <h3 className="text-base font-bold text-gray-900 mb-4">Statistik Pengguna</h3>
                    <div className="flex justify-center">
                        <div className="w-[180px] h-[180px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={userStatsData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={50}
                                        outerRadius={80}
                                        paddingAngle={3}
                                        dataKey="value"
                                    >
                                        {userStatsData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value: number) => [`${value}%`, '']} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    {/* Legend */}
                    <div className="mt-4 space-y-2.5">
                        {userStatsData.map((item, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                                    <span className="text-sm text-gray-600">{item.name}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-sm font-semibold text-gray-900">{item.value}%</span>
                                    <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Proyek Investasi & Nasional Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Proyek Investasi Terbaru */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 p-5">
                    <h3 className="text-base font-bold text-gray-900 mb-4">Proyek Investasi <span className="text-gray-500 font-normal">Terbaru</span></h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-gray-500 text-xs border-b border-gray-100">
                                    <th className="pb-3 font-medium">Komoditas</th>
                                    <th className="pb-3 font-medium">Petani</th>
                                    <th className="pb-3 font-medium">Target Dana</th>
                                    <th className="pb-3 font-medium">Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                {proyekInvestasi.map((item, i) => (
                                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-3">
                                            <div className="flex items-center gap-2.5">
                                                <span className="text-xl">{item.emoji}</span>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{item.komoditas}</p>
                                                    {item.lokasi && <p className="text-xs text-gray-400">{item.lokasi}</p>}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 text-gray-600">{item.petani}</td>
                                        <td className="py-3 font-medium text-gray-900">{item.target}</td>
                                        <td className="py-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.statusColor}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Nasional Stats */}
                <div className="bg-white rounded-xl border border-gray-100 p-5">
                    <h3 className="text-base font-bold text-gray-900 mb-4">Nasional Stats</h3>
                    <div className="space-y-4">
                        {nasionalStats.map((item, i) => (
                            <div key={i} className="flex items-center justify-between group hover:bg-gray-50 p-2 -mx-2 rounded-lg transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">{item.icon}</span>
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">{item.label}</p>
                                        <p className="text-xs text-gray-400">{item.sublabel}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-sm font-bold text-gray-900">{item.value}</span>
                                    <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 text-center text-xs text-gray-500 hover:text-[#1a4528] transition-colors py-2 border border-gray-100 rounded-lg hover:border-[#1a4528]/20">
                        Lihat Semua →
                    </button>
                </div>
            </div>

            {/* Produk Hasil Tani & Logistik Aktif */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Produk Hasil Tani Terbaru */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 p-5">
                    <h3 className="text-base font-bold text-gray-900 mb-4">Produk Hasil Tani <span className="text-gray-500 font-normal">Terbaru</span></h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-gray-500 text-xs border-b border-gray-100">
                                    <th className="pb-3 font-medium">Foto</th>
                                    <th className="pb-3 font-medium">Produk ↓</th>
                                    <th className="pb-3 font-medium">Petani ↓</th>
                                    <th className="pb-3 font-medium">Harga ↓</th>
                                    <th className="pb-3 font-medium">Harga</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produkHasilTani.map((item, i) => (
                                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-3">
                                            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-lg">
                                                {item.foto}
                                            </div>
                                        </td>
                                        <td className="py-3">
                                            <p className="font-semibold text-gray-900">{item.produk}</p>
                                            <p className="text-xs text-gray-400">{item.kelompok}</p>
                                        </td>
                                        <td className="py-3 text-gray-600">{item.lokasi}</td>
                                        <td className="py-3 font-medium text-gray-900">{item.harga}</td>
                                        <td className="py-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.statusColor}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Logistik Aktif */}
                <div className="bg-white rounded-xl border border-gray-100 p-5">
                    <h3 className="text-base font-bold text-gray-900 mb-4">Logistik Aktif</h3>
                    <div className="space-y-3">
                        {logistikAktif.map((item, i) => (
                            <div key={i} className="flex items-start justify-between p-3 bg-gray-50/70 rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="flex items-start gap-2.5">
                                    <Circle className="w-2.5 h-2.5 mt-1.5 text-emerald-500 fill-emerald-500 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">Produk &#34;{item.produk}</p>
                                        <p className="text-xs text-gray-400 mt-0.5">{item.detail}</p>
                                    </div>
                                </div>
                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-medium flex-shrink-0 ${item.statusColor}`}>
                                    {item.proses}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Table - Pengiriman */}
            <div className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-left text-gray-500 text-xs border-b border-gray-100">
                                <th className="pb-3 font-medium">ID Tujuan</th>
                                <th className="pb-3 font-medium">Tujuan</th>
                                <th className="pb-3 font-medium">Status</th>
                                <th className="pb-3 font-medium">Supir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pengirimanData.map((item, i) => (
                                <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                                    <td className="py-3">
                                        <div className="flex items-center gap-2">
                                            <Package className="w-4 h-4 text-gray-400" />
                                            <span className="font-mono font-semibold text-gray-900">{item.id}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 text-gray-600">{item.tujuan}</td>
                                    <td className="py-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.statusColor}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="py-3">
                                        <div>
                                            <p className="font-medium text-gray-900">{item.supir}</p>
                                            <p className="text-xs text-gray-400">{item.kendaraan}</p>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DashboardContent
