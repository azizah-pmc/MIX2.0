"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

interface EditCompanyProps {
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
  onSave: (company: any) => void
}

export function EditCompany({ company: initialCompany, onBack, onSave }: EditCompanyProps) {
  const [company, setCompany] = useState({ ...initialCompany })

  const handleChange = (field: string, value: string) => {
    setCompany((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(company)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack} className="h-8 w-8">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold text-slate-800">Edit Company</h2>
      </div>

      <form onSubmit={handleSubmit} className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="company-name" className="text-sm font-medium text-slate-700">
              Company Name
            </label>
            <Input
              id="company-name"
              value={company.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="company-code" className="text-sm font-medium text-slate-700">
              Company Code
            </label>
            <Input
              id="company-code"
              value={company.code}
              onChange={(e) => handleChange("code", e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="status" className="text-sm font-medium text-slate-700">
              Status
            </label>
            <Select value={company.status} onValueChange={(value) => handleChange("status", value)}>
              <SelectTrigger id="status" className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Suspended">Suspended</SelectItem>
                <SelectItem value="Terminated">Terminated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="registration-no" className="text-sm font-medium text-slate-700">
              SSM/Registration No.
            </label>
            <Input
              id="registration-no"
              value={company.registrationNo}
              onChange={(e) => handleChange("registrationNo", e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="company-type" className="text-sm font-medium text-slate-700">
              Company Type
            </label>
            <Select value={company.companyType} onValueChange={(value) => handleChange("companyType", value)}>
              <SelectTrigger id="company-type" className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Main holding">Main holding</SelectItem>
                <SelectItem value="Subsidiary">Subsidiary</SelectItem>
                <SelectItem value="Independent">Independent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="parent-company" className="text-sm font-medium text-slate-700">
              Parent Company
            </label>
            <Input
              id="parent-company"
              value={company.parentCompany}
              onChange={(e) => handleChange("parentCompany", e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="hierarchy-level" className="text-sm font-medium text-slate-700">
              Hierarchy Level
            </label>
            <Select value={company.hierarchyLevel} onValueChange={(value) => handleChange("hierarchyLevel", value)}>
              <SelectTrigger id="hierarchy-level" className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Level 1">Level 1</SelectItem>
                <SelectItem value="Level 2">Level 2</SelectItem>
                <SelectItem value="Level 3">Level 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="subsidiaries" className="text-sm font-medium text-slate-700">
              Subsidiaries
            </label>
            <Input
              id="subsidiaries"
              type="number"
              value={company.subsidiaries.toString()}
              onChange={(e) => handleChange("subsidiaries", e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <Button type="button" variant="outline" onClick={onBack}>
            Cancel
          </Button>
          <Button type="submit" className="bg-sky-600 hover:bg-sky-700">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  )
}
