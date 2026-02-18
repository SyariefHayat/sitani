"use client"


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from "@/components/ui/carousel"

import Link from "next/link"
import Image from "next/image"
import { COURSES } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Star } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useState, useCallback, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const AcademySection = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    const onSelect = useCallback(() => {
        if (!api) return
        setCurrent(api.selectedScrollSnap())
    }, [api])

    useEffect(() => {
        if (!api) return
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())
        api.on("select", onSelect)
        return () => {
            api.off("select", onSelect)
        }
    }, [api, onSelect])

    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16 lg:pb-20">
            <div className="flex items-center gap-4 sm:gap-5 mb-10 sm:mb-12 lg:mb-14">
                <div className="h-[2px] w-full rounded-full bg-linear-to-r from-transparent to-[#2d7a3a]/70" />
                <h2 className="shrink-0 text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a4528] tracking-tight whitespace-nowrap">
                    SiTani Academy
                </h2>
                <div className="h-[2px] w-full rounded-full bg-linear-to-l from-transparent to-[#2d7a3a]/70" />
            </div>

            <Carousel opts={{ align: "start", loop: true }} setApi={setApi} className="w-full px-0 sm:px-16">
                <CarouselContent className="-ml-4 sm:-ml-5">
                    {COURSES.map((course) => (
                        <CarouselItem key={course.title} className="pl-4 sm:pl-5 basis-full sm:basis-1/2 lg:basis-1/3">
                            <Card className="overflow-hidden border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(26,69,40,0.12)] hover:-translate-y-1 py-0 gap-0 h-full">
                                <div className="relative w-full aspect-16/10 bg-[#e8f5e9] overflow-hidden">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <CardContent className="px-4 pt-4 pb-3 space-y-3">
                                    <h3 className="text-sm sm:text-base font-semibold text-[#1a4528] leading-snug line-clamp-2">
                                        {course.title}
                                    </h3>

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

                                    <p className="text-xs text-gray-500 font-medium">
                                        {course.kategori}
                                    </p>
                                </CardContent>

                                <Separator />

                                <CardFooter className="px-4 py-3 flex items-center justify-between">
                                    <Button asChild variant="outline" size="sm" className="text-xs font-medium text-[#2d7a3a] border-[#2d7a3a]/30 hover:bg-[#2d7a3a]/5 hover:text-[#1a4528] cursor-pointer">
                                        <Link href={`/academy/course/${course.slug}`}>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                            Lihat Selengkapnya
                                        </Link>
                                    </Button>
                                    <Button
                                        size="sm"
                                        className="bg-[#2d7a3a] hover:bg-[#1a4528] text-white text-xs px-4 rounded-lg transition-colors duration-200 cursor-pointer gap-1.5"
                                    >
                                        <BookOpen className="w-4 h-4" />
                                        Daftar
                                    </Button>
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="hidden sm:flex w-12 h-12 left-0 border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-[#2d7a3a] hover:shadow-[0_4px_16px_rgba(26,69,40,0.15)] hover:border-[#2d7a3a]/30 hover:bg-[#f0faf1] cursor-pointer" />
                <CarouselNext className="hidden sm:flex w-12 h-12 right-0 border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-[#2d7a3a] hover:shadow-[0_4px_16px_rgba(26,69,40,0.15)] hover:border-[#2d7a3a]/30 hover:bg-[#f0faf1] cursor-pointer" />
            </Carousel>

            <div className="flex items-center justify-center gap-2 mt-6">
                {Array.from({ length: count }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => api?.scrollTo(i)}
                        className={`rounded-full transition-all duration-300 cursor-pointer ${current === i
                            ? "w-6 h-2.5 bg-[#2d7a3a]"
                            : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </section>
    )
}

export default AcademySection