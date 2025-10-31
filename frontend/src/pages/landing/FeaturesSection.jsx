import { useEffect, useState } from "react";
import { LIST_FEATURES } from "@/constants/listFeatures";
import { ArrowRight } from "lucide-react";
import React from "react";

const FeaturesSection = () => {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        // Ambil hash dari URL, contoh: #pasar → "pasar"
        const currentHash = window.location.hash.replace("#", "");
        setActiveId(currentHash);

        // Update kalau hash berubah (misalnya user klik anchor)
        const handleHashChange = () => {
            setActiveId(window.location.hash.replace("#", ""));
        };
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

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
                        const isActive = activeId === item.id;

                        return (
                            <div
                                id={item.id}
                                key={index}
                                className={`group bg-white rounded-3xl p-8 shadow-lg transform transition-all duration-500 border relative overflow-hidden
                                    ${isActive ? "border-green-400 shadow-2xl scale-[1.02]" : "border-gray-100 hover:border-green-200 hover:-translate-y-2 hover:shadow-2xl"}
                                `}
                            >
                                <div
                                    className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${item.color} opacity-5 rounded-full -mr-20 -mt-20 transition-transform duration-700
                                        ${isActive ? "scale-150" : "group-hover:scale-150"}
                                    `}
                                ></div>

                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <div
                                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg transform transition-all duration-500
                                                ${isActive ? "scale-110 rotate-6" : "group-hover:scale-110 group-hover:rotate-6"}
                                            `}
                                        >
                                            <Icon size={32} className="text-white" strokeWidth={2.5} />
                                        </div>
                                    </div>

                                    <h3
                                        className={`text-xl font-bold mb-4 transition-colors duration-300
                                            ${isActive ? "text-green-600" : "text-gray-900 group-hover:text-green-600"}
                                        `}
                                    >
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                                        {item.description}
                                    </p>

                                    {/* Hanya tampilkan highlights jika id cocok */}
                                    {isActive && (
                                        <div className="space-y-2 pt-4 border-t border-gray-100 animate-fadeIn">
                                            {item.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                    <span className="text-sm text-gray-700 font-medium">
                                                        {highlight}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div
                                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} transform transition-transform duration-500 origin-left
                                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                                    `}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;