// page.tsx

import DomainLookup from "./DomainLookup"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-3xl w-full">
        <div className="text-center space-y-4 mt-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Domain Lookup</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find information about the company associated with a domain.
          </p>
        </div>
        <DomainLookup />
      </div>
    </div>
  )
}