"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, Pencil, Trash2, ArrowUpDown, Download, SearchIcon } from "lucide-react"

interface Payor {
  id: string
  name: string
  code: string
  status: string
}

interface PayorListingProps {
  onBack: () => void
  onAddNew: () => void
}

export function PayorListing({ onBack, onAddNew }: PayorListingProps) {
  // Sample payor data
  const payors: Payor[] = [
    {
      id: "1",
      name: "Syarikat Takaful Malaysia Berhad",
      code: "STMB-001",
      status: "Active",
    },
    {
      id: "2",
      name: "PMCare Sdn Bhd",
      code: "PMC-001",
      status: "Active",
    },
    {
      id: "3",
      name: "Prudential Assurance Malaysia Berhad",
      code: "PAMB-001",
      status: "Active",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Payor Search</h2>
        <Button variant="outline" onClick={onBack}>
          Back to Search
        </Button>
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
          <Button className="bg-sky-600 hover:bg-sky-700" onClick={onAddNew}>
            Add New
          </Button>
          <Button className="bg-sky-600 hover:bg-sky-700">Search</Button>
        </div>
      </div>

      {/* Payor Listing Table */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800">Payor Listing</h3>
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
                    Payor Name
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center">
                    Payor Code
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
              {payors.map((payor, index) => (
                <tr key={payor.id} className="text-slate-700">
                  <td className="py-3 px-2">{index + 1}</td>
                  <td className="py-3 px-2">{payor.name}</td>
                  <td className="py-3 px-2">{payor.code}</td>
                  <td className="py-3 px-2">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                        payor.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {payor.status}
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
