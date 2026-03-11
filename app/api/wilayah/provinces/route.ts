import { NextResponse } from "next/server"

const API_BASE = "https://wilayah.id/api"

export async function GET() {
    try {
        const res = await fetch(`${API_BASE}/provinces.json`)
        const json = await res.json()
        return NextResponse.json(json.data || [])
    } catch {
        return NextResponse.json([], { status: 500 })
    }
}
