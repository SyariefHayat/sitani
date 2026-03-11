import { Wheat, Carrot, Apple, Leaf, FlowerIcon, Droplets, TreesIcon, Bean } from "lucide-react"

const CATEGORIES = [
    { icon: Wheat, title: "Beras & Padi", count: "120+ Produk", color: "text-amber-600 bg-amber-50" },
    { icon: Carrot, title: "Sayuran", count: "85+ Produk", color: "text-green-600 bg-green-50" },
    { icon: Apple, title: "Buah-buahan", count: "95+ Produk", color: "text-red-600 bg-red-50" },
    { icon: Leaf, title: "Rempah-rempah", count: "60+ Produk", color: "text-emerald-600 bg-emerald-50" },
    { icon: FlowerIcon, title: "Tanaman Hias", count: "45+ Produk", color: "text-pink-600 bg-pink-50" },
    { icon: Droplets, title: "Hasil Olahan", count: "70+ Produk", color: "text-blue-600 bg-blue-50" },
    { icon: TreesIcon, title: "Perkebunan", count: "55+ Produk", color: "text-teal-600 bg-teal-50" },
    { icon: Bean, title: "Kacang-kacangan", count: "40+ Produk", color: "text-orange-600 bg-orange-50" },
]

const CategorySection = () => {
    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 py-8 sm:py-10 lg:py-14">
            <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10 lg:mb-12">
                <div className="h-[2px] w-full rounded-full bg-linear-to-r from-transparent to-[#2d7a3a]/70" />
                <h2 className="w-full text-center text-xl sm:text-3xl lg:text-4xl font-bold text-[#1a4528] tracking-tight whitespace-nowrap">
                    Kategori Produk
                </h2>
                <div className="h-[2px] w-full rounded-full bg-linear-to-l from-transparent to-[#2d7a3a]/70" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                {CATEGORIES.map((cat) => (
                    <div
                        key={cat.title}
                        className="group w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(26,69,40,0.12)] hover:-translate-y-1 cursor-pointer"
                    >
                        <div className={`p-2.5 sm:p-3 rounded-xl ${cat.color} shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                            <cat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-sm sm:text-base font-semibold text-[#1a4528] leading-snug">
                                {cat.title}
                            </h3>
                            <p className="text-xs text-gray-500 mt-0.5">
                                {cat.count}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategorySection
