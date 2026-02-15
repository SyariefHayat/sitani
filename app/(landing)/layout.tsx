import React from 'react'
import Footer from '@/components/modules/landing/home/footer'

const LandingLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <main className="w-full min-h-screen font-inter bg-gray-50">
            {children}
            <Footer />
        </main>
    )
}

export default LandingLayout