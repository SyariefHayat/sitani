"use client"

import Link from "next/link"
import { ArrowLeft, Award, Download, Calendar, Clock, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const CERTIFICATES = [
    {
        id: "1",
        courseName: "Budidaya Padi Modern",
        instructor: "Dr. Ahmad Fauzi",
        completedDate: "5 Maret 2026",
        duration: "8 Jam",
        credentialId: "SITANI-AC-2026-001",
        status: "issued" as const,
    },
    {
        id: "2",
        courseName: "Manajemen Keuangan Petani",
        instructor: "Hendra Kusuma, MBA",
        completedDate: "28 Februari 2026",
        duration: "6 Jam",
        credentialId: "SITANI-AC-2026-002",
        status: "issued" as const,
    },
    {
        id: "3",
        courseName: "Pengendalian Hama Terpadu",
        instructor: "Dr. Rina Wulandari",
        completedDate: "20 Februari 2026",
        duration: "5 Jam",
        credentialId: "SITANI-AC-2026-003",
        status: "issued" as const,
    },
    {
        id: "4",
        courseName: "Pertanian Organik Lanjutan",
        instructor: "Prof. Budi Santoso",
        completedDate: "10 Februari 2026",
        duration: "12 Jam",
        credentialId: "SITANI-AC-2026-004",
        status: "issued" as const,
    },
    {
        id: "5",
        courseName: "Agribisnis & Pemasaran",
        instructor: "Maya Sari, MBA",
        completedDate: "1 Februari 2026",
        duration: "7 Jam",
        credentialId: "SITANI-AC-2026-005",
        status: "issued" as const,
    },
]

const SertifikatContent = () => {
    const handleDownload = (name: string) => {
        toast.success(`Mengunduh sertifikat ${name}`, {
            description: "Sertifikat akan terunduh dalam beberapa saat...",
        })
    }

    return (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <Link href="/academy" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Sertifikat Saya</h1>
                    <p className="text-gray-500 text-sm mt-0.5">{CERTIFICATES.length} sertifikat diperoleh</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
                {[
                    { label: "Total Sertifikat", value: "5", icon: Award, color: "text-amber-600 bg-amber-50" },
                    { label: "Total Jam Belajar", value: "38 Jam", icon: Clock, color: "text-blue-600 bg-blue-50" },
                    { label: "Kelas Selesai", value: "5 Kelas", icon: Calendar, color: "text-emerald-600 bg-emerald-50" },
                ].map((stat) => (
                    <Card key={stat.label} className="p-4 rounded-xl border border-gray-200 shadow-sm">
                        <div className={`w-9 h-9 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                            <stat.icon className="w-4.5 h-4.5" />
                        </div>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                        <p className="text-lg font-bold text-gray-900 mt-0.5">{stat.value}</p>
                    </Card>
                ))}
            </div>

            {/* Certificate List */}
            <div className="space-y-4">
                {CERTIFICATES.map((cert) => (
                    <Card key={cert.id} className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row">
                            <div className="sm:w-40 h-28 sm:h-auto bg-gradient-to-br from-amber-500 to-amber-600 flex flex-col items-center justify-center shrink-0 p-4">
                                <Award className="w-10 h-10 text-white/80 mb-1" />
                                <span className="text-[10px] text-white/70 font-medium">SERTIFIKAT</span>
                            </div>
                            <div className="flex-1 p-4 sm:p-5">
                                <div className="flex items-start justify-between gap-3 mb-1">
                                    <h3 className="text-base font-bold text-gray-900">{cert.courseName}</h3>
                                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                                        Terbit
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mb-3">Instruktur: {cert.instructor}</p>
                                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
                                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {cert.completedDate}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {cert.duration}</span>
                                    <span className="flex items-center gap-1"><ExternalLink className="w-3.5 h-3.5" /> {cert.credentialId}</span>
                                </div>
                                <div className="flex gap-2">
                                    <Button size="sm" className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer text-xs gap-1.5" onClick={() => handleDownload(cert.courseName)}>
                                        <Download className="w-3.5 h-3.5" /> Unduh
                                    </Button>
                                    <Button size="sm" variant="outline" className="border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 cursor-pointer text-xs gap-1.5">
                                        <ExternalLink className="w-3.5 h-3.5" /> Bagikan
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default SertifikatContent
