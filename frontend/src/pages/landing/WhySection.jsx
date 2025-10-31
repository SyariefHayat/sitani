import React from 'react';
import { TrendingDown, Users, Database, Leaf, CheckCircle2 } from 'lucide-react';

const LIST_PROBLEM = [
    {
        icon: TrendingDown,
        title: "Meningkatkan Efisiensi Distribusi Hasil Panen",
        desc: "Menghilangkan rantai pasok panjang dengan sistem digital terpadu yang menghubungkan petani langsung ke konsumen, memastikan distribusi lebih cepat dan efisien.",
        impact: "Waktu distribusi lebih singkat"
    },
    {
        icon: Users,
        title: "Memberikan Harga Adil bagi Petani",
        desc: "Marketplace transparan tanpa perantara yang merugikan, sehingga petani mendapat harga yang sesuai dengan kualitas produk dan kerja keras mereka.",
        impact: "Pendapatan petani meningkat"
    },
    {
        icon: Database,
        title: "Menjamin Ketersediaan Pangan Nasional",
        desc: "Sistem manajemen data dan analitik real-time yang membantu pemerintah memantau produksi, stok, dan distribusi pangan untuk stabilitas nasional.",
        impact: "Kedaulatan pangan terjaga"
    },
    {
        icon: Leaf,
        title: "Mendorong Transformasi Digital Pertanian",
        desc: "Mengintegrasikan teknologi IoT, AI analytics, dan sistem pembiayaan digital untuk membawa pertanian Indonesia ke era modern yang berkelanjutan.",
        impact: "Ekosistem pertanian modern"
    }
];

const WhySection = () => {
    return (
        <section className="w-full min-h-screen px-4 sm:px-6 lg:px-20 py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 bg-green-100 rounded-full">
                        <span className="text-green-700 font-semibold text-sm">Platform Digital Terpadu</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
                        Mengapa SiTani Hadir?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        SiTani dirancang untuk mengatasi tantangan mendasar dalam ekosistem pertanian Indonesia 
                        dan membawa transformasi digital yang nyata bagi petani
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {LIST_PROBLEM.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div 
                                key={index} 
                                className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out border border-gray-100 hover:border-green-200 overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <div className="mb-6 inline-flex">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                            <Icon size={32} className="text-white" strokeWidth={2.5} />
                                        </div>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-green-700 transition-colors duration-300">
                                        {item.title}
                                    </h3>

                                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                                        {item.desc}
                                    </p>

                                    <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                                        <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                                        <span className="text-sm font-semibold text-green-700">
                                            {item.impact}
                                        </span>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhySection;