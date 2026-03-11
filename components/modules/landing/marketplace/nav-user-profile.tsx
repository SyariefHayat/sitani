"use client"

import { Bell, ChevronDown, ShoppingCart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useSelector, useDispatch } from "react-redux"
import { selectCartItems, selectCartCount, selectCartTotal, removeFromCart } from "@/lib/redux/cart-slice"
import Image from "next/image"
import { Trash2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const NavUserProfile = () => {
    const dispatch = useDispatch()
    const items = useSelector(selectCartItems)
    const count = useSelector(selectCartCount)
    const total = useSelector(selectCartTotal)
    const previewItems = items.slice(-3).reverse()

    return (
        <div className="flex items-center gap-2 sm:gap-4 ml-auto">
            {/* Cart Dropdown */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative text-white hover:bg-white/15 cursor-pointer"
                    >
                        <ShoppingCart className="w-5 h-5" />
                        {count > 0 && (
                            <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 shadow-sm">
                                {count > 99 ? "99+" : count}
                            </span>
                        )}
                    </Button>
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

            {/* Notifikasi */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative text-white hover:bg-white/15 cursor-pointer"
                    >
                        <Bell className="w-5 h-5" />
                        {/* Badge */}
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#206536] animate-pulse" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
                        Notifikasi
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="flex flex-col items-start gap-1 py-3 cursor-pointer">
                        <span className="text-sm font-semibold">Pesanan Anda sedang diproses! 📦</span>
                        <span className="text-xs text-muted-foreground">2 menit yang lalu</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex flex-col items-start gap-1 py-3 cursor-pointer">
                        <span className="text-sm font-semibold">Produk favorit Anda sedang diskon 🎉</span>
                        <span className="text-xs text-muted-foreground">1 jam yang lalu</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex flex-col items-start gap-1 py-3 cursor-pointer">
                        <span className="text-sm font-semibold">Pengiriman dalam perjalanan 🚚</span>
                        <span className="text-xs text-muted-foreground">3 jam yang lalu</span>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild className="cursor-pointer justify-center text-sm font-semibold text-[#206536]">
                        <Link href="/marketplace/notifikasi">
                            Lihat Semua Notifikasi
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Divider */}
            <div className="w-px h-8 bg-white/20" />

            {/* User Profile */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
                        <Avatar className="ring-2 ring-white/40 ring-offset-2 ring-offset-[#206536]">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className="bg-white/20 text-white font-bold">AN</AvatarFallback>
                        </Avatar>
                        <div className="hidden sm:flex flex-col items-start">
                            <p className="text-white text-sm font-semibold leading-tight">Andi</p>
                            <p className="text-white/60 text-xs leading-tight">Pembeli</p>
                        </div>
                        <ChevronDown className="w-4 h-4 text-white/70" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                    <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild className="cursor-pointer">
                        <Link href="/marketplace/profil">Profil</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer">
                        <Link href="/marketplace/pesanan">Pesanan Saya</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer">
                        <Link href="/marketplace/pengaturan">Pengaturan</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                        Keluar
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default NavUserProfile
