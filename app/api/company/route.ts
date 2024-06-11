import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const domain = searchParams.get("domain")

  if (!domain) {
    return NextResponse.json({ error: "Domain is required" }, { status: 400 })
  }

  try {
    const response = await fetch(`https://kiliba.tcrespo.com/webhook/864b7785-c341-4415-9758-a49302696681?domain=${domain}`)
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching company data:", error)
    return NextResponse.json({ error: "Failed to fetch company data" }, { status: 500 })
  }
}