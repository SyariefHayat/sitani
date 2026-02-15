import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-100">
            <div className="px-6 sm:px-10 lg:px-16 py-10 sm:py-12">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-12">
                    {/* Brand */}
                    <div className="max-w-xs space-y-3">
                        <div className="flex items-center gap-2.5">
                            <Image src="/logo.png" alt="SiTani Logo" width={36} height={36} className="w-8 h-8 sm:w-9 sm:h-9" />
                            <span className="text-lg font-bold text-[#1a4528]">SiTani</span>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Platform digital ekosistem pertanian Indonesia yang menghubungkan petani, distributor, investor, dan pembeli.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-12 sm:gap-16">
                        <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-[#1a4528]">Layanan</h4>
                            <ul className="space-y-2">
                                <li><Link href="/marketplace" className="text-sm text-gray-500 hover:text-[#2d7a3a] transition-colors">Marketplace</Link></li>
                                <li><Link href="/investasi" className="text-sm text-gray-500 hover:text-[#2d7a3a] transition-colors">Investasi</Link></li>
                                <li><Link href="/distributor" className="text-sm text-gray-500 hover:text-[#2d7a3a] transition-colors">Distributor</Link></li>
                                <li><Link href="/logistik" className="text-sm text-gray-500 hover:text-[#2d7a3a] transition-colors">Logistik</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-[#1a4528]">Lainnya</h4>
                            <ul className="space-y-2">
                                <li><Link href="/academy" className="text-sm text-gray-500 hover:text-[#2d7a3a] transition-colors">Academy</Link></li>
                                <li><Link href="/article" className="text-sm text-gray-500 hover:text-[#2d7a3a] transition-colors">Artikel</Link></li>
                                <li><Link href="/about" className="text-sm text-gray-500 hover:text-[#2d7a3a] transition-colors">Tentang Kami</Link></li>
                                <li><Link href="/contact" className="text-sm text-gray-500 hover:text-[#2d7a3a] transition-colors">Kontak</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Separator />

            {/* Copyright */}
            <div className="px-6 sm:px-10 lg:px-16 py-4">
                <p className="text-xs text-gray-400 text-center">
                    &copy; {new Date().getFullYear()} SiTani. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer