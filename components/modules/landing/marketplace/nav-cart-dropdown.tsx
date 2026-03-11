"use client"

import { useSelector } from "react-redux"
import { selectCartItems, selectCartCount, selectCartTotal } from "@/lib/redux/cart-slice"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Trash2 } from "lucide-react"
import { useDispatch } from "react-redux"
import { removeFromCart } from "@/lib/redux/cart-slice"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const NavCartDropdown = () => {
    const dispatch = useDispatch()
    const items = useSelector(selectCartItems)
    const count = useSelector(selectCartCount)
    const total = useSelector(selectCartTotal)

    const previewItems = items.slice(-3).reverse()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="relative p-2 rounded-full hover:bg-white/15 transition-colors cursor-pointer" aria-label="Keranjang">
                    <ShoppingCart className="w-5 h-5 text-white" />
                    {count > 0 && (
                        <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 shadow-sm">
                            {count > 99 ? "99+" : count}
                        </span>
                    )}
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 sm:w-96 p-0 rounded-xl shadow-xl border border-gray-200">
                {/* Header */}
                <div className="px-4 py-3 bg-linear-to-r from-[#206536] to-[#2d8a4e]">
                    <h3 className="text-white font-semibold text-sm">Keranjang Belanja</h3>
                    <p className="text-white/70 text-xs">{count} item</p>
                </div>

                {items.length === 0 ? (
                    <div className="px-4 py-8 text-center">
                        <ShoppingCart className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                        <p className="text-gray-400 text-sm">Keranjang kosong</p>
                        <Link href="/marketplace">
                            <Button variant="outline" size="sm" className="mt-3 text-xs border-[#609A26] text-[#609A26] hover:bg-[#609A26]/5 cursor-pointer">
                                Belanja Sekarang
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Items Preview */}
                        <div className="max-h-64 overflow-y-auto">
                            {previewItems.map((item) => (
                                <div key={item.slug} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors">
                                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-800 truncate">{item.title}</p>
                                        <p className="text-xs text-gray-500">{item.qty}x {item.price}</p>
                                    </div>
                                    <button
                                        onClick={() => dispatch(removeFromCart(item.slug))}
                                        className="p-1.5 rounded-md hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors cursor-pointer shrink-0"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            ))}
                            {items.length > 3 && (
                                <p className="text-center text-xs text-gray-400 py-2">
                                    +{items.length - 3} item lainnya
                                </p>
                            )}
                        </div>

                        <Separator />

                        {/* Footer */}
                        <div className="px-4 py-3 space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">Subtotal</span>
                                <span className="text-sm font-bold text-[#1a4528]">
                                    Rp {total.toLocaleString("id-ID")}
                                </span>
                            </div>
                            <Link href="/marketplace/cart" className="block">
                                <Button className="w-full bg-[#609A26] hover:bg-[#4e7e1f] text-white font-semibold text-sm rounded-lg cursor-pointer">
                                    Lihat Keranjang
                                </Button>
                            </Link>
                        </div>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default NavCartDropdown
