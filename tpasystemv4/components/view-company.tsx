"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface ViewCompanyProps {
  company: {
    id: number
    name: string
    code: string
    status: string
    registrationNo: string
    companyType: string
    parentCompany: string
    hierarchyLevel: string
    subsidiaries: number
  }
  onBack: () => void
}

export function ViewCompany({ company, onBack }: ViewCompanyProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack} className="h-8 w-8">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold text-slate-800">View Company Details</h2>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Company Name</label>
            <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800">
              {company.name}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Company Code</label>
            <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800">
              {company.code}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Status</label>
            <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800">
              <span
                className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                  company.status === "Active"
                    ? "bg-emerald-100 text-emerald-700"
                    : company.status === "Terminated"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {company.status}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">SSM/Registration No.</label>
            <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800">
              {company.registrationNo}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Company Type</label>
            <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800">
              {company.companyType}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Parent Company</label>
            <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800">
              {company.parentCompany || "N/A"}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Hierarchy Level</label>
            <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800">
              {company.hierarchyLevel}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Subsidiaries</label>
            <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800">
              {company.subsidiaries}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button onClick={onBack} className="bg-sky-600 hover:bg-sky-700">
            Back to Listing
          </Button>
        </div>
      </div>
    </div>
  )
}
