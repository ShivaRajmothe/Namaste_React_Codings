import { useEffect, useState } from "react";

const users = [
  { id: 1, name: "Shivaraj" },
  { id: 2, name: "Raj" },
  { id: 3, name: "Shivaji" },
  { id: 4, name: "Shivaji Maharaj" },
  { id: 5, name: "Shivaji Raje Bhosle" },
];

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  // 🔹 Debouncing logic
  useEffect(() => {
    const timer = setTimeout(() => {
      const result = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredUsers(result);

      // Simulating API call
    }, 500); // debounce delay (500ms)

    return () => clearTimeout(timer); // cleanup
  }, [searchTerm]);

  return (
    <div>
      <h2>Search Filter (Debouncing)</h2>

      <input
        type="text"
        placeholder="Search user..."
        className="border border-black p-1"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
 
      {filteredUsers.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default SearchFilter;