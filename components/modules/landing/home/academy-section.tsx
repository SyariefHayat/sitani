"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const courses = [
    {
        image: "/academy.png",
        title: "Teknik Budidaya Padi Modern",
        rating: 4.8,
        reviews: 128,
        owner: "Dr. Budi Santoso",
        price: "Rp 150.000",
    },
    {
        image: "/academy.png",
        title: "Manajemen Irigasi Efisien",
        rating: 4.6,
        reviews: 95,
        owner: "Ir. Siti Rahmawati",
        price: "Rp 125.000",
    },
    {
        image: "/academy.png",
        title: "Pertanian Organik untuk Pemula",
        rating: 4.9,
        reviews: 213,
        owner: "Prof. Agus Wijaya",
        price: "Rp 175.000",
    },
]

const AcademySection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === courses.length - 1 ? 0 : prev + 1))
    }

    // Show 3 cards with wrap-around
    const getVisibleCourses = () => {
        const visible = []
        for (let i = 0; i < 3; i++) {
            visible.push(courses[(currentIndex + i) % courses.length])
        }
        return visible
    }

    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
            {/* Section Heading */}
            <div className="flex items-center gap-4 sm:gap-5 mb-10 sm:mb-12 lg:mb-14">
                <div className="h-[2px] w-full rounded-full bg-linear-to-r from-transparent to-[#2d7a3a]/70" />
                <h2 className="w-full text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a4528] tracking-tight whitespace-nowrap">
                    SiTani Academy
                </h2>
                <div className="h-[2px] w-full rounded-full bg-linear-to-l from-transparent to-[#2d7a3a]/70" />
            </div>

            {/* Carousel Container */}
            <div className="flex items-center gap-4 sm:gap-6">
                {/* Left Chevron */}
                <button
                    onClick={handlePrev}
                    className="shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-[#2d7a3a] transition-all duration-200 hover:shadow-[0_4px_16px_rgba(26,69,40,0.15)] hover:border-[#2d7a3a]/30 hover:bg-[#f0faf1] active:scale-95"
                >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Cards */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {getVisibleCourses().map((course, index) => (
                        <Card
                            key={`${course.title}-${index}`}
                            className={`overflow-hidden border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(26,69,40,0.12)] hover:-translate-y-1 py-0 gap-0 ${index === 1 ? "hidden sm:flex" : ""
                                }${index === 2 ? "hidden lg:flex" : ""}`}
                        >
                            {/* Course Image */}
                            <div className="relative w-full aspect-16/10 bg-[#e8f5e9] overflow-hidden">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Card Content */}
                            <CardContent className="px-4 pt-4 pb-3 space-y-2.5">
                                {/* Title */}
                                <h3 className="text-sm sm:text-base font-semibold text-[#1a4528] leading-snug line-clamp-2">
                                    {course.title}
                                </h3>

                                {/* Rating & Owner */}
                                <div className="space-y-1.5">
                                    {/* Stars */}
                                    <div className="flex items-center gap-1.5">
                                        <div className="flex items-center gap-0.5">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-3.5 h-3.5 ${i < Math.floor(course.rating)
                                                        ? "fill-amber-400 text-amber-400"
                                                        : "fill-gray-200 text-gray-200"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs font-medium text-gray-600">
                                            {course.rating}
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            ({course.reviews})
                                        </span>
                                    </div>

                                    {/* Owner */}
                                    <p className="text-xs text-gray-500">
                                        oleh{" "}
                                        <span className="font-medium text-[#2d7a3a]">
                                            {course.owner}
                                        </span>
                                    </p>
                                </div>
                            </CardContent>

                            <div className="px-4">
                                <Separator />
                            </div>

                            {/* Footer */}
                            <CardFooter className="px-4 py-3 flex items-center justify-between">
                                <span className="text-sm font-bold text-[#1a4528]">
                                    {course.price}
                                </span>
                                <Button
                                    size="sm"
                                    className="bg-[#2d7a3a] hover:bg-[#1a4528] text-white text-xs px-4 rounded-lg transition-colors duration-200"
                                >
                                    Lihat Kelas
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Right Chevron */}
                <button
                    onClick={handleNext}
                    className="shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-[#2d7a3a] transition-all duration-200 hover:shadow-[0_4px_16px_rgba(26,69,40,0.15)] hover:border-[#2d7a3a]/30 hover:bg-[#f0faf1] active:scale-95"
                >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
            </div>
        </section>
    )
}

export default AcademySection