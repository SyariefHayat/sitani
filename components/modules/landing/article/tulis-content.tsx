"use client"

import { useState } from "react"
import { Bold, Italic, List, Image, Link2, Send, FileText, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { toast } from "sonner"

const CATEGORIES = ["Budidaya Tanaman", "Padi & Beras", "Pertanian Organik", "Hama & Penyakit", "Irigasi & Air", "Cuaca & Musim", "Teknologi", "Bisnis"]

const TulisContent = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")
    const [tags, setTags] = useState("")

    const handlePublish = () => {
        if (!title.trim() || !content.trim()) {
            toast.error("Judul dan konten wajib diisi")
            return
        }
        toast.success("Artikel berhasil dipublikasikan!", {
            description: `"${title}" telah dipublikasikan ke platform SiTani`,
        })
    }

    const handleDraft = () => {
        toast.success("Draft tersimpan", {
            description: "Artikel berhasil disimpan sebagai draft",
        })
    }

    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Tulis Artikel</h1>
                <p className="text-gray-500 text-sm mt-1">Bagikan pengetahuan dan pengalamanmu tentang pertanian</p>
            </div>

            <div className="space-y-6">
                {/* Title */}
                <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">Judul Artikel</label>
                    <input
                        type="text"
                        placeholder="Masukkan judul artikel yang menarik..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26] text-lg font-semibold"
                    />
                </div>

                {/* Category & Tags */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block flex items-center gap-1.5">
                            <FileText className="w-4 h-4" /> Kategori
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26] cursor-pointer"
                        >
                            <option value="">Pilih kategori</option>
                            {CATEGORIES.map(c => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block flex items-center gap-1.5">
                            <Tag className="w-4 h-4" /> Tags
                        </label>
                        <input
                            type="text"
                            placeholder="padi, organik, tips (pisahkan dengan koma)"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609A26]/30 focus:border-[#609A26]"
                        />
                    </div>
                </div>

                {/* Editor Toolbar */}
                <Card className="rounded-xl border border-gray-200 overflow-hidden">
                    <div className="flex items-center gap-1 p-2 border-b border-gray-100 bg-gray-50/50">
                        {[
                            { icon: Bold, label: "Bold" },
                            { icon: Italic, label: "Italic" },
                            { icon: List, label: "List" },
                            { icon: Image, label: "Image" },
                            { icon: Link2, label: "Link" },
                        ].map(tool => (
                            <button
                                key={tool.label}
                                className="p-2 rounded-lg hover:bg-gray-200 text-gray-500 transition-colors cursor-pointer"
                                title={tool.label}
                            >
                                <tool.icon className="w-4 h-4" />
                            </button>
                        ))}
                    </div>
                    <textarea
                        placeholder="Tulis konten artikel di sini..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={15}
                        className="w-full p-4 text-sm focus:outline-none resize-none"
                    />
                </Card>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3">
                    <Button
                        variant="outline"
                        className="border-[#206536]/30 text-[#206536] hover:bg-[#206536]/5 cursor-pointer"
                        onClick={handleDraft}
                    >
                        <FileText className="w-4 h-4 mr-1.5" />
                        Simpan Draft
                    </Button>
                    <Button
                        className="bg-[#206536] hover:bg-[#1a5530] text-white cursor-pointer"
                        onClick={handlePublish}
                    >
                        <Send className="w-4 h-4 mr-1.5" />
                        Publikasikan
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default TulisContent
