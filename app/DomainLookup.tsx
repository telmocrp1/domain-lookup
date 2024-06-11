// DomainLookup.tsx

"use client"

import { useState, useTransition } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import CompanyCard from "./CompanyCard"

export default function DomainLookup() {
  const [domain, setDomain] = useState("")
  const [isPending, startTransition] = useTransition()
  const [companyData, setCompanyData] = useState<any>(null)

  const handleSearch = () => {
    startTransition(async () => {
      const response = await fetch(`/api/company?domain=${domain}`)
      const data = await response.json()
      setCompanyData(data.companyData)  
    })
  }

  return (
    <>
      <div className="flex items-center justify-center mt-8">
        <Input
          type="text"
          placeholder="Enter a domain name"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="flex-1 max-w-md"
        />
        <Button onClick={handleSearch} className="ml-4" disabled={isPending}>
          {isPending ? "Searching..." : "Search"}
        </Button>
      </div>
      {companyData && <CompanyCard companyData={companyData} />}
    </>
  )
}