import { LIST_FEATURES } from "@/constants/listFeatures";
import React from "react";

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
                                className="group bg-white rounded-3xl p-8 shadow-lg transform transition-all duration-500 border border-gray-100 hover:border-green-200 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${item.color} opacity-5 rounded-full -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150`}></div>

                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                            <Icon size={32} className="text-white" strokeWidth={2.5} />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                                        {item.title}
                                    </h3>
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