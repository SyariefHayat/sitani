import FlowRow from "./flow-row"
import { INVESTMENT_FLOW, SUPPLY_CHAIN } from "@/lib/constants"

const EcosystemSection = () => {
    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
            <div className="flex items-center gap-4 sm:gap-5 mb-10 sm:mb-12 lg:mb-14">
                <div className="h-[2px] w-full rounded-full bg-linear-to-r from-transparent to-[#2d7a3a]/70" />
                <h2 className="shrink-0 text-center text-xl sm:text-3xl lg:text-4xl font-bold text-[#1a4528] tracking-tight whitespace-nowrap">
                    Ekosistem Pertanian SiTani
                </h2>
                <div className="h-[2px] w-full rounded-full bg-linear-to-l from-transparent to-[#2d7a3a]/70" />
            </div>

            <div className="flex flex-col items-center justify-center gap-5 sm:gap-6">
                <FlowRow items={SUPPLY_CHAIN} className="w-full sm:w-[85%] lg:w-[60%]" />
                <FlowRow items={INVESTMENT_FLOW} className="w-full sm:w-[70%] lg:w-[46%]" />
            </div>
        </section>
    )
}

export default EcosystemSection