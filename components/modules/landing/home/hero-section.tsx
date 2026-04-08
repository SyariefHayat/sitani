import Link from "next/link";
import { Button } from "@/components/ui/button";

const NAV_BUTTONS = [
  {
    href: "/register",
    label: "Daftar sebagai Petani",
    className: "bg-[#FABE29] hover:bg-[#e5ab1e] text-black",
  },
  {
    href: "/register/investor",
    label: "Gabung Investor",
    className: "bg-[#427B44] hover:bg-[#376a39] text-white",
  },
  {
    href: "/register/pembeli",
    label: "Belanja Hasil Tani",
    className: "bg-[#427B44] hover:bg-[#376a39] text-white",
  },
  {
    href: "/register/peserta",
    label: "Ikuti Pelatihan",
    className: "bg-[#609A26] hover:bg-[#528520] text-white",
  },
];

const HeroSection = () => {
  return (
    <section
      className="
        w-full
        min-h-[60vh] sm:min-h-[75vh] lg:min-h-[135vh]
        bg-[url(/hero-hp.png)] md:bg-[url(/hero-small.png)] lg:bg-[url(/hero.jpeg)]
        bg-cover bg-center bg-no-repeat
        flex items-end justify-center
        md:items-end md:justify-end
        px-4 sm:px-8 md:px-54 lg:px-54
        pb-32 sm:pb-14 md:pb-40 lg:pb-64
      "
      role="banner"
      aria-label="Hero Section SmartTani"
    >
      <div
        className="
          grid grid-cols-2
          gap-2 sm:gap-3
          w-full sm:w-72 md:w-80 lg:w-96
        "
      >
        {NAV_BUTTONS.map(({ href, label, className }) => (
          <Link key={href} href={href} className="w-full">
            <Button
              className={`
                w-full font-semibold rounded-lg
                py-4 sm:py-5
                text-xs sm:text-sm
                shadow-sm cursor-pointer
                ${className}
              `}
            >
              {label}
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
