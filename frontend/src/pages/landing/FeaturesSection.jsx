import React from 'react';
import { ShoppingCart, Sprout, BarChart3, CreditCard, Truck, GraduationCap, ArrowRight } from 'lucide-react';

const LIST_FEATURES = [
    {
        icon: ShoppingCart,
        title: "Marketplace Komoditas",
        description: "Jual beli hasil panen padi, benih, dan beras langsung dari petani ke konsumen tanpa perantara yang merugikan.",
        highlights: ["Transaksi Transparan", "Harga Fair", "Tanpa Perantara"],
        color: "from-blue-500 to-blue-600"
    },
    {
        icon: Sprout,
        title: "Manajemen Benih & Produksi",
        description: "Sistem pelacakan varietas benih unggul seperti Impari Zinc dan manajemen hasil panen berbasis lokasi dengan teknologi modern.",
        highlights: ["Tracking Benih", "Monitoring Produksi", "Data Real-time"],
        color: "from-green-500 to-green-600"
    },
    {
        icon: BarChart3,
        title: "Data Analytics Pertanian",
        description: "Dashboard produktivitas, analisis harga pasar, prediksi cuaca, dan tren pasar real-time untuk keputusan yang lebih baik.",
        highlights: ["Dashboard Interaktif", "Prediksi Cuaca", "Analisis Pasar"],
        color: "from-purple-500 to-purple-600"
    },
    {
        icon: CreditCard,
        title: "Pembiayaan & Asuransi Digital",
        description: "Terintegrasi dengan mitra seperti PNM, BRI Agro, dan fintech agrikultur untuk skema modal kerja petani yang mudah diakses.",
        highlights: ["Akses Modal Mudah", "Proses Cepat", "Bunga Kompetitif"],
        color: "from-orange-500 to-orange-600"
    },
    {
        icon: Truck,
        title: "Logistik & Distribusi Digital",
        description: "Sistem pengiriman dari gudang digital ke konsumen dengan tracking transparan dan manajemen rantai pasok yang efisien.",
        highlights: ["Real-time Tracking", "Pengiriman Cepat", "Jangkauan Luas"],
        color: "from-red-500 to-red-600"
    },
    {
        icon: GraduationCap,
        title: "Pelatihan & Sertifikasi Petani",
        description: "Modul e-learning agribisnis modern, sertifikasi GAP (Good Agricultural Practices), dan penerapan teknologi pertanian.",
        highlights: ["E-learning Gratis", "Sertifikasi GAP", "Pendampingan Ahli"],
        color: "from-teal-500 to-teal-600"
    }
];

const FeaturesSection = () => {
    return (
        <section className="w-full min-h-screen pb-16 md:pb-24 px-4 sm:px-6 lg:px-20 py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 bg-green-100 rounded-full">
                        <span className="text-green-700 font-semibold text-sm">Fitur Unggulan</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
                        Fitur Utama SiTani
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Solusi digital terintegrasi yang dirancang khusus untuk meningkatkan produktivitas 
                        dan kesejahteraan petani Indonesia
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {LIST_FEATURES.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-green-200 relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${item.color} opacity-5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700`}></div>
                                
                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                            <Icon size={32} className="text-white" strokeWidth={2.5} />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                                        {item.description}
                                    </p>

                                    <div className="space-y-2 pt-4 border-t border-gray-100">
                                        {item.highlights.map((highlight, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                <span className="text-sm text-gray-700 font-medium">
                                                    {highlight}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex items-center gap-2 text-green-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span>Pelajari lebih lanjut</span>
                                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>

                                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;