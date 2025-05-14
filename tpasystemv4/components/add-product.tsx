"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

interface AddProductProps {
  onBack: () => void
}

export function AddProduct({ onBack }: AddProductProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Create New Product</h2>
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-6">Product Information</h3>

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

          <div className="space-y-2">
            <label htmlFor="product-type" className="text-sm font-medium text-slate-700">
              Product Type
            </label>
            <Select>
              <SelectTrigger id="product-type" className="w-full">
                <SelectValue placeholder="Please select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">Individual</SelectItem>
                <SelectItem value="aso">ASO</SelectItem>
                <SelectItem value="ghs">GHS</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="payor" className="text-sm font-medium text-slate-700">
              Payor
            </label>
            <div className="relative">
              <Input id="payor" placeholder="Enter Payor Name or Code" className="w-full pr-10" />
              <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3">
                <Search className="h-4 w-4 text-slate-400" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Button className="bg-sky-600 hover:bg-sky-700">Save</Button>
          <Button variant="destructive">Cancel</Button>
        </div>
      </div>
    </div>
  )
}
