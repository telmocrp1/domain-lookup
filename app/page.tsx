"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Component() {
  const [domain, setDomain] = useState("")
  const [companyData, setCompanyData] = useState(null)
  const handleSearch = async () => {
    try {
      const response = await fetch("https://proxy.limitly.dev/mGM4MKNj5KYsWAvb")
      const data = await response.json()
      setCompanyData(data)
    } catch (error) {
      console.error("Error fetching company data:", error)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-3xl w-full">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Domain Lookup</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find information about the company associated with a domain.
          </p>
          <div className="flex items-center justify-center">
            <Input
              type="text"
              placeholder="Enter a domain name"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="flex-1 max-w-md"
            />
            <Button onClick={handleSearch} className="ml-4">
              Search
            </Button>
          </div>
        </div>
        {companyData && (
          <Card className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">name</h2>
                <Link href="#" target="_blank" className="text-blue-500 hover:underline" prefetch={false}>
                  website.com
                </Link>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <span>addreess</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>phone</span>
                </div>
                <div className="flex items-center gap-2">
                  <Link href="#" target="_blank" className="text-blue-500 hover:underline" prefetch={false}>
                    https://website.com/
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}