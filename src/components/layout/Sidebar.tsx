'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  LayoutDashboard,
  Activity,
  Search,
  LogOut,
  Menu,
  X,
  Zap,
} from 'lucide-react'
import { clsx } from 'clsx'
import { mockUsers } from '@/mock'

const NAV = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Activity',  href: '/activity',  icon: Activity },
  { label: 'Search',    href: '/search',    icon: Search },
]

const currentUser = mockUsers[0]

export function Sidebar() {
  const pathname  = usePathname()
  const [open, setOpen] = useState(false)

  const nav = (
    <nav className="flex flex-col gap-1 mt-4">
      {NAV.map(({ label, href, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          onClick={() => setOpen(false)}
          className={clsx(
            'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
            pathname === href
              ? 'bg-gray-700 text-white'
              : 'text-gray-400 hover:text-white hover:bg-gray-800'
          )}
        >
          <Icon size={18} />
          {label}
        </Link>
      ))}
    </nav>
  )

  const userPanel = (
    <div className="flex items-center gap-3 px-3 py-3 border-t border-gray-800">
      <img
        src={currentUser.avatar_url}
        alt={currentUser.name}
        className="w-8 h-8 rounded-full object-cover shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white truncate">
          {currentUser.name}
        </p>
        <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
      </div>
      <button
        title="Logout"
        className="text-gray-500 hover:text-red-400 transition-colors"
      >
        <LogOut size={16} />
      </button>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-60 bg-gray-900 flex-col z-40">
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-5 border-b border-gray-800">
          <div className="bg-indigo-500 rounded-lg p-1.5">
            <Zap size={16} className="text-white" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            TaskFlow
          </span>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-2">{nav}</div>

        {userPanel}
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between
                      bg-gray-900 px-4 py-3 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-500 rounded-lg p-1">
            <Zap size={14} className="text-white" />
          </div>
          <span className="text-white font-bold">TaskFlow</span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-400 hover:text-white"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-30 flex">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <aside className="relative flex flex-col w-60 h-full bg-gray-900 z-10">
            <div className="flex-1 overflow-y-auto px-3 pt-16 pb-2">{nav}</div>
            {userPanel}
          </aside>
        </div>
      )}
    </>
  )
}