"use client"

import { Button } from "@/components/ui/button"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
    SheetFooter,
} from "@/components/ui/sheet"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { MENU_ITEMS } from "@/lib/constants"

const Navbar = ({ children }: { children?: React.ReactNode }) => {
    return (
        <nav className="w-full flex items-center justify-between text-white px-6 sm:px-10 lg:px-16 py-3 bg-[#206536]">
            <Link href="/" className="flex items-center gap-3">
                <Image src="/logo.png" alt="Logo SiTani" width={40} height={40} />
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">SiTani</h1>
            </Link>

            {children}

            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/15 cursor-pointer"
                            aria-label="Buka menu"
                        >
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="w-[280px] sm:w-[350px] md:w-[400px] bg-[#206536] border-l-[#1a5530] p-0"
                    >
                        <SheetHeader className="px-6 py-4 border-b border-white/10">
                            <SheetTitle className="flex items-center gap-3 text-white">
                                <Image
                                    src="/logo.png"
                                    alt="Logo SiTani"
                                    width={32}
                                    height={32}
                                />
                                <span className="text-xl font-bold">SiTani</span>
                            </SheetTitle>
                        </SheetHeader>

                        <div className="flex flex-col px-4 py-4 gap-1">
                            {MENU_ITEMS.map((item) => (
                                <SheetClose asChild key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="flex items-center text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                                    >
                                        {item.label}
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>

                        <SheetFooter className="border-t border-white/10 p-4">
                            <div className="flex flex-col gap-2.5">
                                <SheetClose asChild>
                                    <Link href="/login">
                                        <Button
                                            variant="outline"
                                            className="w-full border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white font-medium py-5 cursor-pointer"
                                        >
                                            Masuk
                                        </Button>
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href="/register">
                                        <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-5 cursor-pointer">
                                            Daftar Sekarang
                                        </Button>
                                    </Link>
                                </SheetClose>
                            </div>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

export default Navbar