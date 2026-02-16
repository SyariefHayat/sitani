"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ARTICLE_MENU } from "@/lib/constants"

const SubNavbar = () => {
    const pathname = usePathname()

    return (
        <div className="w-full bg-white shadow-md px-4 sm:px-10 lg:px-16 py-2 sm:py-3 absolute">
            <nav className="flex items-center gap-1 sm:gap-2 lg:gap-4 overflow-x-auto scrollbar-hide">
                {ARTICLE_MENU.map((item) => {
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
            </nav>
        </div>
    )
}

export default SubNavbar
