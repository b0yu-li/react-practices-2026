import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currentRating, setCurrentRating] = useState(5);

  return (
    <>
      <StarRating
        maxStars={7}
        currentRating={currentRating}
        onChange={(newRating) => {
          setCurrentRating(newRating);
        }}
      ></StarRating>
      <p>Practice 2: The "Filterable User List" (Intermediate)</p>
      <UserList></UserList>
    </>
  );
}

interface StarRatingProps {
  maxStars?: number;
  currentRating: number;
  onChange: (newRating: number) => void;
}

const StarRating = ({
  maxStars = 5,
  currentRating,
  onChange,
}: StarRatingProps) => {
  const handleClick = (index: number) => {
    console.debug(`Star no. ${index} clicked`);
    onChange(index);
  };

  const stars = Array.from({ length: maxStars }, (_, index) => {
    return index + 1;
  }).map((index) => {
    return (
      <span
        style={{ cursor: "pointer", fontSize: "24px" }}
        key={`${index}`}
        role="button"
        onClick={() => {
          handleClick(index);
        }}
      >
        {index <= currentRating ? "★" : "☆"}
      </span>
    );
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>How would you rate it?</span>
      <div style={{ display: "flex", flexDirection: "row", gap: 3 }}>
        {stars}
      </div>
    </div>
  );
};

// Practice 2: The "Filterable User List" (Intermediate)

const USERS = [
  { id: 1, name: "Alice Johnson", role: "Admin" },
  { id: 2, name: "Bob Smith", role: "User" },
  { id: 3, name: "Charlie Brown", role: "User" },
];
const fetchUsers = () => Promise.resolve(USERS);

interface User {
  id: number;
  name: string;
  role: string;
}

const UserList = () => {
  /* State Analasis
  Input:
  1. allUsers
  2. searchTerm
  Ouput:
  + filtered result
  */

  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Q: Why need `useEffect`? A: Otherwise `fetchUsers()` is called for every rendering
  useEffect(() => {
    fetchUsers().then((fetchedUsers) => {
      setAllUsers(fetchedUsers);
    });
  }, []); // Empty dependency array means this runs only once on mount.
  // TODO: But what is the "dependency array"?

  const userListings = allUsers
    .filter((user) => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .map((user) => {
      return (
        <div key={user.id} style={{ display: "flex", gap: 3 }}>
          <span>{user.id}</span>
          <span>{user.name}</span>
          <span>{user.role}</span>
        </div>
      );
    });

  // TODO: rename this method  
  const search = (searchTerm: string) => {
    if (!searchTerm.trim() || 0 == searchTerm.trim().length) {
      console.debug("no search term");
      setSearchTerm("");
      return;
    }
    setSearchTerm(searchTerm);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <span style={{ fontSize: "24px" }}>User List</span>
      <input
        placeholder="Search here"
        onChange={(e) => search(e.target.value)}
      ></input>
      <div>{userListings}</div>
    </div>
  );
};

export default App;
