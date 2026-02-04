import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currentRating, setCurrentRating] = useState(5)

  return (
    <>
      <StarRating
        maxStars={7}
        currentRating={currentRating}
        onChange={(newRating) => {
          setCurrentRating(newRating)
        }}></StarRating>
      <p>Practice 2: The "Filterable User List" (Intermediate)</p>
      <UserList></UserList>
    </>
  )
}

interface StarRatingProps {
  maxStars?: number,
  currentRating: number,
  onChange: (newRating: number) => void
}

const StarRating = ({ maxStars = 5, currentRating, onChange }: StarRatingProps) => {

  const handleClick = (index: number) => {
    console.debug(`Star no. ${index} clicked`);
    onChange(index);
  };

  const stars = Array.from({ length: maxStars }, (_, index) => { return index + 1 })
    .map(index => {
      return <span
        style={{ cursor: 'pointer', fontSize: '24px' }}
        key={`${index}`}
        role='button'
        onClick={() => { handleClick(index) }}>{index <= currentRating ? '★' : '☆'}
      </span>
    })

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>How would you rate it?</span>
      <div style={{ display: "flex", flexDirection: "row", gap: 3 }}>
        {stars}
      </div>
    </div>
  )
}

// Practice 2: The "Filterable User List" (Intermediate)

const USERS = [
  { id: 1, name: "Alice Johnson", role: "Admin" },
  { id: 2, name: "Bob Smith", role: "User" },
  { id: 3, name: "Charlie Brown", role: "User" },
];
const fetchUsers = () => Promise.resolve(USERS);

interface User {
  id: number,
  name: string,
  role: string
}

const UserList = (() => {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [users, setUsers] = useState<User[]>([])

  // TODO: but why need `useEffect`?
  useEffect(() => {
    fetchUsers()
      .then(fetchedUsers => {
        setAllUsers(fetchedUsers)
        setUsers(fetchedUsers)
      });
  }, []); // Empty dependency array means this runs only once on mount.

  const userListings = users.map(user => {
    return (
      <div key={user.id} style={{ display: 'flex', gap: 3 }}>
        <span>{user.id}</span>
        <span>{user.name}</span>
        <span>{user.role}</span>
      </div>
    )
  })

  const search = (keyword: string) => {
    console.debug("search triggered");
    if (!keyword.trim() || 0 == keyword.trim().length) {
      console.debug("no keyword");
      console.debug(allUsers);
      setUsers(allUsers)
      return
    }

    // Filter based on keyword, for example
    const newUsers = users.filter(user => user.name.toLowerCase().includes(keyword.toLowerCase()));
    setUsers(newUsers);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <span style={{ fontSize: '24px' }}>User List</span>
      <input placeholder='Search here' onChange={(e) => search(e.target.value)}>
      </input>
      <div>
        {userListings}
      </div>
    </div>
  )
})

export default App
