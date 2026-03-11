import Navbar from "@/components/layouts/landing-layout/navbar"
import NavUserProfile from "@/components/modules/landing/logistik/nav-user-profile"
import SubNavbar from "@/components/modules/landing/logistik/sub-navbar"

const JadwalPickupPage = () => {
    return (
        <>
            <Navbar>
                <NavUserProfile />
            </Navbar>
            <SubNavbar />
            <div className="mt-14 px-4 sm:px-10 lg:px-16 py-8 sm:py-12 bg-gray-50 min-h-screen">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Jadwal Pickup</h1>
                        <p className="text-gray-500 mt-1">Kelola jadwal pengambilan barang dari lokasi petani</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { id: "PKP-001", lokasi: "Desa Cianjur Selatan", petani: "Pak Joko", berat: "500 kg Beras", waktu: "08:00 - 10:00", status: "Terjadwal", statusColor: "bg-blue-50 text-blue-700" },
                            { id: "PKP-002", lokasi: "Desa Sukamakmur", petani: "Bu Sari", berat: "300 kg Cabai", waktu: "10:00 - 12:00", status: "Dalam Perjalanan", statusColor: "bg-amber-50 text-amber-700" },
                            { id: "PKP-003", lokasi: "Kebun Hijau Lestari", petani: "Pak Ahmad", berat: "750 kg Jagung", waktu: "13:00 - 15:00", status: "Terjadwal", statusColor: "bg-blue-50 text-blue-700" },
                            { id: "PKP-004", lokasi: "Desa Karawang Barat", petani: "Pak Hendra", berat: "400 kg Kedelai", waktu: "08:30 - 10:30", status: "Selesai", statusColor: "bg-green-50 text-green-700" },
                            { id: "PKP-005", lokasi: "Perkebunan Subang", petani: "Bu Ani", berat: "600 kg Beras Merah", waktu: "14:00 - 16:00", status: "Terjadwal", statusColor: "bg-blue-50 text-blue-700" },
                            { id: "PKP-006", lokasi: "Ladang Brebes Utara", petani: "Pak Dani", berat: "200 kg Bawang", waktu: "09:00 - 11:00", status: "Selesai", statusColor: "bg-green-50 text-green-700" },
                        ].map((item) => (
                            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-semibold text-[#206536]">{item.id}</span>
                                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.statusColor}`}>{item.status}</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 text-sm">{item.lokasi}</h3>
                                <p className="text-xs text-gray-500 mt-1">Petani: {item.petani}</p>
                                <p className="text-xs text-gray-500">Muatan: {item.berat}</p>
                                <div className="mt-3 pt-3 border-t border-gray-100">
                                    <p className="text-xs font-medium text-gray-700">🕐 {item.waktu}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default JadwalPickupPage
