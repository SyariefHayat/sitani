import Image from "next/image";
import { FEATURES } from "@/lib/constants";

const FeatureSection = () => {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-16">
      <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10 lg:mb-12">
        <div className="h-0.5 w-full rounded-full bg-linear-to-r from-transparent to-[#2d7a3a]/70" />
        <h2 className="w-full text-center text-xl sm:text-3xl lg:text-4xl font-bold text-[#1a4528] tracking-tight whitespace-nowrap">
          Fitur Utama SiTani
        </h2>
        <div className="h-0.5 w-full rounded-full bg-linear-to-l from-transparent to-[#2d7a3a]/70" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="group w-full p-4 sm:p-5 text-center bg-white rounded-xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(26,69,40,0.12)] hover:-translate-y-1"
          >
            <Image
              src={feature.icon}
              alt={feature.alt}
              width={200}
              height={200}
            />

            <h3 className="text-sm sm:text-base font-semibold text-[#1a4528] leading-snug mb-1.5">
              {feature.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
