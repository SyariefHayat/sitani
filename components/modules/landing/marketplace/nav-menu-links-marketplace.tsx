"use client"

import Link from "next/link"
import { MENU_ITEMS } from "@/lib/constants"
import { CircleUserRound, ChevronDown, User, Package, Settings, LogOut } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const NavMenuLinksMarketplace = () => {
    return (
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {MENU_ITEMS.map((item) => (
                <li key={item.href}>
                    <Link
                        href={item.href}
                        className="text-white/90 hover:text-white font-medium transition-colors duration-200 hover:underline underline-offset-4"
                    >
                        {item.label}
                    </Link>
                </li>
            ))}

            {/* Account Dropdown */}
            <li>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-1.5 text-white/90 hover:text-white font-medium transition-colors duration-200 cursor-pointer outline-none">
                            <CircleUserRound className="w-5 h-5" />
                            <span>Akun</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 rounded-xl shadow-xl border border-gray-200">
                        {/* User Info */}
                        <DropdownMenuLabel className="py-3">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-[#206536] flex items-center justify-center">
                                    <User className="w-4.5 h-4.5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">Pengguna SiTani</p>
                                    <p className="text-xs text-gray-500 font-normal">user@sitani.id</p>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem asChild className="cursor-pointer gap-2.5 py-2.5">
                            <Link href="/profile">
                                <User className="w-4 h-4" />
                                Profil Saya
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer gap-2.5 py-2.5">
                            <Link href="/marketplace/orders">
                                <Package className="w-4 h-4" />
                                Pesanan Saya
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer gap-2.5 py-2.5">
                            <Link href="/settings">
                                <Settings className="w-4 h-4" />
                                Pengaturan
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem className="cursor-pointer gap-2.5 py-2.5 text-red-600 focus:text-red-600 focus:bg-red-50">
                            <LogOut className="w-4 h-4" />
                            Keluar
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </li>
        </ul>
    )
}

export default NavMenuLinksMarketplace
