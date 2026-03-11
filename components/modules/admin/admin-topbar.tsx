"use client"

import React from 'react'
import { Search, Bell } from 'lucide-react'

const AdminTopbar = () => {
    return (
        <header className="sticky top-0 z-30 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 font-inter">
            {/* Search */}
            <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5a3d]/30 focus:border-[#2d5a3d] transition-all placeholder:text-gray-400"
                />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 ml-4">
                {/* Notification */}
                <button className="relative p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                </button>

                {/* User */}
                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a4528] to-[#2d5a3d] flex items-center justify-center text-white text-xs font-bold">
                        AA
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm font-semibold text-gray-800 leading-none">Andi Admin</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AdminTopbar
