"use client"

import { Bell, ChevronDown, LogOut, User, BookOpen, Award, Settings } from "lucide-react"
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
import { signOut } from "next-auth/react"

const NavUserProfile = () => {
    const handleLogout = () => {
        signOut({ callbackUrl: "/" })
    }

    return (
        <div className="flex items-center gap-2 sm:gap-4 ml-auto">
            {/* Notifikasi */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative text-white hover:bg-white/15 cursor-pointer"
                    >
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#206536] animate-pulse" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
                        Notifikasi
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="flex flex-col items-start gap-1 py-3 cursor-pointer">
                        <span className="text-sm font-semibold">Kelas baru tersedia: Budidaya Padi 🌾</span>
                        <span className="text-xs text-muted-foreground">10 menit yang lalu</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex flex-col items-start gap-1 py-3 cursor-pointer">
                        <span className="text-sm font-semibold">Webinar besok: Tips Pertanian Modern</span>
                        <span className="text-xs text-muted-foreground">1 jam yang lalu</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex flex-col items-start gap-1 py-3 cursor-pointer">
                        <span className="text-sm font-semibold">Sertifikat Anda sudah siap diunduh 📜</span>
                        <span className="text-xs text-muted-foreground">2 jam yang lalu</span>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild className="cursor-pointer justify-center text-sm font-semibold text-[#206536]">
                        <Link href="/academy/notifikasi">
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
                            <AvatarFallback className="bg-white/20 text-white font-bold">SI</AvatarFallback>
                        </Avatar>
                        <div className="hidden sm:flex flex-col items-start">
                            <p className="text-white text-sm font-semibold leading-tight">Siti</p>
                            <p className="text-white/60 text-xs leading-tight">Peserta Academy</p>
                        </div>
                        <ChevronDown className="w-4 h-4 text-white/70" />
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
                                <p className="text-sm font-semibold text-gray-800">Siti</p>
                                <p className="text-xs text-gray-500 font-normal">siti@sitani.id</p>
                            </div>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem asChild className="cursor-pointer gap-2.5 py-2.5">
                        <Link href="/academy/profil">
                            <User className="w-4 h-4" />
                            Profil Saya
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer gap-2.5 py-2.5">
                        <Link href="/academy/kelas-saya">
                            <BookOpen className="w-4 h-4" />
                            Kelas Saya
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer gap-2.5 py-2.5">
                        <Link href="/academy/sertifikat">
                            <Award className="w-4 h-4" />
                            Sertifikat
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer gap-2.5 py-2.5">
                        <Link href="/academy/pengaturan">
                            <Settings className="w-4 h-4" />
                            Pengaturan
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                        className="cursor-pointer gap-2.5 py-2.5 text-red-600 focus:text-red-600 focus:bg-red-50"
                        onClick={handleLogout}
                    >
                        <LogOut className="w-4 h-4" />
                        Keluar
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default NavUserProfile
