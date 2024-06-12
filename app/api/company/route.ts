import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const domain = searchParams.get("domain")

  if (!domain) {
    return NextResponse.json({ error: "Domain is required" }, { status: 400 })
  }

  try {
    const webhookUrl = process.env.WEBHOOK_URL
    if (!webhookUrl) {
      throw new Error("Webhook URL is missing")
    }
    const response = await fetch(`${webhookUrl}${domain}`, { cache: "no-cache" })
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching company data:", error)
    return NextResponse.json({ error: "Failed to fetch company data" }, { status: 500 })
  }
}