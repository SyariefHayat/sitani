"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, TrendingUp, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

interface Project {
    image: string
    title: string
    creator: { name: string; avatar: string; initials: string }
    funded: string
    target: string
    progress: number
}

const PROJECTS: Project[] = [
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
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [investAmount, setInvestAmount] = useState("")
    const visibleCount = 3
    const maxIndex = Math.max(0, PROJECTS.length - visibleCount)

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(0, prev - 1))
    }

    const handleNext = () => {
        setStartIndex((prev) => Math.min(maxIndex, prev + 1))
    }

    const handleInvest = () => {
        if (!investAmount || parseInt(investAmount) <= 0) {
            toast.error("Masukkan jumlah investasi yang valid")
            return
        }
        toast.success(`Investasi Rp ${parseInt(investAmount).toLocaleString("id-ID")} berhasil diproses!`, {
            description: `Proyek: ${selectedProject?.title}`,
        })
        setInvestAmount("")
        setSelectedProject(null)
    }

    const visibleProjects = PROJECTS.slice(startIndex, startIndex + visibleCount)

    return (
        <>
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
                                    onClick={() => setSelectedProject(project)}
                                >
                                    Detail
                                </Button>
                                <Button
                                    size="sm"
                                    className="bg-[#206536] hover:bg-[#1a5530] text-white text-xs font-semibold cursor-pointer"
                                    onClick={() => { setSelectedProject(project); setInvestAmount("") }}
                                >
                                    Investasi
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Project Detail / Invest Modal */}
        {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
                <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                    <div className="sticky top-0 bg-white rounded-t-2xl z-10 flex items-center justify-between px-6 py-4 border-b border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900">Detail Proyek</h2>
                        <button onClick={() => setSelectedProject(null)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 cursor-pointer"><X className="w-5 h-5" /></button>
                    </div>
                    <div className="px-6 py-5 space-y-5">
                        <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gray-100">
                            <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mt-0.5">{selectedProject.title}</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <Avatar className="w-6 h-6">
                                    <AvatarImage src={selectedProject.creator.avatar} />
                                    <AvatarFallback className="text-[10px] bg-[#206536]/10 text-[#206536] font-semibold">
                                        {selectedProject.creator.initials}
                                    </AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-gray-500">{selectedProject.creator.name}</span>
                            </div>
                        </div>

                        {/* Progress */}
                        <div>
                            <div className="flex justify-between text-xs mb-1.5">
                                <span className="text-gray-400">{selectedProject.funded} / {selectedProject.target}</span>
                                <span className="font-bold text-[#206536]">{selectedProject.progress}%</span>
                            </div>
                            <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-[#206536] to-[#609A26] rounded-full transition-all" style={{ width: `${selectedProject.progress}%` }} />
                            </div>
                        </div>

                        <Separator />

                        {/* Invest Input */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1.5 block">Jumlah Investasi (Rp)</label>
                            <input
                                type="number"
                                value={investAmount}
                                onChange={(e) => setInvestAmount(e.target.value)}
                                placeholder="Contoh: 1000000"
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                            />
                            <div className="flex gap-2 mt-2">
                                {["500000", "1000000", "2000000", "5000000"].map((v) => (
                                    <button key={v} onClick={() => setInvestAmount(v)} className="px-2.5 py-1 text-[11px] font-medium border border-gray-200 rounded-lg hover:border-[#609A26] hover:text-[#609A26] cursor-pointer transition-colors">
                                        {parseInt(v) >= 1000000 ? `${parseInt(v)/1000000}jt` : `${parseInt(v)/1000}rb`}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2 px-6 py-4 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
                        <Button variant="outline" onClick={() => setSelectedProject(null)} className="cursor-pointer text-sm">Tutup</Button>
                        <Button onClick={handleInvest} className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer gap-1.5 text-sm">
                            <TrendingUp className="w-4 h-4" /> Investasi Sekarang
                        </Button>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default ProjectSection