"use client"

import { useState } from "react"
import type React from "react"
import {
  Home,
  BarChart2,
  Users,
  Building2,
  Shield,
  DollarSign,
  Package,
  FileText,
  BookOpen,
  Calendar,
  UserCog,
  UserPlus,
  ClipboardList,
  BarChart,
  FileSpreadsheet,
  FileCog,
  Settings,
  ChevronUp,
} from "lucide-react"

interface SidebarProps {
  open: boolean
  activeMenu?: string
  activeSubMenu?: string | null
  onMenuClick?: (menuName: string, subMenu?: string) => void
}

interface MenuItem {
  name: string
  icon: React.ElementType
  hasSubmenu?: boolean
  isActive?: boolean
  subMenuItems?: SubMenuItem[]
  isExpanded?: boolean
}

interface SubMenuItem {
  name: string
  path: string
  isActive?: boolean
}

export function Sidebar({ open, activeMenu = "dashboard", activeSubMenu = null, onMenuClick }: SidebarProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>("ONBOARDING") // Default expanded for testing

  const menuItems: MenuItem[] = [
    { name: "HOME", icon: Home, isActive: activeMenu === "home" },
    { name: "DASHBOARD", icon: BarChart2, hasSubmenu: true, isActive: activeMenu === "dashboard" },
    { name: "PERSON", icon: Users, hasSubmenu: true, isActive: activeMenu === "person" },
    { name: "COMPANY", icon: Building2, hasSubmenu: true, isActive: activeMenu === "company" },
    { name: "INSURER", icon: Shield, hasSubmenu: true, isActive: activeMenu === "insurer" },
    { name: "PAYOR", icon: DollarSign, hasSubmenu: true, isActive: activeMenu === "payor" },
    { name: "PRODUCT", icon: Package, hasSubmenu: true, isActive: activeMenu === "product" },
    { name: "POLICY", icon: FileText, hasSubmenu: true, isActive: activeMenu === "policy" },
    { name: "BENEFIT EXCLUSION CATALOGUE", icon: BookOpen, hasSubmenu: true, isActive: activeMenu === "benefit" },
    { name: "PLAN", icon: Calendar, hasSubmenu: true, isActive: activeMenu === "plan" },
    { name: "PROVIDER", icon: UserCog, hasSubmenu: true, isActive: activeMenu === "provider" },
    { name: "AGENT BROKER", icon: UserPlus, hasSubmenu: true, isActive: activeMenu === "agent" },
    {
      name: "ONBOARDING",
      icon: ClipboardList,
      hasSubmenu: true,
      isActive: activeMenu === "onboarding",
      isExpanded: expandedMenu === "ONBOARDING",
      subMenuItems: [
        {
          name: "CORPORATE CLIENT",
          path: "corporate-client",
          isActive: activeMenu === "onboarding" && activeSubMenu === "corporate-client",
        },
        {
          name: "INDIVIDUAL POLICY",
          path: "individual-policy",
          isActive: activeMenu === "onboarding" && activeSubMenu === "individual-policy",
        },
        {
          name: "PMCARE SUBSCRIBER",
          path: "pmcare-subscriber",
          isActive: activeMenu === "onboarding" && activeSubMenu === "pmcare-subscriber",
        },
      ],
    },
    { name: "GL", icon: FileSpreadsheet, hasSubmenu: true, isActive: activeMenu === "gl" },
    { name: "CLAIMS", icon: ClipboardList, hasSubmenu: true, isActive: activeMenu === "claims" },
    { name: "FINANCE", icon: BarChart, hasSubmenu: true, isActive: activeMenu === "finance" },
    { name: "REPORT", icon: FileSpreadsheet, hasSubmenu: true, isActive: activeMenu === "report" },
    { name: "RECORD MANAGEMENT", icon: FileCog, hasSubmenu: true, isActive: activeMenu === "record" },
    { name: "ADMINISTRATOR", icon: Settings, hasSubmenu: true, isActive: activeMenu === "administrator" },
  ]

  const handleMenuClick = (menuName: string) => {
    // Toggle submenu expansion if it has submenus
    const clickedMenu = menuItems.find((item) => item.name === menuName)
    if (clickedMenu && clickedMenu.subMenuItems && clickedMenu.subMenuItems.length > 0) {
      setExpandedMenu(expandedMenu === menuName ? null : menuName)
    }

    // Call the parent's onMenuClick handler
    if (onMenuClick) {
      onMenuClick(menuName.toLowerCase())
    }
  }

  const handleSubMenuClick = (menuName: string, subMenuPath: string) => {
    if (onMenuClick) {
      onMenuClick(menuName.toLowerCase(), subMenuPath)
    }
  }

  return (
    <aside
      className={`${
        open ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-20 w-64 transform border-r bg-white transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:z-auto`}
    >
      <nav className="h-full overflow-y-auto">
        <ul className="space-y-0.5 p-2 pt-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    handleMenuClick(item.name)
                  }}
                  className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium ${
                    item.isActive ? "bg-sky-50 text-sky-700" : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </div>
                  {item.hasSubmenu &&
                    (item.subMenuItems && item.subMenuItems.length > 0 ? (
                      item.isExpanded ? (
                        <ChevronUp size={16} className="text-slate-400" />
                      ) : (
                        <span className="text-slate-400">›</span>
                      )
                    ) : (
                      <span className="text-slate-400">›</span>
                    ))}
                </a>

                {/* Submenu items */}
                {item.subMenuItems && item.isExpanded && (
                  <ul className="ml-6 mt-1 space-y-1">
                    {item.subMenuItems.map((subItem) => (
                      <li key={subItem.name}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            handleSubMenuClick(item.name, subItem.path)
                          }}
                          className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium ${
                            subItem.isActive ? "bg-sky-50 text-sky-700" : "text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                            <span>{subItem.name}</span>
                          </div>
                          <span className="text-slate-400">›</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
