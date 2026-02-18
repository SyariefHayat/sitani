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

export const MARKETPLACE_PRODUCTS = [
    { slug: "beras-organik-premium-cianjur", image: "/hero-section-bg.png", title: "Beras Organik Premium Cianjur", price: "Rp 18.000", unit: "/kg", rating: 4.9, reviews: 234, seller: "Tani Makmur", sellerAvatar: "", sellerPhone: "6281234567890", location: "Cianjur, Jawa Barat", category: "Beras & Padi", isNew: false, isFeatured: true, description: "Beras organik premium dari Cianjur yang ditanam tanpa pestisida kimia. Diproduksi oleh petani lokal dengan metode pertanian berkelanjutan. Tekstur pulen dan aroma khas menjadikan beras ini pilihan terbaik untuk keluarga Anda.", stock: 500, minOrder: 1, weight: "1 kg", highlights: ["100% Organik tanpa pestisida", "Ditanam di sawah Cianjur", "Tekstur pulen dan wangi", "Dikemas vakum untuk kesegaran"] },
    { slug: "beras-merah-organik", image: "/hero-section-bg.png", title: "Beras Merah Organik", price: "Rp 22.000", unit: "/kg", rating: 4.7, reviews: 89, seller: "Sawah Sehat", sellerAvatar: "", sellerPhone: "6281345678901", location: "Subang, Jawa Barat", category: "Beras & Padi", isNew: true, isFeatured: false, description: "Beras merah organik berkualitas tinggi dari Subang, Jawa Barat. Kaya serat dan nutrisi, cocok untuk program diet sehat dan gaya hidup aktif. Diproses secara alami tanpa pemutihan.", stock: 300, minOrder: 1, weight: "1 kg", highlights: ["Kaya serat dan antioksidan", "Cocok untuk diet sehat", "Tanpa pemutihan kimia", "Sumber energi alami"] },
    { slug: "beras-ketan-putih", image: "/hero-section-bg.png", title: "Beras Ketan Putih", price: "Rp 16.000", unit: "/kg", rating: 4.5, reviews: 67, seller: "Padi Makmur", sellerAvatar: "", sellerPhone: "6281456789012", location: "Karawang, Jawa Barat", category: "Beras & Padi", isNew: false, isFeatured: false, description: "Beras ketan putih berkualitas dari Karawang. Sempurna untuk membuat kue tradisional, lemper, dan berbagai olahan ketan lainnya. Butiran besar dan lengket sempurna.", stock: 200, minOrder: 1, weight: "1 kg", highlights: ["Butiran besar dan seragam", "Lengket sempurna", "Cocok untuk kue tradisional", "Hasil panen terbaru"] },
    { slug: "cabai-merah-keriting-segar", image: "/hero-section-bg.png", title: "Cabai Merah Keriting Segar", price: "Rp 45.000", unit: "/kg", rating: 4.7, reviews: 189, seller: "Kebun Segar", sellerAvatar: "", sellerPhone: "6281567890123", location: "Brebes, Jawa Tengah", category: "Sayuran", isNew: false, isFeatured: true, description: "Cabai merah keriting segar langsung dari ladang Brebes. Warna merah cerah, pedas mantap, dan tahan lama. Dipetik pada tingkat kematangan optimal untuk rasa terbaik.", stock: 150, minOrder: 1, weight: "1 kg", highlights: ["Segar langsung dari ladang", "Pedas mantap dan tahan lama", "Dipetik kematangan optimal", "Warna merah cerah alami"] },
    { slug: "tomat-cherry-hidroponik", image: "/hero-section-bg.png", title: "Tomat Cherry Hidroponik", price: "Rp 35.000", unit: "/kg", rating: 4.9, reviews: 98, seller: "Green Farm", sellerAvatar: "", sellerPhone: "6281678901234", location: "Bandung, Jawa Barat", category: "Sayuran", isNew: true, isFeatured: true, description: "Tomat cherry hidroponik premium dari Green Farm Bandung. Ditanam dengan teknologi hidroponik modern sehingga bebas pestisida. Rasa manis alami dan tekstur renyah.", stock: 80, minOrder: 1, weight: "1 kg", highlights: ["Hidroponik bebas pestisida", "Rasa manis alami", "Tekstur renyah segar", "Kaya vitamin C dan A"] },
    { slug: "brokoli-segar-organik", image: "/hero-section-bg.png", title: "Brokoli Segar Organik", price: "Rp 28.000", unit: "/kg", rating: 4.6, reviews: 45, seller: "Kebun Hijau", sellerAvatar: "", sellerPhone: "6281789012345", location: "Lembang, Jawa Barat", category: "Sayuran", isNew: true, isFeatured: false, description: "Brokoli segar organik dari dataran tinggi Lembang. Kuntum padat dan hijau segar, kaya nutrisi dan vitamin. Ditanam tanpa bahan kimia berbahaya.", stock: 60, minOrder: 1, weight: "1 kg", highlights: ["Dari dataran tinggi Lembang", "Kuntum padat dan segar", "Organik tanpa bahan kimia", "Kaya vitamin K dan C"] },
    { slug: "bayam-hidroponik-premium", image: "/hero-section-bg.png", title: "Bayam Hidroponik Premium", price: "Rp 8.000", unit: "/ikat", rating: 4.8, reviews: 120, seller: "Hydro Farm", sellerAvatar: "", sellerPhone: "6281890123456", location: "Bogor, Jawa Barat", category: "Sayuran", isNew: false, isFeatured: false, description: "Bayam hidroponik premium yang ditanam dengan air bersih dan nutrisi terukur. Daun lebar, hijau segar, dan bebas tanah. Sempurna untuk tumis, sup, dan jus hijau.", stock: 200, minOrder: 1, weight: "250 gram", highlights: ["Hidroponik air bersih", "Daun lebar dan segar", "Bebas tanah dan pestisida", "Kaya zat besi dan kalsium"] },
    { slug: "mangga-harum-manis-grade-a", image: "/hero-section-bg.png", title: "Mangga Harum Manis Grade A", price: "Rp 25.000", unit: "/kg", rating: 4.8, reviews: 312, seller: "Buah Nusantara", sellerAvatar: "", sellerPhone: "6281901234567", location: "Indramayu, Jawa Barat", category: "Buah-buahan", isNew: false, isFeatured: true, description: "Mangga Harum Manis Grade A dari Indramayu. Daging buah tebal, manis harum, dan serat halus. Sudah melalui proses sortir ketat untuk memastikan kualitas terbaik.", stock: 250, minOrder: 1, weight: "1 kg", highlights: ["Grade A sortir ketat", "Daging tebal dan manis", "Serat halus premium", "Aroma harum khas Indramayu"] },
    { slug: "jeruk-mandarin-manis", image: "/hero-section-bg.png", title: "Jeruk Mandarin Manis", price: "Rp 30.000", unit: "/kg", rating: 4.7, reviews: 156, seller: "Kebun Jeruk", sellerAvatar: "", sellerPhone: "6282012345678", location: "Batu, Jawa Timur", category: "Buah-buahan", isNew: true, isFeatured: false, description: "Jeruk Mandarin manis dari dataran tinggi Batu, Jawa Timur. Kulit tipis mudah dikupas, daging buah juicy dan manis segar. Cocok dikonsumsi langsung atau dijadikan jus.", stock: 180, minOrder: 1, weight: "1 kg", highlights: ["Dari dataran tinggi Batu", "Kulit tipis mudah dikupas", "Manis segar dan juicy", "Kaya vitamin C alami"] },
    { slug: "pisang-cavendish-segar", image: "/hero-section-bg.png", title: "Pisang Cavendish Segar", price: "Rp 15.000", unit: "/sisir", rating: 4.5, reviews: 78, seller: "Tani Pisang", sellerAvatar: "", sellerPhone: "6282123456789", location: "Lumajang, Jawa Timur", category: "Buah-buahan", isNew: false, isFeatured: false, description: "Pisang Cavendish segar berkualitas ekspor dari Lumajang. Ukuran seragam, kulit mulus, dan daging buah lembut manis. Kaya kalium dan energi alami.", stock: 300, minOrder: 1, weight: "1 sisir (~1.5 kg)", highlights: ["Kualitas ekspor", "Ukuran seragam dan mulus", "Daging lembut dan manis", "Kaya kalium dan energi"] },
    { slug: "kunyit-segar-pilihan", image: "/hero-section-bg.png", title: "Kunyit Segar Pilihan", price: "Rp 20.000", unit: "/kg", rating: 4.6, reviews: 92, seller: "Rempah Nusantara", sellerAvatar: "", sellerPhone: "6282234567890", location: "Solo, Jawa Tengah", category: "Rempah-rempah", isNew: false, isFeatured: true, description: "Kunyit segar pilihan berkualitas tinggi dari Solo. Warna kuning pekat menandakan kandungan curcumin yang tinggi. Cocok untuk bumbu masak, jamu, dan minuman kesehatan.", stock: 100, minOrder: 1, weight: "1 kg", highlights: ["Kandungan curcumin tinggi", "Warna kuning pekat alami", "Cocok untuk jamu tradisional", "Ditanam secara organik"] },
    { slug: "jahe-merah-organik", image: "/hero-section-bg.png", title: "Jahe Merah Organik", price: "Rp 35.000", unit: "/kg", rating: 4.8, reviews: 134, seller: "Herbal Farm", sellerAvatar: "", sellerPhone: "6282345678901", location: "Boyolali, Jawa Tengah", category: "Rempah-rempah", isNew: true, isFeatured: false, description: "Jahe merah organik premium dari Boyolali. Aroma tajam dan rasa pedas khas yang lebih kuat dari jahe biasa. Kaya gingerol untuk kesehatan tubuh.", stock: 80, minOrder: 1, weight: "1 kg", highlights: ["Organik tanpa bahan kimia", "Aroma tajam dan pedas khas", "Kaya gingerol alami", "Anti-inflamasi dan antioksidan"] },
    { slug: "kopi-arabika-toraja-premium", image: "/hero-section-bg.png", title: "Kopi Arabika Toraja Premium", price: "Rp 120.000", unit: "/kg", rating: 4.9, reviews: 445, seller: "Kopi Nusantara", sellerAvatar: "", sellerPhone: "6282456789012", location: "Toraja, Sulawesi Selatan", category: "Perkebunan", isNew: false, isFeatured: true, description: "Kopi Arabika Toraja premium yang ditanam di ketinggian 1.500+ mdpl. Cita rasa full body dengan notes cokelat, rempah, dan sedikit fruity. Diproses secara tradisional.", stock: 50, minOrder: 1, weight: "1 kg", highlights: ["Ditanam 1.500+ mdpl", "Full body dengan notes cokelat", "Diproses tradisional", "Single origin Toraja"] },
    { slug: "teh-hijau-organik-puncak", image: "/hero-section-bg.png", title: "Teh Hijau Organik Puncak", price: "Rp 65.000", unit: "/kg", rating: 4.7, reviews: 201, seller: "Kebun Teh", sellerAvatar: "", sellerPhone: "6282567890123", location: "Puncak, Jawa Barat", category: "Perkebunan", isNew: true, isFeatured: true, description: "Teh hijau organik dari perkebunan Puncak yang terkenal. Daun dipetik dengan tangan dan diproses minimal untuk menjaga kandungan antioksidan. Rasa segar dan aromatic.", stock: 100, minOrder: 1, weight: "1 kg", highlights: ["Dipetik dengan tangan", "Diproses minimal untuk kualitas", "Kaya antioksidan katekin", "Rasa segar dan aromatic"] },
    { slug: "kacang-tanah-premium", image: "/hero-section-bg.png", title: "Kacang Tanah Premium", price: "Rp 28.000", unit: "/kg", rating: 4.5, reviews: 67, seller: "Tani Kacang", sellerAvatar: "", sellerPhone: "6282678901234", location: "Tuban, Jawa Timur", category: "Kacang-kacangan", isNew: false, isFeatured: false, description: "Kacang tanah premium pilihan dari Tuban. Butiran besar dan seragam, rasa gurih alami. Cocok untuk snack, bahan kue, atau diolah menjadi selai kacang.", stock: 200, minOrder: 1, weight: "1 kg", highlights: ["Butiran besar dan seragam", "Rasa gurih alami", "Cocok untuk snack dan kue", "Sumber protein nabati"] },
    { slug: "kedelai-lokal-organik", image: "/hero-section-bg.png", title: "Kedelai Lokal Organik", price: "Rp 18.000", unit: "/kg", rating: 4.6, reviews: 89, seller: "Tani Jaya", sellerAvatar: "", sellerPhone: "6282789012345", location: "Jember, Jawa Timur", category: "Kacang-kacangan", isNew: true, isFeatured: false, description: "Kedelai lokal organik dari Jember, Jawa Timur. Cocok untuk membuat tempe, tahu, susu kedelai, dan berbagai olahan kedelai lainnya. Butiran besar dan berkualitas.", stock: 300, minOrder: 1, weight: "1 kg", highlights: ["Kedelai lokal berkualitas", "Organik tanpa GMO", "Cocok untuk tempe dan tahu", "Butiran besar dan bersih"] },
    { slug: "madu-hutan-asli-sumbawa", image: "/hero-section-bg.png", title: "Madu Hutan Asli Sumbawa", price: "Rp 85.000", unit: "/botol", rating: 4.9, reviews: 310, seller: "Madu Asli", sellerAvatar: "", sellerPhone: "6282890123456", location: "Sumbawa, NTB", category: "Hasil Olahan", isNew: false, isFeatured: true, description: "Madu hutan asli yang dipanen langsung dari hutan Sumbawa. Tanpa campuran dan tanpa pengawet. Kaya enzim, vitamin, dan mineral alami untuk menjaga kesehatan tubuh.", stock: 120, minOrder: 1, weight: "500 ml", highlights: ["100% madu hutan asli", "Tanpa campuran dan pengawet", "Kaya enzim dan vitamin", "Dipanen dari hutan Sumbawa"] },
    { slug: "gula-aren-organik", image: "/hero-section-bg.png", title: "Gula Aren Organik", price: "Rp 45.000", unit: "/kg", rating: 4.8, reviews: 176, seller: "Aren Jaya", sellerAvatar: "", sellerPhone: "6282901234567", location: "Lebak, Banten", category: "Hasil Olahan", isNew: true, isFeatured: false, description: "Gula aren organik dari Lebak, Banten. Diproses secara tradisional dari nira pohon aren segar. Rasa karamel khas yang lebih sehat dibanding gula tebu biasa.", stock: 150, minOrder: 1, weight: "1 kg", highlights: ["Dari nira aren segar", "Diproses tradisional", "Rasa karamel khas alami", "Indeks glikemik lebih rendah"] },
    { slug: "monstera-deliciosa", image: "/hero-section-bg.png", title: "Monstera Deliciosa", price: "Rp 150.000", unit: "/pot", rating: 4.8, reviews: 256, seller: "Green Decor", sellerAvatar: "", sellerPhone: "6283012345678", location: "Depok, Jawa Barat", category: "Tanaman Hias", isNew: true, isFeatured: true, description: "Monstera Deliciosa sehat dan terawat dari Green Decor. Tanaman hias populer dengan daun berlubang yang unik. Cocok untuk dekorasi indoor dan mempercantik ruangan.", stock: 30, minOrder: 1, weight: "2 kg (termasuk pot)", highlights: ["Tanaman sehat dan terawat", "Daun berlubang unik", "Cocok untuk indoor", "Termasuk pot dan media tanam"] },
    { slug: "jagung-manis-pipilan-segar", image: "/hero-section-bg.png", title: "Jagung Manis Pipilan Segar", price: "Rp 12.000", unit: "/kg", rating: 4.6, reviews: 156, seller: "Tani Jaya", sellerAvatar: "", sellerPhone: "6282789012345", location: "Malang, Jawa Timur", category: "Sayuran", isNew: false, isFeatured: false, description: "Jagung manis pipilan segar dari Malang. Dipipil saat masih segar untuk menjaga rasa manis alami. Cocok untuk sup, tumis, bakwan, dan berbagai olahan jagung.", stock: 200, minOrder: 1, weight: "1 kg", highlights: ["Dipipil saat masih segar", "Rasa manis alami", "Cocok untuk berbagai olahan", "Kaya serat dan vitamin"] },
]