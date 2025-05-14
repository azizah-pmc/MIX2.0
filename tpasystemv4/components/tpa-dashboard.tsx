"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { DashboardContent } from "@/components/dashboard-content"
import { CompanySearch } from "@/components/company-search"
import { ProductSearch } from "@/components/product-search"
import { PayorSearch } from "@/components/payor-search"
import { HomePage } from "@/components/home-page"
import { CorporateClientForm } from "@/components/onboarding/corporate-client-form"

type ActiveMenu = "dashboard" | "company" | "home" | "product" | "payor" | "onboarding" | string

interface TPADashboardProps {
  initialMenu?: ActiveMenu
}

export function TPADashboard({ initialMenu = "dashboard" }: TPADashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(initialMenu)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)

  const handleMenuClick = (menuName: string, subMenu?: string) => {
    console.log("Menu clicked:", menuName, "Submenu:", subMenu)
    setActiveMenu(menuName.toLowerCase())

    if (subMenu) {
      setActiveSubMenu(subMenu)
    } else {
      setActiveSubMenu(null)
    }
  }

  // If the active menu is "home", render the HomePage component without the sidebar
  if (activeMenu === "home") {
    return <HomePage onNavigateToDashboard={() => setActiveMenu("dashboard")} />
  }

  // For debugging
  console.log("Active Menu:", activeMenu, "Active SubMenu:", activeSubMenu)

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          open={sidebarOpen}
          onMenuClick={handleMenuClick}
          activeMenu={activeMenu}
          activeSubMenu={activeSubMenu}
        />

        <main className="flex-1 overflow-y-auto p-6">
          {activeMenu === "dashboard" && <DashboardContent />}
          {activeMenu === "company" && <CompanySearch />}
          {activeMenu === "product" && <ProductSearch />}
          {activeMenu === "payor" && <PayorSearch />}

          {/* Onboarding submenu content */}
          {activeMenu === "onboarding" && activeSubMenu === "corporate-client" && <CorporateClientForm />}
          {activeMenu === "onboarding" && activeSubMenu === "individual-policy" && (
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-4">Individual Policy Onboarding</h1>
              <p>This screen will be implemented in the future.</p>
            </div>
          )}
          {activeMenu === "onboarding" && activeSubMenu === "pmcare-subscriber" && (
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-4">PMCare Subscriber Onboarding</h1>
              <p>This screen will be implemented in the future.</p>
            </div>
          )}
          {/* Default content for onboarding menu with no submenu selected */}
          {activeMenu === "onboarding" && !activeSubMenu && (
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-4">Onboarding Dashboard</h1>
              <p>Please select a submenu option from the sidebar.</p>
            </div>
          )}

          {/* Add other content components for different menu items as needed */}
        </main>
      </div>

      <Footer />
    </div>
  )
}
