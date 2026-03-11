"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Clock, Users, BookOpen, Play, CheckCircle2, Heart, Share2, Link2, Copy } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Modul {
    judul: string
    durasi: string
}

interface Instruktur {
    name: string
    role: string
    avatar: string
}

interface Course {
    slug: string
    image: string
    title: string
    rating: number
    reviews: number
    kategori: string
    level: string
    durasi: string
    peserta: number
    instruktur: Instruktur
    deskripsi: string
    highlights: string[]
    modul: Modul[]
}

const levelConfig: Record<string, string> = {
    Pemula: "bg-green-100 text-green-700",
    Menengah: "bg-blue-100 text-blue-700",
    Lanjutan: "bg-purple-100 text-purple-700",
}

const kategoriConfig: Record<string, string> = {
    "Online Course": "bg-emerald-100 text-emerald-700",
    "Urban Course": "bg-sky-100 text-sky-700",
    "Tech Course": "bg-indigo-100 text-indigo-700",
    "Bisnis Course": "bg-amber-100 text-amber-700",
    "Premium Course": "bg-rose-100 text-rose-700",
}

interface CourseDetailProps {
    course: Course
    otherCourses: Course[]
}

const CourseDetail = ({ course, otherCourses }: CourseDetailProps) => {
    const [isFavorited, setIsFavorited] = useState(false)
    const [copied, setCopied] = useState(false)

    const handleFavorite = () => {
        setIsFavorited(!isFavorited)
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleShareWhatsApp = () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(`${course.title} - ${window.location.href}`)}`, "_blank")
    }

    const handleShareTelegram = () => {
        window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(course.title)}`, "_blank")
    }

    const handleShareTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(course.title)}&url=${encodeURIComponent(window.location.href)}`, "_blank")
    }

    return (
        <div className="pt-12 sm:pt-14">
            {/* Main Content */}
            <section className="w-full px-4 sm:px-10 lg:px-16 py-6 sm:py-8 lg:py-12">
                {/* Hero Image */}
                <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-100 mb-6 sm:mb-8 lg:mb-10 rounded-xl sm:rounded-2xl overflow-hidden border">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                    {/* Badges di atas image */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap items-center gap-2">
                        <span className={`px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-full backdrop-blur-sm ${kategoriConfig[course.kategori] || "bg-gray-100 text-gray-700"}`}>
                            {course.kategori}
                        </span>
                        <span className={`px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-full backdrop-blur-sm ${levelConfig[course.level]}`}>
                            {course.level}
                        </span>
                    </div>

                    {/* Info overlay di bawah image */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-4 sm:pb-6">
                        <h1 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight mb-2">
                            {course.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white/80 text-xs sm:text-sm">
                            <div className="flex items-center gap-1">
                                <div className="flex items-center gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${i < Math.floor(course.rating)
                                                ? "fill-amber-400 text-amber-400"
                                                : "fill-white/30 text-white/30"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="font-semibold text-white ml-1">{course.rating}</span>
                                <span className="text-white/60">({course.reviews})</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Users className="w-3.5 h-3.5" />
                                <span>{course.peserta.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{course.durasi}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Action Buttons */}
                <div className="flex items-center gap-2 mb-6 lg:hidden">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleFavorite}
                        className={`flex-1 cursor-pointer gap-2 text-xs sm:text-sm font-medium rounded-lg ${isFavorited
                            ? "bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
                            : "border-gray-200 text-gray-600 hover:bg-gray-50"
                            }`}
                    >
                        <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
                        {isFavorited ? "Difavoritkan" : "Favorit"}
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                className="flex-1 cursor-pointer gap-2 text-xs sm:text-sm font-medium border-gray-200 text-gray-600 hover:bg-gray-50 rounded-lg"
                            >
                                <Share2 className="w-4 h-4" />
                                Bagikan
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 rounded-xl">
                            <DropdownMenuItem onClick={handleCopyLink} className="gap-3 cursor-pointer">
                                {copied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                {copied ? "Link Disalin!" : "Salin Link"}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleShareWhatsApp} className="gap-3 cursor-pointer">
                                <Link2 className="w-4 h-4 text-green-600" />
                                WhatsApp
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleShareTelegram} className="gap-3 cursor-pointer">
                                <Link2 className="w-4 h-4 text-blue-500" />
                                Telegram
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleShareTwitter} className="gap-3 cursor-pointer">
                                <Link2 className="w-4 h-4 text-sky-500" />
                                Twitter / X
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-8">
                    {/* Left Column — Deskripsi & Modul */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Deskripsi */}
                        <Card>
                            <CardHeader className="pb-3 px-4 sm:px-6">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-[#609A26]/10 rounded-lg">
                                        <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-[#609A26]" />
                                    </div>
                                    <h2 className="text-base sm:text-lg font-bold text-foreground">Tentang Kursus</h2>
                                </div>
                            </CardHeader>
                            <CardContent className="px-4 sm:px-6">
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    {course.deskripsi}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Materi Kursus */}
                        <Card>
                            <CardHeader className="pb-3 px-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-[#609A26]/10 rounded-lg">
                                            <Play className="h-4 w-4 sm:h-5 sm:w-5 text-[#609A26]" />
                                        </div>
                                        <div>
                                            <h2 className="text-base sm:text-lg font-bold text-foreground">Materi Kursus</h2>
                                            <p className="text-[11px] sm:text-xs text-muted-foreground">{course.modul.length} Modul • {course.durasi} total</p>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-1.5 px-4 sm:px-6">
                                {course.modul.map((modul, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl border border-border/50 hover:border-[#609A26]/30 hover:bg-[#609A26]/5 transition-all group cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                                            <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#609A26]/10 text-[#609A26] text-[11px] sm:text-xs font-bold shrink-0 group-hover:bg-[#609A26] group-hover:text-white transition-colors">
                                                {String(index + 1).padStart(2, "0")}
                                            </div>
                                            <span className="text-xs sm:text-sm font-medium text-foreground truncate">
                                                {modul.judul}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1.5 shrink-0 ml-2 sm:ml-3">
                                            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-muted-foreground" />
                                            <span className="text-[11px] sm:text-xs text-muted-foreground font-medium whitespace-nowrap">{modul.durasi}</span>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column — Sticky Card */}
                    <div className="lg:col-span-2">
                        <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">
                            {/* Enrollment Card */}
                            <Card className="overflow-hidden shadow-lg border-[#609A26]/20 py-0 gap-0">
                                <div className="relative w-full aspect-video bg-[#e8f5e9] overflow-hidden cursor-pointer group/play">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover/play:bg-black/35 flex items-center justify-center transition-colors duration-300">
                                        <div className="bg-white/90 rounded-full p-3 sm:p-4 shadow-lg transition-transform duration-300">
                                            <Play className="h-5 w-5 sm:h-7 sm:w-7 text-[#609A26] fill-[#609A26]" />
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-4 sm:p-5 space-y-4">
                                    <div className="text-center">
                                        <p className="text-xl sm:text-2xl font-extrabold text-[#1a4528]">Gratis</p>
                                        <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">Akses penuh ke semua materi</p>
                                    </div>

                                    <Button
                                        size="lg"
                                        className="w-full bg-[#609A26] hover:bg-[#528520] text-white font-bold text-xs sm:text-sm rounded-xl py-5 sm:py-6 cursor-pointer gap-2 shadow-md hover:shadow-lg transition-all"
                                    >
                                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                                        Daftar Sekarang
                                    </Button>

                                    {/* Favorite & Share Buttons */}
                                    <div className="hidden lg:grid grid-cols-2 gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={handleFavorite}
                                            className={`cursor-pointer gap-1.5 text-xs font-medium rounded-lg transition-all ${isFavorited
                                                ? "bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
                                                : "border-gray-200 text-gray-600 hover:bg-gray-50"
                                                }`}
                                        >
                                            <Heart className={`w-3.5 h-3.5 ${isFavorited ? "fill-current" : ""}`} />
                                            {isFavorited ? "Difavoritkan" : "Favorit"}
                                        </Button>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="w-full cursor-pointer gap-1.5 text-xs font-medium border-gray-200 text-gray-600 hover:bg-gray-50 rounded-lg"
                                                >
                                                    <Share2 className="w-3.5 h-3.5" />
                                                    Bagikan
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="w-48 rounded-xl">
                                                <DropdownMenuItem onClick={handleCopyLink} className="gap-3 cursor-pointer">
                                                    {copied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                                    {copied ? "Link Disalin!" : "Salin Link"}
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={handleShareWhatsApp} className="gap-3 cursor-pointer">
                                                    <Link2 className="w-4 h-4 text-green-600" />
                                                    WhatsApp
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={handleShareTelegram} className="gap-3 cursor-pointer">
                                                    <Link2 className="w-4 h-4 text-blue-500" />
                                                    Telegram
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={handleShareTwitter} className="gap-3 cursor-pointer">
                                                    <Link2 className="w-4 h-4 text-sky-500" />
                                                    Twitter / X
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>

                                    <Separator />

                                    {/* Highlights */}
                                    <div className="space-y-2.5">
                                        <p className="text-xs sm:text-sm font-semibold text-foreground">Yang kamu dapatkan:</p>
                                        {course.highlights.map((item, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#609A26] shrink-0" />
                                                <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Instruktur Card */}
                            <Card>
                                <CardContent className="p-4 sm:p-5">
                                    <p className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Instruktur</p>
                                    <div className="flex items-center gap-3">
                                        <Avatar className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#609A26]/20">
                                            <AvatarImage src={course.instruktur.avatar} />
                                            <AvatarFallback className="bg-[#609A26]/10 text-[#609A26] font-bold text-xs sm:text-sm">
                                                {course.instruktur.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-foreground">{course.instruktur.name}</p>
                                            <p className="text-[11px] sm:text-xs text-muted-foreground">{course.instruktur.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Course Info Summary */}
                            <Card>
                                <CardContent className="p-4 sm:p-5">
                                    <p className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Informasi Kursus</p>
                                    <div className="space-y-2.5 sm:space-y-3">
                                        <div className="flex items-center justify-between text-xs sm:text-sm">
                                            <span className="text-muted-foreground">Durasi</span>
                                            <span className="font-medium text-foreground">{course.durasi}</span>
                                        </div>
                                        <Separator />
                                        <div className="flex items-center justify-between text-xs sm:text-sm">
                                            <span className="text-muted-foreground">Modul</span>
                                            <span className="font-medium text-foreground">{course.modul.length} Materi</span>
                                        </div>
                                        <Separator />
                                        <div className="flex items-center justify-between text-xs sm:text-sm">
                                            <span className="text-muted-foreground">Level</span>
                                            <span className={`px-2 py-0.5 text-[10px] sm:text-xs font-medium rounded-full ${levelConfig[course.level]}`}>{course.level}</span>
                                        </div>
                                        <Separator />
                                        <div className="flex items-center justify-between text-xs sm:text-sm">
                                            <span className="text-muted-foreground">Peserta</span>
                                            <span className="font-medium text-foreground">{course.peserta.toLocaleString()}</span>
                                        </div>
                                        <Separator />
                                        <div className="flex items-center justify-between text-xs sm:text-sm">
                                            <span className="text-muted-foreground">Rating</span>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                                                <span className="font-medium text-foreground">{course.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default CourseDetail
