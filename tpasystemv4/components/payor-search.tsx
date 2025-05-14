"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PayorListing } from "@/components/payor-listing"
import { CreateNewPayor } from "@/components/create-new-payor"

export function PayorSearch() {
  const [view, setView] = useState<"search" | "listing" | "create">("search")

  const handleSearch = () => {
    setView("listing")
  }

  const handleAddNew = () => {
    setView("create")
  }

  const handleBack = () => {
    setView("search")
  }

  // Render different views based on the current state
  if (view === "create") {
    return <CreateNewPayor onBack={handleBack} />
  }

  if (view === "listing") {
    return <PayorListing onBack={handleBack} onAddNew={handleAddNew} />
  }

  // Default search view
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Payor Search</h2>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="payor-name" className="text-sm font-medium text-slate-700">
              Payor Name
            </label>
            <Input id="payor-name" placeholder="Enter Payor Name" className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="payor-code" className="text-sm font-medium text-slate-700">
              Payor Code
            </label>
            <Input id="payor-code" placeholder="Enter Payor Code" className="w-full" />
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <Button className="bg-sky-600 hover:bg-sky-700" onClick={handleAddNew}>
            Add New
          </Button>
          <Button className="bg-sky-600 hover:bg-sky-700" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}
