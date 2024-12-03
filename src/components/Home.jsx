import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  console.log(users);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="space-y-4">
        {users.map((user, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded shadow">
            <Link
              to={`/profile/${index}`}
              className="text-blue-500 hover:underline"
            >
              {user.profile.personal_information.first_name}{" "}
              {user.profile.personal_information.last_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
