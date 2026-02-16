import { BookOpen, Bookmark, Briefcase, CalendarClock, FileText, History, LayoutDashboard, LucideIcon, Package, ShoppingCart, Truck, TrendingUp, Warehouse } from "lucide-react";

export const MENU_ITEMS = [
    { label: "Marketplace", href: "/marketplace" },
    { label: "Investasi", href: "/investasi" },
    { label: "Distributor", href: "/distributor" },
    { label: "Logistik", href: "/logistik" },
    { label: "Academy", href: "/academy" },
    { label: "Artikel", href: "/article" },
]

export const STATS = [
    { icon: "/petani-aktif.png", alt: "icon petani aktif", value: "350K+", label: "Petani Aktif" },
    { icon: "/total-transaksi.png", alt: "icon total transaksi", value: "125 M", label: "Total Transaksi" },
    { icon: "/proyek.png", alt: "icon proyek terdanai", value: "280", label: "Proyek Terdanai" },
    { icon: "/investor.png", alt: "icon investor terdaftar", value: "12 K+", label: "Investor Terdaftar" },
    { icon: "/peserta-pelatihan.png", alt: "icon peserta pelatihan", value: "15 K", label: "Peserta Pelatihan" },
    { icon: "/tonase-distribusi.png", alt: "icon tonase distribusi", value: "850K", label: "Tonase Distribusi" },
]

export const STATS_INVESTASI = [
    { icon: "/petani-aktif.png", alt: "icon petani aktif", value: "350K+", label: "Petani Aktif" },
    { icon: "/total-transaksi.png", alt: "icon total investasi", value: "125 M", label: "Total Investasi" },
    { icon: "/proyek.png", alt: "icon rata-rata imbal hasil", value: "18,2%", label: "Rata-rata Imbal Hasil" },
    { icon: "/investor.png", alt: "icon proyek aktif", value: "4", label: "Proyek Aktif" },
    { icon: "/peserta-pelatihan.png", alt: "icon solusi hasil tani", value: "Rp 750.000", label: "solusi hasil tani" },
]

export const STATS_DISTRIBUTOR = [
    { icon: "/petani-aktif.png", alt: "icon stok nasional", value: "970 Ton", label: "Total Stok Nasional" },
    { icon: "/total-transaksi.png", alt: "icon pesanan", value: "76 Pesanan", label: "Bulk Order Pesanan" },
    { icon: "/proyek.png", alt: "icon pengiriman", value: "23 Pengiriman", label: "Pengiriman Aktif" },
    { icon: "/investor.png", alt: "icon permintaan", value: "52 Pengiriman", label: "Permintaan Pasar" },
]

export const STATS_LOGISTIK = [
    { icon: "/petani-aktif.png", alt: "icon total pengiriman", value: "1.240", label: "Total Pengiriman" },
    { icon: "/total-transaksi.png", alt: "icon armada aktif", value: "38 Unit", label: "Armada Aktif" },
    { icon: "/proyek.png", alt: "icon pickup hari ini", value: "12 Pickup", label: "Pickup Hari Ini" },
    { icon: "/investor.png", alt: "icon on-time delivery", value: "96,5%", label: "On-Time Delivery" },
]

export const STATS_ACADEMY = [
    { icon: "/petani-aktif.png", alt: "icon kelas diikuti", value: "12 Kelas", label: "Kelas Diikuti" },
    { icon: "/total-transaksi.png", alt: "icon jam belajar", value: "48 Jam", label: "Jam Belajar" },
    { icon: "/proyek.png", alt: "icon sertifikat", value: "5", label: "Sertifikat Diperoleh" },
    { icon: "/investor.png", alt: "icon progress", value: "78%", label: "Progress Rata-rata" },
]

export const FEATURES = [
    { icon: "/marketplace-hasil-tani.png", alt: "icon marketplace hasil tani", title: "Marketplace Hasil Tani", desc: "Platform jual beli hasil panen langsung dari petani ke pembeli." },
    { icon: "/investasi-pertanian.png", alt: "icon investasi pertanian", title: "Investasi Pertanian", desc: "Fasilitas pendanaan proyek pertanian dengan sistem bagi hasil." },
    { icon: "/supply-chain.png", alt: "icon supply chain", title: "Distribusi & Supply Chain", desc: "Pengelolaan distribusi hasil panen yang efisien dan terintegrasi." },
    { icon: "/logistik.png", alt: "icon logistik terintegrasi", title: "Logistik Terintegrasi", desc: "Layanan pengiriman hasil pertanian yang cepat dan tepat." },
    { icon: "/academy.png", alt: "icon academy", title: "SiTani Academy", desc: "Pelatihan dan edukasi untuk meningkatkan keterampilan petani." },
]

export const INVESTASI_MENU: { label: string; href: string; icon: LucideIcon }[] = [
    { label: "Overview", href: "/investasi", icon: LayoutDashboard },
    { label: "Investasi", href: "/investasi/investasi", icon: TrendingUp },
    { label: "Portofolio", href: "/investasi/portofolio", icon: Briefcase },
    { label: "Riwayat", href: "/investasi/riwayat", icon: History },
    { label: "Laporan", href: "/investasi/laporan", icon: FileText },
]

export const DISTRIBUTOR_MENU: { label: string; href: string; icon: LucideIcon }[] = [
    { label: "Dashboard", href: "/distributor", icon: LayoutDashboard },
    { label: "Bulk Order", href: "/distributor/bulk-order", icon: ShoppingCart },
    { label: "Gudang", href: "/distributor/gudang", icon: Warehouse },
    { label: "Jadwal Distribusi", href: "/distributor/jadwal-distribusi", icon: CalendarClock },
]

export const LOGISTIK_MENU: { label: string; href: string; icon: LucideIcon }[] = [
    { label: "Dashboard", href: "/logistik", icon: LayoutDashboard },
    { label: "Order Pengiriman", href: "/logistik/order-pengiriman", icon: Package },
    { label: "Jadwal Pickup", href: "/logistik/jadwal-pickup", icon: CalendarClock },
    { label: "Armada", href: "/logistik/armada", icon: Truck },
]

export const ACADEMY_MENU: { label: string; href: string; icon: LucideIcon }[] = [
    { label: "Overview", href: "/academy", icon: LayoutDashboard },
    { label: "Kelas Saya", href: "/academy/kelas-saya", icon: Briefcase },
    { label: "Webinar", href: "/academy/webinar", icon: TrendingUp },
    { label: "Sertifikat", href: "/academy/sertifikat", icon: FileText },
    { label: "Pusat Bantuan", href: "/academy/pusat-bantuan", icon: History },
]

export const ARTICLE_MENU: { label: string; href: string; icon: LucideIcon }[] = [
    { label: "Semua Artikel", href: "/article", icon: BookOpen },
    { label: "Kategori", href: "/article/kategori", icon: LayoutDashboard },
    { label: "Trending", href: "/article/trending", icon: TrendingUp },
    { label: "Bookmark", href: "/article/bookmark", icon: Bookmark },
    { label: "Tulis Artikel", href: "/article/tulis", icon: FileText },
]

export const STATS_ARTICLE = [
    { icon: "/petani-aktif.png", alt: "icon total artikel", value: "1.580", label: "Total Artikel" },
    { icon: "/total-transaksi.png", alt: "icon penulis", value: "245", label: "Penulis Aktif" },
    { icon: "/proyek.png", alt: "icon pembaca", value: "89K+", label: "Total Pembaca" },
    { icon: "/investor.png", alt: "icon kategori", value: "18", label: "Kategori" },
]