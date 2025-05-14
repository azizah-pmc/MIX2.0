"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface Structure {
  id: number
  name: string
  code: string
  type: string
  status: string
  parentStructure: string
  address: string
  postcode: string
  city: string
  state: string
  country: string
  remarks: string
}

interface OperationalSegmentationFormProps {
  onNext: () => void
  onBack: () => void
}

export function OperationalSegmentationForm({ onNext, onBack }: OperationalSegmentationFormProps) {
  const [structures, setStructures] = useState<Structure[]>([
    {
      id: 1,
      name: "",
      code: "",
      type: "",
      status: "",
      parentStructure: "",
      address: "",
      postcode: "",
      city: "",
      state: "",
      country: "",
      remarks: "",
    },
  ])

  const handleAddStructure = () => {
    if (structures.length < 5) {
      setStructures([
        ...structures,
        {
          id: structures.length + 1,
          name: "",
          code: "",
          type: "",
          status: "",
          parentStructure: "",
          address: "",
          postcode: "",
          city: "",
          state: "",
          country: "",
          remarks: "",
        },
      ])
    }
  }

  const handleInputChange = (id: number, field: keyof Structure, value: string) => {
    setStructures(structures.map((structure) => (structure.id === id ? { ...structure, [field]: value } : structure)))
  }

  const handleSave = () => {
    // Here you would typically save the data
    onNext()
  }

  return (
    <div className="space-y-6">
      {structures.map((structure, index) => (
        <div key={structure.id} className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Structure {structure.id}</h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor={`name-${structure.id}`} className="text-sm font-medium text-slate-700">
                Name
              </label>
              <Input
                id={`name-${structure.id}`}
                value={structure.name}
                onChange={(e) => handleInputChange(structure.id, "name", e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor={`structure-code-${structure.id}`} className="text-sm font-medium text-slate-700">
                Structure Code
              </label>
              <Input
                id={`structure-code-${structure.id}`}
                value={structure.code}
                onChange={(e) => handleInputChange(structure.id, "code", e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor={`structure-type-${structure.id}`} className="text-sm font-medium text-slate-700">
                Structure Type
              </label>
              <Select onValueChange={(value) => handleInputChange(structure.id, "type", value)} value={structure.type}>
                <SelectTrigger id={`structure-type-${structure.id}`} className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="headquarters">Headquarters</SelectItem>
                  <SelectItem value="branch">Branch</SelectItem>
                  <SelectItem value="department">Department</SelectItem>
                  <SelectItem value="division">Division</SelectItem>
                  <SelectItem value="unit">Unit</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor={`status-${structure.id}`} className="text-sm font-medium text-slate-700">
                Status
              </label>
              <Select
                onValueChange={(value) => handleInputChange(structure.id, "status", value)}
                value={structure.status}
              >
                <SelectTrigger id={`status-${structure.id}`} className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor={`parent-structure-${structure.id}`} className="text-sm font-medium text-slate-700">
                Parent Structure
              </label>
              <Input
                id={`parent-structure-${structure.id}`}
                value={structure.parentStructure}
                onChange={(e) => handleInputChange(structure.id, "parentStructure", e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2 col-span-2">
              <label htmlFor={`address-${structure.id}`} className="text-sm font-medium text-slate-700">
                Address
              </label>
              <Input
                id={`address-${structure.id}`}
                value={structure.address}
                onChange={(e) => handleInputChange(structure.id, "address", e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor={`postcode-${structure.id}`} className="text-sm font-medium text-slate-700">
                Postcode
              </label>
              <Input
                id={`postcode-${structure.id}`}
                value={structure.postcode}
                onChange={(e) => handleInputChange(structure.id, "postcode", e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor={`city-${structure.id}`} className="text-sm font-medium text-slate-700">
                City
              </label>
              <Select onValueChange={(value) => handleInputChange(structure.id, "city", value)} value={structure.city}>
                <SelectTrigger id={`city-${structure.id}`} className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kuala-lumpur">Kuala Lumpur</SelectItem>
                  <SelectItem value="penang">Penang</SelectItem>
                  <SelectItem value="johor-bahru">Johor Bahru</SelectItem>
                  <SelectItem value="ipoh">Ipoh</SelectItem>
                  <SelectItem value="kuching">Kuching</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor={`state-${structure.id}`} className="text-sm font-medium text-slate-700">
                State
              </label>
              <Select
                onValueChange={(value) => handleInputChange(structure.id, "state", value)}
                value={structure.state}
              >
                <SelectTrigger id={`state-${structure.id}`} className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="selangor">Selangor</SelectItem>
                  <SelectItem value="kuala-lumpur">Kuala Lumpur</SelectItem>
                  <SelectItem value="penang">Penang</SelectItem>
                  <SelectItem value="johor">Johor</SelectItem>
                  <SelectItem value="perak">Perak</SelectItem>
                  <SelectItem value="sarawak">Sarawak</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor={`country-${structure.id}`} className="text-sm font-medium text-slate-700">
                Country
              </label>
              <Select
                onValueChange={(value) => handleInputChange(structure.id, "country", value)}
                value={structure.country}
              >
                <SelectTrigger id={`country-${structure.id}`} className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="malaysia">Malaysia</SelectItem>
                  <SelectItem value="singapore">Singapore</SelectItem>
                  <SelectItem value="indonesia">Indonesia</SelectItem>
                  <SelectItem value="thailand">Thailand</SelectItem>
                  <SelectItem value="philippines">Philippines</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 col-span-2">
              <label htmlFor={`remarks-${structure.id}`} className="text-sm font-medium text-slate-700">
                Remarks
              </label>
              <Textarea
                id={`remarks-${structure.id}`}
                value={structure.remarks}
                onChange={(e) => handleInputChange(structure.id, "remarks", e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {index < structures.length - 1 && <div className="mt-6 border-b border-slate-200"></div>}
        </div>
      ))}

      <div className="flex gap-3">
        <Button className="bg-sky-600 hover:bg-sky-700" onClick={handleSave}>
          Save
        </Button>
        {structures.length < 5 && (
          <Button className="bg-sky-600 hover:bg-sky-700" onClick={handleAddStructure}>
            Add New
          </Button>
        )}
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
      </div>
    </div>
  )
}
