"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Star, MapPin, ShoppingCart, ChevronLeft, ChevronRight, Wheat, Carrot, Apple, Leaf, FlowerIcon, Droplets, TreesIcon, Bean, Sparkles, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const CATEGORIES = [
    { icon: Wheat, title: "Beras & Padi", color: "text-amber-600 bg-amber-50", activeColor: "text-amber-700 border-amber-500" },
    { icon: Carrot, title: "Sayuran", color: "text-green-600 bg-green-50", activeColor: "text-green-700 border-green-500" },
    { icon: Apple, title: "Buah-buahan", color: "text-red-600 bg-red-50", activeColor: "text-red-700 border-red-500" },
    { icon: Leaf, title: "Rempah-rempah", color: "text-emerald-600 bg-emerald-50", activeColor: "text-emerald-700 border-emerald-500" },
    { icon: FlowerIcon, title: "Tanaman Hias", color: "text-pink-600 bg-pink-50", activeColor: "text-pink-700 border-pink-500" },
    { icon: Droplets, title: "Hasil Olahan", color: "text-blue-600 bg-blue-50", activeColor: "text-blue-700 border-blue-500" },
    { icon: TreesIcon, title: "Perkebunan", color: "text-teal-600 bg-teal-50", activeColor: "text-teal-700 border-teal-500" },
    { icon: Bean, title: "Kacang-kacangan", color: "text-orange-600 bg-orange-50", activeColor: "text-orange-700 border-orange-500" },
]

const CATEGORY_COUNTS: Record<string, string> = {
    "Beras & Padi": "120+ Produk",
    "Sayuran": "85+ Produk",
    "Buah-buahan": "95+ Produk",
    "Rempah-rempah": "60+ Produk",
    "Tanaman Hias": "45+ Produk",
    "Hasil Olahan": "70+ Produk",
    "Perkebunan": "55+ Produk",
    "Kacang-kacangan": "40+ Produk",
}

const ALL_PRODUCTS = [
    // Beras & Padi
    { image: "/hero-section-bg.png", title: "Beras Organik Premium Cianjur", price: "Rp 18.000", unit: "/kg", rating: 4.9, reviews: 234, seller: "Tani Makmur", location: "Cianjur, Jawa Barat", category: "Beras & Padi", isNew: false, isFeatured: true },
    { image: "/hero-section-bg.png", title: "Beras Merah Organik", price: "Rp 22.000", unit: "/kg", rating: 4.7, reviews: 89, seller: "Sawah Sehat", location: "Subang, Jawa Barat", category: "Beras & Padi", isNew: true, isFeatured: false },
    { image: "/hero-section-bg.png", title: "Beras Ketan Putih", price: "Rp 16.000", unit: "/kg", rating: 4.5, reviews: 67, seller: "Padi Makmur", location: "Karawang, Jawa Barat", category: "Beras & Padi", isNew: false, isFeatured: false },
    // Sayuran
    { image: "/hero-section-bg.png", title: "Cabai Merah Keriting Segar", price: "Rp 45.000", unit: "/kg", rating: 4.7, reviews: 189, seller: "Kebun Segar", location: "Brebes, Jawa Tengah", category: "Sayuran", isNew: false, isFeatured: true },
    { image: "/hero-section-bg.png", title: "Tomat Cherry Hidroponik", price: "Rp 35.000", unit: "/kg", rating: 4.9, reviews: 98, seller: "Green Farm", location: "Bandung, Jawa Barat", category: "Sayuran", isNew: true, isFeatured: true },
    { image: "/hero-section-bg.png", title: "Brokoli Segar Organik", price: "Rp 28.000", unit: "/kg", rating: 4.6, reviews: 45, seller: "Kebun Hijau", location: "Lembang, Jawa Barat", category: "Sayuran", isNew: true, isFeatured: false },
    { image: "/hero-section-bg.png", title: "Bayam Hidroponik Premium", price: "Rp 8.000", unit: "/ikat", rating: 4.8, reviews: 120, seller: "Hydro Farm", location: "Bogor, Jawa Barat", category: "Sayuran", isNew: false, isFeatured: false },
    // Buah-buahan
    { image: "/hero-section-bg.png", title: "Mangga Harum Manis Grade A", price: "Rp 25.000", unit: "/kg", rating: 4.8, reviews: 312, seller: "Buah Nusantara", location: "Indramayu, Jawa Barat", category: "Buah-buahan", isNew: false, isFeatured: true },
    { image: "/hero-section-bg.png", title: "Jeruk Mandarin Manis", price: "Rp 30.000", unit: "/kg", rating: 4.7, reviews: 156, seller: "Kebun Jeruk", location: "Batu, Jawa Timur", category: "Buah-buahan", isNew: true, isFeatured: false },
    { image: "/hero-section-bg.png", title: "Pisang Cavendish Segar", price: "Rp 15.000", unit: "/sisir", rating: 4.5, reviews: 78, seller: "Tani Pisang", location: "Lumajang, Jawa Timur", category: "Buah-buahan", isNew: false, isFeatured: false },
    // Rempah-rempah
    { image: "/hero-section-bg.png", title: "Kunyit Segar Pilihan", price: "Rp 20.000", unit: "/kg", rating: 4.6, reviews: 92, seller: "Rempah Nusantara", location: "Solo, Jawa Tengah", category: "Rempah-rempah", isNew: false, isFeatured: true },
    { image: "/hero-section-bg.png", title: "Jahe Merah Organik", price: "Rp 35.000", unit: "/kg", rating: 4.8, reviews: 134, seller: "Herbal Farm", location: "Boyolali, Jawa Tengah", category: "Rempah-rempah", isNew: true, isFeatured: false },
    // Perkebunan
    { image: "/hero-section-bg.png", title: "Kopi Arabika Toraja Premium", price: "Rp 120.000", unit: "/kg", rating: 4.9, reviews: 445, seller: "Kopi Nusantara", location: "Toraja, Sulawesi Selatan", category: "Perkebunan", isNew: false, isFeatured: true },
    { image: "/hero-section-bg.png", title: "Teh Hijau Organik Puncak", price: "Rp 65.000", unit: "/kg", rating: 4.7, reviews: 201, seller: "Kebun Teh", location: "Puncak, Jawa Barat", category: "Perkebunan", isNew: true, isFeatured: true },
    // Kacang-kacangan
    { image: "/hero-section-bg.png", title: "Kacang Tanah Premium", price: "Rp 28.000", unit: "/kg", rating: 4.5, reviews: 67, seller: "Tani Kacang", location: "Tuban, Jawa Timur", category: "Kacang-kacangan", isNew: false, isFeatured: false },
    { image: "/hero-section-bg.png", title: "Kedelai Lokal Organik", price: "Rp 18.000", unit: "/kg", rating: 4.6, reviews: 89, seller: "Tani Jaya", location: "Jember, Jawa Timur", category: "Kacang-kacangan", isNew: true, isFeatured: false },
    // Hasil Olahan
    { image: "/hero-section-bg.png", title: "Madu Hutan Asli Sumbawa", price: "Rp 85.000", unit: "/botol", rating: 4.9, reviews: 310, seller: "Madu Asli", location: "Sumbawa, NTB", category: "Hasil Olahan", isNew: false, isFeatured: true },
    { image: "/hero-section-bg.png", title: "Gula Aren Organik", price: "Rp 45.000", unit: "/kg", rating: 4.8, reviews: 176, seller: "Aren Jaya", location: "Lebak, Banten", category: "Hasil Olahan", isNew: true, isFeatured: false },
    // Tanaman Hias
    { image: "/hero-section-bg.png", title: "Monstera Deliciosa", price: "Rp 150.000", unit: "/pot", rating: 4.8, reviews: 256, seller: "Green Decor", location: "Depok, Jawa Barat", category: "Tanaman Hias", isNew: true, isFeatured: true },
    // Additional
    { image: "/hero-section-bg.png", title: "Jagung Manis Pipilan Segar", price: "Rp 12.000", unit: "/kg", rating: 4.6, reviews: 156, seller: "Tani Jaya", location: "Malang, Jawa Timur", category: "Sayuran", isNew: false, isFeatured: false },
]

const FILTER_LABELS = ["Semua", ...CATEGORIES.map(c => c.title)]

interface ProductCardProps {
    product: typeof ALL_PRODUCTS[0]
}

const ProductCard = ({ product }: ProductCardProps) => (
    <div className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(26,69,40,0.12)] hover:-translate-y-0.5">
        <div className="relative w-full h-40 sm:h-44 lg:h-48 bg-gray-100">
            <Image src={product.image} alt={product.title} fill className="object-cover" />
            {product.isNew && (
                <span className="absolute top-2 left-2 bg-[#609A26] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Baru</span>
            )}
            {product.isFeatured && (
                <span className="absolute top-2 right-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Unggulan
                </span>
            )}
        </div>
        <div className="p-4 sm:p-5 flex flex-col gap-3">
            <h3 className="text-sm sm:text-base font-bold text-[#1a4528] leading-snug line-clamp-2">{product.title}</h3>
            <div className="flex items-baseline gap-1">
                <span className="text-lg sm:text-xl font-extrabold text-[#609A26]">{product.price}</span>
                <span className="text-xs text-gray-400">{product.unit}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-[#1a4528]">{product.rating}</span>
                    <span>({product.reviews})</span>
                </div>
                <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate max-w-[120px]">{product.location}</span>
                </div>
            </div>
            <p className="text-xs text-gray-400">
                oleh <span className="font-medium text-gray-600">{product.seller}</span>
            </p>
            <div className="grid grid-cols-2 gap-2 pt-1">
                <Button size="sm" variant="outline" className="border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 text-xs font-semibold cursor-pointer">
                    Detail
                </Button>
                <Button size="sm" className="bg-[#206536] hover:bg-[#1a5530] text-white text-xs font-semibold cursor-pointer gap-1.5">
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Beli
                </Button>
            </div>
        </div>
    </div>
)

interface ProductListProps {
    title: string
    icon: React.ReactNode
    products: typeof ALL_PRODUCTS
    activeFilter: string
    onFilterChange: (f: string) => void
}

const ProductList = ({ title, icon, products, activeFilter, onFilterChange }: ProductListProps) => {
    const [startIndex, setStartIndex] = useState(0)
    const visibleCount = 3

    const filtered = activeFilter === "Semua" ? products : products.filter(p => p.category === activeFilter)
    const maxIndex = Math.max(0, filtered.length - visibleCount)
    const visibleProducts = filtered.slice(startIndex, startIndex + visibleCount)

    // Reset start index when filter changes
    const prevFilter = useRef(activeFilter)
    if (prevFilter.current !== activeFilter) {
        prevFilter.current = activeFilter
        setStartIndex(0)
    }

    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 pb-8 sm:pb-10 lg:pb-14">
            {/* Header Row */}
            <div className="flex items-start sm:items-center justify-between mb-4 gap-4 flex-col sm:flex-row">
                <div className="flex items-center gap-2.5 shrink-0">
                    {icon}
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1a4528]">{title}</h2>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setStartIndex((prev) => Math.max(0, prev - 1))}
                        disabled={startIndex === 0}
                        className="border-[#206536]/30 text-[#206536] hover:bg-[#206536] hover:text-white disabled:opacity-40 cursor-pointer h-8 w-8 sm:h-9 sm:w-9"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setStartIndex((prev) => Math.min(maxIndex, prev + 1))}
                        disabled={startIndex >= maxIndex}
                        className="border-[#206536]/30 text-[#206536] hover:bg-[#206536] hover:text-white disabled:opacity-40 cursor-pointer h-8 w-8 sm:h-9 sm:w-9"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 sm:gap-1.5 mb-6 overflow-x-auto pb-1 scrollbar-hide">
                {FILTER_LABELS.map((label) => (
                    <button
                        key={label}
                        onClick={() => onFilterChange(label)}
                        className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${activeFilter === label
                                ? "bg-[#609A26] text-white shadow-sm"
                                : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Cards Grid */}
            {visibleProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                    {visibleProducts.map((product, index) => (
                        <ProductCard key={`${product.title}-${startIndex}-${index}`} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 text-gray-400 text-sm">
                    Belum ada produk di kategori ini.
                </div>
            )}
        </section>
    )
}

const MarketplaceContent = () => {
    const [activeFilter, setActiveFilter] = useState("Semua")
    const productRef = useRef<HTMLDivElement>(null)

    const handleCategoryClick = (categoryTitle: string) => {
        setActiveFilter(categoryTitle)
        productRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    const featuredProducts = ALL_PRODUCTS.filter(p => p.isFeatured)
    const newProducts = ALL_PRODUCTS.filter(p => p.isNew)

    return (
        <>
            {/* Category Section */}
            <section className="w-full px-6 sm:px-10 lg:px-16 py-8 sm:py-10 lg:py-14">
                <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10 lg:mb-12">
                    <div className="h-[2px] w-full rounded-full bg-linear-to-r from-transparent to-[#2d7a3a]/70" />
                    <h2 className="w-full text-center text-xl sm:text-3xl lg:text-4xl font-bold text-[#1a4528] tracking-tight whitespace-nowrap">
                        Kategori Produk
                    </h2>
                    <div className="h-[2px] w-full rounded-full bg-linear-to-l from-transparent to-[#2d7a3a]/70" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                    {CATEGORIES.map((cat) => {
                        const isActive = activeFilter === cat.title
                        return (
                            <div
                                key={cat.title}
                                onClick={() => handleCategoryClick(cat.title)}
                                className={`group w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(26,69,40,0.12)] hover:-translate-y-1 cursor-pointer ${isActive
                                        ? "bg-[#609A26]/5 border-[#609A26]/40 ring-1 ring-[#609A26]/20"
                                        : "bg-white border-gray-100"
                                    }`}
                            >
                                <div className={`p-2.5 sm:p-3 rounded-xl ${cat.color} shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                                    <cat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className={`text-sm sm:text-base font-semibold leading-snug ${isActive ? "text-[#609A26]" : "text-[#1a4528]"}`}>
                                        {cat.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        {CATEGORY_COUNTS[cat.title]}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Product Sections */}
            <div ref={productRef}>
                <ProductList
                    title="Produk Unggulan"
                    icon={<Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />}
                    products={featuredProducts}
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />

                <ProductList
                    title="Baru Ditambahkan"
                    icon={<Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#609A26]" />}
                    products={newProducts}
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />

                <ProductList
                    title="Semua Produk"
                    icon={<ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-[#206536]" />}
                    products={ALL_PRODUCTS}
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />
            </div>
        </>
    )
}

export default MarketplaceContent
