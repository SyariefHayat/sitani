import Image from "next/image"
import { ChevronsRight } from "lucide-react"
import { SUPPLY_CHAIN } from "@/lib/constants"

const FlowRow = ({ items, className }: { items: typeof SUPPLY_CHAIN; className?: string }) => (
    <div className={`flex flex-row items-center justify-evenly px-3 sm:px-8 py-4 sm:py-6 gap-1 sm:gap-2 lg:gap-4 bg-white rounded-xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(26,69,40,0.1)] ${className}`}>
        {items.map((item, index) => (
            <div key={item.label} className="flex items-center gap-1 sm:gap-2 lg:gap-4">
                {index > 0 && (
                    <ChevronsRight className="shrink-0 w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#2d7a3a]/60" />
                )}
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 min-w-0">
                    <Image
                        src={item.icon}
                        alt={item.alt}
                        width={40}
                        height={40}
                        className="shrink-0 w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain"
                    />
                    <p className="text-[9px] sm:text-sm lg:text-base font-semibold text-[#1a4528] text-center leading-tight">
                        {item.label}
                    </p>
                </div>
            </div>
        ))}
    </div>
)

export default FlowRow
