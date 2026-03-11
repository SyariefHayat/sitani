import Link from "next/link"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
    return (
        <section className="w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[90vh] bg-[url(/hero-section-bg.png)] bg-cover bg-center flex flex-col justify-center gap-3 sm:gap-5 lg:gap-6 px-6 sm:px-10 lg:px-16 py-12 sm:py-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1a4528] font-extrabold leading-tight tracking-tight">
                Selamat Datang, Andi!
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#206536] font-bold">Baca, tulis, dan bagikan pengetahuan pertanian</p>
            <div className="w-full sm:w-2/3 lg:w-1/3 grid grid-cols-2 gap-2 sm:gap-3">
                <Button asChild className="bg-[#609A26] hover:bg-[#528520] text-white font-semibold rounded-lg py-4 sm:py-5 text-xs sm:text-sm shadow-sm cursor-pointer">
                    <Link href="/article/tulis">Tulis Artikel</Link>
                </Button>
                <Button asChild variant="outline" className="border-[#609A26] text-[#609A26] hover:bg-[#609A26]/5 font-semibold rounded-lg py-4 sm:py-5 text-xs sm:text-sm shadow-sm cursor-pointer">
                    <Link href="/article/kategori">Jelajahi</Link>
                </Button>
            </div>
        </section>
    )
}

export default HeroSection
