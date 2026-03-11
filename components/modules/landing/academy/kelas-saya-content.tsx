"use client"

import Link from "next/link"
import { ArrowLeft, BookOpen, Clock, BarChart3, Play } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { COURSES } from "@/lib/constants"

const KelasSayaContent = () => {
    const enrolledCourses = COURSES.slice(0, 4).map((course, i) => ({
        ...course,
        progress: [100, 75, 45, 10][i],
        status: ["Selesai", "Sedang Belajar", "Sedang Belajar", "Baru Mulai"][i],
        statusColor: [
            "bg-emerald-100 text-emerald-700",
            "bg-blue-100 text-blue-700",
            "bg-blue-100 text-blue-700",
            "bg-amber-100 text-amber-700",
        ][i],
        lastAccessed: ["2 hari lalu", "Hari ini", "Kemarin", "3 hari lalu"][i],
    }))

    return (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-18 sm:py-25">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <Link href="/academy" className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Kelas Saya</h1>
                    <p className="text-gray-500 text-sm mt-0.5">Kelas yang sedang Anda ikuti</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
                {[
                    { label: "Total Kelas", value: "4", icon: BookOpen, color: "text-emerald-600 bg-emerald-50" },
                    { label: "Sedang Belajar", value: "2", icon: Play, color: "text-blue-600 bg-blue-50" },
                    { label: "Jam Belajar", value: "48 Jam", icon: Clock, color: "text-amber-600 bg-amber-50" },
                    { label: "Rata-rata Progress", value: "57%", icon: BarChart3, color: "text-purple-600 bg-purple-50" },
                ].map((stat) => (
                    <Card key={stat.label} className="p-4 rounded-xl border border-gray-200 shadow-sm">
                        <div className={`w-9 h-9 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                            <stat.icon className="w-4.5 h-4.5" />
                        </div>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                        <p className="text-lg font-bold text-gray-900 mt-0.5">{stat.value}</p>
                    </Card>
                ))}
            </div>

            {/* Course List */}
            <div className="space-y-4">
                {enrolledCourses.map((course) => (
                    <Card key={course.slug} className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row">
                            <div className="sm:w-48 h-32 sm:h-auto bg-gradient-to-br from-[#206536] to-[#2d8a4e] flex items-center justify-center shrink-0">
                                <BookOpen className="w-10 h-10 text-white/60" />
                            </div>
                            <div className="flex-1 p-4 sm:p-5">
                                <div className="flex items-start justify-between gap-3 mb-2">
                                    <div>
                                        <h3 className="text-base font-bold text-gray-900">{course.title}</h3>
                                        <p className="text-xs text-gray-500 mt-0.5">{course.instruktur.name} · {course.level} · {course.durasi}</p>
                                    </div>
                                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${course.statusColor}`}>
                                        {course.status}
                                    </span>
                                </div>

                                {/* Progress Bar */}
                                <div className="mt-3">
                                    <div className="flex items-center justify-between mb-1.5">
                                        <span className="text-xs text-gray-500">Progress</span>
                                        <span className="text-xs font-semibold text-[#206536]">{course.progress}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#206536] to-[#609A26] rounded-full transition-all duration-500"
                                            style={{ width: `${course.progress}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-[11px] text-gray-400">Terakhir diakses: {course.lastAccessed}</span>
                                    <Button asChild size="sm" className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer text-xs gap-1.5">
                                        <Link href={`/academy/course/${course.slug}`}>
                                            <Play className="w-3.5 h-3.5" />
                                            {course.progress === 100 ? "Review" : "Lanjutkan"}
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default KelasSayaContent
