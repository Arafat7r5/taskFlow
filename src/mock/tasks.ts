import { Task } from "@/types";

export const mockTasks: Task[] = [

  // ════════════════════════════════════════════════════════════════════════════
  // PROJECT 1 — Website Redesign
  // ════════════════════════════════════════════════════════════════════════════

  // Backlog (col-1)
  {
    id: "task-1", column_id: "col-1", project_id: "proj-1",
    title: "Audit current site accessibility",
    description: "Run automated and manual accessibility checks using Axe and VoiceOver. Document all WCAG 2.1 AA violations and create a prioritised remediation list for the design team.",
    priority: "medium", assignee_id: "u3", tags: ["tag-6", "tag-7"],
    due_date: "2026-05-28T00:00:00Z", order: 0,
    created_at: "2026-01-10T09:10:00Z", updated_at: "2026-01-10T09:10:00Z",
  },
  {
    id: "task-2", column_id: "col-1", project_id: "proj-1",
    title: "Define new typography scale",
    description: "Select a type pairing from the approved font shortlist. Define a scale using a modular ratio (1.25 or 1.333), export tokens, and document usage guidelines for headings, body, and captions.",
    priority: "low", assignee_id: "u4", tags: ["tag-4"],
    due_date: null, order: 1,
    created_at: "2026-01-11T10:00:00Z", updated_at: "2026-01-11T10:00:00Z",
  },
  {
    id: "task-3", column_id: "col-1", project_id: "proj-1",
    title: "Create responsive grid system",
    description: "Design a 12-column grid with breakpoints at 640px, 768px, 1024px, and 1280px. Ensure consistency with the existing Tailwind config and document column gap and margin specifications.",
    priority: "low", assignee_id: null, tags: ["tag-4", "tag-6"],
    due_date: null, order: 2,
    created_at: "2026-01-12T11:00:00Z", updated_at: "2026-01-12T11:00:00Z",
  },

  // In Progress (col-2)
  {
    id: "task-4", column_id: "col-2", project_id: "proj-1",
    title: "Redesign homepage hero section",
    description: "Create a new hero with animated headline, supporting sub-copy, and a dual CTA layout. Designs must account for mobile (single column) and desktop (split layout) at all breakpoints.",
    priority: "high", assignee_id: "u1", tags: ["tag-4", "tag-6"],
    due_date: "2026-05-20T00:00:00Z", order: 0,
    created_at: "2026-01-15T09:00:00Z", updated_at: "2026-04-01T14:00:00Z",
  },
  {
    id: "task-5", column_id: "col-2", project_id: "proj-1",
    title: "Implement dark mode toggle",
    description: "Add a theme toggle to the navbar. Persist preference in localStorage. Use CSS custom properties for color tokens so both themes share the same stylesheet with swapped variable values.",
    priority: "medium", assignee_id: "u2", tags: ["tag-6"],
    due_date: "2026-05-22T00:00:00Z", order: 1,
    created_at: "2026-01-16T10:00:00Z", updated_at: "2026-04-10T09:00:00Z",
  },
  {
    id: "task-6", column_id: "col-2", project_id: "proj-1",
    title: "Optimise images with next/image",
    description: "Replace all <img> tags with the Next.js Image component. Configure remote domains, set explicit width/height, and use priority prop for above-the-fold images to improve LCP scores.",
    priority: "high", assignee_id: "u1", tags: ["tag-3", "tag-6"],
    due_date: "2026-05-10T00:00:00Z", order: 2,
    created_at: "2026-01-17T11:00:00Z", updated_at: "2026-04-12T10:00:00Z",
  },

  // In Review (col-3)
  {
    id: "task-7", column_id: "col-3", project_id: "proj-1",
    title: "Update navigation component",
    description: "Rebuild the top navigation to support mega-menus, mobile drawer, active link highlighting, and keyboard navigation. Review pending from design lead and senior frontend engineer.",
    priority: "high", assignee_id: "u5", tags: ["tag-6", "tag-7"],
    due_date: "2026-05-15T00:00:00Z", order: 0,
    created_at: "2026-01-20T09:00:00Z", updated_at: "2026-04-28T11:00:00Z",
  },
  {
    id: "task-8", column_id: "col-3", project_id: "proj-1",
    title: "Redesign footer with sitemap",
    description: "New footer design includes a four-column sitemap, social links, legal copy, and newsletter sign-up. Awaiting final copy from marketing before sign-off.",
    priority: "low", assignee_id: "u4", tags: ["tag-4"],
    due_date: null, order: 1,
    created_at: "2026-01-21T10:00:00Z", updated_at: "2026-04-29T09:00:00Z",
  },
  {
    id: "task-9", column_id: "col-3", project_id: "proj-1",
    title: "Add page transition animations",
    description: "Implement route-change fade transitions using Framer Motion. Transitions should be ≤200ms, respect prefers-reduced-motion, and not affect time-to-interactive on initial load.",
    priority: "medium", assignee_id: "u2", tags: ["tag-6"],
    due_date: "2026-05-18T00:00:00Z", order: 2,
    created_at: "2026-01-22T11:00:00Z", updated_at: "2026-04-30T14:00:00Z",
  },

  // Done (col-4)
  {
    id: "task-10", column_id: "col-4", project_id: "proj-1",
    title: "Set up Tailwind design tokens",
    description: "Configured the Tailwind config with brand color palette, spacing scale, shadow tokens, and border radii. All tokens are mapped to CSS custom properties for runtime theming.",
    priority: "high", assignee_id: "u1", tags: ["tag-4", "tag-6"],
    due_date: null, order: 0,
    created_at: "2026-01-10T12:00:00Z", updated_at: "2026-02-01T16:00:00Z",
  },
  {
    id: "task-11", column_id: "col-4", project_id: "proj-1",
    title: "Choose and integrate icon library",
    description: "Evaluated Heroicons, Lucide, and Phosphor. Selected Lucide React for its tree-shaking support and consistent stroke widths. Integrated and documented usage conventions.",
    priority: "low", assignee_id: "u3", tags: ["tag-4"],
    due_date: null, order: 1,
    created_at: "2026-01-10T13:00:00Z", updated_at: "2026-02-05T10:00:00Z",
  },
  {
    id: "task-12", column_id: "col-4", project_id: "proj-1",
    title: "Write component documentation",
    description: "Documented Button, Input, Card, Badge, and Modal components in Storybook with prop tables, accessibility notes, and interactive examples.",
    priority: "medium", assignee_id: "u4", tags: ["tag-7"],
    due_date: null, order: 2,
    created_at: "2026-01-11T09:00:00Z", updated_at: "2026-02-10T14:00:00Z",
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PROJECT 2 — Mobile App v2
  // ════════════════════════════════════════════════════════════════════════════

  // Backlog (col-5)
  {
    id: "task-13", column_id: "col-5", project_id: "proj-2",
    title: "Design app store screenshots",
    description: "Create 6 App Store and 8 Play Store screenshots showcasing key features. Must follow Apple and Google dimension specs and include localized captions for EN, ES, and FR.",
    priority: "medium", assignee_id: "u4", tags: ["tag-4"],
    due_date: "2026-06-01T00:00:00Z", order: 0,
    created_at: "2026-01-18T10:00:00Z", updated_at: "2026-01-18T10:00:00Z",
  },
  {
    id: "task-14", column_id: "col-5", project_id: "proj-2",
    title: "Write crash reporting integration plan",
    description: "Evaluate Sentry vs Firebase Crashlytics vs Bugsnag. Document setup steps, source map upload process, alerting thresholds, and ownership for triage rotation.",
    priority: "low", assignee_id: null, tags: ["tag-5"],
    due_date: null, order: 1,
    created_at: "2026-01-19T11:00:00Z", updated_at: "2026-01-19T11:00:00Z",
  },
  {
    id: "task-15", column_id: "col-5", project_id: "proj-2",
    title: "Plan beta testing rollout",
    description: "Define the beta cohort (200 users), set up TestFlight and Google Play Internal Testing tracks, draft the feedback survey, and create a bug triage workflow for beta reports.",
    priority: "medium", assignee_id: "u9", tags: ["tag-5"],
    due_date: "2026-06-10T00:00:00Z", order: 2,
    created_at: "2026-01-20T09:00:00Z", updated_at: "2026-01-20T09:00:00Z",
  },

  // In Progress (col-6)
  {
    id: "task-16", column_id: "col-6", project_id: "proj-2",
    title: "Implement push notifications",
    description: "Integrate Firebase Cloud Messaging for both iOS and Android. Handle foreground, background, and terminated app states. Store device tokens in the backend and support per-user opt-out.",
    priority: "high", assignee_id: "u6", tags: ["tag-5", "tag-3"],
    due_date: "2026-05-25T00:00:00Z", order: 0,
    created_at: "2026-02-01T09:00:00Z", updated_at: "2026-04-15T10:00:00Z",
  },
  {
    id: "task-17", column_id: "col-6", project_id: "proj-2",
    title: "Add biometric authentication",
    description: "Use react-native-biometrics to support Face ID, Touch ID, and Android fingerprint. Fall back gracefully to PIN on unsupported devices. Encrypt the stored token with the biometric key.",
    priority: "high", assignee_id: "u2", tags: ["tag-5"],
    due_date: "2026-05-22T00:00:00Z", order: 1,
    created_at: "2026-02-02T10:00:00Z", updated_at: "2026-04-18T14:00:00Z",
  },
  {
    id: "task-18", column_id: "col-6", project_id: "proj-2",
    title: "Offline mode with local sync",
    description: "Queue mutations made offline using WatermelonDB. Sync to server when connectivity is restored. Handle merge conflicts using a last-write-wins strategy with a conflict log for review.",
    priority: "high", assignee_id: "u8", tags: ["tag-5", "tag-8"],
    due_date: "2026-05-30T00:00:00Z", order: 2,
    created_at: "2026-02-03T11:00:00Z", updated_at: "2026-04-20T09:00:00Z",
  },

  // In Review (col-7)
  {
    id: "task-19", column_id: "col-7", project_id: "proj-2",
    title: "Redesign bottom navigation bar",
    description: "New tab bar design with 5 items, active state animations, and a FAB for the primary action. In review with the design team — awaiting approval on the active indicator style.",
    priority: "medium", assignee_id: "u4", tags: ["tag-4", "tag-6"],
    due_date: null, order: 0,
    created_at: "2026-02-10T09:00:00Z", updated_at: "2026-04-25T10:00:00Z",
  },
  {
    id: "task-20", column_id: "col-7", project_id: "proj-2",
    title: "Integrate REST API client layer",
    description: "Implement a typed API client using React Query and Axios. Includes retry logic, request deduplication, token refresh, and a mock adapter for local development. Code review in progress.",
    priority: "high", assignee_id: "u7", tags: ["tag-5", "tag-6", "tag-7"],
    due_date: "2026-05-16T00:00:00Z", order: 1,
    created_at: "2026-02-11T10:00:00Z", updated_at: "2026-04-27T11:00:00Z",
  },
  {
    id: "task-21", column_id: "col-7", project_id: "proj-2",
    title: "Create onboarding screen flow",
    description: "Four-screen onboarding flow covering key value props, permission requests (notifications, contacts), and account setup. Currently under accessibility review.",
    priority: "medium", assignee_id: "u4", tags: ["tag-4"],
    due_date: "2026-05-19T00:00:00Z", order: 2,
    created_at: "2026-02-12T11:00:00Z", updated_at: "2026-04-28T14:00:00Z",
  },

  // Done (col-8)
  {
    id: "task-22", column_id: "col-8", project_id: "proj-2",
    title: "Set up React Native project",
    description: "Bootstrapped with Expo SDK 51, configured TypeScript strict mode, Absolute imports, EAS Build profiles for dev/staging/prod, and committed base CI workflow.",
    priority: "high", assignee_id: "u2", tags: ["tag-5", "tag-6"],
    due_date: null, order: 0,
    created_at: "2026-01-18T12:00:00Z", updated_at: "2026-01-30T16:00:00Z",
  },
  {
    id: "task-23", column_id: "col-8", project_id: "proj-2",
    title: "Configure Expo EAS build",
    description: "Set up EAS Build with separate dev client, staging (internal testing), and production profiles. Secrets stored in EAS environment variables, not committed to repo.",
    priority: "medium", assignee_id: "u8", tags: ["tag-5"],
    due_date: null, order: 1,
    created_at: "2026-01-19T09:00:00Z", updated_at: "2026-02-05T10:00:00Z",
  },
  {
    id: "task-24", column_id: "col-8", project_id: "proj-2",
    title: "Implement navigation stack",
    description: "Configured React Navigation v6 with a root stack, authenticated stack (tab navigator), and unauthenticated stack (auth flow). Deep linking and URL scheme registered.",
    priority: "high", assignee_id: "u2", tags: ["tag-6"],
    due_date: null, order: 2,
    created_at: "2026-01-20T10:00:00Z", updated_at: "2026-02-08T11:00:00Z",
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PROJECT 3 — API Migration
  // ════════════════════════════════════════════════════════════════════════════

  // Backlog (col-9)
  {
    id: "task-25", column_id: "col-9", project_id: "proj-3",
    title: "Inventory all legacy endpoints",
    description: "Document every existing v1 endpoint — method, path, request/response shape, auth requirements, and known consumers. Output as an OpenAPI 3.0 YAML file for comparison.",
    priority: "high", assignee_id: "u3", tags: ["tag-5"],
    due_date: "2026-05-30T00:00:00Z", order: 0,
    created_at: "2026-01-25T09:00:00Z", updated_at: "2026-01-25T09:00:00Z",
  },
  {
    id: "task-26", column_id: "col-9", project_id: "proj-3",
    title: "Design error response schema",
    description: "Define a standard error envelope: { error: { code, message, details[] } }. Map all HTTP status codes to error codes. Update the API style guide and notify all consumer teams.",
    priority: "medium", assignee_id: null, tags: ["tag-5", "tag-7"],
    due_date: null, order: 1,
    created_at: "2026-01-26T10:00:00Z", updated_at: "2026-01-26T10:00:00Z",
  },
  {
    id: "task-27", column_id: "col-9", project_id: "proj-3",
    title: "Write API versioning strategy",
    description: "Decide between URL versioning (/v2/) vs header versioning. Document deprecation policy, sunset timelines, and migration guide template for downstream teams.",
    priority: "medium", assignee_id: "u10", tags: ["tag-5"],
    due_date: "2026-06-05T00:00:00Z", order: 2,
    created_at: "2026-01-27T11:00:00Z", updated_at: "2026-01-27T11:00:00Z",
  },

  // In Progress (col-10)
  {
    id: "task-28", column_id: "col-10", project_id: "proj-3",
    title: "Implement rate limiting middleware",
    description: "Add sliding-window rate limiting using Redis. Configure per-route limits (default 100 req/min, auth routes 10 req/min). Return 429 with Retry-After header and log limit breaches.",
    priority: "high", assignee_id: "u3", tags: ["tag-5", "tag-3"],
    due_date: "2026-05-20T00:00:00Z", order: 0,
    created_at: "2026-02-15T09:00:00Z", updated_at: "2026-04-14T10:00:00Z",
  },
  {
    id: "task-29", column_id: "col-10", project_id: "proj-3",
    title: "Migrate /users endpoints to v2",
    description: "Rewrite all user-related endpoints (GET, POST, PATCH, DELETE /users) to the v2 schema. Add field validation, pagination to list endpoint, and deprecation headers to v1 routes.",
    priority: "high", assignee_id: "u6", tags: ["tag-5"],
    due_date: "2026-05-24T00:00:00Z", order: 1,
    created_at: "2026-02-16T10:00:00Z", updated_at: "2026-04-16T11:00:00Z",
  },
  {
    id: "task-30", column_id: "col-10", project_id: "proj-3",
    title: "Add request validation with Pydantic",
    description: "Apply Pydantic v2 models to all v2 request bodies and query params. Ensure validation errors return the standard error schema defined in the style guide.",
    priority: "medium", assignee_id: "u3", tags: ["tag-5", "tag-6"],
    due_date: "2026-05-26T00:00:00Z", order: 2,
    created_at: "2026-02-17T11:00:00Z", updated_at: "2026-04-18T14:00:00Z",
  },

  // In Review (col-11)
  {
    id: "task-31", column_id: "col-11", project_id: "proj-3",
    title: "Set up OpenAPI documentation",
    description: "Auto-generate OpenAPI 3.0 docs from FastAPI route decorators. Configure Swagger UI and ReDoc. Add example request/response payloads to all endpoints. Under review by the API consumers team.",
    priority: "medium", assignee_id: "u10", tags: ["tag-5", "tag-7"],
    due_date: "2026-05-17T00:00:00Z", order: 0,
    created_at: "2026-03-01T09:00:00Z", updated_at: "2026-04-29T10:00:00Z",
  },
  {
    id: "task-32", column_id: "col-11", project_id: "proj-3",
    title: "Write integration tests for v2 routes",
    description: "Cover all v2 endpoints with pytest integration tests using a test PostgreSQL database. Include happy-path, validation errors, and auth failure scenarios. Code review in progress.",
    priority: "high", assignee_id: "u3", tags: ["tag-5", "tag-7"],
    due_date: "2026-05-15T00:00:00Z", order: 1,
    created_at: "2026-03-02T10:00:00Z", updated_at: "2026-04-30T11:00:00Z",
  },
  {
    id: "task-33", column_id: "col-11", project_id: "proj-3",
    title: "Deprecation notice on v1 endpoints",
    description: "Add Deprecation and Sunset response headers to all v1 routes. Update the developer portal with migration timeline. Awaiting sign-off from the developer relations team.",
    priority: "low", assignee_id: "u6", tags: ["tag-5"],
    due_date: null, order: 2,
    created_at: "2026-03-03T11:00:00Z", updated_at: "2026-05-01T09:00:00Z",
  },

  // Done (col-12)
  {
    id: "task-34", column_id: "col-12", project_id: "proj-3",
    title: "Set up FastAPI project structure",
    description: "Bootstrapped FastAPI app with routers, schemas, models, and crud layers. Configured Alembic for migrations, dotenv for secrets, and a Docker Compose setup for local development.",
    priority: "high", assignee_id: "u3", tags: ["tag-5"],
    due_date: null, order: 0,
    created_at: "2026-01-25T12:00:00Z", updated_at: "2026-02-01T16:00:00Z",
  },
  {
    id: "task-35", column_id: "col-12", project_id: "proj-3",
    title: "Configure CORS and security headers",
    description: "Added FastAPI CORS middleware with allowed origins from environment config. Set X-Content-Type-Options, X-Frame-Options, and Referrer-Policy security headers globally.",
    priority: "medium", assignee_id: "u3", tags: ["tag-5"],
    due_date: null, order: 1,
    created_at: "2026-01-26T09:00:00Z", updated_at: "2026-02-03T10:00:00Z",
  },
  {
    id: "task-36", column_id: "col-12", project_id: "proj-3",
    title: "Create initial Alembic migration",
    description: "Defined all SQLAlchemy models and generated the initial migration. Applied to dev, staging, and production databases. Migration verified to be reversible (downgrade tested).",
    priority: "high", assignee_id: "u3", tags: ["tag-5"],
    due_date: null, order: 2,
    created_at: "2026-01-27T10:00:00Z", updated_at: "2026-02-05T11:00:00Z",
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PROJECT 4 — Design System
  // ════════════════════════════════════════════════════════════════════════════

  // Backlog (col-13)
  {
    id: "task-37", column_id: "col-13", project_id: "proj-4",
    title: "Create Table component",
    description: "Build a sortable, filterable data table with column resizing, row selection, and pagination. Must meet WCAG AA for keyboard navigation and include a Storybook story with large dataset.",
    priority: "medium", assignee_id: "u4", tags: ["tag-4", "tag-6"],
    due_date: "2026-06-01T00:00:00Z", order: 0,
    created_at: "2026-02-03T09:00:00Z", updated_at: "2026-02-03T09:00:00Z",
  },
  {
    id: "task-38", column_id: "col-13", project_id: "proj-4",
    title: "Build DatePicker component",
    description: "Implement an accessible date picker supporting single date, date range, and month-only selection modes. Support keyboard navigation, locale formatting, and min/max date constraints.",
    priority: "medium", assignee_id: null, tags: ["tag-4", "tag-6"],
    due_date: null, order: 1,
    created_at: "2026-02-04T10:00:00Z", updated_at: "2026-02-04T10:00:00Z",
  },
  {
    id: "task-39", column_id: "col-13", project_id: "proj-4",
    title: "Write motion and animation guidelines",
    description: "Define duration scales (100ms–500ms), easing curves, and usage rules for entrance, exit, and state-change animations. Document prefers-reduced-motion fallback patterns.",
    priority: "low", assignee_id: "u1", tags: ["tag-4"],
    due_date: null, order: 2,
    created_at: "2026-02-05T11:00:00Z", updated_at: "2026-02-05T11:00:00Z",
  },

  // In Progress (col-14)
  {
    id: "task-40", column_id: "col-14", project_id: "proj-4",
    title: "Build Toast notification component",
    description: "Implement success/error/warning/info toasts with auto-dismiss, manual close, and stacking support. Manage global state with Zustand. Ensure ARIA live region announcements for screen readers.",
    priority: "high", assignee_id: "u5", tags: ["tag-4", "tag-6"],
    due_date: "2026-05-20T00:00:00Z", order: 0,
    created_at: "2026-03-01T09:00:00Z", updated_at: "2026-04-10T10:00:00Z",
  },
  {
    id: "task-41", column_id: "col-14", project_id: "proj-4",
    title: "Build Modal / Dialog component",
    description: "Implement a focus-trapped, scroll-locked modal with open/close animations, ESC key support, and close-on-overlay-click. Expose compound components (Header, Body, Footer) for flexibility.",
    priority: "high", assignee_id: "u4", tags: ["tag-4", "tag-6"],
    due_date: "2026-05-22T00:00:00Z", order: 1,
    created_at: "2026-03-02T10:00:00Z", updated_at: "2026-04-12T11:00:00Z",
  },
  {
    id: "task-42", column_id: "col-14", project_id: "proj-4",
    title: "Create Skeleton loading components",
    description: "Build composable skeleton primitives (line, circle, block) with shimmer animation. Create pre-composed skeletons for Card, Table, and Profile layouts. Shimmer must use CSS animation only.",
    priority: "medium", assignee_id: "u5", tags: ["tag-4", "tag-6"],
    due_date: "2026-05-25T00:00:00Z", order: 2,
    created_at: "2026-03-03T11:00:00Z", updated_at: "2026-04-14T09:00:00Z",
  },

  // In Review (col-15)
  {
    id: "task-43", column_id: "col-15", project_id: "proj-4",
    title: "Build Select and Combobox components",
    description: "Accessible select with search-filtering (combobox), multi-select, and grouped options. Built on Radix UI primitives. Under review for keyboard interaction completeness and mobile behaviour.",
    priority: "high", assignee_id: "u4", tags: ["tag-4", "tag-6", "tag-7"],
    due_date: "2026-05-16T00:00:00Z", order: 0,
    created_at: "2026-03-10T09:00:00Z", updated_at: "2026-04-28T10:00:00Z",
  },
  {
    id: "task-44", column_id: "col-15", project_id: "proj-4",
    title: "Document color token system",
    description: "Publish the full color token taxonomy: primitive, semantic, and component tokens. Include light/dark mode values, contrast ratios, and usage dos and don'ts. In review by the brand team.",
    priority: "medium", assignee_id: "u1", tags: ["tag-4", "tag-7"],
    due_date: null, order: 1,
    created_at: "2026-03-11T10:00:00Z", updated_at: "2026-04-29T11:00:00Z",
  },
  {
    id: "task-45", column_id: "col-15", project_id: "proj-4",
    title: "Add Storybook visual regression tests",
    description: "Integrate Chromatic for snapshot and visual regression testing on all Storybook stories. Awaiting approval on the Chromatic subscription budget from engineering manager.",
    priority: "medium", assignee_id: "u5", tags: ["tag-6", "tag-7"],
    due_date: "2026-05-18T00:00:00Z", order: 2,
    created_at: "2026-03-12T11:00:00Z", updated_at: "2026-04-30T14:00:00Z",
  },

  // Done (col-16)
  {
    id: "task-46", column_id: "col-16", project_id: "proj-4",
    title: "Build Button component",
    description: "Implemented Button with variants (primary, secondary, ghost, destructive), sizes (sm, md, lg), loading state with spinner, icon support, and full ARIA compliance. Published to npm.",
    priority: "high", assignee_id: "u4", tags: ["tag-4", "tag-6"],
    due_date: null, order: 0,
    created_at: "2026-02-03T12:00:00Z", updated_at: "2026-02-20T16:00:00Z",
  },
  {
    id: "task-47", column_id: "col-16", project_id: "proj-4",
    title: "Build Input and Textarea components",
    description: "Created controlled Input and Textarea with label, helper text, error state, character count, and prefix/suffix icon slots. Fully accessible with proper fieldset and ARIA attributes.",
    priority: "medium", assignee_id: "u5", tags: ["tag-4", "tag-6"],
    due_date: null, order: 1,
    created_at: "2026-02-05T09:00:00Z", updated_at: "2026-02-22T10:00:00Z",
  },
  {
    id: "task-48", column_id: "col-16", project_id: "proj-4",
    title: "Set up Storybook",
    description: "Installed and configured Storybook 8 with Vite builder, Tailwind integration, dark mode addon, and auto-generated controls from TypeScript prop types. Deployed to Chromatic.",
    priority: "high", assignee_id: "u4", tags: ["tag-4", "tag-6"],
    due_date: null, order: 2,
    created_at: "2026-02-03T14:00:00Z", updated_at: "2026-02-15T11:00:00Z",
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PROJECT 5 — Customer Portal
  // ════════════════════════════════════════════════════════════════════════════

  // Backlog (col-17)
  {
    id: "task-49", column_id: "col-17", project_id: "proj-5",
    title: "Design subscription management UI",
    description: "Design screens for viewing current plan, upgrading/downgrading, adding payment methods, and cancelling subscription. Must handle prorated billing display and upcoming renewal date.",
    priority: "high", assignee_id: "u4", tags: ["tag-4"],
    due_date: "2026-06-01T00:00:00Z", order: 0,
    created_at: "2026-02-10T09:00:00Z", updated_at: "2026-02-10T09:00:00Z",
  },
  {
    id: "task-50", column_id: "col-17", project_id: "proj-5",
    title: "Add support ticket submission form",
    description: "Form with subject, category dropdown, priority, description (rich text), and file attachments (up to 10MB). Integrate with Zendesk API to create tickets and map to customer account.",
    priority: "medium", assignee_id: null, tags: ["tag-6", "tag-5"],
    due_date: null, order: 1,
    created_at: "2026-02-11T10:00:00Z", updated_at: "2026-02-11T10:00:00Z",
  },
  {
    id: "task-51", column_id: "col-17", project_id: "proj-5",
    title: "Build invoice history page",
    description: "List all invoices with date, amount, status (paid/unpaid/overdue), and PDF download link. Include date range filter and CSV export. Handle customers with 100+ invoices via pagination.",
    priority: "medium", assignee_id: "u7", tags: ["tag-6", "tag-5"],
    due_date: "2026-06-05T00:00:00Z", order: 2,
    created_at: "2026-02-12T11:00:00Z", updated_at: "2026-02-12T11:00:00Z",
  },

  // In Progress (col-18)
  {
    id: "task-52", column_id: "col-18", project_id: "proj-5",
    title: "Implement customer authentication",
    description: "Magic link email sign-in and Google OAuth for the portal. Separate auth context from the main app — customers get read-only tokens scoped to their own account data only.",
    priority: "high", assignee_id: "u5", tags: ["tag-5", "tag-3"],
    due_date: "2026-05-20T00:00:00Z", order: 0,
    created_at: "2026-03-01T09:00:00Z", updated_at: "2026-04-15T10:00:00Z",
  },
  {
    id: "task-53", column_id: "col-18", project_id: "proj-5",
    title: "Build account overview dashboard",
    description: "Landing page showing plan summary, usage metrics, recent activity, open support tickets, and upcoming renewal. Fetch data in parallel with React Query and show loading skeletons.",
    priority: "high", assignee_id: "u5", tags: ["tag-6"],
    due_date: "2026-05-23T00:00:00Z", order: 1,
    created_at: "2026-03-02T10:00:00Z", updated_at: "2026-04-18T11:00:00Z",
  },
  {
    id: "task-54", column_id: "col-18", project_id: "proj-5",
    title: "Integrate Stripe billing portal",
    description: "Use Stripe Customer Portal for payment method management and plan changes. Configure allowed features (update card, cancel subscription). Handle portal return URL and show success toast.",
    priority: "high", assignee_id: "u8", tags: ["tag-5", "tag-6"],
    due_date: "2026-05-27T00:00:00Z", order: 2,
    created_at: "2026-03-03T11:00:00Z", updated_at: "2026-04-20T09:00:00Z",
  },

  // In Review (col-19)
  {
    id: "task-55", column_id: "col-19", project_id: "proj-5",
    title: "User profile and preferences page",
    description: "Editable profile page: display name, email (with re-verification), notification preferences, timezone, and language. In review — checking edge cases for email change with active sessions.",
    priority: "medium", assignee_id: "u9", tags: ["tag-6", "tag-7"],
    due_date: "2026-05-17T00:00:00Z", order: 0,
    created_at: "2026-03-10T09:00:00Z", updated_at: "2026-04-28T10:00:00Z",
  },
  {
    id: "task-56", column_id: "col-19", project_id: "proj-5",
    title: "Team members management",
    description: "Invite, remove, and update roles for team members within a customer account. Includes pending invitation management and seat limit enforcement based on plan. Under code review.",
    priority: "high", assignee_id: "u5", tags: ["tag-6", "tag-5", "tag-7"],
    due_date: "2026-05-18T00:00:00Z", order: 1,
    created_at: "2026-03-11T10:00:00Z", updated_at: "2026-04-29T11:00:00Z",
  },
  {
    id: "task-57", column_id: "col-19", project_id: "proj-5",
    title: "API key management interface",
    description: "Create, name, copy, and revoke API keys. Show last-used timestamp and usage count. Keys masked after creation (only shown once). Security review in progress with the infosec team.",
    priority: "high", assignee_id: "u6", tags: ["tag-5", "tag-7", "tag-3"],
    due_date: "2026-05-16T00:00:00Z", order: 2,
    created_at: "2026-03-12T11:00:00Z", updated_at: "2026-04-30T14:00:00Z",
  },

  // Done (col-20)
  {
    id: "task-58", column_id: "col-20", project_id: "proj-5",
    title: "Set up Next.js portal project",
    description: "Created a separate Next.js app for the customer portal within the monorepo. Shared UI package linked, environment config set up, and auth middleware skeleton added to App Router layout.",
    priority: "high", assignee_id: "u5", tags: ["tag-6"],
    due_date: null, order: 0,
    created_at: "2026-02-10T12:00:00Z", updated_at: "2026-02-25T16:00:00Z",
  },
  {
    id: "task-59", column_id: "col-20", project_id: "proj-5",
    title: "Design portal navigation and layout",
    description: "Defined sidebar nav (Account, Billing, Team, API Keys, Support), responsive layout with mobile drawer, and breadcrumb system. Figma file approved and handed off to development.",
    priority: "medium", assignee_id: "u4", tags: ["tag-4"],
    due_date: null, order: 1,
    created_at: "2026-02-11T09:00:00Z", updated_at: "2026-03-01T10:00:00Z",
  },
  {
    id: "task-60", column_id: "col-20", project_id: "proj-5",
    title: "Write portal API data access layer",
    description: "FastAPI router scoped to /portal/v1/ with customer-scoped JWT middleware. Endpoints return only data owned by the authenticated customer. Integration tests complete and passing.",
    priority: "high", assignee_id: "u6", tags: ["tag-5"],
    due_date: null, order: 2,
    created_at: "2026-02-12T10:00:00Z", updated_at: "2026-03-05T11:00:00Z",
  },
];