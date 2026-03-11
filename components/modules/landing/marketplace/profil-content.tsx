"use client"

import { useState, useRef } from "react"
import { User, Mail, Phone, MapPin, Calendar, ShoppingCart, Package, Edit3, Camera, Shield, Star, X, Save, Trash2, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { toast } from "sonner"

const STATS = [
    { icon: ShoppingCart, label: "Total Pesanan", value: "24", color: "text-[#609A26] bg-[#609A26]/10" },
    { icon: Package, label: "Pesanan Selesai", value: "21", color: "text-emerald-600 bg-emerald-50" },
    { icon: Star, label: "Ulasan Diberikan", value: "18", color: "text-amber-600 bg-amber-50" },
]

interface Address {
    id: string
    label: string
    recipientName: string
    phone: string
    address: string
    isDefault: boolean
}

interface ProfileData {
    name: string
    email: string
    phone: string
    avatarUrl: string
}

const INITIAL_ADDRESSES: Address[] = [
    { id: "1", label: "Rumah (Utama)", recipientName: "Andi Pratama", phone: "+62 812-3456-7890", address: "Jl. Merdeka No. 123, RT 05/RW 02, Kel. Sukamaju, Kec. Cianjur, Kab. Cianjur, Jawa Barat 43211", isDefault: true },
    { id: "2", label: "Kantor", recipientName: "Andi Pratama", phone: "+62 812-3456-7890", address: "Jl. Sudirman No. 45, Gedung Graha Lt. 3, Jakarta Selatan, DKI Jakarta 12190", isDefault: false },
]

const ProfilContent = () => {
    // Profile state
    const [profile, setProfile] = useState<ProfileData>({
        name: "Andi Pratama",
        email: "andi@sitani.id",
        phone: "+62 812-3456-7890",
        avatarUrl: "https://github.com/shadcn.png",
    })

    // Address state
    const [addresses, setAddresses] = useState<Address[]>(INITIAL_ADDRESSES)

    // Modal states
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false)
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false)
    const [editingAddress, setEditingAddress] = useState<Address | null>(null)
    const [deletingAddressId, setDeletingAddressId] = useState<string | null>(null)

    // Form states for editing profile
    const [editName, setEditName] = useState(profile.name)
    const [editEmail, setEditEmail] = useState(profile.email)
    const [editPhone, setEditPhone] = useState(profile.phone)

    // Form states for address
    const [addrLabel, setAddrLabel] = useState("")
    const [addrRecipient, setAddrRecipient] = useState("")
    const [addrPhone, setAddrPhone] = useState("")
    const [addrAddress, setAddrAddress] = useState("")
    const [addrIsDefault, setAddrIsDefault] = useState(false)

    // File input ref
    const fileInputRef = useRef<HTMLInputElement>(null)

    // --- Profile Edit handlers ---
    const openEditProfile = () => {
        setEditName(profile.name)
        setEditEmail(profile.email)
        setEditPhone(profile.phone)
        setIsEditProfileOpen(true)
    }

    const saveProfile = () => {
        setProfile({ ...profile, name: editName, email: editEmail, phone: editPhone })
        setIsEditProfileOpen(false)
        toast.success("Profil berhasil diperbarui")
    }

    // --- Avatar upload handler ---
    const handleAvatarClick = () => {
        fileInputRef.current?.click()
    }

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error("Ukuran file maksimal 5MB")
                return
            }
            const url = URL.createObjectURL(file)
            setProfile({ ...profile, avatarUrl: url })
            toast.success("Foto profil berhasil diubah")
        }
    }

    // --- Address handlers ---
    const openAddAddress = () => {
        setEditingAddress(null)
        setAddrLabel("")
        setAddrRecipient(profile.name)
        setAddrPhone(profile.phone)
        setAddrAddress("")
        setAddrIsDefault(false)
        setIsAddressModalOpen(true)
    }

    const openEditAddress = (addr: Address) => {
        setEditingAddress(addr)
        setAddrLabel(addr.label)
        setAddrRecipient(addr.recipientName)
        setAddrPhone(addr.phone)
        setAddrAddress(addr.address)
        setAddrIsDefault(addr.isDefault)
        setIsAddressModalOpen(true)
    }

    const saveAddress = () => {
        if (!addrLabel.trim() || !addrRecipient.trim() || !addrPhone.trim() || !addrAddress.trim()) {
            toast.error("Semua field harus diisi")
            return
        }

        if (editingAddress) {
            // Update existing
            setAddresses(prev => prev.map(a => {
                if (a.id === editingAddress.id) {
                    return { ...a, label: addrLabel, recipientName: addrRecipient, phone: addrPhone, address: addrAddress, isDefault: addrIsDefault }
                }
                if (addrIsDefault) return { ...a, isDefault: false }
                return a
            }))
            toast.success("Alamat berhasil diperbarui")
        } else {
            // Add new
            const newAddr: Address = {
                id: Date.now().toString(),
                label: addrLabel,
                recipientName: addrRecipient,
                phone: addrPhone,
                address: addrAddress,
                isDefault: addrIsDefault,
            }
            if (addrIsDefault) {
                setAddresses(prev => [...prev.map(a => ({ ...a, isDefault: false })), newAddr])
            } else {
                setAddresses(prev => [...prev, newAddr])
            }
            toast.success("Alamat baru berhasil ditambahkan")
        }
        setIsAddressModalOpen(false)
    }

    const confirmDeleteAddress = (id: string) => {
        setDeletingAddressId(id)
        setIsDeleteConfirmOpen(true)
    }

    const deleteAddress = () => {
        if (deletingAddressId) {
            setAddresses(prev => prev.filter(a => a.id !== deletingAddressId))
            toast.success("Alamat berhasil dihapus")
        }
        setIsDeleteConfirmOpen(false)
        setDeletingAddressId(null)
    }

    const setDefaultAddress = (id: string) => {
        setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })))
        toast.success("Alamat utama berhasil diubah")
    }

    return (
        <>
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <Link href="/marketplace" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </Link>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Profil Saya</h1>
                        <p className="text-gray-500 text-sm mt-0.5">Kelola informasi profil Anda</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Left Column — Profile Card */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card className="p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                            <div className="relative w-24 h-24 mx-auto mb-4">
                                <Avatar className="w-24 h-24 ring-4 ring-[#206536]/20">
                                    <AvatarImage src={profile.avatarUrl} />
                                    <AvatarFallback className="bg-[#206536] text-white text-2xl font-bold">
                                        {profile.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                                    </AvatarFallback>
                                </Avatar>
                                <button
                                    onClick={handleAvatarClick}
                                    className="absolute bottom-0 right-0 w-8 h-8 bg-[#206536] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1a5530] transition-colors cursor-pointer"
                                >
                                    <Camera className="w-4 h-4 text-white" />
                                </button>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleAvatarChange}
                                />
                            </div>
                            <h2 className="text-lg font-bold text-gray-900">{profile.name}</h2>
                            <p className="text-sm text-gray-500">{profile.email}</p>
                            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#609A26]/10 text-[#609A26] text-xs font-semibold">
                                <Shield className="w-3.5 h-3.5" />
                                Pembeli Terverifikasi
                            </div>

                            <Separator className="my-5" />

                            <div className="text-left space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                    <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
                                    <span className="text-gray-600">Member sejak <span className="font-medium text-gray-800">Januari 2025</span></span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                                    <span className="text-gray-600">Cianjur, Jawa Barat</span>
                                </div>
                            </div>
                        </Card>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3">
                            {STATS.map((stat) => (
                                <Card key={stat.label} className="p-3 rounded-xl border border-gray-200 shadow-sm text-center">
                                    <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-2`}>
                                        <stat.icon className="w-5 h-5" />
                                    </div>
                                    <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                                    <p className="text-[10px] text-gray-500 leading-tight">{stat.label}</p>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Right Column — Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Personal Info */}
                        <Card className="p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="text-lg font-bold text-gray-900">Informasi Pribadi</h3>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 cursor-pointer gap-1.5"
                                    onClick={openEditProfile}
                                >
                                    <Edit3 className="w-3.5 h-3.5" />
                                    Edit
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">Nama Lengkap</label>
                                    <div className="flex items-center gap-2 mt-1">
                                        <User className="w-4 h-4 text-gray-400" />
                                        <p className="text-sm font-medium text-gray-800">{profile.name}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">Email</label>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Mail className="w-4 h-4 text-gray-400" />
                                        <p className="text-sm font-medium text-gray-800">{profile.email}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">No. Telepon</label>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Phone className="w-4 h-4 text-gray-400" />
                                        <p className="text-sm font-medium text-gray-800">{profile.phone}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">Tanggal Bergabung</label>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Calendar className="w-4 h-4 text-gray-400" />
                                        <p className="text-sm font-medium text-gray-800">15 Januari 2025</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Addresses */}
                        <Card className="p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="text-lg font-bold text-gray-900">Alamat Pengiriman</h3>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 cursor-pointer gap-1.5"
                                    onClick={openAddAddress}
                                >
                                    <Plus className="w-3.5 h-3.5" />
                                    Tambah Alamat
                                </Button>
                            </div>

                            <div className="space-y-4">
                                {addresses.length === 0 ? (
                                    <div className="text-center py-8">
                                        <MapPin className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                                        <p className="text-gray-400 text-sm">Belum ada alamat pengiriman</p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="mt-3 text-xs border-[#609A26] text-[#609A26] cursor-pointer"
                                            onClick={openAddAddress}
                                        >
                                            Tambah Alamat Pertama
                                        </Button>
                                    </div>
                                ) : (
                                    addresses.map((addr) => (
                                        <div key={addr.id} className={`p-4 rounded-xl border ${addr.isDefault ? "border-[#609A26]/40 bg-[#609A26]/5" : "border-gray-200"}`}>
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <MapPin className="w-4 h-4 text-[#609A26]" />
                                                    <span className="text-sm font-semibold text-gray-800">{addr.label}</span>
                                                    {addr.isDefault && (
                                                        <span className="text-[10px] bg-[#609A26] text-white px-2 py-0.5 rounded-full font-medium">Utama</span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    {!addr.isDefault && (
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="text-[11px] text-[#609A26] hover:bg-[#609A26]/5 cursor-pointer h-7 px-2"
                                                            onClick={() => setDefaultAddress(addr.id)}
                                                        >
                                                            Jadikan Utama
                                                        </Button>
                                                    )}
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="text-[11px] text-gray-500 hover:text-[#206536] cursor-pointer h-7 px-2"
                                                        onClick={() => openEditAddress(addr)}
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="text-[11px] text-gray-400 hover:text-red-500 hover:bg-red-50 cursor-pointer h-7 px-2"
                                                        onClick={() => confirmDeleteAddress(addr.id)}
                                                    >
                                                        <Trash2 className="w-3 h-3" />
                                                    </Button>
                                                </div>
                                            </div>
                                            <p className="text-sm font-medium text-gray-700">{addr.recipientName} · {addr.phone}</p>
                                            <p className="text-sm text-gray-600 leading-relaxed mt-1">{addr.address}</p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* ===== MODAL: Edit Profil ===== */}
            {isEditProfileOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsEditProfileOpen(false)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 animate-in fade-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Edit Profil</h2>
                                <p className="text-xs text-gray-500">Perbarui informasi pribadi Anda</p>
                            </div>
                            <button onClick={() => setIsEditProfileOpen(false)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Form */}
                        <div className="px-6 py-5 space-y-4">
                            <div className="space-y-1.5">
                                <Label htmlFor="edit-name" className="text-xs font-medium text-gray-600">Nama Lengkap</Label>
                                <Input
                                    id="edit-name"
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    placeholder="Masukkan nama lengkap"
                                    className="rounded-lg border-gray-200 focus:border-[#206536] focus:ring-[#206536]/20"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="edit-email" className="text-xs font-medium text-gray-600">Email</Label>
                                <Input
                                    id="edit-email"
                                    type="email"
                                    value={editEmail}
                                    onChange={(e) => setEditEmail(e.target.value)}
                                    placeholder="Masukkan email"
                                    className="rounded-lg border-gray-200 focus:border-[#206536] focus:ring-[#206536]/20"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="edit-phone" className="text-xs font-medium text-gray-600">No. Telepon</Label>
                                <Input
                                    id="edit-phone"
                                    value={editPhone}
                                    onChange={(e) => setEditPhone(e.target.value)}
                                    placeholder="Masukkan no. telepon"
                                    className="rounded-lg border-gray-200 focus:border-[#206536] focus:ring-[#206536]/20"
                                />
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
                            <Button variant="outline" size="sm" onClick={() => setIsEditProfileOpen(false)} className="cursor-pointer">
                                Batal
                            </Button>
                            <Button
                                size="sm"
                                onClick={saveProfile}
                                className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer gap-1.5"
                            >
                                <Save className="w-3.5 h-3.5" />
                                Simpan
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* ===== MODAL: Add/Edit Address ===== */}
            {isAddressModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsAddressModalOpen(false)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white rounded-t-2xl z-10">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">{editingAddress ? "Edit Alamat" : "Tambah Alamat Baru"}</h2>
                                <p className="text-xs text-gray-500">{editingAddress ? "Perbarui detail alamat" : "Tambahkan alamat pengiriman baru"}</p>
                            </div>
                            <button onClick={() => setIsAddressModalOpen(false)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Form */}
                        <div className="px-6 py-5 space-y-4">
                            <div className="space-y-1.5">
                                <Label htmlFor="addr-label" className="text-xs font-medium text-gray-600">Label Alamat</Label>
                                <Input
                                    id="addr-label"
                                    value={addrLabel}
                                    onChange={(e) => setAddrLabel(e.target.value)}
                                    placeholder="contoh: Rumah, Kantor, Toko"
                                    className="rounded-lg border-gray-200 focus:border-[#206536] focus:ring-[#206536]/20"
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <Label htmlFor="addr-recipient" className="text-xs font-medium text-gray-600">Nama Penerima</Label>
                                    <Input
                                        id="addr-recipient"
                                        value={addrRecipient}
                                        onChange={(e) => setAddrRecipient(e.target.value)}
                                        placeholder="Nama penerima"
                                        className="rounded-lg border-gray-200 focus:border-[#206536] focus:ring-[#206536]/20"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="addr-phone" className="text-xs font-medium text-gray-600">No. Telepon</Label>
                                    <Input
                                        id="addr-phone"
                                        value={addrPhone}
                                        onChange={(e) => setAddrPhone(e.target.value)}
                                        placeholder="+62 xxx-xxxx-xxxx"
                                        className="rounded-lg border-gray-200 focus:border-[#206536] focus:ring-[#206536]/20"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="addr-address" className="text-xs font-medium text-gray-600">Alamat Lengkap</Label>
                                <Textarea
                                    id="addr-address"
                                    value={addrAddress}
                                    onChange={(e) => setAddrAddress(e.target.value)}
                                    placeholder="Jl. ..., RT/RW, Kelurahan, Kecamatan, Kota/Kabupaten, Provinsi, Kode Pos"
                                    rows={3}
                                    className="rounded-lg border-gray-200 focus:border-[#206536] focus:ring-[#206536]/20 resize-none"
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setAddrIsDefault(!addrIsDefault)}
                                    className={`relative w-10 h-5.5 rounded-full transition-colors duration-200 cursor-pointer ${addrIsDefault ? "bg-[#609A26]" : "bg-gray-300"}`}
                                >
                                    <span className={`absolute top-0.5 left-0.5 w-4.5 h-4.5 bg-white rounded-full shadow-sm transition-transform duration-200 ${addrIsDefault ? "translate-x-4.5" : "translate-x-0"}`} />
                                </button>
                                <Label className="text-sm text-gray-700 cursor-pointer" onClick={() => setAddrIsDefault(!addrIsDefault)}>
                                    Jadikan alamat utama
                                </Label>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl sticky bottom-0">
                            <Button variant="outline" size="sm" onClick={() => setIsAddressModalOpen(false)} className="cursor-pointer">
                                Batal
                            </Button>
                            <Button
                                size="sm"
                                onClick={saveAddress}
                                className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer gap-1.5"
                            >
                                <Save className="w-3.5 h-3.5" />
                                {editingAddress ? "Simpan Perubahan" : "Tambah Alamat"}
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* ===== MODAL: Confirm Delete ===== */}
            {isDeleteConfirmOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsDeleteConfirmOpen(false)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 animate-in fade-in zoom-in-95 duration-200">
                        <div className="px-6 py-6 text-center">
                            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                                <Trash2 className="w-7 h-7 text-red-500" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Hapus Alamat?</h3>
                            <p className="text-sm text-gray-500">Alamat yang dihapus tidak dapat dikembalikan.</p>
                        </div>
                        <div className="flex items-center gap-2 px-6 py-4 border-t border-gray-100">
                            <Button
                                variant="outline"
                                className="flex-1 cursor-pointer"
                                onClick={() => setIsDeleteConfirmOpen(false)}
                            >
                                Batal
                            </Button>
                            <Button
                                className="flex-1 bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                                onClick={deleteAddress}
                            >
                                Hapus
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProfilContent
