// src/types/index.ts

// ─── User ────────────────────────────────────────────────────────────────────
export interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

// ─── Tag ─────────────────────────────────────────────────────────────────────
export interface Tag {
  id: string;
  label: string;
  color: string; // hex color e.g. "#ef4444"
}

// ─── Project ─────────────────────────────────────────────────────────────────
export interface Project {
  id: string;
  name: string;
  description: string;
  owner_id: string;
  created_at: string; // ISO date string
  task_count: number;
}

// ─── Column ──────────────────────────────────────────────────────────────────
export interface Column {
  id: string;
  project_id: string;
  title: string;
  order: number;
  color: string; // hex color for the column indicator dot
}

// ─── Task ─────────────────────────────────────────────────────────────────────
export type Priority = "low" | "medium" | "high";

export interface Task {
  id: string;
  column_id: string;
  project_id: string;
  title: string;
  description: string;
  priority: Priority;
  assignee_id: string | null;
  tags: string[]; // array of Tag IDs
  due_date: string | null; // ISO date string or null
  order: number;
  created_at: string;
  updated_at: string;
}

// ─── Activity ─────────────────────────────────────────────────────────────────
export type ActivityAction =
  | "created_task"
  | "moved_task"
  | "updated_task"
  | "assigned_task"
  | "commented";

export interface Activity {
  id: string;
  user_id: string;
  task_id: string;
  project_id: string;
  action: ActivityAction;
  meta: Record<string, unknown>;
  created_at: string;
}

// ─── Pagination ───────────────────────────────────────────────────────────────
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  has_more: boolean;
}

// ─── API Error ────────────────────────────────────────────────────────────────
export interface ApiError {
  message: string;
  status: number;
}

// ─── Toast ────────────────────────────────────────────────────────────────────
export type ToastType = "success" | "error" | "warning" | "info";

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number; // ms, default 4000
}

// ─── Modal ────────────────────────────────────────────────────────────────────
export type ModalMode = "view" | "edit" | "create" | "delete_confirm";