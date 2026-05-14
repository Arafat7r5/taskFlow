import type { Project, PaginatedResponse } from '@/types'
import { mockProjects } from '@/mock'
import { delay } from '@/mock'
import client from './client'

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true'

export async function fetchProjects(
  page: number,
  limit = 10
): Promise<PaginatedResponse<Project>> {
  if (USE_MOCK) {
    await delay(600)
    const start = (page - 1) * limit
    const data  = mockProjects.slice(start, start + limit)
    return {
      data,
      total:    mockProjects.length,
      page,
      limit,
      has_more: start + limit < mockProjects.length,
    }
  }
  const res = await client.get<PaginatedResponse<Project>>('/projects', {
    params: { page, limit },
  })
  return res.data
}

export async function fetchProjectById(id: string): Promise<Project> {
  if (USE_MOCK) {
    await delay(400)
    const project = mockProjects.find((p) => p.id === id)
    if (!project) throw { message: 'Project not found', status: 404 }
    return project
  }
  const res = await client.get<Project>(`/projects/${id}`)
  return res.data
}

export async function createProject(data: Partial<Project>): Promise<Project> {
  if (USE_MOCK) {
    await delay(500)
    const newProject: Project = {
      id:          crypto.randomUUID(),
      name:        data.name        ?? 'Untitled Project',
      description: data.description ?? '',
      owner_id:    data.owner_id    ?? '',
      created_at:  new Date().toISOString(),
      task_count:  0,
    }
    mockProjects.unshift(newProject)
    return newProject
  }
  const res = await client.post<Project>('/projects', data)
  return res.data
}

export async function updateProject(
  id: string,
  data: Partial<Project>
): Promise<Project> {
  if (USE_MOCK) {
    await delay(450)
    const idx = mockProjects.findIndex((p) => p.id === id)
    if (idx === -1) throw { message: 'Project not found', status: 404 }
    mockProjects[idx] = { ...mockProjects[idx], ...data }
    return mockProjects[idx]
  }
  const res = await client.patch<Project>(`/projects/${id}`, data)
  return res.data
}

export async function deleteProject(id: string): Promise<void> {
  if (USE_MOCK) {
    await delay(400)
    const idx = mockProjects.findIndex((p) => p.id === id)
    if (idx !== -1) mockProjects.splice(idx, 1)
    return
  }
  await client.delete(`/projects/${id}`)
}