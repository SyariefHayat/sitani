import React from 'react'
import UsersContent from '@/components/modules/admin/users-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Users - SiTani Admin',
    description: 'Manajemen pengguna platform SiTani',
}

const UsersPage = () => {
    return <UsersContent />
}

export default UsersPage
