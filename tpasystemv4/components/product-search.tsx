"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductListing } from "@/components/product-listing"
import { AddProduct } from "@/components/add-product"
import { ViewProduct } from "@/components/view-product"

export function ProductSearch() {
  const [view, setView] = useState<"search" | "listing" | "add" | "view">("search")
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null)

  const handleAddNew = () => {
    setView("add")
  }

  const handleSearch = () => {
    setView("listing")
  }

  const handleViewProduct = (id: string) => {
    setSelectedProductId(id)
    setView("view")
  }

  const handleBackToSearch = () => {
    setView("search")
  }

  const handleBackToListing = () => {
    setView("listing")
  }

  // Render different views based on the current state
  if (view === "add") {
    return <AddProduct onBack={handleBackToListing} />
  }

  if (view === "view") {
    return <ViewProduct productId={selectedProductId} onBack={handleBackToListing} />
  }

  if (view === "listing") {
    return <ProductListing onViewProduct={handleViewProduct} onBack={handleBackToSearch} onAddNew={handleAddNew} />
  }

  // Default search view
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Product Search</h2>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="product-name" className="text-sm font-medium text-slate-700">
              Product Name
            </label>
            <Input id="product-name" placeholder="Enter Product Name" className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="product-code" className="text-sm font-medium text-slate-700">
              Product Code
            </label>
            <Input id="product-code" placeholder="Enter Plan Product Code" className="w-full" />
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
