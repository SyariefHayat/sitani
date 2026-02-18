import Image from "next/image"
import { ChevronsRight } from "lucide-react"
import React from "react"

type SupplyItem = {
    label: string
    icon: string
    alt: string
}

interface FlowRowProps {
    items: SupplyItem[]
    className?: string
}

const FlowRow = ({ items, className }: FlowRowProps) => {
    return (
        <div
            className={`
        flex items-center justify-evenly
        px-3 sm:px-8 py-4 sm:py-6
        gap-2 sm:gap-4 lg:gap-6
        bg-white rounded-xl
        border border-gray-100
        shadow-[0_2px_16px_rgba(0,0,0,0.06)]
        transition-all duration-300
        hover:shadow-[0_6px_24px_rgba(26,69,40,0.1)]
        ${className ?? ""}
      `}
        >
            {items.map((item, index) => (
                <React.Fragment key={item.label}>
                    {index > 0 && (
                        <ChevronsRight
                            className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#2d7a3a]/60"
                        />
                    )}

                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 min-w-0">
                        <Image
                            src={item.icon}
                            alt={item.alt}
                            width={40}
                            height={40}
                            className="shrink-0 w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain"
                        />
                        <p className="text-[10px] sm:text-sm lg:text-base font-semibold text-[#1a4528] text-center leading-tight">
                            {item.label}
                        </p>
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}

export default FlowRow
