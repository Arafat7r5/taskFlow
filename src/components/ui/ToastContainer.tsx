'use client'

import { useToastStore } from '@/store/toastStore'
import { Toast } from './Toast'

export function ToastContainer() {
  const { toasts, removeToast } = useToastStore()

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 w-80 max-w-full pointer-events-none">
      {toasts.map((t) => (
        <div key={t.id} className="pointer-events-auto">
          <Toast toast={t} onClose={removeToast} />
        </div>
      ))}
    </div>
  )
}