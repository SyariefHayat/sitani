import { ShoppingCart, Sprout, BarChart3, CreditCard, Truck, GraduationCap } from 'lucide-react';

export const LIST_FEATURES = [
    {
        id: 'komoditas',
        icon: ShoppingCart,
        title: "Marketplace Komoditas",
        description: "Platform jual beli hasil panen langsung dari petani ke konsumen dengan harga adil tanpa perantara.",
        highlights: ["Transaksi Transparan", "Harga Fair", "Tanpa Perantara"],
        color: "from-blue-500 to-blue-600",
        navPath: "/marketplace/komoditas"
    },
    {
        id: 'benih',
        icon: Sprout,
        title: "Manajemen Benih & Produksi",
        description: "Sistem untuk melacak varietas benih unggul dan memantau hasil panen secara real-time berbasis lokasi.",
        highlights: ["Tracking Benih", "Monitoring Produksi", "Data Real-time"],
        color: "from-green-500 to-green-600",
        navPath: "/marketplace/benih"
    },
    {
        id: 'analytics',
        icon: BarChart3,
        title: "Data Analytics Pertanian",
        description: "Dashboard analitik yang menampilkan produktivitas, harga pasar, tren, dan prediksi cuaca secara interaktif.",
        highlights: ["Dashboard Interaktif", "Prediksi Cuaca", "Analisis Pasar"],
        color: "from-purple-500 to-purple-600",
        navPath: "/layanan/analytics"
    },
    {
        id: 'pembiayaan',
        icon: CreditCard,
        title: "Pembiayaan & Asuransi Digital",
        description: "Layanan modal kerja dan asuransi pertanian terintegrasi dengan lembaga keuangan dan fintech agrikultur.",
        highlights: ["Akses Modal Mudah", "Proses Cepat", "Bunga Kompetitif"],
        color: "from-orange-500 to-orange-600",
        navPath: "/layanan/pembiayaan"
    },
    {
        id: 'logistik',
        icon: Truck,
        title: "Logistik & Distribusi Digital",
        description: "Sistem pengiriman dan manajemen rantai pasok yang efisien dengan pelacakan real-time.",
        highlights: ["Real-time Tracking", "Pengiriman Cepat", "Jangkauan Luas"],
        color: "from-red-500 to-red-600",
        navPath: "/layanan/logistik"
    },
    {
        id: 'pelatihan',
        icon: GraduationCap,
        title: "Pelatihan & Sertifikasi Petani",
        description: "Program e-learning dan sertifikasi pertanian modern untuk meningkatkan kompetensi petani.",
        highlights: ["E-learning Gratis", "Sertifikasi GAP", "Pendampingan Ahli"],
        color: "from-teal-500 to-teal-600",
        navPath: "/layanan/pelatihan"
    }
];