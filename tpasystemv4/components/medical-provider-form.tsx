"use client"

import { Button } from "@/components/ui/button"

interface MedicalProviderFormProps {
  onNext: () => void
  onBack: () => void
}

export function MedicalProviderForm({ onNext, onBack }: MedicalProviderFormProps) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-6">Medical Provider Information</h3>

      <p className="text-slate-600 mb-6">
        This is a placeholder for the Medical Provider form. This section would contain fields related to medical
        providers.
      </p>

      <div className="flex gap-3">
        <Button className="bg-sky-600 hover:bg-sky-700" onClick={onNext}>
          Next
        </Button>
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
      </div>
    </div>
  )
}
