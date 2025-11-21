# Design Guidelines: Cute Cartoon Student Notes Website

## Design Approach
**Reference-Based with Kawaii Aesthetic**: Drawing inspiration from Notion's clean note-taking interface combined with cute, playful cartoon elements similar to Duolingo's friendly UI and educational platforms like Kahoot. This creates an engaging, student-friendly experience that makes studying feel less intimidating.

## Core Design Principles
1. **Playful Professionalism**: Cute and approachable while maintaining readability for studying
2. **Joyful Interaction**: Every action should feel rewarding and fun
3. **Clarity First**: Despite the playful aesthetic, notes must be easy to read and organize

## Typography
- **Primary Font**: Rounded sans-serif (Google Fonts: "Nunito" or "Quicksand")
- **Headings**: 700 weight, rounded letterforms
- **Body Text**: 400-500 weight for comfortable reading
- **Note Titles**: text-2xl to text-3xl, bold
- **Note Content**: text-base with generous line-height (1.7)
- **UI Labels**: text-sm, 600 weight

## Layout System
**Spacing**: Use Tailwind units of **2, 3, 4, 6, 8, 12** (e.g., p-4, m-6, gap-8)
- Compact elements: p-2, gap-3
- Standard spacing: p-4, m-6
- Generous breathing room: p-8, gap-12

## Component Library

### Navigation
- **Top Bar**: Sticky header with rounded corners on avatar/profile, playful logo with cartoon character mascot
- **Sidebar** (Desktop): Icons with cute illustrations, categories with emoji/icon prefixes
- **Mobile**: Bottom navigation bar with bouncy icon animations

### Note Cards
- Rounded corners (rounded-2xl)
- Soft shadow (shadow-md)
- Hover: Lift effect with larger shadow
- Include: Subject tag, date, preview text, share button
- Grid layout: 2-3 columns on desktop, single column mobile

### Editor
- Clean, distraction-free writing area with max-w-4xl
- Floating toolbar with rounded buttons
- Inline formatting options
- Emoji picker integration for fun note-taking

### Buttons
- Fully rounded (rounded-full)
- Soft, puffy appearance with generous padding (px-6 py-3)
- Primary actions: Solid fills
- Secondary: Outlined with thick borders
- Icons paired with text for clarity

### Forms & Inputs
- Rounded inputs (rounded-xl)
- Soft borders, focus states with subtle glow
- Placeholder text with friendly prompts ("What did you learn today?")

### Share Modal
- Centered card with cute share icon
- Copy link button with success animation
- Privacy toggle (public/private viewing)
- QR code option for easy mobile sharing

## Images

### Hero Section
**Large Illustration**: Custom cartoon illustration showing students studying together with floating books, pencils, and happy characters. Warm, inviting scene that communicates collaboration and learning. Place at top of homepage with text overlay.

### Empty States
- Cute cartoon characters holding signs like "No notes yet! Start learning!"
- Illustrations for each category/subject

### Category Icons
- Hand-drawn style icons for subjects (math, science, language, etc.)
- Consistent stroke weight, playful expressions

## Page Layouts

### Homepage/Dashboard
- Hero with illustration + welcome message
- Quick action buttons (New Note, Browse Shared Notes)
- Recent notes grid (3 columns desktop, 1 mobile)
- Subject categories with cute icons

### Note View/Editor
- Clean max-w-4xl container
- Title at top with large, friendly font
- Metadata bar (date, tags, share button)
- Rich text editor with inline toolbar
- Related notes sidebar (desktop only)

### Shared Notes Gallery
- Masonry grid of public notes
- Filter by subject with colorful tag buttons
- Search bar with magnifying glass icon
- Each card shows preview + author avatar

## Animations
**Minimal but Delightful**:
- Gentle bounce on button clicks
- Fade-in for cards on scroll
- Success checkmark animation when sharing
- Loading states with cute spinner character

## Accessibility
- Maintain WCAG contrast ratios despite soft aesthetic
- All interactive elements have clear focus states
- Icon buttons include aria-labels
- Keyboard navigation fully supported

## Mobile Considerations
- Bottom navigation for primary actions
- Swipe gestures for note management
- Larger touch targets (min 44x44px)
- Simplified editor toolbar for thumb-typing

---

**Key Differentiator**: This design balances cute aesthetics with functional note-taking. The playful elements make studying feel less daunting while maintaining the clarity needed for effective learning and sharing.