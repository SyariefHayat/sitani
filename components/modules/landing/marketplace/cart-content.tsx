"use client"

import { useSelector, useDispatch } from "react-redux"
import { selectCartItems, selectCartCount, selectCartTotal, removeFromCart, updateQty, clearCart } from "@/lib/redux/cart-slice"

import Image from "next/image"
import Link from "next/link"
import { Trash2, Minus, Plus, ShoppingCart, ArrowLeft, PackageOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const CartContent = () => {
    const dispatch = useDispatch()
    const items = useSelector(selectCartItems)
    const count = useSelector(selectCartCount)
    const total = useSelector(selectCartTotal)

    const handleRemove = (slug: string, title: string) => {
        dispatch(removeFromCart(slug))
        toast.success(`"${title}" dihapus dari keranjang`)
    }

    const handleClear = () => {
        dispatch(clearCart())
        toast.success("Keranjang dikosongkan")
    }

    if (items.length === 0) {
        return (
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <PackageOpen className="w-12 h-12 text-gray-300" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Keranjang Kosong</h2>
                    <p className="text-gray-500 mb-6 max-w-md mx-auto">
                        Belum ada produk di keranjang. Yuk, mulai belanja produk pertanian berkualitas!
                    </p>
                    <Link href="/marketplace">
                        <Button className="bg-[#609A26] hover:bg-[#4e7e1f] text-white font-semibold px-8 py-5 rounded-xl cursor-pointer gap-2">
                            <ShoppingCart className="w-5 h-5" />
                            Belanja Sekarang
                        </Button>
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <Link href="/marketplace" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </Link>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Keranjang Belanja</h1>
                        <p className="text-gray-500 text-sm mt-0.5">{count} item di keranjang</p>
                    </div>
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 text-xs cursor-pointer"
                    onClick={handleClear}
                >
                    <Trash2 className="w-3.5 h-3.5 mr-1" />
                    Kosongkan
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {items.map((item) => {
                        const priceNum = parseInt(item.price.replace(/[^0-9]/g, ""))
                        const subtotal = priceNum * item.qty

                        return (
                            <Card key={item.slug} className="p-4 sm:p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex gap-4">
                                    {/* Product Image */}
                                    <Link href={`/marketplace/product/${item.slug}`} className="shrink-0">
                                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-gray-100">
                                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                                        </div>
                                    </Link>

                                    {/* Product Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <Link href={`/marketplace/product/${item.slug}`} className="text-sm sm:text-base font-semibold text-gray-800 hover:text-[#609A26] transition-colors line-clamp-2">
                                                    {item.title}
                                                </Link>
                                                <p className="text-xs text-gray-400 mt-0.5">{item.seller}</p>
                                            </div>
                                            <button
                                                onClick={() => handleRemove(item.slug, item.title)}
                                                className="p-1.5 rounded-md hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors cursor-pointer shrink-0"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <div className="flex items-end justify-between mt-3">
                                            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-0.5">
                                                <button
                                                    onClick={() => dispatch(updateQty({ slug: item.slug, qty: item.qty - 1 }))}
                                                    disabled={item.qty <= 1}
                                                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-md hover:bg-white transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                                                >
                                                    <Minus className="w-3.5 h-3.5" />
                                                </button>
                                                <span className="w-8 sm:w-10 text-center text-sm font-semibold">{item.qty}</span>
                                                <button
                                                    onClick={() => dispatch(updateQty({ slug: item.slug, qty: item.qty + 1 }))}
                                                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-md hover:bg-white transition-colors cursor-pointer"
                                                >
                                                    <Plus className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs text-gray-400">{item.price}{item.unit}</p>
                                                <p className="text-sm sm:text-base font-bold text-[#1a4528]">
                                                    Rp {subtotal.toLocaleString("id-ID")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </div>

                {/* Order Summary Sidebar */}
                <div className="lg:col-span-1">
                    <Card className="p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Ringkasan Belanja</h3>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Total Produk ({count} item)</span>
                                <span className="font-medium text-gray-800">Rp {total.toLocaleString("id-ID")}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Ongkos Kirim</span>
                                <span className="text-xs text-[#609A26] font-medium">Dihitung saat checkout</span>
                            </div>
                        </div>

                        <Separator className="my-4" />

                        <div className="flex justify-between items-center mb-5">
                            <span className="text-base font-bold text-gray-900">Total</span>
                            <span className="text-xl font-extrabold text-[#1a4528]">Rp {total.toLocaleString("id-ID")}</span>
                        </div>

                        <Button
                            className="w-full bg-[#609A26] hover:bg-[#4e7e1f] text-white font-bold text-sm py-5 rounded-xl cursor-pointer"
                            onClick={() => toast.info("Fitur checkout akan segera hadir!")}
                        >
                            Checkout ({count} item)
                        </Button>

                        <Link href="/marketplace" className="block mt-3">
                            <Button variant="outline" className="w-full border-[#609A26] text-[#609A26] hover:bg-[#609A26]/5 font-medium text-sm py-5 rounded-xl cursor-pointer">
                                Lanjut Belanja
                            </Button>
                        </Link>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default CartContent
