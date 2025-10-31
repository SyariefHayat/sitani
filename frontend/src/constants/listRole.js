import { 
    CircleDollarSign, 
    ShoppingBag, 
    Sun, 
    Zap 
} from "lucide-react";

export const LIST_ROLE = [
    {
        id: 'farmer',
        title: 'Petani',
        description: 'Bergabung sebagai petani mitra, dapatkan benih unggul Impari Zinc, pupuk bioorganik, dan pendampingan teknologi smart farming',
        signup_desc: 'Bergabunglah dengan 100.000+ petani mitra SiTani. Akses pembiayaan digital dari PNM & BRI Agro, pelatihan sertifikasi GAP, dan marketplace transparan tanpa perantara.',
        icon: Sun,
        route: '/signup/farmer',
        color: 'bg-green-500',
        textColor: 'text-green-500',
        textHover: 'text-green-700',
        bgColor: 'bg-green-600',
        borderColor: 'border-green-200',
        focusColor: 'ring-green-500'
    },
    {
        id: 'distributor',
        title: 'Distributor',
        description: 'Kelola distribusi beras dari 500+ gudang digital ke pasar dengan sistem logistik tracking transparan',
        signup_desc: 'Bergabunglah sebagai mitra distribusi dalam ekosistem SiTani. Akses teknologi IoT untuk tracking, manajemen gudang digital, dan jaringan distribusi nasional yang efisien.',
        icon: Zap,
        route: '/signup/distributor',
        color: 'bg-blue-500',
        textColor: 'text-blue-500',
        textHover: 'text-blue-700',
        bgColor: 'bg-blue-600',
        borderColor: 'border-blue-200',
        focusColor: 'ring-blue-500'
    },
    {
        id: 'investor',
        title: 'Investor',
        description: 'Investasi dalam ekosistem digital pertanian dengan potensi nilai transaksi > Rp 1 triliun dan dampak sosial tinggi',
        signup_desc: 'Bergabunglah sebagai mitra pembiayaan (bank, fintech agribisnis) untuk mendukung modal kerja petani melalui sistem bagi hasil atau kredit usaha tani digital yang menguntungkan.',
        icon: CircleDollarSign,
        route: '/signup/investor',
        color: 'bg-purple-500',
        textColor: 'text-purple-500',
        textHover: 'text-purple-700',
        bgColor: 'bg-purple-600',
        borderColor: 'border-purple-200',
        focusColor: 'ring-purple-500'
    },
    {
        id: 'buyer',
        title: 'Pembeli',
        description: 'Beli Beras Anak Negeri dan beras nutrisi zinc premium langsung dari petani melalui marketplace digital',
        signup_desc: 'Bergabunglah sebagai konsumen atau mitra offtaker (BUMD, Pemda, Koperasi). Akses beras berkualitas dengan harga adil, sertifikasi GAP, dan traceability transparan dari petani.',
        icon: ShoppingBag,
        route: '/signup/buyer',
        color: 'bg-orange-500',
        textColor: 'text-orange-500',
        textHover: 'text-orange-700',
        bgColor: 'bg-orange-600',
        borderColor: 'border-orange-200',
        focusColor: 'ring-orange-500'
    }
];