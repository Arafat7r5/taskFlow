'use client'

import { useRouter } from 'next/navigation'
import { Plus, Search } from 'lucide-react'

interface TopbarProps {
  projectName: string
  onNewTask:   () => void
}

export function Topbar({ projectName, onNewTask }: TopbarProps) {
  const router = useRouter()

  return (
    <header className="fixed top-0 left-60 right-0 h-14 bg-white border-b border-gray-200
                       flex items-center justify-between px-6 z-30">
      <h1 className="text-base font-semibold text-gray-900 truncate">{projectName}</h1>

      <div className="flex items-center gap-3">
        {/* Quick search */}
        <button
          onClick={() => router.push('/search')}
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500
                     bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Search size={14} />
          <span>Search…</span>
        </button>

        {/* New task */}
        <button
          onClick={onNewTask}
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white
                     bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus size={14} />
          New Task
        </button>
      </div>
    </header>
  )
}