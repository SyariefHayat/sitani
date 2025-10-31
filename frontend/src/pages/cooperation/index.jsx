import React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import NavBar from '../landing/NavBar'
import Footer from '../landing/Footer'
import DefaultLayout from '@/components/layouts/DefaultLayout'

const stakeholders = [
    {
        id: "PTN001",
        name: "Kelompok Tani Makmur Lamongan",
        role: "Petani Mitra Produksi",
        contribution: "Pilot project 100 ha padi Impari Zinc, mendapat benih unggul & pupuk bioorganik",
        status: "Aktif",
    },
    {
        id: "FIN001",
        name: "PT PNM (Permodalan Nasional Madani)",
        role: "Mitra Pembiayaan",
        contribution: "Pembiayaan digital dengan sistem bagi hasil untuk modal kerja petani",
        status: "Aktif",
    },
    {
        id: "FIN002",
        name: "BRI Agro",
        role: "Mitra Pembiayaan",
        contribution: "Kredit usaha tani digital dan asuransi pertanian",
        status: "Aktif",
    },
    {
        id: "OFT001",
        name: "BUMD Pangan Jawa Timur",
        role: "Mitra Offtaker",
        contribution: "Penyerapan 150 ton beras/bulan dari gudang digital",
        status: "Aktif",
    },
    {
        id: "OFT002",
        name: "Pemda Semarang",
        role: "Mitra Offtaker",
        contribution: "Program cadangan pangan daerah, serapan 80 ton/bulan",
        status: "Aktif",
    },
    {
        id: "OFT003",
        name: "Koperasi Pangan Nusantara",
        role: "Mitra Offtaker",
        contribution: "Distribusi beras nutrisi ke pasar tradisional dan modern",
        status: "Aktif",
    },
    {
        id: "TEC001",
        name: "PT Agritech IoT Solutions",
        role: "Mitra Teknologi",
        contribution: "Penyedia sensor IoT, monitoring cuaca, dan AI analitik produktivitas",
        status: "Aktif",
    },
    {
        id: "TEC002",
        name: "SiLog Digital Tracking",
        role: "Mitra Teknologi",
        contribution: "Sistem logistik tracking dan manajemen gudang digital",
        status: "Aktif",
    },
    {
        id: "RTL001",
        name: "Superindo & Ranch Market",
        role: "Mitra Retail",
        contribution: "Retail beras premium dan nutrisi zinc di 50+ outlet",
        status: "Aktif",
    },
    {
        id: "RTL002",
        name: "Tokopedia & Shopee",
        role: "Mitra Retail",
        contribution: "E-commerce marketplace untuk Beras Anak Negeri",
        status: "Aktif",
    },
    {
        id: "IND001",
        name: "PT Industri Beras Premium Nusantara",
        role: "Mitra Retail",
        contribution: "Pengolahan beras premium & nutrisi untuk ekspor",
        status: "Pending",
    },
    {
        id: "PTN002",
        name: "Gabungan Kelompok Tani Semarang",
        role: "Petani Mitra Produksi",
        contribution: "Ekspansi 500 ha untuk tahap 2 (2026-2027), pendampingan teknologi",
        status: "Pending",
    },
    {
        id: "FIN003",
        name: "Fintech Agrikultur - TaniHub",
        role: "Mitra Pembiayaan",
        contribution: "Platform pembiayaan digital peer-to-peer untuk petani mitra",
        status: "Aktif",
    },
]

const Cooperation = () => {
    return (
        <DefaultLayout>
            <NavBar/>
            <div className="w-full min-h-screen p-10">
                <h1 className="text-2xl font-semibold mb-6">Skema Kemitraan SiTani</h1>

                <Table>
                    <TableCaption>
                        Daftar kemitraan strategis dalam ekosistem digital SiTani
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">ID Mitra</TableHead>
                            <TableHead>Nama Stakeholder</TableHead>
                            <TableHead>Peran</TableHead>
                            <TableHead>Kontribusi</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {stakeholders.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.role}</TableCell>
                                <TableCell>{item.contribution}</TableCell>
                                <TableCell className="text-right">{item.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={4}>Total Stakeholder</TableCell>
                            <TableCell className="text-right">{stakeholders.length}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
            <Footer />
        </DefaultLayout>
    )
}

export default Cooperation