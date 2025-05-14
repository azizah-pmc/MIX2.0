"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Pencil, Trash2, ArrowUpDown, SearchIcon, Download } from "lucide-react"
import { useState } from "react"
import { NewCompanyForm } from "@/components/new-company-form"
import { ViewCompany } from "@/components/view-company"
import { EditCompany } from "@/components/edit-company"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface Company {
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

export function CompanySearch() {
  const [showListing, setShowListing] = useState(false)
  const [showNewCompanyForm, setShowNewCompanyForm] = useState(false)
  const [viewCompany, setViewCompany] = useState<Company | null>(null)
  const [editCompany, setEditCompany] = useState<Company | null>(null)
  const [deleteCompany, setDeleteCompany] = useState<Company | null>(null)
  const [companies, setCompanies] = useState<Company[]>([
    {
      id: 1,
      name: "Global Corp Holdings",
      code: "xx123",
      status: "Active",
      registrationNo: "RC123",
      companyType: "Main holding",
      parentCompany: "",
      hierarchyLevel: "Level 1",
      subsidiaries: 3,
    },
    {
      id: 2,
      name: "GC Eastern Division",
      code: "xx456",
      status: "Active",
      registrationNo: "RC456",
      companyType: "Subsidiary",
      parentCompany: "Global Corp Holdings",
      hierarchyLevel: "Level 2",
      subsidiaries: 2,
    },
    {
      id: 3,
      name: "GC Western Division",
      code: "xx654",
      status: "Active",
      registrationNo: "RC654",
      companyType: "Subsidiary",
      parentCompany: "Global Corp Holdings",
      hierarchyLevel: "Level 2",
      subsidiaries: 1,
    },
    {
      id: 4,
      name: "GC Western Auto Branch",
      code: "xx321",
      status: "Active",
      registrationNo: "RC321",
      companyType: "Subsidiary",
      parentCompany: "GC Western Division",
      hierarchyLevel: "Level 3",
      subsidiaries: 0,
    },
    {
      id: 5,
      name: "AD Techno",
      code: "xx665",
      status: "Active",
      registrationNo: "RC665",
      companyType: "Independent",
      parentCompany: "",
      hierarchyLevel: "Level 1",
      subsidiaries: 0,
    },
    {
      id: 6,
      name: "BMF Sdn Bhd",
      code: "xx988",
      status: "Terminated",
      registrationNo: "RC988",
      companyType: "Independent",
      parentCompany: "",
      hierarchyLevel: "Level 1",
      subsidiaries: 0,
    },
  ])

  // Generate empty rows to fill the table
  const emptyRows = Array.from({ length: 9 }, (_, i) => ({
    id: i + 7,
    name: "",
    code: "",
    status: "",
    registrationNo: "",
    companyType: "",
    parentCompany: "",
    hierarchyLevel: "",
    subsidiaries: 0,
  }))

  const allRows = [...companies, ...emptyRows]

  const handleAddNew = () => {
    setShowNewCompanyForm(true)
    setShowListing(false)
    setViewCompany(null)
    setEditCompany(null)
  }

  const handleSearch = () => {
    setShowListing(true)
    setShowNewCompanyForm(false)
    setViewCompany(null)
    setEditCompany(null)
  }

  const handleBackToSearch = () => {
    setShowNewCompanyForm(false)
    setViewCompany(null)
    setEditCompany(null)
    setShowListing(true)
  }

  const handleViewCompany = (company: Company) => {
    setViewCompany(company)
    setShowListing(false)
    setShowNewCompanyForm(false)
    setEditCompany(null)
  }

  const handleEditCompany = (company: Company) => {
    setEditCompany(company)
    setShowListing(false)
    setShowNewCompanyForm(false)
    setViewCompany(null)
  }

  const handleDeleteCompany = (company: Company) => {
    setDeleteCompany(company)
  }

  const confirmDelete = () => {
    if (deleteCompany) {
      setCompanies(companies.filter((c) => c.id !== deleteCompany.id))
      setDeleteCompany(null)
    }
  }

  const handleSaveCompany = (updatedCompany: Company) => {
    setCompanies(companies.map((c) => (c.id === updatedCompany.id ? updatedCompany : c)))
    handleBackToSearch()
  }

  // If showing view company details
  if (viewCompany) {
    return <ViewCompany company={viewCompany} onBack={handleBackToSearch} />
  }

  // If showing edit company form
  if (editCompany) {
    return <EditCompany company={editCompany} onBack={handleBackToSearch} onSave={handleSaveCompany} />
  }

  // If showing new company form, render that instead
  if (showNewCompanyForm) {
    return <NewCompanyForm onBack={handleBackToSearch} />
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Company Search</h2>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="company-name" className="text-sm font-medium text-slate-700">
              Company Name
            </label>
            <Input id="company-name" placeholder="Placeholder" className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="company-code" className="text-sm font-medium text-slate-700">
              Company Code
            </label>
            <Input id="company-code" placeholder="Placeholder" className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="status" className="text-sm font-medium text-slate-700">
              Status
            </label>
            <Select>
              <SelectTrigger id="status" className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="suspend">Suspended</SelectItem>
                <SelectItem value="terminate">Terminated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="registration-no" className="text-sm font-medium text-slate-700">
              SSM/Registration No.
            </label>
            <Input id="registration-no" placeholder="Placeholder" className="w-full" />
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

      {/* Company Listing Table - Only shown after search */}
      {showListing && (
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-800">Company Listing</h3>
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
                      Company Name
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th className="py-3 px-2 whitespace-nowrap">
                    <div className="flex items-center">
                      Company Code
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th className="py-3 px-2 whitespace-nowrap">
                    <div className="flex items-center">
                      Status
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th className="py-3 px-2 whitespace-nowrap">
                    <div className="flex items-center">
                      SSM Reg. No.
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th className="py-3 px-2 whitespace-nowrap">
                    <div className="flex items-center">
                      Company Type
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th className="py-3 px-2 whitespace-nowrap">
                    <div className="flex items-center">
                      Parent Company
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th className="py-3 px-2 whitespace-nowrap">
                    <div className="flex items-center">
                      Hierarchy Level
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th className="py-3 px-2 whitespace-nowrap">
                    <div className="flex items-center">
                      Subsidiaries
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th className="py-3 px-2 whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {allRows.map((company) => (
                  <tr key={company.id} className="text-slate-700">
                    <td className="py-3 px-2">{company.id}</td>
                    <td className="py-3 px-2">{company.name}</td>
                    <td className="py-3 px-2">{company.code}</td>
                    <td className="py-3 px-2">
                      {company.status && (
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                            company.status === "Active"
                              ? "bg-emerald-100 text-emerald-700"
                              : company.status === "Terminated"
                                ? "bg-red-100 text-red-700"
                                : ""
                          }`}
                        >
                          {company.status}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-2">{company.registrationNo}</td>
                    <td className="py-3 px-2">{company.companyType}</td>
                    <td className="py-3 px-2">{company.parentCompany}</td>
                    <td className="py-3 px-2">{company.hierarchyLevel}</td>
                    <td className="py-3 px-2">{company.subsidiaries > 0 ? company.subsidiaries : ""}</td>
                    <td className="py-3 px-2">
                      {company.name && (
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleViewCompany(company)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleEditCompany(company)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleDeleteCompany(company)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
            <div>Showing 1 to 15 of 365 records</div>
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
              <Button variant="outline" size="icon" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                3
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                &gt;
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                &gt;&gt;
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteCompany} onOpenChange={(open) => !open && setDeleteCompany(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this company?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the company
              {deleteCompany && <strong> {deleteCompany.name}</strong>} and all associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
