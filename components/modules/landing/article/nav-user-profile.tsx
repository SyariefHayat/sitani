"use client"

import { Bell, ChevronDown, LogOut, User, BookOpen, Settings, Bookmark } from "lucide-react"
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
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const NavUserProfile = () => {
    const router = useRouter()

    const handleLogout = () => {
        toast.success("Berhasil keluar dari akun", {
            description: "Anda telah keluar. Mengarahkan ke halaman utama...",
        })
        setTimeout(() => {
            router.push("/")
        }, 1500)
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
                        <span className="text-sm font-semibold">Artikel baru: Tips Menanam Padi 🌾</span>
                        <span className="text-xs text-muted-foreground">15 menit yang lalu</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex flex-col items-start gap-1 py-3 cursor-pointer">
                        <span className="text-sm font-semibold">Artikel Anda mendapat 50 likes 👍</span>
                        <span className="text-xs text-muted-foreground">1 jam yang lalu</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex flex-col items-start gap-1 py-3 cursor-pointer">
                        <span className="text-sm font-semibold">3 komentar baru di artikel Anda 💬</span>
                        <span className="text-xs text-muted-foreground">3 jam yang lalu</span>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild className="cursor-pointer justify-center text-sm font-semibold text-[#206536]">
                        <Link href="/article/notifikasi">
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
                            <p className="text-white/60 text-xs leading-tight">Penulis</p>
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
                                <p className="text-sm font-semibold text-gray-800">Andi</p>
                                <p className="text-xs text-gray-500 font-normal">andi@sitani.id</p>
                            </div>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem asChild className="cursor-pointer gap-2.5 py-2.5">
                        <Link href="/article/profil">
                            <User className="w-4 h-4" />
                            Profil Saya
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer gap-2.5 py-2.5">
                        <Link href="/article/bookmark">
                            <Bookmark className="w-4 h-4" />
                            Artikel Tersimpan
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer gap-2.5 py-2.5">
                        <Link href="/article/tulis">
                            <BookOpen className="w-4 h-4" />
                            Tulis Artikel
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer gap-2.5 py-2.5">
                        <Link href="/article/pengaturan">
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
