'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react'
import { clsx } from 'clsx'
import type { Toast as ToastType } from '@/store/toastStore'

const config = {
  success: {
    border: 'border-l-green-500',
    icon:   <CheckCircle size={18} className="text-green-500 shrink-0" />,
  },
  error: {
    border: 'border-l-red-500',
    icon:   <XCircle size={18} className="text-red-500 shrink-0" />,
  },
  warning: {
    border: 'border-l-yellow-500',
    icon:   <AlertTriangle size={18} className="text-yellow-500 shrink-0" />,
  },
  info: {
    border: 'border-l-blue-500',
    icon:   <Info size={18} className="text-blue-500 shrink-0" />,
  },
}

interface ToastProps {
  toast:   ToastType
  onClose: (id: string) => void
}

export function Toast({ toast, onClose }: ToastProps) {
  const [removing, setRemoving] = useState(false)

  const handleClose = () => {
    setRemoving(true)
    setTimeout(() => onClose(toast.id), 300)
  }

  // Auto-close after duration
  useEffect(() => {
    const timer = setTimeout(handleClose, toast.duration ?? 4000)
    return () => clearTimeout(timer)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const { border, icon } = config[toast.type]

  return (
    <div
      className={clsx(
        'flex items-start gap-3 bg-white rounded-xl shadow-lg border border-gray-100 border-l-4 p-4',
        'transition-all duration-300',
        border,
        removing
          ? 'opacity-0 translate-x-full'
          : 'opacity-100 translate-x-0'
      )}
    >
      {icon}

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900">{toast.title}</p>
        {toast.message && (
          <p className="text-xs text-gray-500 mt-0.5">{toast.message}</p>
        )}
      </div>

      <button
        onClick={handleClose}
        className="p-0.5 rounded text-gray-400 hover:text-gray-600 transition-colors shrink-0"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  )
}