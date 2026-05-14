import type { Column } from '@/types'
import { mockColumns } from '@/mock'
import { delay } from '@/mock'
import client from './client'

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true'

export async function fetchColumnsByProject(projectId: string): Promise<Column[]> {
  if (USE_MOCK) {
    await delay(400)
    return mockColumns
      .filter((c) => c.project_id === projectId)
      .sort((a, b) => a.order - b.order)
  }
  const res = await client.get<Column[]>(`/projects/${projectId}/columns`)
  return res.data
}