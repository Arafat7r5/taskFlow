import type { Activity, PaginatedResponse } from '@/types'
import { mockActivities } from '@/mock'
import { delay } from '@/mock'
import client from './client'

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true'

export async function fetchActivities(
  page: number,
  limit = 15
): Promise<PaginatedResponse<Activity>> {
  if (USE_MOCK) {
    await delay(450)
    const start = (page - 1) * limit
    const data  = mockActivities.slice(start, start + limit)
    return {
      data,
      total:    mockActivities.length,
      page,
      limit,
      has_more: start + limit < mockActivities.length,
    }
  }
  const res = await client.get<PaginatedResponse<Activity>>('/activities', {
    params: { page, limit },
  })
  return res.data
}