"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

const PROJECTS = [
    {
        image: "/hero-section-bg.png",
        title: "Padi Organik Premium - Subang",
        creator: { name: "Budi Santoso", avatar: "https://github.com/shadcn.png", initials: "BS" },
        funded: "Rp 45.000.000",
        target: "Rp 60.000.000",
        progress: 75,
    },
    {
        image: "/hero-section-bg.png",
        title: "Jagung Hibrida - Malang",
        creator: { name: "Siti Rahma", avatar: "https://github.com/shadcn.png", initials: "SR" },
        funded: "Rp 28.000.000",
        target: "Rp 50.000.000",
        progress: 56,
    },
    {
        image: "/hero-section-bg.png",
        title: "Kopi Arabika - Toraja",
        creator: { name: "Ahmad Yusuf", avatar: "https://github.com/shadcn.png", initials: "AY" },
        funded: "Rp 92.000.000",
        target: "Rp 100.000.000",
        progress: 92,
    },
    {
        image: "/hero-section-bg.png",
        title: "Sayur Hidroponik - Bandung",
        creator: { name: "Dewi Lestari", avatar: "https://github.com/shadcn.png", initials: "DL" },
        funded: "Rp 15.000.000",
        target: "Rp 40.000.000",
        progress: 37,
    },
    {
        image: "/hero-section-bg.png",
        title: "Cabai Merah - Brebes",
        creator: { name: "Hasan Basri", avatar: "https://github.com/shadcn.png", initials: "HB" },
        funded: "Rp 33.000.000",
        target: "Rp 45.000.000",
        progress: 73,
    },
    {
        image: "/hero-section-bg.png",
        title: "Teh Hijau Organik - Puncak",
        creator: { name: "Rina Wati", avatar: "https://github.com/shadcn.png", initials: "RW" },
        funded: "Rp 68.000.000",
        target: "Rp 80.000.000",
        progress: 85,
    },
]

const ProjectSection = () => {
    const [startIndex, setStartIndex] = useState(0)
    const visibleCount = 3
    const maxIndex = Math.max(0, PROJECTS.length - visibleCount)

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(0, prev - 1))
    }

    const handleNext = () => {
        setStartIndex((prev) => Math.min(maxIndex, prev + 1))
    }

    const visibleProjects = PROJECTS.slice(startIndex, startIndex + visibleCount)

    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 pb-8 sm:pb-10 lg:pb-14">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1a4528]">
                    Proyek Berjalan
                </h2>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                        className="border-[#206536]/30 text-[#206536] hover:bg-[#206536] hover:text-white disabled:opacity-40 cursor-pointer h-8 w-8 sm:h-9 sm:w-9"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handleNext}
                        disabled={startIndex >= maxIndex}
                        className="border-[#206536]/30 text-[#206536] hover:bg-[#206536] hover:text-white disabled:opacity-40 cursor-pointer h-8 w-8 sm:h-9 sm:w-9"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                {visibleProjects.map((project, index) => (
                    <div
                        key={`${project.title}-${startIndex}-${index}`}
                        className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(26,69,40,0.12)] hover:-translate-y-0.5"
                    >
                        {/* Project Image */}
                        <div className="relative w-full h-40 sm:h-44 lg:h-48 bg-gray-100">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Card Content */}
                        <div className="p-4 sm:p-5 flex flex-col gap-3">
                            {/* Title */}
                            <h3 className="text-sm sm:text-base font-bold text-[#1a4528] leading-snug line-clamp-2">
                                {project.title}
                            </h3>

                            {/* Creator */}
                            <div className="flex items-center gap-2">
                                <Avatar className="w-6 h-6">
                                    <AvatarImage src={project.creator.avatar} />
                                    <AvatarFallback className="text-[10px] bg-[#206536]/10 text-[#206536] font-semibold">
                                        {project.creator.initials}
                                    </AvatarFallback>
                                </Avatar>
                                <span className="text-xs sm:text-sm text-gray-500">{project.creator.name}</span>
                            </div>

                            {/* Funding Progress */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs sm:text-sm font-bold text-[#206536]">{project.funded}</span>
                                    <span className="text-xs font-semibold text-[#206536] bg-[#206536]/10 px-2 py-0.5 rounded-full">
                                        {project.progress}%
                                    </span>
                                </div>
                                <Progress
                                    value={project.progress}
                                    className="h-2 bg-gray-100 [&>div]:bg-[#206536]"
                                />
                                <p className="text-[11px] text-gray-400">
                                    Target: {project.target}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-2 gap-2 pt-1">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 text-xs font-semibold cursor-pointer"
                                >
                                    Detail
                                </Button>
                                <Button
                                    size="sm"
                                    className="bg-[#206536] hover:bg-[#1a5530] text-white text-xs font-semibold cursor-pointer"
                                >
                                    Investasi
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectSection