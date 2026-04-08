import Image from "next/image";
import { STATS } from "@/lib/constants";

const StatisticSection = () => {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 py-8 sm:py-10 lg:py-14">
      <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10 lg:mb-12">
        <div className="h-0.5 w-full rounded-full bg-linear-to-r from-transparent to-[#2d7a3a]/70" />
        <h2 className="w-full text-center text-xl sm:text-3xl lg:text-4xl font-bold text-[#1a4528] tracking-tight whitespace-nowrap">
          Keunggulan SiTani
        </h2>
        <div className="h-0.5 w-full rounded-full bg-linear-to-l from-transparent to-[#2d7a3a]/70" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="w-full flex items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] px-2 py-4 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(26,69,40,0.12)] hover:-translate-y-0.5"
          >
            <div className="shrink-0">
              <Image
                src={stat.icon}
                alt={stat.alt}
                width={56}
                height={56}
                className="w-12 h-12 lg:w-14 lg:h-14 object-contain"
              />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl lg:text-2xl font-bold text-[#1a4528] leading-tight tracking-tight">
                {stat.value}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatisticSection;
