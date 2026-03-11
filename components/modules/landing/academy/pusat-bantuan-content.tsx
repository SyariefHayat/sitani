"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, HelpCircle, MessageCircle, Mail, ChevronDown, ChevronUp, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const FAQ_ITEMS = [
    {
        question: "Bagaimana cara mendaftar kelas di SiTani Academy?",
        answer: "Untuk mendaftar kelas, buka halaman Academy dan pilih kelas yang diminati. Klik tombol 'Daftar Kelas' dan ikuti instruksi pendaftaran. Setelah terdaftar, kelas akan muncul di menu 'Kelas Saya'.",
    },
    {
        question: "Apakah sertifikat yang diberikan resmi?",
        answer: "Ya, sertifikat yang diberikan oleh SiTani Academy adalah sertifikat resmi yang diakui oleh mitra dan institusi pertanian. Setiap sertifikat memiliki credential ID unik yang dapat diverifikasi.",
    },
    {
        question: "Berapa lama akses kelas setelah mendaftar?",
        answer: "Setelah mendaftar, Anda mendapatkan akses selamanya ke materi kelas. Anda bisa belajar kapan saja dan mengulangi materi sebanyak yang Anda butuhkan.",
    },
    {
        question: "Bagaimana cara mengikuti webinar?",
        answer: "Webinar dapat diikuti melalui menu 'Webinar' di halaman Academy. Daftar pada webinar yang tersedia, dan Anda akan mendapatkan link akses melalui notifikasi dan email sebelum acara dimulai.",
    },
    {
        question: "Apakah ada biaya untuk mengikuti kelas?",
        answer: "SiTani Academy menyediakan kelas gratis dan berbayar. Kelas gratis dapat langsung diikuti, sedangkan kelas berbayar memerlukan pembayaran sesuai harga yang tertera.",
    },
    {
        question: "Bagaimana jika saya mengalami kesulitan teknis?",
        answer: "Jika mengalami kesulitan teknis, Anda bisa menghubungi tim dukungan kami melalui WhatsApp, email, atau formulir bantuan di halaman ini. Tim kami siap membantu Anda.",
    },
]

const PusatBantuanContent = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <Link href="/academy" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Pusat Bantuan</h1>
                    <p className="text-gray-500 text-sm mt-0.5">Temukan jawaban dan hubungi kami</p>
                </div>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
                {[
                    { icon: MessageCircle, label: "WhatsApp", desc: "Chat langsung", color: "text-emerald-600 bg-emerald-50", href: "https://wa.me/6281234567890" },
                    { icon: Mail, label: "Email", desc: "support@sitani.id", color: "text-blue-600 bg-blue-50", href: "mailto:support@sitani.id" },
                    { icon: Phone, label: "Telepon", desc: "(021) 1234-5678", color: "text-purple-600 bg-purple-50", href: "tel:02112345678" },
                ].map((contact) => (
                    <a key={contact.label} href={contact.href} target="_blank" rel="noopener noreferrer">
                        <Card className="p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                            <div className={`w-10 h-10 rounded-lg ${contact.color} flex items-center justify-center mb-3`}>
                                <contact.icon className="w-5 h-5" />
                            </div>
                            <p className="text-sm font-bold text-gray-900">{contact.label}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{contact.desc}</p>
                        </Card>
                    </a>
                ))}
            </div>

            {/* FAQ */}
            <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#609A26]" />
                    Pertanyaan Umum (FAQ)
                </h2>
                <div className="space-y-3">
                    {FAQ_ITEMS.map((item, index) => (
                        <Card
                            key={index}
                            className="rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between p-4 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-sm font-semibold text-gray-800 pr-4">{item.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                                ) : (
                                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-4 pb-4 pt-0">
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
            </div>

            {/* Still need help */}
            <Card className="rounded-2xl border border-[#206536]/20 bg-[#206536]/5 p-6 mt-8 text-center">
                <h3 className="text-base font-bold text-gray-900 mb-2">Masih butuh bantuan?</h3>
                <p className="text-sm text-gray-500 mb-4">Tim support kami siap membantu Anda 24/7</p>
                <Button asChild className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer gap-1.5">
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4" /> Hubungi via WhatsApp
                    </a>
                </Button>
            </Card>
        </section>
    )
}

export default PusatBantuanContent
