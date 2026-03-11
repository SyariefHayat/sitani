import Link from "next/link"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
    return (
        <section className="w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[90vh] bg-[url(/hero-section-bg.png)] bg-cover bg-center flex flex-col justify-center gap-3 sm:gap-5 lg:gap-6 px-6 sm:px-10 lg:px-16 py-12 sm:py-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1a4528] font-extrabold leading-tight tracking-tight">
                SiTani - Digitalisasi <br className="hidden sm:block" /> Ekosistem Pertanian Indonesia
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#206536] font-bold">Jual panen, distribusi, investasi &amp; pelatihan dalam satu platform</p>
            <div className="w-full sm:w-2/3 lg:w-1/3 grid grid-cols-2 gap-2 sm:gap-3">
                <Link href="/register">
                    <Button className="w-full bg-[#FABE29] hover:bg-[#e5ab1e] text-black font-semibold rounded-lg py-4 sm:py-5 text-xs sm:text-sm shadow-sm cursor-pointer">Daftar sebagai Petani</Button>
                </Link>
                <Link href="/register/investor">
                    <Button className="w-full bg-[#427B44] hover:bg-[#376a39] text-white font-semibold rounded-lg py-4 sm:py-5 text-xs sm:text-sm shadow-sm cursor-pointer">Gabung Investor</Button>
                </Link>
                <Link href="/register/pembeli">
                    <Button className="w-full bg-[#427B44] hover:bg-[#376a39] text-white font-semibold rounded-lg py-4 sm:py-5 text-xs sm:text-sm shadow-sm cursor-pointer">Belanja Hasil Tani</Button>
                </Link>
                <Link href="/register/peserta">
                    <Button className="w-full bg-[#609A26] hover:bg-[#528520] text-white font-semibold rounded-lg py-4 sm:py-5 text-xs sm:text-sm shadow-sm cursor-pointer">Ikuti Pelatihan</Button>
                </Link>
            </div>
        </section>
    )
}

export default HeroSection