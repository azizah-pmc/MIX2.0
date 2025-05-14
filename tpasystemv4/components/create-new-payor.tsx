"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PayorContactDetails } from "@/components/payor-contact-details"

type TabType = "basic-info" | "contact-details"

interface CreateNewPayorProps {
  onBack: () => void
}

export function CreateNewPayor({ onBack }: CreateNewPayorProps) {
  const [activeTab, setActiveTab] = useState<TabType>("basic-info")

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Create New Payor</h2>
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex border-b">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "basic-info"
              ? "border-b-2 border-sky-600 text-sky-600"
              : "text-slate-600 hover:text-slate-900"
          }`}
          onClick={() => handleTabClick("basic-info")}
        >
          Basic Information
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "contact-details"
              ? "border-b-2 border-sky-600 text-sky-600"
              : "text-slate-600 hover:text-slate-900"
          }`}
          onClick={() => handleTabClick("contact-details")}
        >
          Contact Details
        </button>
      </div>

      {activeTab === "basic-info" ? (
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

            <div className="space-y-2 col-span-2">
              <label htmlFor="address" className="text-sm font-medium text-slate-700">
                Address
              </label>
              <Input id="address" placeholder="Enter Address" className="w-full" />
            </div>

            <div className="space-y-2">
              <label htmlFor="city" className="text-sm font-medium text-slate-700">
                City
              </label>
              <Select>
                <SelectTrigger id="city" className="w-full">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kuala-lumpur">Kuala Lumpur</SelectItem>
                  <SelectItem value="penang">Penang</SelectItem>
                  <SelectItem value="johor-bahru">Johor Bahru</SelectItem>
                  <SelectItem value="ipoh">Ipoh</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="postcode" className="text-sm font-medium text-slate-700">
                Postcode
              </label>
              <Input id="postcode" placeholder="Enter Postcode" className="w-full" />
            </div>

            <div className="space-y-2">
              <label htmlFor="state" className="text-sm font-medium text-slate-700">
                State
              </label>
              <Select>
                <SelectTrigger id="state" className="w-full">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="selangor">Selangor</SelectItem>
                  <SelectItem value="kuala-lumpur">Kuala Lumpur</SelectItem>
                  <SelectItem value="penang">Penang</SelectItem>
                  <SelectItem value="johor">Johor</SelectItem>
                  <SelectItem value="perak">Perak</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="text-sm font-medium text-slate-700">
                Country
              </label>
              <Select>
                <SelectTrigger id="country" className="w-full">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="malaysia">Malaysia</SelectItem>
                  <SelectItem value="singapore">Singapore</SelectItem>
                  <SelectItem value="indonesia">Indonesia</SelectItem>
                  <SelectItem value="thailand">Thailand</SelectItem>
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
            <Button variant="destructive">Cancel</Button>
            <Button className="bg-sky-600 hover:bg-sky-700">Save</Button>
          </div>
        </div>
      ) : (
        <PayorContactDetails />
      )}
    </div>
  )
}
