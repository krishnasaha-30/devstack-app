<div align="center">

# 🧱 Dev Stack

### Build Your Ideal Development Stack

Explore frontend, backend, database, and tooling options, compare them side
by side, and put together the stack that fits your next project.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5-1AD1A5?logo=daisyui&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-black)

</div>

---

## 📖 About the Project

**Dev Stack** is a React + TypeScript web app that helps developers explore
technologies across categories — frontend, backend, databases, languages,
styling, and DevOps — and assemble their own personal development stack.
Browse a catalog of technologies, add the ones you like to your stack, and
manage your picks in a live sidebar, all backed by a clean, responsive UI.

## 🛠️ Tech Stack

| Category  | Technology                          |
| --------- | ------------------------------------ |
| Library   | React (with `use()` + `Suspense`)    |
| Language  | TypeScript                           |
| Bundler   | Vite                                 |
| Styling   | Tailwind CSS + DaisyUI               |
| Icons     | React Icons                          |
| Feedback  | React Toastify                       |

## ✨ Features

### 🗂️ Browse the Technology Catalog
15 technologies are loaded from a JSON file and rendered as responsive cards
(1 column on mobile, 2 on tablet, 3 on desktop) — each showing an icon,
badge, category, difficulty level, and star rating.

### ➕ Build Your Stack
Clicking **Add to Stack** adds a technology to the "Your Stack" sidebar in
real time. Trying to add the same technology twice is blocked with a warning
toast, and the button on an added card switches to a disabled **✓ Added to
Stack** state.

### 🗑️ Manage Your Stack
Remove a single technology with the **✕** button, or clear the whole stack
at once with **Remove All** — every action is confirmed with a toast
notification so you always know what just happened.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## ❓ React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like markup directly inside
JavaScript/TypeScript files. React uses it because it makes describing what
the UI should look like much easier to read and write than calling
`React.createElement()` by hand — it gets compiled into those calls behind
the scenes.

**2. What is the difference between props and state?**
Props are values passed *into* a component from its parent, and a component
can't change its own props. State is data a component owns and manages
internally, and it can change over time (usually through `useState`), which
triggers a re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a functional component hold a piece of data that can change
and re-render the UI when it does. I used it for the mobile menu's open/closed
state in `Nav.tsx`, and for the list of selected technologies (`selectedStack`)
in `TechSection.tsx`.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects (like data fetching) after a component renders,
so the fetch doesn't block the initial render. In this project I actually
loaded the JSON using the newer `use()` hook together with `Suspense` instead
of `useEffect` — `use()` unwraps a promise directly during render and lets
React show the `Suspense` fallback while the fetch is in flight, which is
what powers the loading state here.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` prop helps React tell items in a list apart between renders, so it
knows exactly which item was added, removed, or reordered instead of
re-rendering the whole list. I used each technology's `id` as the key when
mapping over the technology grid and the stack sidebar.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition,
instead of always rendering the same thing. In `YourStack.tsx`, I check
`selectedStack.length === 0` to show a "Your stack is empty." placeholder
when nothing has been added yet, and the actual list of stack items
otherwise.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child as props (e.g. `<TechCard tech={tech} />`).
For a child to send something back up, the parent passes down a state-setter
function as a prop (e.g. `setSelectedStack`), and the child calls that
function with new data — this is how `TechCard` adds a technology and
`StackItemCard` removes one, even though the `selectedStack` state itself
lives in `TechSection`.

---

<div align="center">

Made with React, TypeScript, and a little too much Tailwind.

</div>
