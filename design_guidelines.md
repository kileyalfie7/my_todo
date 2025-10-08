# Todo List Application - Design Guidelines

## Design Approach

**Selected Approach:** Design System - Productivity Focus (Linear/Notion-inspired)

**Rationale:** Todo list applications prioritize efficiency, clarity, and quick task management. Drawing inspiration from Linear's clean interface and Notion's organizational patterns creates an optimal balance of aesthetics and functionality.

**Key Principles:**
- Minimal cognitive load - users should focus on tasks, not UI
- Instant feedback for all interactions
- Clear visual hierarchy for task states
- Keyboard-friendly interactions

---

## Core Design Elements

### A. Color Palette

**Dark Mode Primary:**
- Background: 222 14% 10% (deep charcoal)
- Surface: 222 13% 15% (elevated cards)
- Text Primary: 210 15% 90%
- Text Secondary: 210 10% 65%
- Border: 215 15% 25%

**Light Mode Primary:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Text Primary: 222 15% 15%
- Text Secondary: 222 10% 45%
- Border: 220 13% 90%

**Accent Colors:**
- Primary Action: 220 80% 55% (confident blue)
- Success/Complete: 142 70% 45% (green for completed tasks)
- Warning: 38 92% 50% (amber for pending)
- Danger/Delete: 0 72% 51% (red)

### B. Typography

**Font Stack:** Inter (via Google Fonts CDN), system-ui fallback

**Hierarchy:**
- H1 (App Title): text-2xl font-semibold
- H2 (Section Headers): text-xl font-medium
- Body (Tasks): text-base font-normal
- Small (Metadata): text-sm font-normal
- Input Fields: text-base font-normal

### C. Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 8, 12, 16
- Micro spacing: p-2, gap-2 (8px)
- Standard spacing: p-4, gap-4 (16px)
- Section spacing: p-8, gap-8 (32px)
- Container padding: px-4 md:px-8 lg:px-12

**Container Structure:**
- Max-width: max-w-4xl mx-auto (centered, focused width)
- Side padding: px-4 on mobile, px-8 on desktop
- Vertical rhythm: py-8 to py-16 sections

### D. Component Library

**Task Card:**
- Background: Surface color with subtle border
- Padding: p-4
- Rounded corners: rounded-lg
- Hover state: subtle background lift (3% lighter/darker)
- Checkbox: Custom styled, 20x20px, rounded-md
- Completed state: text with line-through, 60% opacity

**Input Fields:**
- Height: h-12
- Padding: px-4
- Border: 1px solid border color
- Focus: Ring with primary color (ring-2 ring-primary/30)
- Rounded: rounded-lg
- Dark mode: Explicit dark background matching theme

**Buttons:**
- Primary: bg-primary text-white, h-10 px-6, rounded-lg, font-medium
- Secondary: variant="outline" with border
- Icon buttons: 40x40px, rounded-lg, hover background
- Danger: bg-red text-white for delete actions

**Navigation/Header:**
- Fixed or sticky top bar
- Height: h-16
- Background: Surface with border-bottom
- Contains: App logo/title, add task button, filter controls

**Empty States:**
- Centered icon + message
- Subtle illustration or icon (from Heroicons)
- Call-to-action button

### E. Interaction Patterns

**Animations (Minimal):**
- Task completion: Subtle fade + strikethrough (200ms)
- Delete action: Slide out + fade (250ms)
- Add task: Slide down entrance (150ms)
- Hover states: Quick background transitions (100ms)

**Layout Behavior:**
- Single column task list on mobile
- Generous whitespace between tasks (gap-3)
- Quick add input always visible or accessible
- Inline editing on task click
- Swipe gestures for mobile delete (optional)

---

## Specific Implementation Notes

**Task List View:**
- Group tasks: Incomplete at top, completed below with visual separation
- Each task row: Checkbox | Title | Edit/Delete icons
- Status indicator: Color-coded dot or icon for priority (if implemented)
- Timestamp display: "2 hours ago" format, text-sm text-secondary

**Forms:**
- Add Task: Single-line input with submit button inline
- Edit Task: Inline editing or modal overlay
- Validation: Real-time with error messages below fields

**Responsive Behavior:**
- Mobile (< 768px): Full width, bottom sheet for add/edit
- Desktop: Centered container, modal dialogs
- Touch targets: Minimum 44x44px for mobile

**Icons:** Use Heroicons (outline) via CDN
- Check circle (completed)
- Pencil (edit)
- Trash (delete)  
- Plus (add task)

---

## Quality Standards

- Clean, distraction-free interface focusing on task management
- Consistent dark mode throughout all components and inputs
- Fast, responsive interactions with minimal animation overhead
- Clear visual feedback for all user actions
- Accessibility: Proper labels, keyboard navigation, focus indicators