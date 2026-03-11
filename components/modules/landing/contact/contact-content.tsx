import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

const CONTACT_INFO = [
    {
        icon: Mail,
        title: "Email",
        value: "info@sitani.id",
        desc: "Kirim email kapan saja",
        color: "text-blue-600 bg-blue-50",
    },
    {
        icon: Phone,
        title: "Telepon",
        value: "+62 21 1234 5678",
        desc: "Senin - Jumat, 08.00 - 17.00",
        color: "text-green-600 bg-green-50",
    },
    {
        icon: MapPin,
        title: "Alamat",
        value: "Jakarta Selatan, Indonesia",
        desc: "Jl. Pertanian No. 10, Pasar Minggu",
        color: "text-rose-600 bg-rose-50",
    },
    {
        icon: Clock,
        title: "Jam Operasional",
        value: "08.00 - 17.00 WIB",
        desc: "Senin - Jumat (Hari Kerja)",
        color: "text-amber-600 bg-amber-50",
    },
]

const ContactContent = () => {
    return (
        <div>
            {/* Hero */}
            <section className="w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[90vh] bg-[url(/hero-section-bg.png)] bg-cover bg-center flex flex-col justify-center gap-3 sm:gap-5 lg:gap-6 px-6 sm:px-10 lg:px-16 py-12 sm:py-0">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1a4528] font-extrabold leading-tight tracking-tight">
                    Hubungi Kami
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-[#206536] font-bold max-w-2xl">
                    Punya pertanyaan atau saran? Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami.
                </p>
            </section>

            {/* Contact Info Cards */}
            <section className="w-full px-6 sm:px-10 lg:px-16 py-8 sm:py-10 lg:py-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                {CONTACT_INFO.map((info) => (
                    <div
                        key={info.title}
                        className="w-full flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-4 sm:p-5 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(26,69,40,0.12)] hover:-translate-y-0.5"
                    >
                        <div className={`p-2.5 rounded-xl ${info.color} shrink-0`}>
                            <info.icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-xs text-gray-400 mb-0.5">{info.title}</h3>
                            <p className="text-sm font-bold text-[#1a4528] leading-snug">
                                {info.value}
                            </p>
                            <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                                {info.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Form Section */}
            <section className="w-full px-6 sm:px-10 lg:px-16 pb-8 sm:pb-10 lg:pb-14">
                <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10 lg:mb-12">
                    <div className="h-[2px] w-full rounded-full bg-linear-to-r from-transparent to-[#2d7a3a]/70" />
                    <h2 className="w-full text-center text-xl sm:text-3xl lg:text-4xl font-bold text-[#1a4528] tracking-tight whitespace-nowrap">
                        Kirim Pesan
                    </h2>
                    <div className="h-[2px] w-full rounded-full bg-linear-to-l from-transparent to-[#2d7a3a]/70" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                    {/* Form */}
                    <Card className="lg:col-span-3 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                        <CardContent className="p-5 sm:p-6 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-[#1a4528]">Nama Lengkap</label>
                                    <Input
                                        placeholder="Masukkan nama lengkap"
                                        className="rounded-lg border-gray-200 focus-visible:ring-[#609A26]"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-[#1a4528]">Email</label>
                                    <Input
                                        type="email"
                                        placeholder="contoh@email.com"
                                        className="rounded-lg border-gray-200 focus-visible:ring-[#609A26]"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-[#1a4528]">Subjek</label>
                                <Input
                                    placeholder="Subjek pesan Anda"
                                    className="rounded-lg border-gray-200 focus-visible:ring-[#609A26]"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-[#1a4528]">Pesan</label>
                                <Textarea
                                    placeholder="Tuliskan pesan Anda di sini..."
                                    rows={6}
                                    className="rounded-lg border-gray-200 focus-visible:ring-[#609A26] resize-none"
                                />
                            </div>
                            <Button className="w-full sm:w-auto bg-[#609A26] hover:bg-[#528520] text-white font-semibold rounded-lg py-5 text-sm shadow-sm cursor-pointer gap-2">
                                <Send className="w-4 h-4" />
                                Kirim Pesan
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Map Placeholder & Info */}
                    <div className="lg:col-span-2 space-y-4">
                        <Card className="overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] py-0 gap-0">
                            <div className="w-full h-48 sm:h-56 bg-[url(/hero-section-bg.png)] bg-cover bg-center relative">
                                <div className="absolute inset-0 bg-[#1a4528]/30 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <MapPin className="w-8 h-8 mx-auto mb-2" />
                                        <p className="text-sm font-semibold">SiTani Headquarters</p>
                                        <p className="text-xs opacity-80">Jakarta Selatan</p>
                                    </div>
                                </div>
                            </div>
                            <CardContent className="p-4 sm:p-5">
                                <h3 className="text-sm font-bold text-[#1a4528] mb-2">Kantor Pusat</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Jl. Pertanian No. 10, Pasar Minggu, Jakarta Selatan 12520, Indonesia
                                </p>
                                <Separator className="my-3" />
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <Mail className="w-3.5 h-3.5 text-[#609A26]" />
                                        <span>info@sitani.id</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <Phone className="w-3.5 h-3.5 text-[#609A26]" />
                                        <span>+62 21 1234 5678</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactContent
