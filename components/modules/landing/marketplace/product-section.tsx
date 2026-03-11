"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, MapPin, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const PRODUCTS = [
    {
        image: "/hero-section-bg.png",
        title: "Beras Organik Premium Cianjur",
        price: "Rp 18.000",
        unit: "/kg",
        rating: 4.9,
        reviews: 234,
        seller: "Tani Makmur",
        location: "Cianjur, Jawa Barat",
    },
    {
        image: "/hero-section-bg.png",
        title: "Cabai Merah Keriting Segar",
        price: "Rp 45.000",
        unit: "/kg",
        rating: 4.7,
        reviews: 189,
        seller: "Kebun Segar",
        location: "Brebes, Jawa Tengah",
    },
    {
        image: "/hero-section-bg.png",
        title: "Mangga Harum Manis Grade A",
        price: "Rp 25.000",
        unit: "/kg",
        rating: 4.8,
        reviews: 312,
        seller: "Buah Nusantara",
        location: "Indramayu, Jawa Barat",
    },
    {
        image: "/hero-section-bg.png",
        title: "Jagung Manis Pipilan Segar",
        price: "Rp 12.000",
        unit: "/kg",
        rating: 4.6,
        reviews: 156,
        seller: "Tani Jaya",
        location: "Malang, Jawa Timur",
    },
    {
        image: "/hero-section-bg.png",
        title: "Tomat Cherry Hidroponik",
        price: "Rp 35.000",
        unit: "/kg",
        rating: 4.9,
        reviews: 98,
        seller: "Green Farm",
        location: "Bandung, Jawa Barat",
    },
    {
        image: "/hero-section-bg.png",
        title: "Kopi Arabika Toraja Premium",
        price: "Rp 120.000",
        unit: "/kg",
        rating: 4.9,
        reviews: 445,
        seller: "Kopi Nusantara",
        location: "Toraja, Sulawesi Selatan",
    },
]

const ProductSection = () => {
    const [startIndex, setStartIndex] = useState(0)
    const visibleCount = 3
    const maxIndex = Math.max(0, PRODUCTS.length - visibleCount)

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(0, prev - 1))
    }

    const handleNext = () => {
        setStartIndex((prev) => Math.min(maxIndex, prev + 1))
    }

    const visibleProducts = PRODUCTS.slice(startIndex, startIndex + visibleCount)

    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 pb-8 sm:pb-10 lg:pb-14">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1a4528]">
                    Produk Unggulan
                </h2>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                        className="border-[#206536]/30 text-[#206536] hover:bg-[#206536] hover:text-white disabled:opacity-40 cursor-pointer h-8 w-8 sm:h-9 sm:w-9"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handleNext}
                        disabled={startIndex >= maxIndex}
                        className="border-[#206536]/30 text-[#206536] hover:bg-[#206536] hover:text-white disabled:opacity-40 cursor-pointer h-8 w-8 sm:h-9 sm:w-9"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                {visibleProducts.map((product, index) => (
                    <div
                        key={`${product.title}-${startIndex}-${index}`}
                        className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(26,69,40,0.12)] hover:-translate-y-0.5"
                    >
                        {/* Product Image */}
                        <div className="relative w-full h-40 sm:h-44 lg:h-48 bg-gray-100">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Card Content */}
                        <div className="p-4 sm:p-5 flex flex-col gap-3">
                            {/* Title */}
                            <h3 className="text-sm sm:text-base font-bold text-[#1a4528] leading-snug line-clamp-2">
                                {product.title}
                            </h3>

                            {/* Price */}
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg sm:text-xl font-extrabold text-[#609A26]">{product.price}</span>
                                <span className="text-xs text-gray-400">{product.unit}</span>
                            </div>

                            {/* Rating & Location */}
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

                            {/* Seller */}
                            <p className="text-xs text-gray-400">
                                oleh <span className="font-medium text-gray-600">{product.seller}</span>
                            </p>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-2 gap-2 pt-1">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 text-xs font-semibold cursor-pointer"
                                >
                                    Detail
                                </Button>
                                <Button
                                    size="sm"
                                    className="bg-[#206536] hover:bg-[#1a5530] text-white text-xs font-semibold cursor-pointer gap-1.5"
                                >
                                    <ShoppingCart className="w-3.5 h-3.5" />
                                    Beli
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductSection
