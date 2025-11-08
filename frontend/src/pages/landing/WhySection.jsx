import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Scale, Wheat, Cpu } from 'lucide-react';

const LIST_PROBLEM = [
    {
        icon: Truck,
        title: "Efisiensi Distribusi Panen",
        description: "Mempercepat proses distribusi hasil panen dari petani ke konsumen dengan sistem yang terintegrasi",
        sectionId: "ekosistem"
    },
    {
        icon: Scale,
        title: "Harga Adil untuk Petani",
        description: "Menghilangkan rantai tengkulak yang panjang agar petani mendapat keuntungan yang layak",
        sectionId: "visi-misi"
    },
    {
        icon: Wheat,
        title: "Ketersediaan Pangan Nasional",
        description: "Memastikan data produksi dan distribusi pangan yang akurat untuk ketahanan pangan",
        sectionId: "kemitraan"
    },
    {
        icon: Cpu,
        title: "Transformasi Digital Pertanian",
        description: "Memberdayakan petani dengan teknologi modern untuk meningkatkan produktivitas",
        sectionId: "tentang-sitani"
    }
];

const WhySection = () => {
    return (
        <section className="w-full xl:min-h-screen px-4 sm:px-6 lg:px-20 py-12 md:py-16 bg-white">
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

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
                    <ul role="list" className="contents">
                        {LIST_PROBLEM.map((item) => {
                        const Icon = item.icon;
                            return (
                                <li key={item.title} className="contents">
                                    <Link
                                        to={`/about-us#${item.sectionId}`}
                                        className="block"
                                    >
                                        <article
                                            tabIndex={0}
                                            className={[
                                            "group relative rounded-3xl bg-white/80 dark:bg-zinc-900/70",
                                            "p-6 sm:p-8 lg:p-10",
                                            "border border-zinc-200/70 dark:border-zinc-800",
                                            "shadow-sm hover:shadow-xl dark:shadow-none",
                                            "transition-all duration-300 motion-reduce:transition-none",
                                            "hover:-translate-y-0.5",
                                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/70",
                                            "overflow-hidden cursor-pointer"
                                            ].join(" ")}
                                            aria-label={item.title}
                                        >
                                            {/* subtle radial glow */}
                                            <div
                                            aria-hidden="true"
                                            className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-green-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                                            />

                                            <div className="relative z-10">
                                                <div className="mb-5 sm:mb-6 inline-flex">
                                                    <div
                                                    className={[
                                                        "grid place-items-center",
                                                        "h-14 w-14 sm:h-16 sm:w-16 rounded-2xl",
                                                        "bg-gradient-to-br from-green-400 to-green-600",
                                                        "shadow-lg ring-1 ring-white/20 dark:ring-black/20",
                                                        "transition-transform duration-300 motion-reduce:transition-none",
                                                        "group-hover:scale-110 group-hover:rotate-3"
                                                    ].join(" ")}
                                                    >
                                                    <Icon
                                                        size={30}
                                                        className="text-white"
                                                        strokeWidth={2.6}
                                                        aria-hidden="true"
                                                    />
                                                    </div>
                                                </div>

                                                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3 leading-tight tracking-tight">
                                                    {item.title}
                                                </h3>

                                                <p className="text-zinc-600 dark:text-zinc-300/90 leading-relaxed text-sm sm:text-base">
                                                    {item.description}
                                                </p>
                                            </div>

                                            {/* animated bottom accent */}
                                            <div
                                            aria-hidden="true"
                                            className={[
                                                "absolute bottom-0 left-0 h-[3px] w-full",
                                                "bg-gradient-to-r from-green-400 to-green-600",
                                                "origin-left scale-x-0 group-hover:scale-x-100",
                                                "transition-transform duration-500 motion-reduce:transition-none"
                                            ].join(" ")}
                                            />
                                        </article>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhySection;