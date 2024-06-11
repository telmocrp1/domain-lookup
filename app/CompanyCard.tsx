// CompanyCard.tsx

import Link from "next/link"
import { Card } from "@/components/ui/card"

type CompanyData = {
  name: string
  domain: string
  address: string
  description: string
  website: string
}

type SimilarCompany = {
  companyName: string
  companyPage: string
  industry: string
  location: string | null
}

type CompanyCardProps = {
  companyData: CompanyData
  similarCompanies: SimilarCompany[]
}

export default function CompanyCard({ companyData, similarCompanies }: CompanyCardProps) {
  return (
    <Card className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{companyData.name}</h2>
          {companyData.domain && (
            <div>
              <Link href={companyData.domain} target="_blank" className="text-blue-500 hover:underline">
                {companyData.domain}
              </Link>
            </div>
          )}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <span>{companyData.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{companyData.description}</span>
          </div>
          {companyData.website && (
            <div className="flex items-center gap-2">
              <div>
                <Link href={companyData.website} target="_blank" className="text-blue-500 hover:underline">
                  {companyData.website}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {similarCompanies.length > 0 && (
        <>
          <hr className="my-6 border-gray-300 dark:border-gray-600" />
          <div>
            <h3 className="text-xl font-bold mb-4">Similar Companies</h3>
            <ul className="space-y-4">
              {similarCompanies.map((company, index) => (
                <li key={index}>
                  <Link href={company.companyPage} target="_blank" className="text-blue-500 hover:underline">
                    {company.companyName}
                  </Link>
                  <p className="text-gray-500 dark:text-gray-400">
                    {company.industry} {company.location && `- ${company.location}`}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </Card>
  )
}