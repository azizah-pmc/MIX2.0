"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CorporateClientForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [payorType, setPayorType] = useState("insurer")
  const [selectedPayor, setSelectedPayor] = useState("")

  const steps = [
    { id: 1, name: "Company" },
    { id: 2, name: "Policy" },
    { id: 3, name: "Plan" },
    { id: 4, name: "Provider" },
    { id: 5, name: "Member" },
    { id: 6, name: "Summary" },
  ]

  const handleSave = () => {
    // Save logic here
    console.log("Saving data:", { payorType, selectedPayor })
  }

  const handleAdd = () => {
    // Add logic here
    console.log("Adding new data")
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <div>Company form fields will go here</div>
      case 2:
        return <div>Policy form fields will go here</div>
      case 3:
        return <div>Plan form fields will go here</div>
      case 4:
        return <div>Provider form fields will go here</div>
      case 5:
        return <div>Member form fields will go here</div>
      case 6:
        return <div>Summary form fields will go here</div>
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-xl font-bold mb-6">New Corporate Client</h1>

      <div className="flex gap-6">
        {/* Steps sidebar */}
        <div className="w-48 shrink-0">
          <div className="relative">
            {/* Vertical line connecting steps */}
            <div className="absolute left-[25px] top-[30px] bottom-[30px] w-0.5 bg-gray-200"></div>

            {/* Steps */}
            <div className="space-y-8 relative">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center gap-4">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full text-white font-medium ${
                      currentStep === step.id ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentStep(step.id)}
                  >
                    {step.id}
                  </div>
                  <span className="font-medium">{step.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <Card className="flex-1 p-6 border">{renderStepContent()}</Card>
      </div>
    </div>
  )
}
