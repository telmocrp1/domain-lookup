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
      const response = await fetch("https://kiliba.tcrespo.com/webhook/864b7785-c341-4415-9758-a49302696681")
      const data = await response.json()
      setCompanyData(data.companyData)
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
                <h2 className="text-2xl font-bold">{companyData.name}</h2>
                <Link href="#" target="_blank" className="text-blue-500 hover:underline" prefetch={false}>
                  {companyData.domain}
                </Link>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span>{companyData.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span>{companyData.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GlobeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <Link href="#" target="_blank" className="text-blue-500 hover:underline" prefetch={false}>
                    {companyData.website}
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

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}