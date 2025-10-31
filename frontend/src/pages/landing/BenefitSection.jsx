import React from 'react';
import { Users, Building2, TrendingUp, ShoppingBag, Sparkles, Database } from 'lucide-react';

const BENEFITS = [
    {
        icon: Users,
        category: "Bagi Petani",
        benefits: [
            "Akses teknologi smart farming modern",
            "Pasar transparan dengan harga adil",
            "Modal kerja dan pembiayaan mudah",
            "Pelatihan dan pendampingan ahli"
        ],
        color: "green"
    },
    {
        icon: Building2,
        category: "Bagi Pemerintah",
        benefits: [
            "Penguatan cadangan pangan nasional",
            "Data produksi pertanian akurat real-time",
            "Kebijakan berbasis data yang tepat",
            "Monitoring distribusi pangan efektif"
        ],
        color: "blue"
    },
    {
        icon: TrendingUp,
        category: "Bagi Investor",
        benefits: [
            "Peluang profit jangka panjang",
            "Dampak sosial tinggi terukur",
            "Sektor agrikultur sustainable",
            "Potensi pasar >Rp 1 triliun"
        ],
        color: "purple"
    },
    {
        icon: ShoppingBag,
        category: "Bagi Konsumen",
        benefits: [
            "Beras sehat dan berkualitas tinggi",
            "Sumber produk transparan dan tertelusur",
            "Harga kompetitif tanpa markup berlebih",
            "Mendukung petani lokal langsung"
        ],
        color: "orange"
    }
];

const ADDITIONAL_BENEFITS = [
    {
        icon: Sparkles,
        title: "Smart Farming",
        description: "Teknologi digital membantu petani meningkatkan produktivitas dan efisiensi lahan secara signifikan."
    },
    {
        icon: Database,
        title: "Data Integration",
        description: "Sistem data pertanian terhubung untuk mendukung kebijakan pangan nasional yang lebih baik."
    }
];

const BenefitSection = () => {
    const getColorClasses = (color) => {
        const colors = {
            green: 'bg-green-100 text-green-600',
            blue: 'bg-blue-100 text-blue-600',
            purple: 'bg-purple-100 text-purple-600',
            orange: 'bg-orange-100 text-orange-600'
        };
        return colors[color] || colors.green;
    };

    return (
        <section className="w-full pb-20 md:pb-32 px-4 sm:px-6 lg:px-20 py-12 md:py-16 bg-white">
            <div className="max-w-6xl mx-auto">
                
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Manfaat untuk Semua
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        SiTani memberikan nilai tambah bagi setiap stakeholder dalam ekosistem 
                        pertanian Indonesia
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {BENEFITS.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div 
                                key={index}
                                className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-14 h-14 rounded-2xl ${getColorClasses(benefit.color)} flex items-center justify-center flex-shrink-0`}>
                                        <Icon size={28} strokeWidth={2} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {benefit.category}
                                    </h3>
                                </div>

                                <ul className="space-y-3">
                                    {benefit.benefits.map((item, idx) => (
                                        <li 
                                            key={idx}
                                            className="flex items-start gap-3 text-gray-600"
                                        >
                                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-base leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-16 p-8 bg-green-50 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Siap Merasakan Manfaatnya?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Bergabunglah dengan ribuan petani dan mitra yang telah merasakan 
                        transformasi digital pertanian bersama SiTani
                    </p>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 text-base md:text-lg rounded-full transition-colors duration-300">
                        Daftar Sekarang
                    </button>
                </div>

            </div>
        </section>
    );
};

export default BenefitSection;