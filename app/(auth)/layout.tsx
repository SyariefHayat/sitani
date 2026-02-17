import React from "react"
import Image from "next/image"
import Link from "next/link"

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <main className="w-full min-h-screen font-inter bg-gray-100 flex flex-col items-center px-4 py-8 sm:py-12">
            <Link href="/" className="flex items-center gap-3 mb-8">
                <Image src="/logo.png" alt="Logo SiTani" width={40} height={40} />
                <h1 className="text-2xl sm:text-3xl font-bold text-[#1a4528]">SiTani</h1>
            </Link>
            {children}
        </main>
    )
}

export default AuthLayout
