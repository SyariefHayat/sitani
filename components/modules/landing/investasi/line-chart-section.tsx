"use client"

import { useState } from "react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { cn } from "@/lib/utils"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

const PERIOD_OPTIONS = [
    { label: "1 Bulan", value: "1m" },
    { label: "3 Bulan", value: "3m" },
    { label: "6 Bulan", value: "6m" },
    { label: "1 Tahun", value: "1y" },
] as const

type Period = (typeof PERIOD_OPTIONS)[number]["value"]

// Dummy data per period
const chartDataMap: Record<Period, { label: string; imbalHasil: number }[]> = {
    "1m": [
        { label: "Minggu 1", imbalHasil: 6 },
        { label: "Minggu 2", imbalHasil: 9 },
        { label: "Minggu 3", imbalHasil: 7.5 },
        { label: "Minggu 4", imbalHasil: 12 },
    ],
    "3m": [
        { label: "Jan", imbalHasil: 5 },
        { label: "Feb", imbalHasil: 8 },
        { label: "Mar", imbalHasil: 14 },
    ],
    "6m": [
        { label: "Jan", imbalHasil: 5 },
        { label: "Feb", imbalHasil: 8 },
        { label: "Mar", imbalHasil: 12 },
        { label: "Apr", imbalHasil: 10 },
        { label: "Mei", imbalHasil: 15 },
        { label: "Jun", imbalHasil: 18 },
    ],
    "1y": [
        { label: "Jan", imbalHasil: 5 },
        { label: "Feb", imbalHasil: 7 },
        { label: "Mar", imbalHasil: 10 },
        { label: "Apr", imbalHasil: 9 },
        { label: "Mei", imbalHasil: 13 },
        { label: "Jun", imbalHasil: 16 },
        { label: "Jul", imbalHasil: 14 },
        { label: "Agu", imbalHasil: 18 },
        { label: "Sep", imbalHasil: 20 },
        { label: "Okt", imbalHasil: 22 },
        { label: "Nov", imbalHasil: 25 },
        { label: "Des", imbalHasil: 28 },
    ],
}

const chartConfig = {
    imbalHasil: {
        label: "Imbal Hasil",
        color: "#206536",
    },
} satisfies ChartConfig

export function LineChartSection() {
    const [activePeriod, setActivePeriod] = useState<Period>("6m")
    const chartData = chartDataMap[activePeriod]

    return (
        <section className="w-full px-6 sm:px-10 lg:px-16 pb-8 sm:pb-10 lg:pb-14">
            <Card className="border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <CardTitle className="text-lg sm:text-xl font-bold text-[#1a4528]">
                        Grafik Imbal Hasil
                    </CardTitle>

                    {/* Period Tabs */}
                    <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                        {PERIOD_OPTIONS.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => setActivePeriod(option.value)}
                                className={cn(
                                    "px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all duration-200 cursor-pointer",
                                    activePeriod === option.value
                                        ? "bg-[#206536] text-white shadow-sm"
                                        : "text-[#206536] hover:bg-white/60"
                                )}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </CardHeader>

                <CardContent>
                    <ChartContainer config={chartConfig} className="h-[250px] sm:h-[300px] lg:h-[350px] w-full">
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 0,
                                right: 16,
                                top: 8,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis
                                dataKey="label"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tick={{ fontSize: 12, fill: "#6b7280" }}
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tick={{ fontSize: 12, fill: "#206536", fontWeight: 600 }}
                                ticks={[5, 10, 15, 20, 30]}
                                domain={[0, 30]}
                                tickFormatter={(value) => `${value}%`}
                                width={45}
                            />
                            <ChartTooltip
                                cursor={{ stroke: "#206536", strokeWidth: 1, strokeDasharray: "4 4" }}
                                content={
                                    <ChartTooltipContent
                                        formatter={(value) => [`${value}%`, "Imbal Hasil"]}
                                    />
                                }
                            />
                            <Line
                                dataKey="imbalHasil"
                                type="monotone"
                                stroke="#206536"
                                strokeWidth={2.5}
                                dot={{
                                    fill: "#206536",
                                    stroke: "#fff",
                                    strokeWidth: 2,
                                    r: 4,
                                }}
                                activeDot={{
                                    r: 6,
                                    fill: "#206536",
                                    stroke: "#fff",
                                    strokeWidth: 2,
                                }}
                            />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </section>
    )
}
