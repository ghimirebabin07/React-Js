# React Learning Journey

This repository contains my React learning progress, organized by topics in separate branches. Each branch focuses on a specific React concept.

## Branch Structure

### `master` - Initial Setup
**Topic:** Basic Vite + React setup

**Files:**
- `my-app/babin.jsx` - Simple component (at root level, misplaced)
- `my-app/src/App.jsx` - Main app component with basic useState
- `my-app/src/main.jsx` - Entry point

**Learning:**
- Setting up React with Vite
- Basic component structure
- Introduction to useState hook

---

### `main` - Core React Fundamentals
**Topic:** Components, JavaScript in JSX, HTML, and State

**Components:**
- `Counter.jsx` - useState hook with increment/decrement/reset
- `Javascripts.jsx` - Variables, conditions, objects, arrays, functions in JSX
- `User.jsx` - Default and named exports
- `babin.jsx` - Simple component
- `html.jsx` - Using HTML tags and images in React
- `state.jsx` - useState with dynamic name and show/hide functionality

**Learning:**
- Creating and using components
- Default exports vs named exports
- Using JavaScript variables, objects, arrays, and functions inside JSX
- Conditional rendering with ternary operators and && operator
- Using HTML elements and attributes in React
- Working with images (external URLs)
- useState hook for state management
- Event handling (onClick)

---

### `current` - Props
**Topic:** Passing data between components using props

**New Component:**
- `props.jsx` - Component that accepts and displays props (name, age)

**Learning:**
- Understanding props in React
- Passing data from parent to child components
- Using props to make components reusable
- Props with different data types (strings, numbers)

**Example Usage:**
```jsx
<Props name="Babin" age={21} />
<Props name="Ram" age={22} />
```

---

### `onChangeEvent` - Event Handling
**Topic:** Handling onChange events and controlled inputs

**Features:**
- Input field with controlled state
- Real-time display of user input
- Clear/reset functionality

**Learning:**
- Understanding onChange event handler
- Controlled components in React
- Two-way data binding pattern
- Using event.target.value to capture input
- Clearing input fields with state

**Key Concepts:**
```jsx
const [message, setMessage] = useState("");

<input
  type="text"
  value={message}
  onChange={(event) => setMessage(event.target.value)}
/>
<p>You entered: {message}</p>
```

---

## Learning Path

1. **master** → Setup and basic structure
2. **main** → Components, JS in JSX, HTML, State management
3. **current** → Props and component communication
4. **onChangeEvent** → Event handling and controlled inputs

## Project Setup

Each branch contains a complete Vite + React project in the `my-app` folder.

To run any branch:
```bash
cd my-app
npm install
npm run dev
```

## Notes

- Each branch is independent and focuses on one topic
- No merging between branches - each represents a separate learning milestone
- Code progresses from basic to advanced concepts
- All branches use Vite as the build tool

## Next Topics to Explore

- useEffect hook
- Forms and validation
- API calls and data fetching
- React Router
- Context API
- Custom hooks
