### 🟢 Practice 1: The "Star Rating" (Easy)

**Focus:** Component Design, Props API, "Forced Simplicity".

**The Prompt:** Build a `StarRating` component that accepts:

1. `maxStars` (number, default 5).

2. `currentRating` (number).

3. `onChange` (callback).

**The Challenge:**

- Render the stars dynamically based on `maxStars`.

- Clicking a star should update the rating.

- **Constraint:** Do not import any icons. Use a simple text character `★` and `☆`.

---

### 🟡 Practice 2: The "Filterable User List" (Intermediate)

**Focus:** State Design (Derived State), Side Effects, Web Concepts.

**The Prompt:** Fetch a list of users (mocked) and provide a search bar to filter them by name. **Constraint:** The API is slow. Do not filter on the _server_; filter on the _client_.

**The Mock Data:**

```typescript
const USERS = [
  { id: 1, name: "Alice Johnson", role: "Admin" },
  { id: 2, name: "Bob Smith", role: "User" },
  { id: 3, name: "Charlie Brown", role: "User" },
];
const fetchUsers = () => Promise.resolve(USERS);
```

---

### 🔴 Practice 3: Custom Hook & Testing (Intermediate/Advanced)

**Focus:** Hook Design, Testing Frameworks (Jest/RTL).

**The Prompt:**

1. Write a custom hook `useToggle(initialValue)` that returns `[value, toggle]`.

2. Write a **Unit Test** for this hook.
