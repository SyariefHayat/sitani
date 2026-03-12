"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import {
    LayoutDashboard,
    Users,
    ShoppingBasket,
    TrendingUp,
    Truck,
    GraduationCap,
    FileBarChart,
    LogOut,
    ChevronRight
} from 'lucide-react'

const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'Users', icon: Users, href: '/dashboard/users' },
    { label: 'Produk', icon: ShoppingBasket, href: '/dashboard/produk' },
    { label: 'Investasi', icon: TrendingUp, href: '/dashboard/investasi' },
    { label: 'Logistik', icon: Truck, href: '/dashboard/logistik' },
    { label: 'Pelatihan', icon: GraduationCap, href: '/dashboard/pelatihan' },
    { label: 'Laporan', icon: FileBarChart, href: '/dashboard/laporan' },
]

const AdminSidebar = () => {
    const pathname = usePathname()

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-[240px] bg-gradient-to-b from-[#1a4528] to-[#2d5a3d] text-white flex flex-col font-inter">
            {/* Logo */}
            <div className="flex items-center gap-3 px-5 py-5 border-b border-white/10">
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center overflow-hidden">
                    <Image src="/logo.png" alt="SiTani" width={28} height={28} />
                </div>
                <div>
                    <h1 className="text-lg font-bold tracking-tight leading-none">SiTani</h1>
                    <span className="text-[11px] text-white/60 font-medium">Admin</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                                isActive
                                    ? 'bg-white/20 text-white shadow-sm backdrop-blur-sm'
                                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            <item.icon className={`w-[18px] h-[18px] flex-shrink-0 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white/90'}`} />
                            <span className="flex-1">{item.label}</span>
                            {isActive && <ChevronRight className="w-4 h-4 text-white/50" />}
                        </Link>
                    )
                })}
            </nav>

            {/* User Profile */}
            <div className="border-t border-white/10 px-3 py-4">
                <div className="flex items-center gap-3 px-3 py-2 mb-2">
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                        AA
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">Andi Admin</p>
                        <p className="text-[11px] text-white/50 truncate">Admin Utama</p>
                    </div>
                </div>
                <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all w-full cursor-pointer"
                >
                    <LogOut className="w-[18px] h-[18px]" />
                    <span>Keluar</span>
                </button>
            </div>
        </aside>
    )
}

export default AdminSidebar
