"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"
import { ContactDetailsForm } from "@/components/contact-details-form"
import { OperationalSegmentationForm } from "@/components/operational-segmentation-form"
import { MedicalProviderForm } from "@/components/medical-provider-form"

type FormStep =
  | "company-info"
  | "contact-details"
  | "medical-provider"
  | "operational"
  | "job-grade"
  | "report-frequency"
  | "sob"
  | "history"

interface NewCompanyFormProps {
  onBack: () => void
}

export function NewCompanyForm({ onBack }: NewCompanyFormProps) {
  const [currentStep, setCurrentStep] = useState<FormStep>("company-info")

  const handleStepClick = (step: FormStep) => {
    setCurrentStep(step)
  }

  const handleNext = () => {
    if (currentStep === "company-info") setCurrentStep("contact-details")
    else if (currentStep === "contact-details") setCurrentStep("medical-provider")
    else if (currentStep === "medical-provider") setCurrentStep("operational")
    // Add more steps as needed
  }

  const handlePrevious = () => {
    if (currentStep === "contact-details") setCurrentStep("company-info")
    else if (currentStep === "medical-provider") setCurrentStep("contact-details")
    else if (currentStep === "operational") setCurrentStep("medical-provider")
    // Add more steps as needed
  }

  // Helper function to determine step status
  const getStepStatus = (step: FormStep) => {
    const steps: FormStep[] = [
      "company-info",
      "contact-details",
      "medical-provider",
      "operational",
      "job-grade",
      "report-frequency",
      "sob",
      "history",
    ]
    const currentIndex = steps.indexOf(currentStep)
    const stepIndex = steps.indexOf(step)

    if (step === currentStep) return "current" // Blue
    if (stepIndex < currentIndex) return "completed" // Green
    return "pending" // Gray
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">New Company</h2>
        <Button variant="outline" onClick={onBack}>
          Back to Search
        </Button>
      </div>

      <div className="flex">
        {/* Left side navigation steps */}
        <div className="w-48 pr-6">
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="relative">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer
                    ${
                      getStepStatus("company-info") === "current"
                        ? "bg-sky-600 text-white"
                        : getStepStatus("company-info") === "completed"
                          ? "bg-green-500 text-white"
                          : "bg-slate-300 text-slate-700"
                    } font-medium`}
                  onClick={() => handleStepClick("company-info")}
                >
                  1
                </div>
                <div className="absolute h-full w-0.5 bg-slate-300 left-1/2 -translate-x-1/2 top-8 z-0"></div>
              </div>
              <span
                className={`ml-3 cursor-pointer
                  ${
                    getStepStatus("company-info") === "current"
                      ? "font-medium text-sky-600"
                      : getStepStatus("company-info") === "completed"
                        ? "font-medium text-green-500"
                        : "text-slate-600"
                  }`}
                onClick={() => handleStepClick("company-info")}
              >
                Company Info
              </span>
            </div>

            <div className="flex items-center mt-6">
              <div className="relative">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer
                    ${
                      getStepStatus("contact-details") === "current"
                        ? "bg-sky-600 text-white"
                        : getStepStatus("contact-details") === "completed"
                          ? "bg-green-500 text-white"
                          : "bg-slate-300 text-slate-700"
                    } font-medium`}
                  onClick={() => handleStepClick("contact-details")}
                >
                  2
                </div>
                <div className="absolute h-full w-0.5 bg-slate-300 left-1/2 -translate-x-1/2 top-8 z-0"></div>
                <div className="absolute h-6 w-0.5 bg-slate-300 left-1/2 -translate-x-1/2 -top-6 z-0"></div>
              </div>
              <span
                className={`ml-3 cursor-pointer
                  ${
                    getStepStatus("contact-details") === "current"
                      ? "font-medium text-sky-600"
                      : getStepStatus("contact-details") === "completed"
                        ? "font-medium text-green-500"
                        : "text-slate-600"
                  }`}
                onClick={() => handleStepClick("contact-details")}
              >
                Contact Details
              </span>
            </div>

            <div className="flex items-center mt-6">
              <div className="relative">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer
                    ${
                      getStepStatus("medical-provider") === "current"
                        ? "bg-sky-600 text-white"
                        : getStepStatus("medical-provider") === "completed"
                          ? "bg-green-500 text-white"
                          : "bg-slate-300 text-slate-700"
                    } font-medium`}
                  onClick={() => handleStepClick("medical-provider")}
                >
                  3
                </div>
                <div className="absolute h-full w-0.5 bg-slate-300 left-1/2 -translate-x-1/2 top-8 z-0"></div>
                <div className="absolute h-6 w-0.5 bg-slate-300 left-1/2 -translate-x-1/2 -top-6 z-0"></div>
              </div>
              <span
                className={`ml-3 cursor-pointer
                  ${
                    getStepStatus("medical-provider") === "current"
                      ? "font-medium text-sky-600"
                      : getStepStatus("medical-provider") === "completed"
                        ? "font-medium text-green-500"
                        : "text-slate-600"
                  }`}
                onClick={() => handleStepClick("medical-provider")}
              >
                Medical Provider
              </span>
            </div>

            <div className="flex items-center mt-6">
              <div className="relative">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer
                    ${
                      getStepStatus("operational") === "current"
                        ? "bg-sky-600 text-white"
                        : getStepStatus("operational") === "completed"
                          ? "bg-green-500 text-white"
                          : "bg-slate-300 text-slate-700"
                    } font-medium`}
                  onClick={() => handleStepClick("operational")}
                >
                  4
                </div>
                <div className="absolute h-full w-0.5 bg-slate-300 left-1/2 -translate-x-1/2 top-8 z-0"></div>
                <div className="absolute h-6 w-0.5 bg-slate-300 left-1/2 -translate-x-1/2 -top-6 z-0"></div>
              </div>
              <span
                className={`ml-3 cursor-pointer
                  ${
                    getStepStatus("operational") === "current"
                      ? "font-medium text-sky-600"
                      : getStepStatus("operational") === "completed"
                        ? "font-medium text-green-500"
                        : "text-slate-600"
                  }`}
                onClick={() => handleStepClick("operational")}
              >
                Operational Segmentation
              </span>
            </div>

            <div className="flex items-center mt-6">
              <div className="relative">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer
                    ${
                      getStepStatus("job-grade") === "current"
                        ? "bg-sky-600 text-white"
                        : getStepStatus("job-grade") === "completed"
                          ? "bg-green-500 text-white"
                          : "bg-slate-300 text-slate-700"
                    } font-medium`}
                  onClick={() => handleStepClick("job-grade")}
                >
                  5
                </div>
                <div className="absolute h-full w-0.5 bg-slate-300 left-1/2 -translate-x-1/2 top-8 z-0"></div>
                <div className="absolute h-6 w-0.5 bg-slate-300 left-1/2 -translate-x-1/2 -top-6 z-0"></div>
              </div>
              <span
                className={`ml-3 cursor-pointer
                  ${
                    getStepStatus("job-grade") === "current"
                      ? "font-medium text-sky-600"
                      : getStepStatus("job-grade") === "completed"
                        ? "font-medium text-green-500"
                        : "text-slate-600"
                  }`}
                onClick={() => handleStepClick("job-grade")}
              >
                Job Grade
              </span>
            </div>

            <div className="flex items-center mt-6">
              <div className="relative">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer
                    ${
                      getStepStatus("report-frequency") === "current"
                        ? "bg-sky-600 text-white"
                        : getStepStatus("report-frequency") === "completed"
                          ? "bg-green-500 text-white"
                          : "bg-slate-300 text-slate-700"
                    } font-medium`}
                  onClick={() => handleStepClick("report-frequency")}
                >
                  6
                </div>
                <div className="absolute h-full w-0.5 bg-slate-300 left-1/2 -translate-x-1/2 top-8 z-0"></div>
                <div className="absolute h-6 w-0.5 bg-slate-300 left-1/2 -translate-x-1/2 -top-6 z-0"></div>
              </div>
              <span
                className={`ml-3 cursor-pointer
                  ${
                    getStepStatus("report-frequency") === "current"
                      ? "font-medium text-sky-600"
                      : getStepStatus("report-frequency") === "completed"
                        ? "font-medium text-green-500"
                        : "text-slate-600"
                  }`}
                onClick={() => handleStepClick("report-frequency")}
              >
                Report Frequency
              </span>
            </div>

            <div className="flex items-center mt-6">
              <div className="relative">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer
                    ${
                      getStepStatus("sob") === "current"
                        ? "bg-sky-600 text-white"
                        : getStepStatus("sob") === "completed"
                          ? "bg-green-500 text-white"
                          : "bg-slate-300 text-slate-700"
                    } font-medium`}
                  onClick={() => handleStepClick("sob")}
                >
                  7
                </div>
                <div className="absolute h-full w-0.5 bg-slate-300 left-1/2 -translate-x-1/2 top-8 z-0"></div>
                <div className="absolute h-6 w-0.5 bg-slate-300 left-1/2 -translate-x-1/2 -top-6 z-0"></div>
              </div>
              <span
                className={`ml-3 cursor-pointer
                  ${
                    getStepStatus("sob") === "current"
                      ? "font-medium text-sky-600"
                      : getStepStatus("sob") === "completed"
                        ? "font-medium text-green-500"
                        : "text-slate-600"
                  }`}
                onClick={() => handleStepClick("sob")}
              >
                SOB
              </span>
            </div>

            <div className="flex items-center mt-6">
              <div className="relative">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer
                    ${
                      getStepStatus("history") === "current"
                        ? "bg-sky-600 text-white"
                        : getStepStatus("history") === "completed"
                          ? "bg-green-500 text-white"
                          : "bg-slate-300 text-slate-700"
                    } font-medium`}
                  onClick={() => handleStepClick("history")}
                >
                  8
                </div>
                <div className="absolute h-6 w-0.5 bg-slate-300 left-1/2 -translate-x-1/2 -top-6 z-0"></div>
              </div>
              <span
                className={`ml-3 cursor-pointer
                  ${
                    getStepStatus("history") === "current"
                      ? "font-medium text-sky-600"
                      : getStepStatus("history") === "completed"
                        ? "font-medium text-green-500"
                        : "text-slate-600"
                  }`}
                onClick={() => handleStepClick("history")}
              >
                History
              </span>
            </div>
          </div>
        </div>

        {/* Main form area */}
        <div className="flex-1">
          {currentStep === "company-info" && (
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company-name" className="text-sm font-medium text-slate-700">
                    Company Name
                  </label>
                  <Input id="company-name" className="w-full" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company-code" className="text-sm font-medium text-slate-700">
                    Company Code
                  </label>
                  <Input id="company-code" placeholder="Auto Generated" className="w-full" />
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
                  <Input id="registration-no" className="w-full" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="gst-sst-reg-no" className="text-sm font-medium text-slate-700">
                    GST/SST Reg. No.
                  </label>
                  <Input id="gst-sst-reg-no" className="w-full" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="tin-no" className="text-sm font-medium text-slate-700">
                    TIN No.
                  </label>
                  <Input id="tin-no" className="w-full" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="joining-date" className="text-sm font-medium text-slate-700">
                    Joining Date
                  </label>
                  <div className="relative">
                    <Input id="joining-date" placeholder="DD/MM/YYYY HH:MM" className="w-full pr-10" />
                    <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3">
                      <Calendar className="h-4 w-4 text-slate-400" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contract-start" className="text-sm font-medium text-slate-700">
                    Contract Start
                  </label>
                  <div className="relative">
                    <Input id="contract-start" placeholder="DD/MM/YYYY HH:MM" className="w-full pr-10" />
                    <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3">
                      <Calendar className="h-4 w-4 text-slate-400" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contract-end" className="text-sm font-medium text-slate-700">
                    Contract End
                  </label>
                  <div className="relative">
                    <Input id="contract-end" placeholder="DD/MM/YYYY HH:MM" className="w-full pr-10" />
                    <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3">
                      <Calendar className="h-4 w-4 text-slate-400" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="program-type" className="text-sm font-medium text-slate-700">
                    Program Type
                  </label>
                  <Select>
                    <SelectTrigger id="program-type" className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company-type" className="text-sm font-medium text-slate-700">
                    Company Type
                  </label>
                  <Select>
                    <SelectTrigger id="company-type" className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="main-holding">Main Holding</SelectItem>
                      <SelectItem value="subsidiary">Subsidiary</SelectItem>
                      <SelectItem value="independent">Independent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="parent-company" className="text-sm font-medium text-slate-700">
                    Parent Company
                  </label>
                  <Select>
                    <SelectTrigger id="parent-company" className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="code1">Comp1</SelectItem>
                      <SelectItem value="code2">Comp2</SelectItem>
                      <SelectItem value="code3">Comp3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="industry" className="text-sm font-medium text-slate-700">
                    Industry
                  </label>
                  <Select>
                    <SelectTrigger id="industry" className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="sub-industry" className="text-sm font-medium text-slate-700">
                    Sub-Industry
                  </label>
                  <Select>
                    <SelectTrigger id="sub-industry" className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-medium text-slate-700">
                    Website
                  </label>
                  <Input id="website" placeholder="https://" className="w-full" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone-no" className="text-sm font-medium text-slate-700">
                    Phone No.
                  </label>
                  <Input id="phone-no" className="w-full" />
                </div>

                <div className="space-y-2 col-span-2">
                  <label htmlFor="address" className="text-sm font-medium text-slate-700">
                    Address
                  </label>
                  <Input id="address" className="w-full" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="postcode" className="text-sm font-medium text-slate-700">
                    Postcode
                  </label>
                  <Input id="postcode" className="w-full" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium text-slate-700">
                    City
                  </label>
                  <Select>
                    <SelectTrigger id="city" className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kuala-lumpur">Kuala Lumpur</SelectItem>
                      <SelectItem value="penang">Penang</SelectItem>
                      <SelectItem value="johor-bahru">Johor Bahru</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="state" className="text-sm font-medium text-slate-700">
                    State
                  </label>
                  <Select>
                    <SelectTrigger id="state" className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="selangor">Selangor</SelectItem>
                      <SelectItem value="perak">Perak</SelectItem>
                      <SelectItem value="johor">Johor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="country" className="text-sm font-medium text-slate-700">
                    Country
                  </label>
                  <Select>
                    <SelectTrigger id="country" className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="malaysia">Malaysia</SelectItem>
                      <SelectItem value="singapore">Singapore</SelectItem>
                      <SelectItem value="brunei">Brunei</SelectItem>
                      <SelectItem value="indonesia">Indonesia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <Button className="bg-sky-600 hover:bg-sky-700" onClick={handleNext}>
                  Next
                </Button>
                <Button variant="outline">Reset</Button>
              </div>
            </div>
          )}

          {currentStep === "contact-details" && <ContactDetailsForm onNext={handleNext} onBack={handlePrevious} />}

          {currentStep === "medical-provider" && <MedicalProviderForm onNext={handleNext} onBack={handlePrevious} />}

          {currentStep === "operational" && <OperationalSegmentationForm onNext={handleNext} onBack={handlePrevious} />}

          {/* Add more step content as needed */}
        </div>
      </div>
    </div>
  )
}
