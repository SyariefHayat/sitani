import Footer from '@/components/modules/landing/footer'
import Navbar from '@/components/modules/landing/navbar'
import React from 'react'

const LandingLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <main className="w-full min-h-screen font-inter bg-gray-50">
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}

export default LandingLayout