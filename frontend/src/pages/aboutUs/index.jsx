import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { 
    Eye, 
    Target, 
    Users, 
    ShoppingBag, 
    Wallet, 
    Cpu, 
    Store 
} from 'lucide-react';

import NavBar from '../landing/NavBar';
import Footer from '../landing/Footer';
import DefaultLayout from '@/components/layouts/DefaultLayout';

const AboutUs = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to section based on hash in URL
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            
            if (element) {
                // Wait for page to fully render, then scroll
                setTimeout(() => {
                    const yOffset = -80; // Offset for fixed header
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    
                    window.scrollTo({
                        top: y,
                        behavior: 'smooth'
                    });
                    
                    // Add highlight effect
                    element.classList.add('highlight-section');
                    setTimeout(() => {
                        element.classList.remove('highlight-section');
                    }, 2000);
                }, 100);
            }
        }
    }, [location]);

    const getColorClasses = (color) => {
        const colors = {
            green: 'bg-green-100 text-green-600',
            blue: 'bg-blue-100 text-blue-600',
            purple: 'bg-purple-100 text-purple-600',
            orange: 'bg-orange-100 text-orange-600',
            teal: 'bg-teal-100 text-teal-600'
        };
        return colors[color] || colors.green;
    };

    const missions = [
        "Mengintegrasikan rantai pasok padi melalui sistem digital",
        "Memberikan akses pembiayaan, pelatihan, dan pasar transparan bagi petani",
        "Mengembangkan ekonomi sirkular pertanian bio-organik ramah lingkungan",
        "Mendorong kolaborasi pemerintah, lembaga keuangan, dan swasta",
        "Menyediakan data dan analitik pertanian untuk kebijakan berbasis bukti"
    ];

    const PARTNERSHIPS = [
        {
            icon: Users,
            title: "Petani Mitra Produksi",
            description: "Mendapat benih unggul, pupuk bioorganik, dan pendampingan teknologi untuk meningkatkan produktivitas dan kualitas hasil panen.",
            color: "green"
        },
        {
            icon: Wallet,
            title: "Mitra Pembiayaan",
            description: "PNM, bank daerah, atau fintech agribisnis dengan sistem bagi hasil atau kredit usaha tani digital yang mudah diakses.",
            color: "blue"
        },
        {
            icon: ShoppingBag,
            title: "Mitra Offtaker",
            description: "Pemda, BUMD, dan koperasi pangan daerah sebagai penyerapan hasil panen untuk menjamin pasar yang stabil.",
            color: "purple"
        },
        {
            icon: Cpu,
            title: "Mitra Teknologi",
            description: "Penyedia IoT, AI analitik, dan logistik tracking untuk mendukung smart farming dan efisiensi operasional.",
            color: "orange"
        },
        {
            icon: Store,
            title: "Mitra Retail",
            description: "Supermarket, e-commerce, dan industri pengolahan beras premium dan nutrisi untuk distribusi ke konsumen akhir.",
            color: "teal"
        }
    ];

    return (
        <DefaultLayout>
            <style>
                {`
                    .highlight-section {
                        animation: highlight 2s ease-in-out;
                    }
                    
                    @keyframes highlight {
                        0%, 100% { background-color: transparent; }
                        50% { background-color: rgba(34, 197, 94, 0.1); }
                    }
                `}
            </style>
            
            <NavBar />

            <div className="bg-white">
                <section className="bg-gradient-to-br from-green-600 to-green-700 py-12 md:py-16">
                    <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Tentang SiTani
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                                Platform digital terpadu yang menghubungkan seluruh ekosistem pertanian Indonesia 
                                untuk membangun kemandirian petani dan kedaulatan pangan nasional.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="tentang-sitani" className="py-12 md:py-16 px-6 lg:px-20 bg-white transition-colors duration-500">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Image */}
                            <div className="order-2 lg:order-1">
                                <div className="w-full h-80 lg:h-96 bg-[url('/2153.jpg')] bg-cover bg-center rounded-2xl shadow-xl"></div>
                            </div>

                            {/* Content */}
                            <div className="order-1 lg:order-2 space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    Apa itu SiTani?
                                </h2>
                                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                                    SiTani adalah platform digital terpadu yang menghubungkan petani, pembenih, 
                                    penggilingan, distributor, dan konsumen akhir dalam satu sistem ekosistem 
                                    pertanian yang transparan dan efisien.
                                </p>
                                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                                    Fokus utama SiTani adalah komoditas padi, dari hulu hingga hilir, dengan 
                                    dukungan teknologi informasi, pembiayaan digital, dan manajemen rantai pasok 
                                    berbasis data.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="visi-misi" className="py-12 md:py-16 px-6 lg:px-20 bg-gray-50 transition-colors duration-500">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                            
                            {/* Visi */}
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Eye size={28} className="text-green-600" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        Visi
                                    </h3>
                                </div>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                    Menjadi ekosistem digital pertanian terintegrasi yang menyejahterakan 
                                    petani dan memperkuat kedaulatan pangan nasional.
                                </p>
                            </div>

                            {/* Misi */}
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Target size={28} className="text-green-600" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        Misi
                                    </h3>
                                </div>
                                <ul className="space-y-3">
                                    {missions.map((mission, index) => (
                                        <li 
                                            key={index}
                                            className="flex items-start gap-3 text-gray-600"
                                        >
                                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-sm md:text-base leading-relaxed">
                                                {mission}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="kemitraan" className="py-12 md:py-16 px-6 lg:px-20 bg-white transition-colors duration-500">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Skema Kemitraan
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                Membangun ekosistem pertanian digital yang kuat melalui kolaborasi 
                                strategis dengan berbagai stakeholder
                            </p>
                        </div>

                        <div className="space-y-6">
                            {PARTNERSHIPS.map((partner, index) => {
                                const Icon = partner.icon;
                                return (
                                    <div 
                                        key={index}
                                        className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-gray-300 transition-colors duration-300"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                                            {/* Icon */}
                                            <div className={`w-16 h-16 rounded-2xl ${getColorClasses(partner.color)} flex items-center justify-center flex-shrink-0`}>
                                                <Icon size={32} strokeWidth={2} />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                                    {partner.title}
                                                </h3>
                                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                                    {partner.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section id="ekosistem" className="py-12 md:py-16 px-6 lg:px-20 bg-white transition-colors duration-500">
                    <div className="container mx-auto max-w-6xl">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
                            Ekosistem Terintegrasi
                        </h3>
                        
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
                            {[
                                'Petani',
                                'Pembenih',
                                'Penggilingan',
                                'Distributor',
                                'Konsumen'
                            ].map((item, index, array) => (
                                <React.Fragment key={index}>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-20 h-20 md:w-24 md:h-24 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                                            <span className="text-white font-bold text-xl md:text-2xl">
                                                {index + 1}
                                            </span>
                                        </div>
                                        <span className="text-base md:text-lg font-semibold text-gray-900 text-center">
                                            {item}
                                        </span>
                                    </div>
                                    {index < array.length - 1 && (
                                        <div className="hidden md:block text-green-600">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M5 12h14M12 5l7 7-7 7"/>
                                            </svg>
                                        </div>
                                    )}
                                    {index < array.length - 1 && (
                                        <div className="md:hidden text-green-600 rotate-90">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M5 12h14M12 5l7 7-7 7"/>
                                            </svg>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
                            Menghubungkan seluruh rantai pasok dalam satu platform digital yang transparan dan efisien
                        </p>
                    </div>
                </section>
                            
                <section className="py-12 px-6 lg:px-20 bg-green-50">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Siap Bergabung dengan SiTani?
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Mari bersama-sama membangun ekosistem pertanian digital Indonesia 
                            yang lebih baik untuk kesejahteraan petani dan kedaulatan pangan nasional
                        </p>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-10 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                            Daftar Sekarang
                        </button>
                    </div>
                </section>
            </div>

            <Footer />
        </DefaultLayout>
    );
};

export default AboutUs;