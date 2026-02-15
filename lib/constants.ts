import { Briefcase, FileText, History, LayoutDashboard, LucideIcon, TrendingUp } from "lucide-react";

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