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

export default function CompanyCard({ companyData }: { companyData: CompanyData }) {
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
      </Card>
    )
  }