"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { MARKETPLACE_MENU } from "@/lib/constants"
import { Search } from "lucide-react"

const SubNavbar = () => {
    const pathname = usePathname()

    return (
        <div className="w-full bg-white shadow-md px-4 sm:px-10 lg:px-16 py-2 sm:py-3 absolute z-10">
            <div className="flex items-center justify-between gap-3">
                {/* Menu Links — scrollable on mobile */}
                <nav className="flex items-center gap-1 sm:gap-3 lg:gap-5 overflow-x-auto scrollbar-hide shrink min-w-0">
                    {MARKETPLACE_MENU.map((item) => {
                        const isActive =
                            item.href === "/marketplace"
                                ? pathname === "/marketplace"
                                : pathname.startsWith(item.href)
                        const Icon = item.icon

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative flex items-center gap-2 sm:gap-3 lg:gap-5 px-3 sm:px-4 lg:px-5 py-2 sm:py-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 rounded-lg",
                                    isActive
                                        ? "bg-[#206536] text-white"
                                        : "text-[#206536] hover:bg-[#206536] hover:text-white"
                                )}
                            >
                                <Icon className="w-4 h-4 shrink-0" />
                                <span className="hidden sm:inline">{item.label}</span>
                            </Link>
                        )
                    })}
                </nav>

                {/* Search Bar */}
                <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 shrink-0 w-64 transition-all duration-200 focus-within:border-[#206536]/50 focus-within:ring-1 focus-within:ring-[#206536]/20">
                    <Search className="w-4 h-4 text-gray-400 shrink-0" />
                    <input
                        type="text"
                        placeholder="Cari produk..."
                        className="w-full text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
                    />
                </div>
            </div>
        </div>
    )
}

export default SubNavbar
