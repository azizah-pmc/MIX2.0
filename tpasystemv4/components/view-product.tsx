"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Pencil, Trash2, ArrowUpDown, Download, SearchIcon, X } from "lucide-react"

interface ViewProductProps {
  productId: string | null
  onBack: () => void
}

interface Policy {
  id: string
  number: string
  name: string
  effectiveDate: string
  expiryDate: string
  status: string
}

export function ViewProduct({ productId, onBack }: ViewProductProps) {
  // In a real app, you would fetch the product details based on the productId
  const product = {
    id: "1",
    name: "Takaful Life 150",
    code: "STMB-001",
    type: "Individual",
    payor: "Syarikat Takaful Malaysia Berhad",
  }

  // Sample policy data
  const policies: Policy[] = [
    {
      id: "1",
      number: "POL-2023-001",
      name: "Takaful Life 150_John",
      effectiveDate: "01-02-2022",
      expiryDate: "01-02-2022",
      status: "Inactive",
    },
    {
      id: "2",
      number: "POL-2025-0012",
      name: "Takaful Life 150_Ali",
      effectiveDate: "04-05-2025",
      expiryDate: "04-05-2025",
      status: "Active",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Product Information</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button className="bg-sky-600 hover:bg-sky-700">Edit</Button>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="product-name" className="text-sm font-medium text-slate-700">
              Product Name
            </label>
            <Input id="product-name" value={product.name} readOnly className="w-full bg-slate-50" />
          </div>

          <div className="space-y-2">
            <label htmlFor="product-code" className="text-sm font-medium text-slate-700">
              Product Code
            </label>
            <Input id="product-code" value={product.code} readOnly className="w-full bg-slate-50" />
          </div>

          <div className="space-y-2">
            <label htmlFor="product-type" className="text-sm font-medium text-slate-700">
              Product Type
            </label>
            <Select disabled>
              <SelectTrigger id="product-type" className="w-full bg-slate-50">
                <SelectValue>{product.type}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">Individual</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="payor" className="text-sm font-medium text-slate-700">
              Payor
            </label>
            <div className="relative">
              <Input id="payor" value={product.payor} readOnly className="w-full pr-10 bg-slate-50" />
              <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3">
                <X className="h-4 w-4 text-slate-400" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Listing Table */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800">Policy Listing</h3>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Input placeholder="Search" className="pl-9 w-64" />
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            </div>
            <Button className="bg-sky-600 hover:bg-sky-700 flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-left text-sm font-medium text-slate-500">
                <th className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center">No.</div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center">
                    Policy Number
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center">
                    Policy Name
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center">
                    Effective Date
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center">
                    Expiry Date
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center">
                    Status
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {policies.map((policy, index) => (
                <tr key={policy.id} className="text-slate-700">
                  <td className="py-3 px-2">{index + 1}</td>
                  <td className="py-3 px-2">{policy.number}</td>
                  <td className="py-3 px-2">{policy.name}</td>
                  <td className="py-3 px-2">{policy.effectiveDate}</td>
                  <td className="py-3 px-2">{policy.expiryDate}</td>
                  <td className="py-3 px-2">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                        policy.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {policy.status}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
