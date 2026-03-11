import React from 'react'
import DashboardContent from '@/components/modules/admin/dashboard-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dashboard - SiTani Admin',
    description: 'Dashboard admin SiTani - Pantau aktivitas ekosistem pertanian',
}

const DashboardPage = () => {
    return <DashboardContent />
}

export default DashboardPage
