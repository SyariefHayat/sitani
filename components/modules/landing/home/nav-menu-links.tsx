"use client"

import Link from "next/link"
import { MENU_ITEMS } from "@/lib/constants"
import { Button } from "@/components/ui/button"

const NavMenuLinks = () => {
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

            <li>
                <Link href="/login">
                    Masuk
                </Link>
            </li>

            <li>
                <Link href="/register">
                    <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold cursor-pointer">
                        Daftar
                    </Button>
                </Link>
            </li>
        </ul>
    )
}

export default NavMenuLinks
