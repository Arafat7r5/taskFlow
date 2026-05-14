import type { Task } from '@/types'
import { mockTasks } from '@/mock'
import { delay } from '@/mock'
import client from './client'

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true'

export async function searchTasks(
  query: string,
  signal?: AbortSignal
): Promise<Task[]> {
  if (USE_MOCK) {
    await delay(500)
    // Respect abort signal even in mock mode
    if (signal?.aborted) throw new DOMException('Aborted', 'AbortError')
    return mockTasks.filter((t) =>
      t.title.toLowerCase().includes(query.toLowerCase())
    )
  }
  const res = await client.get<Task[]>('/tasks/search', {
    params: { q: query },
    signal,
  })
  return res.data
}