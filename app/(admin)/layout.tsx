import React from 'react'
import AdminSidebar from '@/components/modules/admin/admin-sidebar'
import AdminTopbar from '@/components/modules/admin/admin-topbar'

const AdminLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <div className="min-h-screen font-inter bg-gray-100">
            <AdminSidebar />
            <div className="ml-[240px] flex flex-col min-h-screen">
                <AdminTopbar />
                <main className="flex-1 p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AdminLayout
