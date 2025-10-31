import React from 'react'
import { Calendar, User, ArrowRight } from 'lucide-react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import NavBar from '../landing/NavBar'
import Footer from '../landing/Footer'
import { Button } from "@/components/ui/button"
import DefaultLayout from '@/components/layouts/DefaultLayout'

const News = () => {
    const newsData = [
        {
            id: 1,
            title: "Pilot Project SiTani 100 Ha Impari Zinc Dimulai di Lamongan",
            description: "Kelompok Tani Makmur Lamongan resmi meluncurkan pilot project penanaman padi Impari Zinc seluas 100 hektar dengan dukungan teknologi IoT dan AI analitik dari platform SiTani.",
            author: "Tim SiTani",
            date: "28 Oktober 2025",
            image: "/news-1.jpg",
            category: "Pilot Project"
        },
        {
            id: 2,
            title: "Kemitraan PNM dan BRI Agro untuk Pembiayaan Digital Petani",
            description: "SiTani menandatangani kemitraan strategis dengan PNM dan BRI Agro untuk menyediakan pembiayaan digital dengan sistem bagi hasil bagi 100.000+ petani mitra di seluruh Indonesia.",
            author: "Redaksi SiTani",
            date: "25 Oktober 2025",
            image: "/news-2.jpg",
            category: "Kemitraan"
        },
        {
            id: 3,
            title: "Pelatihan Sertifikasi GAP untuk Petani Mitra SiTani",
            description: "Program e-learning Good Agricultural Practices (GAP) diluncurkan untuk meningkatkan produktivitas dan kualitas hasil panen petani mitra di Jawa Timur dan Jawa Tengah.",
            author: "Tim Edukasi SiTani",
            date: "22 Oktober 2025",
            image: "/news-3.jpg",
            category: "Pelatihan"
        },
        {
            id: 4,
            title: "Ekonomi Sirkular Bio-Organik: Komitmen SiTani untuk Pertanian Berkelanjutan",
            description: "SiTani mengembangkan ekosistem pertanian bio-organik ramah lingkungan dengan pupuk organik dan sistem ekonomi sirkular untuk menjaga keberlanjutan lingkungan.",
            author: "Dr. Budi Santoso",
            date: "18 Oktober 2025",
            image: "/news-4.jpg",
            category: "Lingkungan"
        },
        {
            id: 5,
            title: "500 Gudang Digital Siap Dukung Distribusi Beras Nasional",
            description: "Jaringan 500 gudang digital SiTani tersebar di seluruh Indonesia untuk mendukung logistik transparan dan efisiensi distribusi dari petani ke konsumen.",
            author: "Tim Logistik",
            date: "15 Oktober 2025",
            image: "/news-5.jpg",
            category: "Infrastruktur"
        },
        {
            id: 6,
            title: "Beras Anak Negeri Kini Tersedia di Tokopedia dan Shopee",
            description: "Marketplace digital SiTani meluncurkan Beras Anak Negeri melalui e-commerce Tokopedia dan Shopee, memudahkan konsumen mengakses beras nutrisi zinc premium.",
            author: "Tim Marketing",
            date: "12 Oktober 2025",
            image: "/news-6.jpg",
            category: "Marketplace"
        },
        {
            id: 7,
            title: "Dashboard Analytics Premium: Data Real-Time untuk Petani Cerdas",
            description: "Subscriber premium SiTani kini dapat mengakses dashboard produktivitas, analisis harga pasar, tren cuaca, dan layanan agronomis eksklusif berbasis data.",
            author: "Tim Teknologi",
            date: "8 Oktober 2025",
            image: "/news-7.jpg",
            category: "Teknologi"
        },
        {
            id: 8,
            title: "Target Ekspansi 1.000 Ha: Jawa Timur dan Jawa Tengah 2026-2027",
            description: "SiTani menargetkan ekspansi area tanam hingga 1.000 hektar pada tahap 2 dengan integrasi fintech, logistik, dan data produksi nasional yang lebih luas.",
            author: "Tim Ekspansi",
            date: "5 Oktober 2025",
            image: "/news-8.jpg",
            category: "Ekspansi"
        },
        {
            id: 9,
            title: "BUMD dan Pemda Jadi Mitra Offtaker Utama SiTani",
            description: "Kemitraan dengan BUMD Pangan Jawa Timur dan Pemda Semarang memperkuat penyerapan hasil panen dengan total 230 ton beras per bulan untuk cadangan pangan daerah.",
            author: "Tim Kemitraan",
            date: "1 Oktober 2025",
            image: "/news-9.jpg",
            category: "Kemitraan"
        }
    ];

    return (
        <DefaultLayout>
            <NavBar />
            
            <div className="bg-gradient-to-br from-green-50 to-blue-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                            🌾 Berita & Artikel SiTani
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
                            Update terkini seputar transformasi digital pertanian Indonesia - Satu Aplikasi, Satu Hati untuk Petani
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsData.map((news) => (
                        <Card key={news.id} className="group hover:shadow-lg transition-all duration-300 flex flex-col">
                            <CardHeader className="p-0">
                                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    <span className="text-green-700 font-semibold text-xs bg-white px-3 py-1 rounded-full absolute top-3 left-3 z-10 shadow-md">
                                        {news.category}
                                    </span>
                                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                                        <Calendar className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                            </CardHeader>
                            
                            <CardContent className="flex-1 p-6">
                                <CardTitle className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                                    {news.title}
                                </CardTitle>
                                <CardDescription className="text-gray-600 line-clamp-3 mb-4">
                                    {news.description}
                                </CardDescription>
                                
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        <span>{news.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{news.date}</span>
                                    </div>
                                </div>
                            </CardContent>
                            
                            <CardFooter className="p-6 pt-0">
                                <Button 
                                    variant="outline" 
                                    className="w-full group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 transition-all duration-300"
                                >
                                    Baca Selengkapnya
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                        Muat Berita Lainnya
                    </Button>
                </div>
            </div>

            <Footer />
        </DefaultLayout>
    )
}

export default News