"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, Pencil, Trash2, ArrowUpDown, Download, SearchIcon } from "lucide-react"
import { AddNewContactDetail } from "@/components/add-new-contact-detail"
import { EditContactDetail } from "@/components/edit-contact-detail"
import { ViewContactDetail } from "@/components/view-contact-detail"
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

export function PayorContactDetails() {
  const [showAddNew, setShowAddNew] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showView, setShowView] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

  // Sample contact data
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "1",
      name: "John Doe",
      category: "Payor POC",
      designation: "Manager",
      email: "john.doe@example.com",
      mobileNo: "012-3456789",
      officeNo: "03-12345678",
      extNo: "123",
      status: "Active",
      remarks: "Primary contact",
    },
    {
      id: "2",
      name: "Jane Smith",
      category: "Finance",
      designation: "Finance Director",
      email: "jane.smith@example.com",
      mobileNo: "012-9876543",
      officeNo: "03-87654321",
      extNo: "456",
      status: "Active",
      remarks: "Finance matters",
    },
  ])

  const handleAddNew = () => {
    setShowAddNew(true)
  }

  const handleBack = () => {
    setShowAddNew(false)
    setShowEdit(false)
    setShowView(false)
    setSelectedContact(null)
  }

  const handleView = (contact: Contact) => {
    setSelectedContact(contact)
    setShowView(true)
  }

  const handleEdit = (contact: Contact) => {
    setSelectedContact(contact)
    setShowEdit(true)
  }

  const handleDelete = (contact: Contact) => {
    setSelectedContact(contact)
    setShowDeleteDialog(true)
  }

  const confirmDelete = () => {
    if (selectedContact) {
      setContacts(contacts.filter((c) => c.id !== selectedContact.id))
    }
    setShowDeleteDialog(false)
    setSelectedContact(null)
  }

  if (showAddNew) {
    return <AddNewContactDetail onBack={handleBack} />
  }

  if (showEdit && selectedContact) {
    return <EditContactDetail contact={selectedContact} onBack={handleBack} />
  }

  if (showView && selectedContact) {
    return <ViewContactDetail contact={selectedContact} onBack={handleBack} />
  }

  return (
    <div className="space-y-6">
      {/* Contact Listing Table */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800">Contact Listing</h3>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Input placeholder="Search" className="pl-9 w-64" />
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            </div>
            <Button className="bg-sky-600 hover:bg-sky-700" onClick={handleAddNew}>
              Add New
            </Button>
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
                    Contact Name
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center">
                    Contact Category
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center">
                    Designation
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center">
                    Email
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center">
                    Mobile No.
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center">
                    Office No.
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">
                  <div className="flex items-center">
                    Ext. No.
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
                    Remarks
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-2 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {contacts.map((contact, index) => (
                <tr key={contact.id} className="text-slate-700">
                  <td className="py-3 px-2">{index + 1}</td>
                  <td className="py-3 px-2">{contact.name}</td>
                  <td className="py-3 px-2">{contact.category}</td>
                  <td className="py-3 px-2">{contact.designation}</td>
                  <td className="py-3 px-2">{contact.email}</td>
                  <td className="py-3 px-2">{contact.mobileNo}</td>
                  <td className="py-3 px-2">{contact.officeNo}</td>
                  <td className="py-3 px-2">{contact.extNo}</td>
                  <td className="py-3 px-2">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                        contact.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {contact.status}
                    </span>
                  </td>
                  <td className="py-3 px-2">{contact.remarks}</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleView(contact)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleEdit(contact)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleDelete(contact)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this contact?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the contact
              {selectedContact && <span className="font-medium"> "{selectedContact.name}"</span>} and remove their data
              from the system.
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
