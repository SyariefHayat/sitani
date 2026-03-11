import { NextResponse } from "next/server"

const API_BASE = "https://wilayah.id/api"

export async function GET(
    _req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const res = await fetch(`${API_BASE}/regencies/${id}.json`)
        const json = await res.json()
        return NextResponse.json(json.data || [])
    } catch {
        return NextResponse.json([], { status: 500 })
    }
}
