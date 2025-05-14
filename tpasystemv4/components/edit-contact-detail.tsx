"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"

interface Contact {
  id: string
  name: string
  category: string
  designation: string
  email: string
  mobileNo: string
  officeNo: string
  extNo: string
  status: string
  remarks: string
}

interface EditContactDetailProps {
  contact: Contact
  onBack: () => void
}

export function EditContactDetail({ contact, onBack }: EditContactDetailProps) {
  const [formData, setFormData] = useState<Contact>({ ...contact })

  const handleChange = (field: keyof Contact, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would save the changes to the database here
    console.log("Updated contact:", formData)
    onBack()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-xl font-bold">Edit Contact Details</h2>
      </div>

      <form onSubmit={handleSubmit} className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="contact-category" className="text-sm font-medium text-slate-700">
              Contact Category
            </label>
            <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
              <SelectTrigger id="contact-category" className="w-full">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Payor POC">Payor POC</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
                <SelectItem value="Operations">Operations</SelectItem>
                <SelectItem value="IT">IT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              Name
            </label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter Name"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="designation" className="text-sm font-medium text-slate-700">
              Designation
            </label>
            <Input
              id="designation"
              value={formData.designation}
              onChange={(e) => handleChange("designation", e.target.value)}
              placeholder="Enter Designation"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="mobile-no" className="text-sm font-medium text-slate-700">
              Mobile No.
            </label>
            <Input
              id="mobile-no"
              value={formData.mobileNo}
              onChange={(e) => handleChange("mobileNo", e.target.value)}
              placeholder="Enter Mobile Number"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="office-no" className="text-sm font-medium text-slate-700">
              Office No.
            </label>
            <Input
              id="office-no"
              value={formData.officeNo}
              onChange={(e) => handleChange("officeNo", e.target.value)}
              placeholder="Enter Office Number"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="extension-no" className="text-sm font-medium text-slate-700">
              Extension No.
            </label>
            <Input
              id="extension-no"
              value={formData.extNo}
              onChange={(e) => handleChange("extNo", e.target.value)}
              placeholder="Enter Extension Number"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Enter Email"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="status" className="text-sm font-medium text-slate-700">
              Status
            </label>
            <Select value={formData.status} onValueChange={(value) => handleChange("status", value)}>
              <SelectTrigger id="status" className="w-full">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 col-span-2">
            <label htmlFor="remarks" className="text-sm font-medium text-slate-700">
              Remarks
            </label>
            <Textarea
              id="remarks"
              value={formData.remarks}
              onChange={(e) => handleChange("remarks", e.target.value)}
              placeholder="Enter Remarks"
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Button type="button" variant="destructive" onClick={onBack}>
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
