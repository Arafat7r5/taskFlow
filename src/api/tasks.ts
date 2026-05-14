import type { Task } from '@/types'
import { mockTasks } from '@/mock'
import { delay } from '@/mock'
import client from './client'

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true'

export async function fetchTasksByProject(projectId: string): Promise<Task[]> {
  if (USE_MOCK) {
    await delay(500)
    return mockTasks.filter((t) => t.project_id === projectId)
  }
  const res = await client.get<Task[]>(`/projects/${projectId}/tasks`)
  return res.data
}

export async function fetchTaskById(id: string): Promise<Task> {
  if (USE_MOCK) {
    await delay(400)
    const task = mockTasks.find((t) => t.id === id)
    if (!task) throw { message: 'Task not found', status: 404 }
    return task
  }
  const res = await client.get<Task>(`/tasks/${id}`)
  return res.data
}

export async function createTask(data: Partial<Task>): Promise<Task> {
  if (USE_MOCK) {
    await delay(500)
    const newTask: Task = {
      id:          crypto.randomUUID(),
      column_id:   data.column_id   ?? '',
      project_id:  data.project_id  ?? '',
      title:       data.title       ?? 'Untitled Task',
      description: data.description ?? '',
      priority:    data.priority     ?? 'medium',
      assignee_id: data.assignee_id ?? '',
      tags:        data.tags        ?? [],
      due_date:    data.due_date    ?? null,
      order:       data.order       ?? 0,
      created_at:  new Date().toISOString(),
      updated_at:  new Date().toISOString(),
    }
    mockTasks.push(newTask)
    return newTask
  }
  const res = await client.post<Task>('/tasks', data)
  return res.data
}

export async function updateTask(
  id: string,
  data: Partial<Task>
): Promise<Task> {
  if (USE_MOCK) {
    await delay(450)
    const idx = mockTasks.findIndex((t) => t.id === id)
    if (idx === -1) throw { message: 'Task not found', status: 404 }
    mockTasks[idx] = { ...mockTasks[idx], ...data, updated_at: new Date().toISOString() }
    return mockTasks[idx]
  }
  const res = await client.patch<Task>(`/tasks/${id}`, data)
  return res.data
}

export async function deleteTask(id: string): Promise<void> {
  if (USE_MOCK) {
    await delay(400)
    const idx = mockTasks.findIndex((t) => t.id === id)
    if (idx !== -1) mockTasks.splice(idx, 1)
    return
  }
  await client.delete(`/tasks/${id}`)
}

export async function reorderTasks(
  updates: { id: string; column_id: string; order: number }[]
): Promise<void> {
  if (USE_MOCK) {
    await delay(300)
    updates.forEach(({ id, column_id, order }) => {
      const task = mockTasks.find((t) => t.id === id)
      if (task) {
        task.column_id = column_id
        task.order     = order
      }
    })
    return
  }
  await client.post('/tasks/reorder', { updates })
}