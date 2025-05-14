"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, Pencil, Trash2, ArrowUpDown, Download, SearchIcon } from "lucide-react"

interface Product {
  id: string
  name: string
  code: string
  type: string
  payor: string
  status: string
}

interface ProductListingProps {
  onViewProduct: (id: string) => void
  onBack: () => void
  onAddNew: () => void
}

export function ProductListing({ onViewProduct, onBack, onAddNew }: ProductListingProps) {
  // Sample product data
  const products: Product[] = [
    {
      id: "1",
      name: "Takaful Life 150",
      code: "STMB-001",
      type: "Individual",
      payor: "Syarikat Takaful Malaysia Berhad",
      status: "Active",
    },
    {
      id: "2",
      name: "PMCare ASD",
      code: "PMC-001",
      type: "ASD",
      payor: "PMCare Sdn Bhd",
      status: "Active",
    },
    {
      id: "3",
      name: "Retree PAMB",
      code: "PMB-324",
      type: "GHS",
      payor: "Prudential Assurance Malaysia Berhad",
      status: "Active",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Product Search</h2>
        <Button variant="outline" onClick={onBack}>
          Back to Search
        </Button>
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
          <Button className="bg-sky-600 hover:bg-sky-700" onClick={onAddNew}>
            Add New
          </Button>
          <Button className="bg-sky-600 hover:bg-sky-700">Search</Button>
        </div>
      </div>

      {/* Product Listing Table */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800">Product Listing</h3>
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
                    Product Name
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center">
                    Product Code
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center">
                    Product Type
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center">
                    Payor
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
              {products.map((product, index) => (
                <tr key={product.id} className="text-slate-700">
                  <td className="py-3 px-2">{index + 1}</td>
                  <td className="py-3 px-2">{product.name}</td>
                  <td className="py-3 px-2">{product.code}</td>
                  <td className="py-3 px-2">{product.type}</td>
                  <td className="py-3 px-2">{product.payor}</td>
                  <td className="py-3 px-2">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                        product.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onViewProduct(product.id)}>
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

        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <div>Showing 1 to 3 of 3 records</div>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8" disabled>
              &lt;&lt;
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8" disabled>
              &lt;
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 bg-sky-50 text-sky-600">
              1
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8" disabled>
              &gt;
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8" disabled>
              &gt;&gt;
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
