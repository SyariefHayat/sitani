"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Star, MapPin, ShoppingCart, Heart, Share2, Link2, Copy, CheckCircle2, Truck, ShieldCheck, Package, Minus, Plus, Sparkles, Store, MessageCircle, ChevronRight, Weight, Layers, Box } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { addToCart } from "@/lib/redux/cart-slice"
import { toast } from "sonner"

export interface Product {
    slug: string
    image: string
    gallery?: string[]
    title: string
    price: string
    unit: string
    rating: number
    reviews: number
    seller: string
    sellerAvatar: string
    sellerPhone: string
    location: string
    category: string
    isNew: boolean
    isFeatured: boolean
    description: string
    stock: number
    minOrder: number
    weight: string
    highlights: string[]
}

interface ProductDetailProps {
    product: Product
    otherProducts: Product[]
}

const ProductDetail = ({ product, otherProducts }: ProductDetailProps) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [isFavorited, setIsFavorited] = useState(false)
    const [copied, setCopied] = useState(false)
    const [qty, setQty] = useState(product.minOrder)
    const [activeTab, setActiveTab] = useState<"deskripsi" | "ulasan">("deskripsi")
    const [selectedImageIdx, setSelectedImageIdx] = useState(0)

    // Build gallery: main image + additional gallery images
    const galleryImages = [product.image, ...(product.gallery || [product.image, product.image, product.image])]
    const selectedImage = galleryImages[selectedImageIdx]

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleShareWhatsApp = () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(`${product.title} - ${window.location.href}`)}`, "_blank")
    }

    const handleShareTelegram = () => {
        window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(product.title)}`, "_blank")
    }

    const handleShareTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(product.title)}&url=${encodeURIComponent(window.location.href)}`, "_blank")
    }

    const REVIEWS = [
        { name: "Sari Wulandari", text: "Produk sangat segar dan berkualitas. Pengiriman cepat dan dikemas dengan baik. Recommended seller!", rating: 5, date: "2 hari lalu" },
        { name: "Budi Prasetyo", text: "Kualitas sesuai deskripsi, harga sangat bersaing dibanding toko lain. Pasti beli lagi!", rating: 5, date: "1 minggu lalu" },
        { name: "Rina Maharani", text: "Lumayan bagus, pengiriman agak lama tapi produknya oke. Kemasannya rapi.", rating: 4, date: "2 minggu lalu" },
        { name: "Andi Saputra", text: "Sesuai ekspektasi, freshness terjaga. Seller ramah dan responsif.", rating: 5, date: "3 minggu lalu" },
    ]

    return (
        <div className="pt-14 sm:pt-16 bg-gray-50/80 min-h-screen">
            {/* Breadcrumb */}
            <div className="w-full px-4 sm:px-10 lg:px-16 py-3 sm:py-4">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                    <Link href="/marketplace" className="hover:text-[#609A26] transition-colors">Marketplace</Link>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span className="hover:text-[#609A26] transition-colors cursor-pointer">{product.category}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span className="text-foreground font-medium truncate max-w-[200px]">{product.title}</span>
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════
                SECTION 1: Product Image + Info (Marketplace Layout)
                Left: Large image    |    Right: Title, Price, Actions
            ═══════════════════════════════════════════════════════ */}
            <section className="w-full px-4 sm:px-10 lg:px-16 pb-4">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                        {/* Left — Product Image */}
                        <div className="lg:col-span-5 relative">
                            {/* Main Image */}
                            <div className="relative w-full aspect-square sm:aspect-4/3 lg:aspect-square bg-gray-100">
                                <Image
                                    src={selectedImage}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-all duration-300"
                                    priority
                                />
                                {/* Badges */}
                                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap items-center gap-1.5">
                                    {product.isNew && (
                                        <span className="px-2.5 py-1 text-[10px] sm:text-xs font-bold rounded-full bg-blue-500 text-white shadow-sm">
                                            Baru
                                        </span>
                                    )}
                                    {product.isFeatured && (
                                        <span className="px-2.5 py-1 text-[10px] sm:text-xs font-bold rounded-full bg-amber-500 text-white shadow-sm flex items-center gap-1">
                                            <Sparkles className="w-3 h-3" /> Unggulan
                                        </span>
                                    )}
                                </div>
                                {/* Favorite on image */}
                                <button
                                    onClick={() => setIsFavorited(!isFavorited)}
                                    className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 sm:p-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-white transition-all cursor-pointer"
                                >
                                    <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isFavorited ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                                </button>
                            </div>

                            {/* Gallery Thumbnails */}
                            <div className="flex gap-2 p-3 sm:p-4 overflow-x-auto">
                                {galleryImages.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedImageIdx(i)}
                                        className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0 cursor-pointer transition-all duration-200 ${selectedImageIdx === i
                                            ? "ring-2 ring-[#609A26] ring-offset-1 opacity-100"
                                            : "border-2 border-gray-200 opacity-60 hover:opacity-100"
                                            }`}
                                    >
                                        <Image src={img} alt={`${product.title} - ${i + 1}`} fill className="object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right — Product Info */}
                        <div className="lg:col-span-7 p-5 sm:p-6 lg:p-8 flex flex-col">
                            {/* Category tag */}
                            <div className="mb-2">
                                <span className="inline-flex items-center px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold rounded-full bg-[#609A26]/10 text-[#609A26]">
                                    {product.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1a4528] leading-tight tracking-tight mb-3">
                                {product.title}
                            </h1>

                            {/* Rating + Sold */}
                            <div className="flex items-center gap-3 sm:gap-4 mb-4">
                                <div className="flex items-center gap-1.5">
                                    <div className="flex items-center gap-0.5">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating)
                                                    ? "fill-amber-400 text-amber-400"
                                                    : "fill-gray-200 text-gray-200"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm font-bold text-[#1a4528]">{product.rating}</span>
                                    <span className="text-xs text-muted-foreground">({product.reviews} ulasan)</span>
                                </div>
                                <span className="text-xs text-muted-foreground">•</span>
                                <span className="text-xs text-muted-foreground">Terjual {Math.floor(product.reviews * 2.3)}+</span>
                            </div>

                            {/* Price */}
                            <div className="bg-linear-to-r from-[#f0faf0] to-[#e8f5e9] rounded-xl p-4 sm:p-5 mb-5">
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-2xl sm:text-3xl font-extrabold text-[#1a4528]">{product.price}</span>
                                    <span className="text-sm sm:text-base text-[#609A26] font-medium">{product.unit}</span>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">Stok tersedia: <span className="font-semibold text-[#609A26]">{product.stock}</span></p>
                            </div>

                            {/* Quick Info Pills */}
                            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
                                <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-gray-50 border border-gray-100">
                                    <Weight className="w-4 h-4 text-[#609A26] shrink-0" />
                                    <div>
                                        <p className="text-[10px] text-muted-foreground leading-none">Berat</p>
                                        <p className="text-xs sm:text-sm font-semibold text-foreground">{product.weight}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-gray-50 border border-gray-100">
                                    <Box className="w-4 h-4 text-[#609A26] shrink-0" />
                                    <div>
                                        <p className="text-[10px] text-muted-foreground leading-none">Min. Order</p>
                                        <p className="text-xs sm:text-sm font-semibold text-foreground">{product.minOrder}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-gray-50 border border-gray-100">
                                    <Truck className="w-4 h-4 text-[#609A26] shrink-0" />
                                    <div>
                                        <p className="text-[10px] text-muted-foreground leading-none">Pengiriman</p>
                                        <p className="text-xs sm:text-sm font-semibold text-foreground">1-3 Hari</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quantity + CTA */}
                            <div className="mt-auto space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium text-foreground">Jumlah</span>
                                    <div className="flex items-center border border-gray-200 rounded-lg">
                                        <button
                                            onClick={() => setQty(Math.max(product.minOrder, qty - 1))}
                                            className="p-2 sm:p-2.5 hover:bg-gray-50 transition-colors cursor-pointer rounded-l-lg"
                                        >
                                            <Minus className="w-4 h-4 text-gray-500" />
                                        </button>
                                        <span className="px-5 sm:px-6 text-sm font-bold text-foreground tabular-nums">{qty}</span>
                                        <button
                                            onClick={() => setQty(Math.min(product.stock, qty + 1))}
                                            className="p-2 sm:p-2.5 hover:bg-gray-50 transition-colors cursor-pointer rounded-r-lg"
                                        >
                                            <Plus className="w-4 h-4 text-gray-500" />
                                        </button>
                                    </div>
                                    <span className="text-xs text-muted-foreground hidden sm:inline">Stok: {product.stock}</span>
                                </div>

                                <div className="flex items-center gap-2 sm:gap-3">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="flex-1 border-[#609A26] text-[#609A26] hover:bg-[#609A26]/5 font-bold text-sm rounded-xl py-6 cursor-pointer gap-2"
                                        onClick={() => {
                                            dispatch(addToCart({
                                                slug: product.slug,
                                                title: product.title,
                                                image: product.image,
                                                price: product.price,
                                                unit: product.unit,
                                                qty,
                                                seller: product.seller,
                                            }))
                                            toast.success(`"${product.title}" ditambahkan ke keranjang`, {
                                                description: `${qty} item`,
                                            })
                                        }}
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                        Keranjang
                                    </Button>
                                    <Button
                                        size="lg"
                                        className="flex-1 bg-[#609A26] hover:bg-[#528520] text-white font-bold text-sm rounded-xl py-6 cursor-pointer gap-2 shadow-md hover:shadow-lg transition-all"
                                        onClick={() => {
                                            dispatch(addToCart({
                                                slug: product.slug,
                                                title: product.title,
                                                image: product.image,
                                                price: product.price,
                                                unit: product.unit,
                                                qty,
                                                seller: product.seller,
                                            }))
                                            router.push("/marketplace/cart")
                                        }}
                                    >
                                        Beli Sekarang
                                    </Button>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl border-gray-200 cursor-pointer shrink-0">
                                                <Share2 className="w-5 h-5 text-gray-500" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-48 rounded-xl">
                                            <DropdownMenuItem onClick={handleCopyLink} className="gap-3 cursor-pointer">
                                                {copied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                                {copied ? "Link Disalin!" : "Salin Link"}
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={handleShareWhatsApp} className="gap-3 cursor-pointer">
                                                <Link2 className="w-4 h-4 text-green-600" />
                                                WhatsApp
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={handleShareTelegram} className="gap-3 cursor-pointer">
                                                <Link2 className="w-4 h-4 text-blue-500" />
                                                Telegram
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={handleShareTwitter} className="gap-3 cursor-pointer">
                                                <Link2 className="w-4 h-4 text-sky-500" />
                                                Twitter / X
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>

                                {/* Trust badges bar */}
                                <div className="flex items-center gap-4 sm:gap-6 pt-2">
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <ShieldCheck className="w-4 h-4 text-[#609A26]" />
                                        <span>Garansi Kualitas</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <Truck className="w-4 h-4 text-[#609A26]" />
                                        <span>Pengiriman Aman</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <CheckCircle2 className="w-4 h-4 text-[#609A26]" />
                                        <span>Produk Asli</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 2: Seller Card
            ═══════════════════════════════════════════════ */}
            <section className="w-full px-4 sm:px-10 lg:px-16 pb-4">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 lg:p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <Avatar className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-[#609A26]/20">
                                <AvatarImage src={product.sellerAvatar} />
                                <AvatarFallback className="bg-[#609A26]/10 text-[#609A26] font-bold text-sm">
                                    {product.seller.split(" ").map(n => n[0]).join("").slice(0, 2)}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm sm:text-base font-bold text-foreground">{product.seller}</p>
                                    <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-[#609A26]/10 text-[#609A26]">Verified</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                                    <MapPin className="w-3 h-3" />
                                    <span>{product.location}</span>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-4 mt-1">
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                        <span className="font-semibold text-foreground">4.8</span>
                                        <span>Rating</span>
                                    </div>
                                    <span className="text-gray-300">|</span>
                                    <span className="text-xs text-muted-foreground">± 2 jam respons</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-green-500/30 bg-green-50 text-green-700 hover:bg-green-100 font-medium text-xs rounded-lg cursor-pointer gap-1.5"
                                onClick={() => {
                                    const phone = product.sellerPhone.replace(/[^0-9]/g, "")
                                    const message = encodeURIComponent(`Halo ${product.seller}, saya tertarik dengan produk "${product.title}" di SiTani Marketplace. Apakah masih tersedia?`)
                                    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
                                }}
                            >
                                <MessageCircle className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Chat via WhatsApp</span>
                                <span className="sm:hidden">Chat</span>
                            </Button>
                            <Button variant="outline" size="sm" className="border-[#609A26]/30 text-[#609A26] hover:bg-[#609A26]/5 font-medium text-xs rounded-lg cursor-pointer gap-1.5">
                                <Store className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Kunjungi Toko</span>
                                <span className="sm:hidden">Toko</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 3: Tabs — Deskripsi / Ulasan
            ═══════════════════════════════════════════════ */}
            <section className="w-full px-4 sm:px-10 lg:px-16 pb-4">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    {/* Tab Headers */}
                    <div className="flex border-b border-gray-100">
                        <button
                            onClick={() => setActiveTab("deskripsi")}
                            className={`flex-1 sm:flex-none px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold transition-all cursor-pointer relative ${activeTab === "deskripsi"
                                ? "text-[#609A26]"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            Detail Produk
                            {activeTab === "deskripsi" && (
                                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#609A26] rounded-full" />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab("ulasan")}
                            className={`flex-1 sm:flex-none px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold transition-all cursor-pointer relative ${activeTab === "ulasan"
                                ? "text-[#609A26]"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            Ulasan ({product.reviews})
                            {activeTab === "ulasan" && (
                                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#609A26] rounded-full" />
                            )}
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="p-5 sm:p-6 lg:p-8">
                        {activeTab === "deskripsi" && (
                            <div className="space-y-6">
                                {/* Description */}
                                <div>
                                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-3">
                                        Deskripsi
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>

                                <Separator />

                                {/* Specifications */}
                                <div>
                                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-3">
                                        Spesifikasi Produk
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                                        {[
                                            { label: "Kategori", value: product.category },
                                            { label: "Berat", value: product.weight },
                                            { label: "Min. Pembelian", value: `${product.minOrder} ${product.unit.replace("/", "")}` },
                                            { label: "Stok", value: `${product.stock}` },
                                            { label: "Kondisi", value: "Baru / Segar" },
                                            { label: "Pengiriman", value: "Reguler & Instan" },
                                        ].map((spec, i) => (
                                            <div key={i} className="flex items-center text-sm py-2 border-b border-dashed border-gray-100">
                                                <span className="text-muted-foreground w-32 shrink-0">{spec.label}</span>
                                                <span className="font-medium text-foreground">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Separator />

                                {/* Highlights */}
                                <div>
                                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-3">
                                        Keunggulan Produk
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {product.highlights.map((item, i) => (
                                            <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#609A26]/5 border border-[#609A26]/10">
                                                <CheckCircle2 className="w-4 h-4 text-[#609A26] shrink-0" />
                                                <span className="text-sm text-foreground">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "ulasan" && (
                            <div className="space-y-5">
                                {/* Rating Summary */}
                                <div className="flex items-center gap-6 p-4 sm:p-5 rounded-xl bg-gray-50 border border-gray-100">
                                    <div className="text-center">
                                        <p className="text-3xl sm:text-4xl font-extrabold text-[#1a4528]">{product.rating}</p>
                                        <div className="flex items-center gap-0.5 justify-center mt-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`} />
                                            ))}
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">{product.reviews} ulasan</p>
                                    </div>
                                    <div className="flex-1 space-y-1.5">
                                        {[5, 4, 3, 2, 1].map((star) => {
                                            const pct = star === 5 ? 72 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 2 : 1
                                            return (
                                                <div key={star} className="flex items-center gap-2">
                                                    <div className="flex items-center gap-0.5 w-10 justify-end">
                                                        <span className="text-xs font-medium text-muted-foreground">{star}</span>
                                                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                                    </div>
                                                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                        <div className="h-full bg-amber-400 rounded-full transition-all" style={{ width: `${pct}%` }} />
                                                    </div>
                                                    <span className="text-[11px] text-muted-foreground w-8">{pct}%</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Review List */}
                                <div className="space-y-3">
                                    {REVIEWS.map((review, i) => (
                                        <div key={i} className="p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                                            <div className="flex items-center justify-between mb-2.5">
                                                <div className="flex items-center gap-2.5">
                                                    <Avatar className="w-9 h-9 border border-gray-200">
                                                        <AvatarFallback className="bg-[#609A26]/10 text-[#609A26] font-bold text-[11px]">
                                                            {review.name.split(" ").map(n => n[0]).join("")}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className="text-sm font-semibold text-foreground">{review.name}</p>
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex items-center gap-0.5">
                                                                {Array.from({ length: 5 }).map((_, j) => (
                                                                    <Star key={j} className={`w-3 h-3 ${j < review.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`} />
                                                                ))}
                                                            </div>
                                                            <span className="text-[11px] text-muted-foreground">{review.date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 4: Produk Lainnya
            ═══════════════════════════════════════════════ */}
            {otherProducts.length > 0 && (
                <section className="w-full px-4 sm:px-10 lg:px-16 pb-8 sm:pb-12">
                    <div className="flex items-center gap-4 sm:gap-5 mb-5 sm:mb-6 mt-2">
                        <div className="h-[2px] w-full rounded-full bg-linear-to-r from-transparent to-[#2d7a3a]/50" />
                        <h2 className="w-full text-center text-base sm:text-xl lg:text-2xl font-bold text-[#1a4528] tracking-tight whitespace-nowrap">
                            Produk Serupa
                        </h2>
                        <div className="h-[2px] w-full rounded-full bg-linear-to-l from-transparent to-[#2d7a3a]/50" />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                        {otherProducts.map((p) => (
                            <Link key={p.slug} href={`/marketplace/product/${p.slug}`} className="group">
                                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5">
                                    <div className="relative w-full aspect-square bg-gray-100">
                                        <Image src={p.image} alt={p.title} fill className="object-cover" />
                                    </div>
                                    <div className="p-3 sm:p-4 flex flex-col gap-1.5">
                                        <h3 className="text-xs sm:text-sm font-semibold text-foreground leading-snug line-clamp-2">{p.title}</h3>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-sm sm:text-base font-extrabold text-[#1a4528]">{p.price}</span>
                                            <span className="text-[10px] sm:text-xs text-gray-400">{p.unit}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground">
                                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                            <span className="font-semibold text-foreground">{p.rating}</span>
                                            <span>• {p.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}

export default ProductDetail
