import { 
    ClipboardList, 
    HandCoins, 
    Home, 
    Leaf, 
    Map, 
    MessageSquareText, 
    Settings, 
    User, 
    Wallet,
    ShoppingCart,
    Sprout,
    BarChart3,
    CreditCard,
    Truck,
    GraduationCap,
    TrendingUp,
    Store
} from "lucide-react"

export const LIST_NAVBAR = [
    {
        title: "Beranda",
        url: "/"
    },
    {
        title: "Tentang Kami",
        url: "/about-us"
    },
    {
        title: "Marketplace",
        subMenu: [
            {
                title: "Komoditas Padi & Beras",
                url: "/marketplace/komoditas"
            },
            {
                title: "Benih & Produksi",
                url: "#benih"
            },
            {
                title: "Harga Pasar",
                url: "/marketplace/harga-pasar"
            }
        ]
    },
    // {
    //     title: "Layanan",
    //     subMenu: [
    //         {
    //             title: "Data Analytics Pertanian",
    //             url: "#analytics"
    //         },
    //         {
    //             title: "Pembiayaan & Asuransi",
    //             url: "#pembiayaan"
    //         },
    //         {
    //             title: "Logistik & Distribusi",
    //             url: "#logistik"
    //         },
    //         {
    //             title: "Pelatihan & Sertifikasi",
    //             url: "#pelatihan"
    //         }
    //     ]
    // },
    {
        title: "Komunitas",
        url: "/community",
    },
    {
        title: "Berita",
        url: "/news"
    },
];

export const LIST_NAVBAR_ADMIN_DB = [
    {
        title: "Main",
        items: [
            {
                title: "Dashboard",
                url: "/admin/dashboard",
                icon: Home,
            },
        ],
    },
    {
        title: "Manajemen",
        items: [
            {
                title: "Petani",
                url: "/admin/users/farmers",
                icon: User,
            },
            {
                title: "Pembeli",
                url: "/admin/users/buyers",
                icon: ClipboardList,
            },
            {
                title: "Wilayah",
                url: "/admin/location",
                icon: Map,
            },
            {
                title: "Marketplace",
                url: "#",
                icon: ShoppingCart,
            },
            {
                title: "Benih & Produksi",
                url: "#",
                icon: Sprout,
            },
            {
                title: "Logistik & Distribusi",
                url: "#",
                icon: Truck,
            },
        ],
    },
    {
        title: "Layanan",
        items: [
            {
                title: "Pembiayaan",
                url: "#",
                icon: CreditCard,
            },
            {
                title: "Pelatihan",
                url: "#",
                icon: GraduationCap,
            },
            {
                title: "Analytics",
                url: "#",
                icon: BarChart3,
            },
        ],
    },
    {
        title: "Lainnya",
        items: [
            {
                title: "Pengaturan",
                url: "#",
                icon: Settings,
            },
        ],
    },
];

export const LIST_NAVBAR_OPERATOR_DB = [
    {
        title: "Main",
        items: [
            {
                title: "Dashboard",
                url: "/admin/dashboard",
                icon: Home,
            },
        ],
    },
    {
        title: "Manajemen",
        items: [
            {
                title: "Petani",
                url: "/admin/users/farmers",
                icon: User,
            },
            {
                title: "Benih & Produksi",
                url: "#",
                icon: Sprout,
            },
            {
                title: "Marketplace Lokal",
                url: "#",
                icon: Store,
            },
        ],
    },
    {
        title: "Lainnya",
        items: [
            {
                title: "Pengaturan",
                url: "#",
                icon: Settings,
            },
        ],
    },
];

export const LIST_NAVBAR_FARMER_DB = [
    {
        title: "Main",
        items: [
            {
                title: "Dashboard",
                url: "/farmer/dashboard",
                icon: Home,
            },
        ],
    },
    {
        title: "Manajemen",
        items: [
            {
                title: "Biodata",
                url: "/farmer/biodata",
                icon: User,
            },
            {
                title: "Benih & Produksi",
                url: "/farmer/benih-produksi",
                icon: Sprout,
            },
            {
                title: "Marketplace",
                url: "/farmer/marketplace",
                icon: ShoppingCart,
            },
            {
                title: "Logistik",
                url: "/farmer/logistik",
                icon: Truck,
            },
            {
                title: "Pembiayaan",
                url: "/farmer/pembiayaan",
                icon: Wallet,
            },
            {
                title: "Pelatihan Saya",
                url: "/farmer/pelatihan",
                icon: GraduationCap,
            },
            {
                title: "Analytics",
                url: "/farmer/analytics",
                icon: BarChart3,
            },
        ],
    },
    {
        title: "Lainnya",
        items: [
            {
                title: "Pengaturan",
                url: "/farmer/settings",
                icon: Settings,
            },
        ],
    },
]

export const LIST_NAVBAR_MALL = [
    {
        title: "Marketplace",
        url: "/mall/marketplace",
        subMenu: [
            {
                title: "Komoditas Padi & Beras",
                url: "/mall/marketplace/komoditas"
            },
            {
                title: "Benih Unggul",
                url: "/mall/marketplace/benih"
            },
            {
                title: "Harga Pasar Real-time",
                url: "/mall/marketplace/harga"
            },
            {
                title: "Transaksi Saya",
                url: "/mall/marketplace/transaksi"
            }
        ]
    },
    {
        title: "Distribusi",
        url: "/mall/distribusi",
        subMenu: [
            {
                title: "Status Rantai Pasok",
                url: "/mall/distribusi/status"
            },
            {
                title: "Pelacakan Pengiriman",
                url: "/mall/distribusi/pelacakan"
            },
            {
                title: "Peta Distribusi",
                url: "/mall/distribusi/peta"
            },
            {
                title: "Mitra Logistik",
                url: "/mall/distribusi/mitra"
            },
            {
                title: "Laporan Distribusi",
                url: "/mall/distribusi/laporan"
            }
        ]
    },
    {
        title: "Pendanaan",
        url: "/mall/pendanaan",
        subMenu: [
            {
                title: "Pembiayaan Tersedia",
                url: "/mall/pendanaan"
            },
            {
                title: "Asuransi Pertanian",
                url: "/mall/pendanaan/asuransi"
            },
            {
                title: "Ajukan Pembiayaan",
                url: "/mall/pendanaan/ajukan"
            },
            {
                title: "Riwayat Pendanaan",
                url: "/mall/pendanaan/riwayat"
            },
            {
                title: "Mitra Fintech",
                url: "/mall/pendanaan/mitra"
            }
        ]
    },
    {
        title: "Pelatihan",
        url: "/mall/pelatihan",
        subMenu: [
            {
                title: "Jadwal Pelatihan",
                url: "/mall/pelatihan"
            },
            {
                title: "E-learning Agribisnis",
                url: "/mall/pelatihan/elearning"
            },
            {
                title: "Sertifikasi GAP",
                url: "/mall/pelatihan/sertifikasi"
            },
            {
                title: "Daftar Pelatihan",
                url: "/mall/pelatihan/daftar"
            },
            {
                title: "Galeri & Dokumentasi",
                url: "/mall/pelatihan/galeri"
            }
        ]
    },
    {
        title: "Analytics",
        url: "/mall/analytics",
        subMenu: [
            {
                title: "Dashboard Produktivitas",
                url: "/mall/analytics/produktivitas"
            },
            {
                title: "Analisis Harga Pasar",
                url: "/mall/analytics/harga"
            },
            {
                title: "Prediksi Cuaca",
                url: "/mall/analytics/cuaca"
            },
            {
                title: "Tren Pasar",
                url: "/mall/analytics/tren"
            }
        ]
    }
]

// import {
//   Home,
//   User,
//   ClipboardList,
//   Map,
//   HandCoins,
//   Wallet,
//   Settings,
//   MessageSquareText,
//   Leaf,
// } from "lucide-react";

// export const LIST_NAVBAR = [
//   { title: "Beranda", url: "/" },
//   { title: "Tentang Kami", url: "/about-us" },
//   {
//     title: "Pasar",
//     subMenu: [
//       { title: "Harga Pasar", url: "/price-market" },
//       { title: "Pasar Padi", url: "/marketplace" },
//     ],
//   },
//   { title: "Komunitas", url: "/community" },
//   { title: "Kerja Sama", url: "/cooperation" },
//   { title: "Berita", url: "/news" },
// ];

// export const LIST_NAVBAR_ADMIN_DB = [
//   {
//     title: "Main",
//     items: [
//       { title: "Dashboard", url: "/admin/dashboard", icon: Home },
//     ],
//   },
//   {
//     title: "Manajemen",
//     items: [
//       { title: "Petani", url: "/admin/users/farmers", icon: User },
//       { title: "Pembeli", url: "/admin/users/buyers", icon: ClipboardList },
//       { title: "Wilayah", url: "/admin/location", icon: Map },
//       // { title: "Distributor", url: "/admin/users/distributor", icon: HandCoins },
//       // { title: "Investor", url: "/admin/users/investor", icon: Wallet },
//     ],
//   },
//   {
//     title: "Lainnya",
//     items: [
//       { title: "Pengaturan", url: "#", icon: Settings },
//     ],
//   },
// ];

// export const LIST_NAVBAR_OPERATOR_DB = [
//   {
//     title: "Main",
//     items: [
//       { title: "Dashboard", url: "/admin/dashboard", icon: Home },
//     ],
//   },
//   {
//     title: "Manajemen",
//     items: [
//       { title: "Petani", url: "/admin/users/farmers", icon: User },
//     ],
//   },
//   {
//     title: "Lainnya",
//     items: [
//       { title: "Pengaturan", url: "#", icon: Settings },
//     ],
//   },
// ];

// export const LIST_NAVBAR_FARMER_DB = [
//   {
//     title: "Main",
//     items: [
//       { title: "Dashboard", url: "#", icon: Home },
//     ],
//   },
//   {
//     title: "Manajemen",
//     items: [
//       { title: "Biodata", url: "#", icon: User },
//       { title: "Rantai Pasok", url: "#", icon: HandCoins },
//       { title: "Ekonomi", url: "#", icon: Wallet },
//       { title: "Sosial", url: "#", icon: ClipboardList },
//       { title: "Prediksi", url: "#", icon: MessageSquareText },
//       { title: "Lingkungan", url: "#", icon: Leaf },
//     ],
//   },
//   {
//     title: "Lainnya",
//     items: [
//       { title: "Pengaturan", url: "#", icon: Settings },
//     ],
//   },
// ];

// export const LIST_NAVBAR_MALL = [
//   {
//     title: "Distribusi",
//     url: "/mall/distribusi",
//     subMenu: [
//       { title: "Status Rantai Pasok", url: "/mall/distribusi/status" },
//       { title: "Pelacakan Pengiriman", url: "/mall/distribusi/pelacakan" },
//       { title: "Peta Distribusi Padi", url: "/mall/distribusi/peta" },
//       { title: "Mitra Gudang & Logistik", url: "/mall/distribusi/mitra" },
//       { title: "Laporan Distribusi", url: "/mall/distribusi/laporan" },
//     ],
//   },
//   {
//     title: "Pendanaan",
//     url: "/mall/pendanaan",
//     subMenu: [
//       { title: "Semua Proyek Pendanaan", url: "/mall/pendanaan" },
//       { title: "Proyek Aktif", url: "/mall/pendanaan/aktif" },
//       { title: "Proyek Sukses", url: "/mall/pendanaan/sukses" },
//       { title: "Ajukan Pendanaan", url: "/mall/pendanaan/ajukan" },
//       { title: "Riwayat Pendanaan", url: "/mall/pendanaan/riwayat" },
//     ],
//   },
//   {
//     title: "Training",
//     url: "/mall/training",
//     subMenu: [
//       { title: "Jadwal Training", url: "/mall/training" },
//       { title: "Materi Online", url: "/mall/training/materi" },
//       { title: "Sertifikasi & Rekap Pelatihan", url: "/mall/training/sertifikasi" },
//       { title: "Daftar Training", url: "/mall/training/daftar" },
//       { title: "Galeri Dokumentasi", url: "/mall/training/galeri" },
//     ],
//   },
// ];
