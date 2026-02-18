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

export const SUPPLY_CHAIN = [
    { icon: "/petani.png", alt: "icon ekosistem petani", label: "Petani" },
    { icon: "/distributor.png", alt: "icon ekosistem distributor", label: "Distributor" },
    { icon: "/logistik.png", alt: "icon ekosistem logistik", label: "Logistik" },
    { icon: "/pembeli.png", alt: "icon ekosistem pembeli", label: "Pembeli" },
]

export const INVESTMENT_FLOW = [
    { icon: "/eco-investor.png", alt: "icon ekosistem investor", label: "Investor" },
    { icon: "/modal.png", alt: "icon ekosistem modal", label: "Modal" },
    { icon: "/keuntungan.png", alt: "icon ekosistem keuntungan", label: "Keuntungan" },
]

export const COURSES = [
    {
        slug: "budidaya-padi-modern",
        image: "/hero-section-bg.png",
        title: "Budidaya Padi Modern",
        rating: 4.8,
        reviews: 128,
        kategori: "Online Course",
        level: "Menengah",
        durasi: "8 Jam",
        peserta: 1240,
        instruktur: { name: "Dr. Ahmad Fauzi", role: "Ahli Pertanian Padi", avatar: "https://github.com/shadcn.png" },
        deskripsi: "Pelajari teknik budidaya padi modern yang menggabungkan kearifan lokal dengan teknologi terkini. Kursus ini mencakup pemilihan varietas unggul, pengolahan lahan optimal, sistem irigasi modern, hingga teknik panen dan pascapanen yang efisien. Cocok untuk petani yang ingin meningkatkan produktivitas dan kualitas hasil panen.",
        highlights: ["Sertifikat Resmi", "Akses Selamanya", "Materi Video HD", "Forum Diskusi"],
        modul: [
            { judul: "Pengenalan Budidaya Padi Modern", durasi: "45 menit" },
            { judul: "Pemilihan Varietas & Persiapan Benih", durasi: "60 menit" },
            { judul: "Pengolahan Lahan & Sistem Tanam", durasi: "75 menit" },
            { judul: "Manajemen Air & Irigasi Modern", durasi: "60 menit" },
            { judul: "Pemupukan Berimbang & Nutrisi Tanaman", durasi: "50 menit" },
            { judul: "Pengendalian Hama & Penyakit", durasi: "65 menit" },
            { judul: "Teknik Panen & Pascapanen", durasi: "55 menit" },
            { judul: "Analisis Usaha Tani Padi", durasi: "50 menit" },
        ],
    },
    {
        slug: "manajemen-keuangan-petani",
        image: "/hero-section-bg.png",
        title: "Manajemen Keuangan Petani",
        rating: 4.6,
        reviews: 95,
        kategori: "Urban Course",
        level: "Pemula",
        durasi: "6 Jam",
        peserta: 890,
        instruktur: { name: "Hendra Kusuma, MBA", role: "Konsultan Agribisnis", avatar: "https://github.com/shadcn.png" },
        deskripsi: "Kuasai dasar-dasar manajemen keuangan yang dirancang khusus untuk petani dan pelaku agribisnis. Mulai dari pencatatan keuangan sederhana, perencanaan modal usaha, hingga strategi mengelola risiko finansial di sektor pertanian.",
        highlights: ["Sertifikat Resmi", "Template Keuangan", "Studi Kasus Nyata", "Mentoring"],
        modul: [
            { judul: "Dasar-Dasar Keuangan Pertanian", durasi: "50 menit" },
            { judul: "Pencatatan & Pembukuan Usaha Tani", durasi: "60 menit" },
            { judul: "Perencanaan Modal & Pembiayaan", durasi: "55 menit" },
            { judul: "Analisis Biaya & Keuntungan", durasi: "65 menit" },
            { judul: "Manajemen Risiko Finansial", durasi: "50 menit" },
            { judul: "Akses Permodalan & Kredit Pertanian", durasi: "40 menit" },
        ],
    },
    {
        slug: "smart-farming-iot",
        image: "/hero-section-bg.png",
        title: "Smart Farming & IoT",
        rating: 4.9,
        reviews: 213,
        kategori: "Tech Course",
        level: "Lanjutan",
        durasi: "10 Jam",
        peserta: 650,
        instruktur: { name: "Dr. Rika Puspitasari", role: "Pakar IoT Pertanian", avatar: "https://github.com/shadcn.png" },
        deskripsi: "Eksplorasi teknologi Internet of Things (IoT) dan kecerdasan buatan untuk pertanian presisi. Pelajari cara menggunakan sensor, drone, dan sistem otomasi untuk monitoring lahan, prediksi cuaca, dan optimasi hasil panen secara real-time.",
        highlights: ["Sertifikat Resmi", "Akses Lab Virtual", "Proyek Akhir", "Konsultasi Ahli"],
        modul: [
            { judul: "Pengantar Smart Farming", durasi: "45 menit" },
            { judul: "Sensor & Aktuator untuk Pertanian", durasi: "75 menit" },
            { judul: "Platform IoT & Cloud Computing", durasi: "80 menit" },
            { judul: "Monitoring Lahan Real-Time", durasi: "70 menit" },
            { judul: "Drone & Pencitraan Udara", durasi: "65 menit" },
            { judul: "Kecerdasan Buatan untuk Prediksi Panen", durasi: "75 menit" },
            { judul: "Otomasi Irigasi & Greenhouse", durasi: "60 menit" },
            { judul: "Proyek Akhir: Implementasi Smart Farm", durasi: "90 menit" },
        ],
    },
    {
        slug: "pengendalian-hama-terpadu",
        image: "/hero-section-bg.png",
        title: "Pengendalian Hama Terpadu",
        rating: 4.7,
        reviews: 167,
        kategori: "Online Course",
        level: "Pemula",
        durasi: "5 Jam",
        peserta: 1100,
        instruktur: { name: "Dr. Rina Wulandari", role: "Entomolog Pertanian", avatar: "https://github.com/shadcn.png" },
        deskripsi: "Pelajari konsep Pengendalian Hama Terpadu (PHT) yang ramah lingkungan dan berkelanjutan. Mulai dari identifikasi hama utama tanaman pangan, teknik pengendalian biologis, penggunaan pestisida nabati, hingga strategi monitoring hama di lapangan.",
        highlights: ["Sertifikat Resmi", "Panduan Identifikasi Hama", "Video Lapangan", "Quiz Interaktif"],
        modul: [
            { judul: "Konsep Dasar PHT", durasi: "40 menit" },
            { judul: "Identifikasi Hama Utama", durasi: "55 menit" },
            { judul: "Pengendalian Biologis", durasi: "60 menit" },
            { judul: "Pestisida Nabati & Organik", durasi: "50 menit" },
            { judul: "Monitoring & Evaluasi Hama", durasi: "55 menit" },
            { judul: "Studi Kasus PHT di Lapangan", durasi: "40 menit" },
        ],
    },
    {
        slug: "agribisnis-pemasaran",
        image: "/hero-section-bg.png",
        title: "Agribisnis & Pemasaran",
        rating: 4.5,
        reviews: 89,
        kategori: "Bisnis Course",
        level: "Menengah",
        durasi: "7 Jam",
        peserta: 780,
        instruktur: { name: "Maya Sari, MBA", role: "Praktisi Pemasaran Agri", avatar: "https://github.com/shadcn.png" },
        deskripsi: "Kuasai strategi pemasaran digital dan konvensional untuk produk pertanian. Dari branding produk, penentuan harga, pemasaran melalui marketplace dan media sosial, hingga membangun jaringan distribusi yang efektif.",
        highlights: ["Sertifikat Resmi", "Template Marketing", "Akses Marketplace", "Networking"],
        modul: [
            { judul: "Pengantar Agribisnis Modern", durasi: "45 menit" },
            { judul: "Branding Produk Pertanian", durasi: "55 menit" },
            { judul: "Strategi Harga & Distribusi", durasi: "60 menit" },
            { judul: "Digital Marketing untuk Petani", durasi: "70 menit" },
            { judul: "Marketplace & E-Commerce Pertanian", durasi: "55 menit" },
            { judul: "Membangun Jaringan Bisnis", durasi: "50 menit" },
            { judul: "Studi Kasus Sukses Agribisnis", durasi: "45 menit" },
        ],
    },
    {
        slug: "pertanian-organik-lanjutan",
        image: "/hero-section-bg.png",
        title: "Pertanian Organik Lanjutan",
        rating: 4.8,
        reviews: 201,
        kategori: "Premium Course",
        level: "Lanjutan",
        durasi: "12 Jam",
        peserta: 520,
        instruktur: { name: "Prof. Budi Santoso", role: "Guru Besar Pertanian Organik", avatar: "https://github.com/shadcn.png" },
        deskripsi: "Kursus tingkat lanjut untuk mendalami teknik pertanian organik secara komprehensif. Mencakup sertifikasi organik, manajemen kesuburan tanah, rotasi tanaman, pengelolaan limbah, dan strategi pemasaran produk organik premium.",
        highlights: ["Sertifikat Premium", "Kunjungan Lapangan Virtual", "Materi Eksklusif", "Komunitas Alumni"],
        modul: [
            { judul: "Review Prinsip Pertanian Organik", durasi: "50 menit" },
            { judul: "Sertifikasi Organik Nasional & Internasional", durasi: "70 menit" },
            { judul: "Manajemen Kesuburan Tanah Organik", durasi: "80 menit" },
            { judul: "Rotasi Tanaman & Polikultur", durasi: "65 menit" },
            { judul: "Pengolahan Pasca Panen Organik", durasi: "60 menit" },
            { judul: "Pengelolaan Limbah & Komposting Lanjut", durasi: "55 menit" },
            { judul: "Pemasaran Produk Organik Premium", durasi: "70 menit" },
            { judul: "Kunjungan Virtual: Farm Organik Sukses", durasi: "90 menit" },
            { judul: "Proyek Akhir: Rencana Usaha Organik", durasi: "80 menit" },
        ],
    },
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