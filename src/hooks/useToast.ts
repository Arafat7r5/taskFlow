import { useToastStore } from '@/store/toastStore'

export function useToast() {
  const addToast = useToastStore((s) => s.addToast)

  const toast = {
    success: (title: string, message?: string) =>
      addToast({ type: 'success', title, message, duration: 4000 }),

    error: (title: string, message?: string) =>
      addToast({ type: 'error', title, message, duration: 4000 }),

    warning: (title: string, message?: string) =>
      addToast({ type: 'warning', title, message, duration: 4000 }),

    info: (title: string, message?: string) =>
      addToast({ type: 'info', title, message, duration: 4000 }),
  }

  return { toast }
}