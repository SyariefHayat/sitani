"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ACADEMY_MENU } from "@/lib/constants"
import { ChevronDown, GraduationCap, BookOpen, Award } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const SubNavbar = () => {
    const pathname = usePathname()

    return (
        <div className="w-full bg-white shadow-md px-4 sm:px-10 lg:px-16 py-2 sm:py-3 absolute">
            <div className="flex items-center justify-between gap-3">
                {/* Menu Links — scrollable on mobile */}
                <nav className="flex items-center gap-1 sm:gap-3 lg:gap-5 overflow-x-auto scrollbar-hide shrink min-w-0">
                    {ACADEMY_MENU.map((item) => {
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

                {/* Progress Belajar Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1.5 sm:gap-2 border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 font-semibold cursor-pointer shrink-0 text-xs sm:text-sm px-2.5 sm:px-4"
                        >
                            <GraduationCap className="w-4 h-4" />
                            <span className="hidden sm:inline">Progress Belajar</span>
                            <span className="sm:hidden">Progress</span>
                            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-72">
                        <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
                            Ringkasan Belajar
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        {/* Progress Details */}
                        <div className="px-2 py-3 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Kelas Diikuti</span>
                                <span className="text-sm font-bold text-[#206536]">12 Kelas</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Jam Belajar</span>
                                <span className="text-sm font-semibold">48 Jam</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Sertifikat Diperoleh</span>
                                <span className="text-sm font-semibold text-amber-600">5 Sertifikat</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Progress Rata-rata</span>
                                <span className="text-sm font-bold text-[#206536]">78%</span>
                            </div>
                        </div>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link href="/academy/kelas-saya" className="flex items-center gap-2 text-sm">
                                <BookOpen className="w-4 h-4" />
                                Lihat Kelas Saya
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link href="/academy/sertifikat" className="flex items-center gap-2 text-sm">
                                <Award className="w-4 h-4" />
                                Lihat Sertifikat
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default SubNavbar
