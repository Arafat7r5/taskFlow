// src/mock/index.ts
export { mockUsers } from './users'
export { mockProjects } from './projects'
export { mockColumns } from './columns'
export { mockTasks } from './tasks'
export { mockActivities } from './activities'
export { mockTags } from './tags'

export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}