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

const marketPrices = [
    {
        id: "SIT001",
        variety: "Beras Impari Zinc",
        location: "Lamongan, Jawa Timur",
        price: "Rp 14.500",
        pricePerKg: 14500,
        change: "+2.5%",
        trend: "up",
        quality: "Premium Nutrisi",
        unit: "kg",
        lastUpdated: "1 jam lalu",
        farmer: "Kelompok Tani Sejahtera"
    },
    {
        id: "SIT002",
        variety: "Beras Anak Negeri Organik",
        location: "Semarang, Jawa Tengah",
        price: "Rp 16.000",
        pricePerKg: 16000,
        change: "+1.8%",
        trend: "up",
        quality: "Bio-Organik Premium",
        unit: "kg",
        lastUpdated: "30 menit lalu",
        farmer: "Koperasi Tani Maju"
    },
    {
        id: "SIT003",
        variety: "Beras IR64 Lokal",
        location: "Gresik, Jawa Timur",
        price: "Rp 10.500",
        pricePerKg: 10500,
        change: "0.0%",
        trend: "stable",
        quality: "Medium",
        unit: "kg",
        lastUpdated: "2 jam lalu",
        farmer: "Petani Mitra Digital"
    },
    {
        id: "SIT004",
        variety: "Beras Pandan Wangi",
        location: "Cianjur, Jawa Barat",
        price: "Rp 13.500",
        pricePerKg: 13500,
        change: "+0.9%",
        trend: "up",
        quality: "Premium",
        unit: "kg",
        lastUpdated: "45 menit lalu",
        farmer: "Gudang Digital Cianjur"
    },
    {
        id: "SIT005",
        variety: "Beras Merah Organik",
        location: "Magelang, Jawa Tengah",
        price: "Rp 18.000",
        pricePerKg: 18000,
        change: "+3.2%",
        trend: "up",
        quality: "Organik Sertifikasi GAP",
        unit: "kg",
        lastUpdated: "1 jam lalu",
        farmer: "Kelompok Tani Organik"
    },
    {
        id: "SIT006",
        variety: "Beras Hitam Nutrisi",
        location: "Malang, Jawa Timur",
        price: "Rp 22.000",
        pricePerKg: 22000,
        change: "-0.5%",
        trend: "down",
        quality: "Super Premium",
        unit: "kg",
        lastUpdated: "3 jam lalu",
        farmer: "Koperasi Pangan Digital"
    },
]

const PriceMarket = () => {
    return (
        <DefaultLayout>
            <NavBar />
            <div className="w-full min-h-screen p-10 bg-gradient-to-br from-green-50 to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                            Marketplace SiTani - Harga Pasar Beras
                        </h1>
                        <p className="text-gray-600">
                            Transaksi langsung dari petani ke konsumen tanpa perantara • Transparansi harga real-time
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Table>
                            <TableCaption className="py-4">
                                Update terbaru harga beras dari petani mitra SiTani di berbagai wilayah. 
                                Data diperbarui secara real-time dari gudang digital.
                            </TableCaption>
                            <TableHeader>
                                <TableRow className="bg-green-600 hover:bg-green-600">
                                    <TableHead className="w-[100px] text-white">ID Produk</TableHead>
                                    <TableHead className="text-white">Varietas Beras</TableHead>
                                    <TableHead className="text-white">Lokasi Petani</TableHead>
                                    <TableHead className="text-white">Kualitas</TableHead>
                                    <TableHead className="text-white">Perubahan</TableHead>
                                    <TableHead className="text-white">Harga/kg</TableHead>
                                    <TableHead className="text-right text-white">Update</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {marketPrices.map((item) => (
                                    <TableRow key={item.id} className="hover:bg-green-50">
                                        <TableCell className="font-semibold text-green-700">
                                            {item.id}
                                        </TableCell>
                                        <TableCell className="font-medium">{item.variety}</TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium">{item.location}</span>
                                                <span className="text-xs text-gray-500">{item.farmer}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                                {item.quality}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span
                                                className={`font-semibold ${
                                                    item.trend === "up"
                                                    ? "text-green-600"
                                                    : item.trend === "down"
                                                    ? "text-red-600"
                                                    : "text-gray-600"
                                                }`}
                                            >
                                                {item.change}
                                            </span>
                                        </TableCell>
                                        <TableCell className="font-bold text-gray-900">
                                            {item.price}
                                        </TableCell>
                                        <TableCell className="text-right text-sm text-gray-500">
                                            {item.lastUpdated}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow className="bg-green-100">
                                    <TableCell colSpan={5} className="font-bold text-gray-800">
                                        Rata-rata Harga Pasar
                                    </TableCell>
                                    <TableCell className="font-bold text-green-700" colSpan={2}>
                                        Rp{" "}
                                        {Math.round(
                                        marketPrices.reduce((acc, cur) => acc + cur.pricePerKg, 0) /
                                            marketPrices.length
                                        ).toLocaleString("id-ID")}
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </div>
            </div>
            <Footer />
        </DefaultLayout>
    )
}

export default PriceMarket