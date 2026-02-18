import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
    return (
        <section className="w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[90vh] bg-[url(/hero-section-bg.png)] bg-cover bg-center flex flex-col justify-center gap-3 sm:gap-5 lg:gap-6 px-6 sm:px-10 lg:px-16 py-12 sm:py-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1a4528] font-extrabold leading-tight tracking-tight">
                Marketplace Pertanian <br className="hidden sm:block" /> Terlengkap di Indonesia
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#206536] font-bold">Beli langsung dari petani, kualitas terjamin & harga terbaik</p>
            <div className="w-full sm:w-2/3 lg:w-1/3 flex items-center gap-2">
                <div className="flex-1 flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100">
                    <Search className="w-4 h-4 text-gray-400 shrink-0" />
                    <input
                        type="text"
                        placeholder="Cari produk pertanian..."
                        className="w-full text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
                    />
                </div>
                <Button className="bg-[#609A26] hover:bg-[#528520] text-white font-semibold rounded-lg px-5 py-3 text-xs sm:text-sm shadow-sm cursor-pointer shrink-0">
                    Cari
                </Button>
            </div>
        </section>
    )
}

export default HeroSection
