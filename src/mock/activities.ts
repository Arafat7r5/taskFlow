import { Activity } from "@/types";

export const mockActivities: Activity[] = [
  // ── May 14, 2026 ────────────────────────────────────────────────────────────
  {
    id: "act-1", user_id: "u1", task_id: "task-4", project_id: "proj-1",
    action: "updated_task",
    meta: { field: "priority", from: "medium", to: "high" },
    created_at: "2026-05-14T08:12:00Z",
  },
  {
    id: "act-2", user_id: "u5", task_id: "task-7", project_id: "proj-1",
    action: "moved_task",
    meta: { from_column: "In Progress", to_column: "In Review" },
    created_at: "2026-05-14T08:45:00Z",
  },
  {
    id: "act-3", user_id: "u6", task_id: "task-16", project_id: "proj-2",
    action: "commented",
    meta: { preview: "FCM tokens are now stored and indexed correctly on the backend." },
    created_at: "2026-05-14T09:10:00Z",
  },
  {
    id: "act-4", user_id: "u3", task_id: "task-28", project_id: "proj-3",
    action: "updated_task",
    meta: { field: "due_date", from: null, to: "2026-05-20" },
    created_at: "2026-05-14T09:35:00Z",
  },
  {
    id: "act-5", user_id: "u4", task_id: "task-40", project_id: "proj-4",
    action: "assigned_task",
    meta: { assigned_to: "u5", assigned_name: "Eva Rossi" },
    created_at: "2026-05-14T10:00:00Z",
  },

  // ── May 13, 2026 ────────────────────────────────────────────────────────────
  {
    id: "act-6", user_id: "u2", task_id: "task-5", project_id: "proj-1",
    action: "updated_task",
    meta: { field: "description", from: "", to: "updated" },
    created_at: "2026-05-13T08:20:00Z",
  },
  {
    id: "act-7", user_id: "u8", task_id: "task-18", project_id: "proj-2",
    action: "commented",
    meta: { preview: "Conflict resolution needs another pass — tested with 3 concurrent clients." },
    created_at: "2026-05-13T09:00:00Z",
  },
  {
    id: "act-8", user_id: "u5", task_id: "task-52", project_id: "proj-5",
    action: "moved_task",
    meta: { from_column: "Backlog", to_column: "In Progress" },
    created_at: "2026-05-13T10:15:00Z",
  },
  {
    id: "act-9", user_id: "u9", task_id: "task-55", project_id: "proj-5",
    action: "moved_task",
    meta: { from_column: "In Progress", to_column: "In Review" },
    created_at: "2026-05-13T11:00:00Z",
  },
  {
    id: "act-10", user_id: "u3", task_id: "task-32", project_id: "proj-3",
    action: "updated_task",
    meta: { field: "priority", from: "medium", to: "high" },
    created_at: "2026-05-13T14:30:00Z",
  },

  // ── May 12, 2026 ────────────────────────────────────────────────────────────
  {
    id: "act-11", user_id: "u1", task_id: "task-6", project_id: "proj-1",
    action: "created_task",
    meta: { title: "Optimise images with next/image" },
    created_at: "2026-05-12T08:00:00Z",
  },
  {
    id: "act-12", user_id: "u4", task_id: "task-43", project_id: "proj-4",
    action: "moved_task",
    meta: { from_column: "In Progress", to_column: "In Review" },
    created_at: "2026-05-12T09:30:00Z",
  },
  {
    id: "act-13", user_id: "u6", task_id: "task-57", project_id: "proj-5",
    action: "commented",
    meta: { preview: "Infosec requested we add HSM-backed key storage — opening a follow-up ticket." },
    created_at: "2026-05-12T10:15:00Z",
  },
  {
    id: "act-14", user_id: "u7", task_id: "task-20", project_id: "proj-2",
    action: "moved_task",
    meta: { from_column: "In Progress", to_column: "In Review" },
    created_at: "2026-05-12T11:00:00Z",
  },
  {
    id: "act-15", user_id: "u10", task_id: "task-31", project_id: "proj-3",
    action: "moved_task",
    meta: { from_column: "In Progress", to_column: "In Review" },
    created_at: "2026-05-12T14:00:00Z",
  },

  // ── May 11, 2026 ────────────────────────────────────────────────────────────
  {
    id: "act-16", user_id: "u5", task_id: "task-56", project_id: "proj-5",
    action: "created_task",
    meta: { title: "Team members management" },
    created_at: "2026-05-11T08:10:00Z",
  },
  {
    id: "act-17", user_id: "u2", task_id: "task-17", project_id: "proj-2",
    action: "commented",
    meta: { preview: "Tested on iPhone 14 Pro (Face ID) and Pixel 7 (fingerprint) — both working." },
    created_at: "2026-05-11T09:00:00Z",
  },
  {
    id: "act-18", user_id: "u4", task_id: "task-44", project_id: "proj-4",
    action: "assigned_task",
    meta: { assigned_to: "u1", assigned_name: "Alice Chen" },
    created_at: "2026-05-11T10:00:00Z",
  },
  {
    id: "act-19", user_id: "u3", task_id: "task-29", project_id: "proj-3",
    action: "updated_task",
    meta: { field: "title", from: "Migrate users API", to: "Migrate /users endpoints to v2" },
    created_at: "2026-05-11T11:30:00Z",
  },
  {
    id: "act-20", user_id: "u8", task_id: "task-54", project_id: "proj-5",
    action: "commented",
    meta: { preview: "Stripe portal configured — restrict to card updates and cancellation only for now." },
    created_at: "2026-05-11T14:00:00Z",
  },

  // ── May 9, 2026 ─────────────────────────────────────────────────────────────
  {
    id: "act-21", user_id: "u1", task_id: "task-4", project_id: "proj-1",
    action: "commented",
    meta: { preview: "Hero animation runs at 60fps on mobile — using CSS transform instead of layout properties." },
    created_at: "2026-05-09T08:30:00Z",
  },
  {
    id: "act-22", user_id: "u5", task_id: "task-42", project_id: "proj-4",
    action: "updated_task",
    meta: { field: "priority", from: "low", to: "medium" },
    created_at: "2026-05-09T09:00:00Z",
  },
  {
    id: "act-23", user_id: "u9", task_id: "task-15", project_id: "proj-2",
    action: "created_task",
    meta: { title: "Plan beta testing rollout" },
    created_at: "2026-05-09T10:00:00Z",
  },
  {
    id: "act-24", user_id: "u6", task_id: "task-33", project_id: "proj-3",
    action: "moved_task",
    meta: { from_column: "In Progress", to_column: "In Review" },
    created_at: "2026-05-09T11:15:00Z",
  },
  {
    id: "act-25", user_id: "u4", task_id: "task-38", project_id: "proj-4",
    action: "created_task",
    meta: { title: "Build DatePicker component" },
    created_at: "2026-05-09T13:00:00Z",
  },

  // ── May 7, 2026 ──────────────────────────────────────────────────────────────
  {
    id: "act-26", user_id: "u3", task_id: "task-30", project_id: "proj-3",
    action: "assigned_task",
    meta: { assigned_to: "u3", assigned_name: "Clara Singh" },
    created_at: "2026-05-07T08:00:00Z",
  },
  {
    id: "act-27", user_id: "u2", task_id: "task-9", project_id: "proj-1",
    action: "moved_task",
    meta: { from_column: "In Progress", to_column: "In Review" },
    created_at: "2026-05-07T09:30:00Z",
  },
  {
    id: "act-28", user_id: "u5", task_id: "task-53", project_id: "proj-5",
    action: "commented",
    meta: { preview: "React Query parallel fetching working — dashboard loads in under 800ms on 3G." },
    created_at: "2026-05-07T10:45:00Z",
  },
  {
    id: "act-29", user_id: "u7", task_id: "task-51", project_id: "proj-5",
    action: "created_task",
    meta: { title: "Build invoice history page" },
    created_at: "2026-05-07T11:00:00Z",
  },
  {
    id: "act-30", user_id: "u4", task_id: "task-45", project_id: "proj-4",
    action: "moved_task",
    meta: { from_column: "In Progress", to_column: "In Review" },
    created_at: "2026-05-07T14:00:00Z",
  },

  // ── May 5, 2026 ──────────────────────────────────────────────────────────────
  {
    id: "act-31", user_id: "u1", task_id: "task-2", project_id: "proj-1",
    action: "created_task",
    meta: { title: "Define new typography scale" },
    created_at: "2026-05-05T08:00:00Z",
  },
  {
    id: "act-32", user_id: "u6", task_id: "task-16", project_id: "proj-2",
    action: "updated_task",
    meta: { field: "due_date", from: null, to: "2026-05-25" },
    created_at: "2026-05-05T09:15:00Z",
  },
  {
    id: "act-33", user_id: "u10", task_id: "task-27", project_id: "proj-3",
    action: "created_task",
    meta: { title: "Write API versioning strategy" },
    created_at: "2026-05-05T10:00:00Z",
  },
  {
    id: "act-34", user_id: "u5", task_id: "task-41", project_id: "proj-4",
    action: "commented",
    meta: { preview: "Focus trap is working — Tab and Shift+Tab cycle correctly through all interactive elements." },
    created_at: "2026-05-05T11:30:00Z",
  },
  {
    id: "act-35", user_id: "u8", task_id: "task-18", project_id: "proj-2",
    action: "updated_task",
    meta: { field: "priority", from: "medium", to: "high" },
    created_at: "2026-05-05T14:00:00Z",
  },

  // ── May 2, 2026 ──────────────────────────────────────────────────────────────
  {
    id: "act-36", user_id: "u3", task_id: "task-25", project_id: "proj-3",
    action: "created_task",
    meta: { title: "Inventory all legacy endpoints" },
    created_at: "2026-05-02T08:30:00Z",
  },
  {
    id: "act-37", user_id: "u4", task_id: "task-47", project_id: "proj-4",
    action: "moved_task",
    meta: { from_column: "In Review", to_column: "Done" },
    created_at: "2026-05-02T09:00:00Z",
  },
  {
    id: "act-38", user_id: "u9", task_id: "task-55", project_id: "proj-5",
    action: "updated_task",
    meta: { field: "description", from: "", to: "updated" },
    created_at: "2026-05-02T10:15:00Z",
  },
  {
    id: "act-39", user_id: "u2", task_id: "task-5", project_id: "proj-1",
    action: "assigned_task",
    meta: { assigned_to: "u2", assigned_name: "Bob Martinez" },
    created_at: "2026-05-02T11:00:00Z",
  },
  {
    id: "act-40", user_id: "u6", task_id: "task-57", project_id: "proj-5",
    action: "moved_task",
    meta: { from_column: "In Progress", to_column: "In Review" },
    created_at: "2026-05-02T14:30:00Z",
  },

  // ── April 28, 2026 ───────────────────────────────────────────────────────────
  {
    id: "act-41", user_id: "u5", task_id: "task-7", project_id: "proj-1",
    action: "created_task",
    meta: { title: "Update navigation component" },
    created_at: "2026-04-28T08:00:00Z",
  },
  {
    id: "act-42", user_id: "u7", task_id: "task-19", project_id: "proj-2",
    action: "moved_task",
    meta: { from_column: "In Progress", to_column: "In Review" },
    created_at: "2026-04-28T09:30:00Z",
  },
  {
    id: "act-43", user_id: "u1", task_id: "task-10", project_id: "proj-1",
    action: "moved_task",
    meta: { from_column: "In Review", to_column: "Done" },
    created_at: "2026-04-28T11:00:00Z",
  },
  {
    id: "act-44", user_id: "u3", task_id: "task-34", project_id: "proj-3",
    action: "moved_task",
    meta: { from_column: "In Review", to_column: "Done" },
    created_at: "2026-04-28T13:00:00Z",
  },
  {
    id: "act-45", user_id: "u4", task_id: "task-46", project_id: "proj-4",
    action: "moved_task",
    meta: { from_column: "In Review", to_column: "Done" },
    created_at: "2026-04-28T15:00:00Z",
  },

  // ── April 20, 2026 ───────────────────────────────────────────────────────────
  {
    id: "act-46", user_id: "u5", task_id: "task-58", project_id: "proj-5",
    action: "moved_task",
    meta: { from_column: "In Review", to_column: "Done" },
    created_at: "2026-04-20T09:00:00Z",
  },
  {
    id: "act-47", user_id: "u8", task_id: "task-23", project_id: "proj-2",
    action: "moved_task",
    meta: { from_column: "In Review", to_column: "Done" },
    created_at: "2026-04-20T10:30:00Z",
  },
  {
    id: "act-48", user_id: "u3", task_id: "task-35", project_id: "proj-3",
    action: "moved_task",
    meta: { from_column: "In Review", to_column: "Done" },
    created_at: "2026-04-20T11:00:00Z",
  },
  {
    id: "act-49", user_id: "u4", task_id: "task-48", project_id: "proj-4",
    action: "moved_task",
    meta: { from_column: "In Review", to_column: "Done" },
    created_at: "2026-04-20T14:00:00Z",
  },
  {
    id: "act-50", user_id: "u5", task_id: "task-59", project_id: "proj-5",
    action: "moved_task",
    meta: { from_column: "In Review", to_column: "Done" },
    created_at: "2026-04-20T15:30:00Z",
  },
];