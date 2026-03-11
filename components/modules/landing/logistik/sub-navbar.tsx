"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { LOGISTIK_MENU } from "@/lib/constants"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const SubNavbar = () => {
    const pathname = usePathname()

    return (
        <div className="w-full bg-white shadow-md px-4 sm:px-10 lg:px-16 py-2 sm:py-3 absolute">
            <nav className="flex items-center justify-between">
                <div className="flex items-center gap-1 sm:gap-2 lg:gap-4 overflow-x-auto scrollbar-hide">
                    {LOGISTIK_MENU.map((item) => {
                        const isActive = pathname === item.href
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
                </div>

                {/* Dropdown Tambah Order */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            size="sm"
                            className="bg-[#609A26] hover:bg-[#528520] text-white font-semibold gap-1.5 cursor-pointer shrink-0 ml-4"
                        >
                            <Plus className="w-4 h-4" />
                            <span className="hidden sm:inline">Tambah Order</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-52">
                        <DropdownMenuItem className="cursor-pointer gap-2 py-2.5">
                            📦 Order Pengiriman Baru
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer gap-2 py-2.5">
                            🚛 Jadwal Pickup Baru
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer gap-2 py-2.5">
                            📋 Order dari Template
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </div>
    )
}

export default SubNavbar
