import React from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import NavBar from "../landing/NavBar";
import Footer from "../landing/Footer";
import DefaultLayout from "@/components/layouts/DefaultLayout";

const Community = () => {
    const communityCards = [
        {
            title: "🌾 Pelatihan & Sertifikasi GAP",
            description: "Program e-learning agribisnis modern.",
            content: "Modul pelatihan Good Agricultural Practices (GAP), sertifikasi petani, dan teknologi ekotech untuk meningkatkan produktivitas.",
            footer: "Ikuti Pelatihan",
            icon: "📚",
            members: "15.000+ petani",
        },
        {
            title: "💰 Pembiayaan & Keuangan Digital",
            description: "Akses modal kerja untuk petani mitra.",
            content: "Diskusi seputar skema pembiayaan digital dari PNM, BRI Agro, dan fintech agrikultur. Sistem bagi hasil dan kredit usaha tani.",
            footer: "Ajukan Pembiayaan",
            icon: "💳",
            members: "8.500+ anggota",
        },
        {
            title: "🚜 Smart Farming & IoT",
            description: "Teknologi pertanian digital modern.",
            content: "Komunitas diskusi IoT, AI analitik, sensor tanah, monitoring cuaca real-time, dan dashboard produktivitas berbasis data.",
            footer: "Eksplor Teknologi",
            icon: "📱",
            members: "12.000+ petani",
        },
        {
            title: "🌱 Bio-Organik & Ekonomi Sirkular",
            description: "Pertanian ramah lingkungan berkelanjutan.",
            content: "Sharing pengalaman budidaya organik, pupuk bio-organik, dan implementasi ekonomi sirkular pertanian untuk masa depan hijau.",
            footer: "Gabung Diskusi",
            icon: "♻️",
            members: "6.800+ petani",
        },
        {
            title: "📊 Marketplace & Distribusi Digital",
            description: "Strategi penjualan langsung ke konsumen.",
            content: "Forum diskusi marketplace komoditas, logistik digital, tracking transparan, dan koneksi dengan offtaker (BUMD, Pemda, koperasi).",
            footer: "Jual Hasil Panen",
            icon: "🛒",
            members: "20.000+ pengguna",
        },
        {
            title: "🏆 Beras Impari Zinc - Pilot Project",
            description: "Komunitas varietas benih unggul nutrisi.",
            content: "Khusus petani mitra pilot project 100 ha di Lamongan. Diskusi manajemen benih Impari Zinc dan Beras Anak Negeri.",
            footer: "Bergabung Program",
            icon: "⭐",
            members: "2.500+ petani",
        },
        {
            title: "🤝 Kemitraan B2B & Ekspor",
            description: "Koneksi dengan industri pangan & eksportir.",
            content: "Jaringan kemitraan dengan hotel, industri pangan, dan eksportir untuk beras nutrisi dan organik bernilai tinggi ke pasar global.",
            footer: "Eksplorasi Peluang",
            icon: "🌍",
            members: "1.200+ mitra",
        },
        {
            title: "🏪 Gudang Digital & Koperasi",
            description: "Network 500+ gudang digital nasional.",
            content: "Komunitas pengelola gudang digital, koperasi pangan daerah, dan BUMD untuk koordinasi distribusi dan penyerapan hasil panen.",
            footer: "Daftar Gudang",
            icon: "🏢",
            members: "500+ gudang",
        },
    ];

    return (
        <DefaultLayout>
            <NavBar />
            <div className="w-full min-h-screen p-6 sm:p-10 bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
                {/* Header Section */}
                <div className="max-w-7xl mx-auto mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        🌾 Komunitas SiTani
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Ekosistem Digital Pertanian Terintegrasi - Satu Aplikasi, Satu Hati untuk Petani Indonesia
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {communityCards.map((card, index) => (
                        <Card
                            key={index}
                            className="shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl border-2 border-transparent hover:border-green-400 bg-white"
                        >
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-4xl">{card.icon}</span>
                                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                                        {card.members}
                                    </span>
                                </div>
                                <CardTitle className="text-lg leading-tight">{card.title}</CardTitle>
                                <CardDescription className="text-sm">{card.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="pb-4">
                                <p className="text-gray-600 text-sm leading-relaxed">{card.content}</p>
                            </CardContent>
                            <CardFooter>
                                <button className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                    {card.footer} →
                                </button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
        </DefaultLayout>
    );
};

export default Community;