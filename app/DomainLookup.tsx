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
  const [similarCompanies, setSimilarCompanies] = useState<any[]>([])
  const [suggestions, setSuggestions] = useState<any[]>([])

  const handleSearch = () => {
    startTransition(async () => {
      const response = await fetch(`/api/company?domain=${domain}`)
      const data = await response.json()
      setCompanyData(data.companyData)
      setSimilarCompanies(data.similarCompanies || [])
    })
  }

  const handleInputChange = async (value: string) => {
    setDomain(value)
    if (value.length >= 3) {
      const response = await fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${value}`)
      const data = await response.json()
      setSuggestions(data)
    } else {
      setSuggestions([])
    }
  }

  return (
    <>
      <div className="flex items-center justify-center mt-8">
        <div className="relative w-full max-w-lg">
          <Input
            type="text"
            placeholder="Enter a domain name"
            value={domain}
            onChange={(e) => handleInputChange(e.target.value)}
            className="w-full px-4 py-3"
          />
          {suggestions.length > 0 && (
            <ul className="absolute z-10 w-full py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.domain}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setDomain(suggestion.domain)
                    setSuggestions([])
                  }}
                >
                  {suggestion.name} ({suggestion.domain})
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button onClick={handleSearch} className="ml-4 px-6 py-3" disabled={isPending}>
          {isPending ? "Searching..." : "Search"}
        </Button>
      </div>
      {companyData && (
        <CompanyCard companyData={companyData} similarCompanies={similarCompanies} />
      )}
    </>
  )
}