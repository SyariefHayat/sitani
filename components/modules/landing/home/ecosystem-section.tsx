import { ChevronsRight, ChevronsDown } from "lucide-react"
import Image from "next/image"

const supplyChain = [
    { icon: "/petani.png", alt: "icon ekosistem petani", label: "Petani" },
    { icon: "/distributor.png", alt: "icon ekosistem distributor", label: "Distributor" },
    { icon: "/logistik.png", alt: "icon ekosistem logistik", label: "Logistik" },
    { icon: "/pembeli.png", alt: "icon ekosistem pembeli", label: "Pembeli" },
]

const investmentFlow = [
    { icon: "/eco-investor.png", alt: "icon ekosistem investor", label: "Investor" },
    { icon: "/modal.png", alt: "icon ekosistem modal", label: "Modal" },
    { icon: "/keuntungan.png", alt: "icon ekosistem keuntungan", label: "Keuntungan" },
]

const EcosystemSection = () => {
    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
            {/* Section Heading */}
            <div className="flex items-center gap-4 sm:gap-5 mb-10 sm:mb-12 lg:mb-14">
                <div className="h-[2px] w-full rounded-full bg-linear-to-r from-transparent to-[#2d7a3a]/70" />
                <h2 className="w-full text-center text-xl sm:text-3xl lg:text-4xl font-bold text-[#1a4528] tracking-tight whitespace-nowrap">
                    Ekosistem Pertanian SiTani
                </h2>
                <div className="h-[2px] w-full rounded-full bg-linear-to-l from-transparent to-[#2d7a3a]/70" />
            </div>
            <div className="flex flex-col items-center justify-center gap-5 sm:gap-6">
                {/* Supply Chain Flow */}
                <div className="w-full sm:w-[85%] lg:w-[71%] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 lg:gap-10 px-5 sm:px-8 py-5 sm:py-6 bg-white rounded-xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(26,69,40,0.1)]">
                    {supplyChain.map((item, index) => (
                        <div key={item.label} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-3">
                            {index > 0 && (
                                <>
                                    <ChevronsDown className="sm:hidden shrink-0 w-4 h-4 text-[#2d7a3a]/60" />
                                    <ChevronsRight className="hidden sm:block shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-[#2d7a3a]/60" />
                                </>
                            )}
                            <div className="flex items-center gap-2 sm:gap-3">
                                <Image src={item.icon} alt={item.alt} width={40} height={40} className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain" />
                                <p className="text-xs sm:text-sm lg:text-base font-semibold text-[#1a4528]">{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Investment Flow */}
                <div className="w-full sm:w-[70%] lg:w-[53%] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 lg:gap-10 px-5 sm:px-8 py-5 sm:py-6 bg-white rounded-xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(26,69,40,0.1)]">
                    {investmentFlow.map((item, index) => (
                        <div key={item.label} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-3">
                            {index > 0 && (
                                <>
                                    <ChevronsDown className="sm:hidden shrink-0 w-4 h-4 text-[#2d7a3a]/60" />
                                    <ChevronsRight className="hidden sm:block shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-[#2d7a3a]/60" />
                                </>
                            )}
                            <div className="flex items-center gap-2 sm:gap-3">
                                <Image src={item.icon} alt={item.alt} width={40} height={40} className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain" />
                                <p className="text-xs sm:text-sm lg:text-base font-semibold text-[#1a4528]">{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EcosystemSection