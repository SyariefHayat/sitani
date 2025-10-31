import { ShoppingCart, Sprout, BarChart3, CreditCard, Truck, GraduationCap } from 'lucide-react';

export const LIST_FEATURES = [
    {
        id: 'komoditas',
        icon: ShoppingCart,
        title: "Marketplace Komoditas",
        description: "Jual beli hasil panen padi, benih, dan beras langsung dari petani ke konsumen tanpa perantara yang merugikan.",
        highlights: ["Transaksi Transparan", "Harga Fair", "Tanpa Perantara"],
        color: "from-blue-500 to-blue-600",
        navPath: "/marketplace/komoditas"
    },
    {
        id: 'benih',
        icon: Sprout,
        title: "Manajemen Benih & Produksi",
        description: "Sistem pelacakan varietas benih unggul seperti Impari Zinc dan manajemen hasil panen berbasis lokasi dengan teknologi modern.",
        highlights: ["Tracking Benih", "Monitoring Produksi", "Data Real-time"],
        color: "from-green-500 to-green-600",
        navPath: "/marketplace/benih"
    },
    {
        id: 'analytics',
        icon: BarChart3,
        title: "Data Analytics Pertanian",
        description: "Dashboard produktivitas, analisis harga pasar, prediksi cuaca, dan tren pasar real-time untuk keputusan yang lebih baik.",
        highlights: ["Dashboard Interaktif", "Prediksi Cuaca", "Analisis Pasar"],
        color: "from-purple-500 to-purple-600",
        navPath: "/layanan/analytics"
    },
    {
        id: 'pembiayaan',
        icon: CreditCard,
        title: "Pembiayaan & Asuransi Digital",
        description: "Terintegrasi dengan mitra seperti PNM, BRI Agro, dan fintech agrikultur untuk skema modal kerja petani yang mudah diakses.",
        highlights: ["Akses Modal Mudah", "Proses Cepat", "Bunga Kompetitif"],
        color: "from-orange-500 to-orange-600",
        navPath: "/layanan/pembiayaan"
    },
    {
        id: 'logistik',
        icon: Truck,
        title: "Logistik & Distribusi Digital",
        description: "Sistem pengiriman dari gudang digital ke konsumen dengan tracking transparan dan manajemen rantai pasok yang efisien.",
        highlights: ["Real-time Tracking", "Pengiriman Cepat", "Jangkauan Luas"],
        color: "from-red-500 to-red-600",
        navPath: "/layanan/logistik"
    },
    {
        id: 'pelatihan',
        icon: GraduationCap,
        title: "Pelatihan & Sertifikasi Petani",
        description: "Modul e-learning agribisnis modern, sertifikasi GAP (Good Agricultural Practices), dan penerapan teknologi pertanian.",
        highlights: ["E-learning Gratis", "Sertifikasi GAP", "Pendampingan Ahli"],
        color: "from-teal-500 to-teal-600",
        navPath: "/layanan/pelatihan"
    }
];