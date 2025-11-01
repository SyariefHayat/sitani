import React from "react";

import NavBar from "./NavBar";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    return (
        <section className="w-full h-full lg:h-screen overflow-hidden bg-white">
            <NavBar />

            <div className="absolute hidden xl:block w-1/2 h-full bg-green-500 z-[1] top-0 right-0 [clip-path:polygon(100%_0,85%_0%,0%_100%,100%_100%)]"></div>

            <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 py-12 sm:pt-14 lg:pt-0">
                <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5 text-center lg:text-left mb-14 lg:mb-20 max-w-2xl lg:max-w-none">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900">
                        SMART INTEGRATED <br />
                        <span className="text-green-600">
                            Tani ( SiTani )
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxed">
                        Membangun Kemandirian Petani dan Ekosistem Pertanian Digital Indonesia
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <a href="/signup">
                            <Button className="w-fit bg-green-600 hover:bg-green-700 py-4 sm:py-6 px-6 sm:px-8 text-sm sm:text-base md:text-lg cursor-pointer shadow-md">
                                Mulai Sekarang
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center mt-0 sm:mt-10 relative">

                    <img
                        src="/Group1.png"
                        alt="Mockup aplikasi SITANI"
                        className="hidden xl:block w-[120%] md:ml-0 lg:max-w-2xl lg:mb-36 lg:ml-12 xl:ml-12 z-[2]"
                    />

                    <img
                        src="/Group2.png"
                        alt="Mockup aplikasi SITANI"
                        className="block xl:hidden w-[120%] md:ml-0 lg:max-w-2xl lg:mb-36 lg:ml-12 xl:ml-12 z-[2]"
                    />
                </div>                                                                              
            </div>
        </section>
    );
};

export default HeroSection;