"use client"

import React, { useState } from 'react'
import {
    Search,
    Filter,
    Plus,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight,
    ArrowUpDown,
    Eye,
    Pencil,
    Trash2,
    Download,
    UserCheck,
    UserX,
    Users,
    Sprout,
    ShoppingCart,
    Truck as TruckIcon,
    TrendingUp,
    GraduationCap,
    X
} from 'lucide-react'

// ==================== TYPES ====================

type UserRole = 'Petani' | 'Pembeli' | 'Distributor' | 'Investor' | 'Akademi'
type UserStatus = 'Aktif' | 'Nonaktif' | 'Pending'

interface UserData {
    id: string
    name: string
    email: string
    role: UserRole
    status: UserStatus
    joinDate: string
    location: string
    phone: string
    avatar: string
}

// ==================== DATA ====================

const usersData: UserData[] = [
    { id: 'USR001', name: 'Ahmad Surya', email: 'ahmad.surya@email.com', role: 'Petani', status: 'Aktif', joinDate: '2025-01-15', location: 'Kab. Kudus, Jawa Tengah', phone: '+62 812-3456-7890', avatar: 'AS' },
    { id: 'USR002', name: 'Budi Santoso', email: 'budi.santoso@email.com', role: 'Pembeli', status: 'Aktif', joinDate: '2025-02-20', location: 'Surabaya, Jawa Timur', phone: '+62 813-2345-6789', avatar: 'BS' },
    { id: 'USR003', name: 'Citra Dewi', email: 'citra.dewi@email.com', role: 'Distributor', status: 'Aktif', joinDate: '2025-03-10', location: 'Bandung, Jawa Barat', phone: '+62 814-3456-7890', avatar: 'CD' },
    { id: 'USR004', name: 'Dani Pratama', email: 'dani.pratama@email.com', role: 'Investor', status: 'Pending', joinDate: '2025-04-05', location: 'Jakarta Selatan, DKI Jakarta', phone: '+62 815-4567-8901', avatar: 'DP' },
    { id: 'USR005', name: 'Eka Fitriani', email: 'eka.fitriani@email.com', role: 'Akademi', status: 'Aktif', joinDate: '2025-05-12', location: 'Yogyakarta, DIY', phone: '+62 816-5678-9012', avatar: 'EF' },
    { id: 'USR006', name: 'Fajar Hidayat', email: 'fajar.hidayat@email.com', role: 'Petani', status: 'Nonaktif', joinDate: '2025-01-28', location: 'Lampung, Lampung', phone: '+62 817-6789-0123', avatar: 'FH' },
    { id: 'USR007', name: 'Gita Purnama', email: 'gita.purnama@email.com', role: 'Pembeli', status: 'Aktif', joinDate: '2025-06-01', location: 'Semarang, Jawa Tengah', phone: '+62 818-7890-1234', avatar: 'GP' },
    { id: 'USR008', name: 'Hendra Wijaya', email: 'hendra.wijaya@email.com', role: 'Distributor', status: 'Aktif', joinDate: '2025-06-15', location: 'Medan, Sumatera Utara', phone: '+62 819-8901-2345', avatar: 'HW' },
    { id: 'USR009', name: 'Indah Lestari', email: 'indah.lestari@email.com', role: 'Petani', status: 'Aktif', joinDate: '2025-07-03', location: 'Malang, Jawa Timur', phone: '+62 821-9012-3456', avatar: 'IL' },
    { id: 'USR010', name: 'Joko Susanto', email: 'joko.susanto@email.com', role: 'Investor', status: 'Aktif', joinDate: '2025-07-20', location: 'Jakarta Pusat, DKI Jakarta', phone: '+62 822-0123-4567', avatar: 'JS' },
    { id: 'USR011', name: 'Kartika Sari', email: 'kartika.sari@email.com', role: 'Petani', status: 'Pending', joinDate: '2025-08-10', location: 'Bogor, Jawa Barat', phone: '+62 823-1234-5678', avatar: 'KS' },
    { id: 'USR012', name: 'Lukman Hakim', email: 'lukman.hakim@email.com', role: 'Akademi', status: 'Aktif', joinDate: '2025-08-25', location: 'Makassar, Sulawesi Selatan', phone: '+62 824-2345-6789', avatar: 'LH' },
]

const roleConfig: Record<UserRole, { color: string, bgColor: string, icon: React.ElementType }> = {
    Petani: { color: 'text-emerald-700', bgColor: 'bg-emerald-50', icon: Sprout },
    Pembeli: { color: 'text-blue-700', bgColor: 'bg-blue-50', icon: ShoppingCart },
    Distributor: { color: 'text-amber-700', bgColor: 'bg-amber-50', icon: TruckIcon },
    Investor: { color: 'text-violet-700', bgColor: 'bg-violet-50', icon: TrendingUp },
    Akademi: { color: 'text-pink-700', bgColor: 'bg-pink-50', icon: GraduationCap },
}

const statusConfig: Record<UserStatus, { color: string, bgColor: string }> = {
    Aktif: { color: 'text-emerald-700', bgColor: 'bg-emerald-100' },
    Nonaktif: { color: 'text-red-700', bgColor: 'bg-red-100' },
    Pending: { color: 'text-amber-700', bgColor: 'bg-amber-100' },
}

const roleOptions: UserRole[] = ['Petani', 'Pembeli', 'Distributor', 'Investor', 'Akademi']
const statusOptions: UserStatus[] = ['Aktif', 'Nonaktif', 'Pending']

// ==================== COMPONENT ====================

const UsersContent = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedRole, setSelectedRole] = useState<UserRole | 'Semua'>('Semua')
    const [selectedStatus, setSelectedStatus] = useState<UserStatus | 'Semua'>('Semua')
    const [currentPage, setCurrentPage] = useState(1)
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null)
    const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set())
    const [detailUser, setDetailUser] = useState<UserData | null>(null)

    const itemsPerPage = 8

    // Filter users
    const filteredUsers = usersData.filter((user) => {
        const matchSearch =
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.id.toLowerCase().includes(searchQuery.toLowerCase())
        const matchRole = selectedRole === 'Semua' || user.role === selectedRole
        const matchStatus = selectedStatus === 'Semua' || user.status === selectedStatus
        return matchSearch && matchRole && matchStatus
    })

    // Paginate
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    // Counts
    const totalUsers = usersData.length
    const activeUsers = usersData.filter(u => u.status === 'Aktif').length
    const pendingUsers = usersData.filter(u => u.status === 'Pending').length
    const inactiveUsers = usersData.filter(u => u.status === 'Nonaktif').length

    const toggleSelectAll = () => {
        if (selectedUsers.size === paginatedUsers.length) {
            setSelectedUsers(new Set())
        } else {
            setSelectedUsers(new Set(paginatedUsers.map(u => u.id)))
        }
    }

    const toggleSelectUser = (id: string) => {
        const next = new Set(selectedUsers)
        if (next.has(id)) {
            next.delete(id)
        } else {
            next.add(id)
        }
        setSelectedUsers(next)
    }

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Manajemen User</h1>
                    <p className="text-sm text-gray-500 mt-1">Kelola semua pengguna platform SiTani</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-[#1a4528] text-white rounded-lg text-sm font-medium hover:bg-[#2d5a3d] transition-colors shadow-sm">
                    <Plus className="w-4 h-4" />
                    Tambah User
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-xl font-bold text-gray-900">{totalUsers}</p>
                        <p className="text-xs text-gray-500">Total User</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                        <UserCheck className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                        <p className="text-xl font-bold text-gray-900">{activeUsers}</p>
                        <p className="text-xs text-gray-500">User Aktif</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                        <Users className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                        <p className="text-xl font-bold text-gray-900">{pendingUsers}</p>
                        <p className="text-xs text-gray-500">Pending</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                        <UserX className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                        <p className="text-xl font-bold text-gray-900">{inactiveUsers}</p>
                        <p className="text-xs text-gray-500">Nonaktif</p>
                    </div>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    {/* Search */}
                    <div className="relative flex-1 w-full sm:max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cari nama, email, atau ID..."
                            value={searchQuery}
                            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1) }}
                            className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5a3d]/30 focus:border-[#2d5a3d] transition-all placeholder:text-gray-400"
                        />
                    </div>

                    {/* Role Filter */}
                    <select
                        value={selectedRole}
                        onChange={(e) => { setSelectedRole(e.target.value as UserRole | 'Semua'); setCurrentPage(1) }}
                        className="px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5a3d]/30 focus:border-[#2d5a3d] transition-all text-gray-700"
                    >
                        <option value="Semua">Semua Role</option>
                        {roleOptions.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>

                    {/* Status Filter */}
                    <select
                        value={selectedStatus}
                        onChange={(e) => { setSelectedStatus(e.target.value as UserStatus | 'Semua'); setCurrentPage(1) }}
                        className="px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5a3d]/30 focus:border-[#2d5a3d] transition-all text-gray-700"
                    >
                        <option value="Semua">Semua Status</option>
                        {statusOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>

                    <div className="flex items-center gap-2 ml-auto">
                        <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                            <Download className="w-4 h-4" />
                            Export
                        </button>
                    </div>
                </div>

                {/* Selected count */}
                {selectedUsers.size > 0 && (
                    <div className="mt-3 flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                        <span className="text-sm text-blue-700 font-medium">{selectedUsers.size} user dipilih</span>
                        <button className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors font-medium">Hapus Terpilih</button>
                        <button onClick={() => setSelectedUsers(new Set())} className="text-xs text-blue-600 hover:underline ml-auto">Batal</button>
                    </div>
                )}

                {/* Users Table */}
                <div className="overflow-x-auto mt-4">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-left text-gray-500 text-xs border-b border-gray-100">
                                <th className="pb-3 font-medium w-10">
                                    <input
                                        type="checkbox"
                                        checked={paginatedUsers.length > 0 && selectedUsers.size === paginatedUsers.length}
                                        onChange={toggleSelectAll}
                                        className="w-4 h-4 rounded border-gray-300 text-[#1a4528] focus:ring-[#1a4528] cursor-pointer accent-[#1a4528]"
                                    />
                                </th>
                                <th className="pb-3 font-medium">
                                    <button className="flex items-center gap-1 hover:text-gray-700 transition-colors">User <ArrowUpDown className="w-3 h-3" /></button>
                                </th>
                                <th className="pb-3 font-medium">Role</th>
                                <th className="pb-3 font-medium">Status</th>
                                <th className="pb-3 font-medium">Lokasi</th>
                                <th className="pb-3 font-medium">
                                    <button className="flex items-center gap-1 hover:text-gray-700 transition-colors">Bergabung <ArrowUpDown className="w-3 h-3" /></button>
                                </th>
                                <th className="pb-3 font-medium text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedUsers.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="py-12 text-center text-gray-400">
                                        <Users className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                                        <p className="font-medium text-gray-500">Tidak ada user ditemukan</p>
                                        <p className="text-xs mt-1">Coba ubah filter pencarian Anda</p>
                                    </td>
                                </tr>
                            ) : (
                                paginatedUsers.map((user) => {
                                    const role = roleConfig[user.role]
                                    const status = statusConfig[user.status]
                                    const RoleIcon = role.icon
                                    return (
                                        <tr key={user.id} className={`border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors ${selectedUsers.has(user.id) ? 'bg-blue-50/40' : ''}`}>
                                            <td className="py-3">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedUsers.has(user.id)}
                                                    onChange={() => toggleSelectUser(user.id)}
                                                    className="w-4 h-4 rounded border-gray-300 text-[#1a4528] focus:ring-[#1a4528] cursor-pointer accent-[#1a4528]"
                                                />
                                            </td>
                                            <td className="py-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1a4528] to-[#3d7a52] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                                        {user.avatar}
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="font-semibold text-gray-900 truncate">{user.name}</p>
                                                        <p className="text-xs text-gray-400 truncate">{user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3">
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${role.bgColor} ${role.color}`}>
                                                    <RoleIcon className="w-3 h-3" />
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="py-3">
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status.bgColor} ${status.color}`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Aktif' ? 'bg-emerald-500' : user.status === 'Pending' ? 'bg-amber-500' : 'bg-red-500'}`}></span>
                                                    {user.status}
                                                </span>
                                            </td>
                                            <td className="py-3 text-gray-600 text-xs max-w-[160px] truncate">{user.location}</td>
                                            <td className="py-3 text-gray-500 text-xs">
                                                {new Date(user.joinDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                            </td>
                                            <td className="py-3 text-right">
                                                <div className="relative inline-block">
                                                    <button
                                                        onClick={() => setOpenDropdownId(openDropdownId === user.id ? null : user.id)}
                                                        className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                                                    >
                                                        <MoreHorizontal className="w-4 h-4" />
                                                    </button>
                                                    {openDropdownId === user.id && (
                                                        <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-1.5 animate-in fade-in slide-in-from-top-2">
                                                            <button
                                                                onClick={() => { setDetailUser(user); setOpenDropdownId(null) }}
                                                                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                            >
                                                                <Eye className="w-3.5 h-3.5" /> Lihat Detail
                                                            </button>
                                                            <button className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                                                <Pencil className="w-3.5 h-3.5" /> Edit User
                                                            </button>
                                                            <div className="border-t border-gray-100 my-1"></div>
                                                            <button className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                                                                <Trash2 className="w-3.5 h-3.5" /> Hapus
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500">
                            Menampilkan {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredUsers.length)} dari {filteredUsers.length} user
                        </p>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-8 h-8 rounded-lg text-xs font-medium transition-all ${
                                        currentPage === page
                                            ? 'bg-[#1a4528] text-white shadow-sm'
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            {detailUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setDetailUser(null)}>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-[#1a4528] to-[#3d7a52] p-6 text-white relative">
                            <button onClick={() => setDetailUser(null)} className="absolute top-4 right-4 p-1 rounded-lg hover:bg-white/20 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold backdrop-blur-sm">
                                    {detailUser.avatar}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{detailUser.name}</h3>
                                    <p className="text-white/70 text-sm">{detailUser.email}</p>
                                </div>
                            </div>
                        </div>
                        {/* Modal Body */}
                        <div className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs text-gray-400 mb-1">ID User</p>
                                    <p className="text-sm font-semibold text-gray-900 font-mono">{detailUser.id}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 mb-1">Role</p>
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${roleConfig[detailUser.role].bgColor} ${roleConfig[detailUser.role].color}`}>
                                        {detailUser.role}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 mb-1">Status</p>
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusConfig[detailUser.status].bgColor} ${statusConfig[detailUser.status].color}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${detailUser.status === 'Aktif' ? 'bg-emerald-500' : detailUser.status === 'Pending' ? 'bg-amber-500' : 'bg-red-500'}`}></span>
                                        {detailUser.status}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 mb-1">Bergabung</p>
                                    <p className="text-sm font-medium text-gray-900">
                                        {new Date(detailUser.joinDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-gray-100 pt-4">
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">Telepon</p>
                                        <p className="text-sm font-medium text-gray-900">{detailUser.phone}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">Lokasi</p>
                                        <p className="text-sm font-medium text-gray-900">{detailUser.location}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 pt-2">
                                <button className="flex-1 px-4 py-2.5 bg-[#1a4528] text-white rounded-lg text-sm font-medium hover:bg-[#2d5a3d] transition-colors">
                                    Edit User
                                </button>
                                <button onClick={() => setDetailUser(null)} className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Click outside dropdown to close */}
            {openDropdownId && (
                <div className="fixed inset-0 z-10" onClick={() => setOpenDropdownId(null)} />
            )}
        </div>
    )
}

export default UsersContent
