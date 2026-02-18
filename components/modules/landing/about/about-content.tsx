import { Target, Eye, Sprout, ShieldCheck, Zap, Heart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const VALUES = [
    {
        icon: ShieldCheck,
        title: "Transparansi",
        desc: "Setiap transaksi dan proses berjalan secara terbuka dan dapat diverifikasi oleh semua pihak.",
        color: "text-blue-600 bg-blue-50",
    },
    {
        icon: Sprout,
        title: "Berkelanjutan",
        desc: "Mendukung praktik pertanian ramah lingkungan untuk masa depan yang lebih hijau.",
        color: "text-green-600 bg-green-50",
    },
    {
        icon: Zap,
        title: "Teknologi",
        desc: "Memanfaatkan teknologi terkini untuk meningkatkan produktivitas dan efisiensi pertanian.",
        color: "text-amber-600 bg-amber-50",
    },
    {
        icon: Heart,
        title: "Komunitas",
        desc: "Membangun komunitas petani yang saling mendukung dan berbagi pengetahuan.",
        color: "text-rose-600 bg-rose-50",
    },
]

const TEAM = [
    { name: "Dr. Budi Santoso", role: "Founder & CEO", avatar: "https://github.com/shadcn.png" },
    { name: "Siti Nurhaliza", role: "COO", avatar: "https://github.com/shadcn.png" },
    { name: "Ahmad Rizki", role: "CTO", avatar: "https://github.com/shadcn.png" },
    { name: "Dewi Lestari", role: "Head of Agriculture", avatar: "https://github.com/shadcn.png" },
]

const AboutContent = () => {
    return (
        <div>
            {/* Hero */}
            <section className="w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[90vh] bg-[url(/hero-section-bg.png)] bg-cover bg-center flex flex-col justify-center gap-3 sm:gap-5 lg:gap-6 px-6 sm:px-10 lg:px-16 py-12 sm:py-0">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1a4528] font-extrabold leading-tight tracking-tight">
                    Tentang SiTani
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-[#206536] font-bold max-w-2xl">
                    Platform digital ekosistem pertanian Indonesia yang menghubungkan petani, distributor, investor, dan pembeli dalam satu ekosistem terintegrasi.
                </p>
            </section>

            {/* Visi & Misi */}
            <section className="w-full px-6 sm:px-10 lg:px-16 py-8 sm:py-10 lg:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                    <div className="w-full flex items-start gap-4 bg-white rounded-xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(26,69,40,0.12)] hover:-translate-y-0.5">
                        <div className="p-3 rounded-xl bg-emerald-50 shrink-0">
                            <Eye className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-[#1a4528] mb-2">Visi</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Menjadi platform digital pertanian terdepan di Indonesia yang memberdayakan seluruh pelaku ekosistem pertanian untuk mencapai kesejahteraan dan ketahanan pangan nasional.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex items-start gap-4 bg-white rounded-xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(26,69,40,0.12)] hover:-translate-y-0.5">
                        <div className="p-3 rounded-xl bg-blue-50 shrink-0">
                            <Target className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-[#1a4528] mb-2">Misi</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Mendigitalisasi rantai pasok pertanian, memberikan akses pendanaan yang adil, menyediakan pelatihan berkualitas, dan membangun jaringan distribusi yang efisien untuk seluruh petani Indonesia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nilai-nilai */}
            <section className="w-full px-6 sm:px-10 lg:px-16 pb-8 sm:pb-10 lg:pb-14">
                <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10 lg:mb-12">
                    <div className="h-[2px] w-full rounded-full bg-linear-to-r from-transparent to-[#2d7a3a]/70" />
                    <h2 className="w-full text-center text-xl sm:text-3xl lg:text-4xl font-bold text-[#1a4528] tracking-tight whitespace-nowrap">
                        Nilai-nilai Kami
                    </h2>
                    <div className="h-[2px] w-full rounded-full bg-linear-to-l from-transparent to-[#2d7a3a]/70" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                    {VALUES.map((value) => (
                        <div
                            key={value.title}
                            className="group w-full p-4 sm:p-5 text-center bg-white rounded-xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(26,69,40,0.12)] hover:-translate-y-1"
                        >
                            <div className={`inline-flex p-3 rounded-xl ${value.color} mb-3 transition-transform duration-300 group-hover:scale-110`}>
                                <value.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold text-[#1a4528] leading-snug mb-1.5">
                                {value.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tim */}
            <section className="w-full px-6 sm:px-10 lg:px-16 pb-8 sm:pb-10 lg:pb-14">
                <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10 lg:mb-12">
                    <div className="h-[2px] w-full rounded-full bg-linear-to-r from-transparent to-[#2d7a3a]/70" />
                    <h2 className="w-full text-center text-xl sm:text-3xl lg:text-4xl font-bold text-[#1a4528] tracking-tight whitespace-nowrap">
                        Tim Kami
                    </h2>
                    <div className="h-[2px] w-full rounded-full bg-linear-to-l from-transparent to-[#2d7a3a]/70" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                    {TEAM.map((member) => (
                        <div
                            key={member.name}
                            className="group w-full flex flex-col items-center text-center p-5 sm:p-6 bg-white rounded-xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(26,69,40,0.12)] hover:-translate-y-0.5"
                        >
                            <Avatar className="w-16 h-16 sm:w-20 sm:h-20 border-3 border-[#609A26]/20 mb-3">
                                <AvatarImage src={member.avatar} />
                                <AvatarFallback className="bg-[#609A26]/10 text-[#609A26] font-bold text-lg">
                                    {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                                </AvatarFallback>
                            </Avatar>
                            <h3 className="text-sm sm:text-base font-bold text-[#1a4528] leading-snug">
                                {member.name}
                            </h3>
                            <p className="text-xs text-gray-500 mt-0.5">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section className="w-full px-6 sm:px-10 lg:px-16 pb-8 sm:pb-10 lg:pb-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                {[
                    { value: "15K+", label: "Petani Terdaftar" },
                    { value: "500+", label: "Investor Aktif" },
                    { value: "28", label: "Provinsi" },
                    { value: "Rp 12M+", label: "Total Transaksi" },
                ].map((stat) => (
                    <div
                        key={stat.label}
                        className="w-full flex flex-col items-center text-center bg-white rounded-xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] px-4 py-5 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(26,69,40,0.12)] hover:-translate-y-0.5"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#609A26] leading-tight tracking-tight">
                            {stat.value}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 leading-snug">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default AboutContent
