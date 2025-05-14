"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"

interface AddNewContactDetailProps {
  onBack: () => void
}

export function AddNewContactDetail({ onBack }: AddNewContactDetailProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-xl font-bold">Add New Contact Details</h2>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="contact-category" className="text-sm font-medium text-slate-700">
              Contact Category
            </label>
            <Select>
              <SelectTrigger id="contact-category" className="w-full">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="payor-poc">Payor POC</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="operations">Operations</SelectItem>
                <SelectItem value="it">IT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              Name
            </label>
            <Input id="name" placeholder="Enter Name" className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="designation" className="text-sm font-medium text-slate-700">
              Designation
            </label>
            <Input id="designation" placeholder="Enter Designation" className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="mobile-no" className="text-sm font-medium text-slate-700">
              Mobile No.
            </label>
            <Input id="mobile-no" placeholder="Enter Mobile Number" className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="office-no" className="text-sm font-medium text-slate-700">
              Office No.
            </label>
            <Input id="office-no" placeholder="Enter Office Number" className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="extension-no" className="text-sm font-medium text-slate-700">
              Extension No.
            </label>
            <Input id="extension-no" placeholder="Enter Extension Number" className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
            </label>
            <Input id="email" type="email" placeholder="Enter Email" className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="status" className="text-sm font-medium text-slate-700">
              Status
            </label>
            <Select>
              <SelectTrigger id="status" className="w-full">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 col-span-2">
            <label htmlFor="remarks" className="text-sm font-medium text-slate-700">
              Remarks
            </label>
            <Textarea id="remarks" placeholder="Enter Remarks" className="w-full" />
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Button variant="destructive" onClick={onBack}>
            Cancel
          </Button>
          <Button className="bg-sky-600 hover:bg-sky-700">Save</Button>
        </div>
      </div>
    </div>
  )
}
