import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data[id]) {
          setUser(data[id]);
        } else {
          console.error("User not found");
        }
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  // Updated data structure
  const { profile, education, work_experience } = user;
  const { first_name, last_name, age, gender, address } = profile.personal_information;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/10 bg-white p-6 border-r-2 border-gray-200 shadow-md flex flex-col items-center">
        {/* Sidebar Buttons */}
        <button className="w-full p-4 bg-gray-200 rounded-lg mb-4 mt-2 hover:bg-gray-300 text-left"></button>
        <button className="w-full p-4 bg-gray-200 rounded-lg mb-4 mt-2 hover:bg-gray-300 text-left"></button>
        <button className="w-full p-4 bg-gray-200 rounded-lg mb-4 mt-2 hover:bg-gray-300 text-left"></button>
        <button className="w-full p-4 bg-gray-200 rounded-lg mb-4 mt-2 hover:bg-gray-300 text-left"></button>
        <button className="w-full p-4 bg-gray-200 rounded-lg mb-4 mt-2 hover:bg-gray-300 text-left"></button>
        <button className="w-full p-4 bg-gray-200 rounded-lg mb-4 mt-2 hover:bg-gray-300 text-left"></button>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        {/* Banner */}
        <div className="bg-gray-300 h-[300px] w-full relative">
          {/* Floating Content */}
          <div className="absolute -bottom-80 left-0 w-full px-8 flex">
            {/* Left Box */}
            <div className="w-1/6 bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full bg-gray-400 flex items-center justify-center relative">
                  <span className="text-gray-600 font-bold">Image</span>
                  <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md border border-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.232 5.232l3.536 3.536M9 11.25h6.75m-2.25-2.25l5.25 5.25m0 0L12 21.75M2.25 16.5l7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
                <h2 className="text-xl font-semibold mt-4 text-center">
                  {first_name} {last_name}
                </h2>

                <ul className="mt-6 w-full">
                  <li className="mb-2 p-3 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300">
                    Profile
                  </li>
                  <li className="mb-2 p-3 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300">
                    Education
                  </li>
                  <li className="p-3 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300">
                    Work Experience
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Box */}
            
            <div className="w-5/6 bg-white p-6 rounded-lg shadow-md ml-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Personal Information</h2>
                <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
                  Edit
                </button>
              </div>

              <div className="text-lg">
                <p>
                  <strong>First Name:</strong> {first_name}
                </p>
                <p>
                  <strong>Last Name:</strong> {last_name}
                </p>
                <p>
                  <strong>Age:</strong> {age}
                </p>
                <p>
                  <strong>Gender:</strong> {gender}
                </p>
                <p>
                  <strong>Address:</strong> {address}
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
