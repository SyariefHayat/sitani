import React from 'react'
import Footer from '@/components/modules/landing/home/footer'
import ReduxProvider from '@/lib/redux/redux-provider'
import { Toaster } from 'sonner'

const LandingLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <ReduxProvider>
            <main className="w-full min-h-screen font-inter bg-gray-100">
                {children}
                <Footer />
            </main>
            <Toaster position="top-right" richColors />
        </ReduxProvider>
    )
}

export default LandingLayout
