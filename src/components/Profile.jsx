import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiPencil } from "react-icons/bi";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // State to control slider visibility
  const [editedUser, setEditedUser] = useState({}); // State to store edited data

  useEffect(() => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data[id]) {
          setUser(data[id]);
          setEditedUser(data[id].profile.personal_information); // Initialize edited data
        } else {
          console.error("User not found");
        }
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true); // Show the slider
  };

  const handleCloseSlider = () => {
    setIsEditing(false); // Close the slider
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Save the changes (You can add your API call here to update the user data)
    setUser((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        personal_information: editedUser,
      },
    }));
    setIsEditing(false); // Close the slider after saving
  };

  if (!user) return <div>Loading...</div>;

  // Updated data structure
  const { first_name, last_name, age, gender, address } = user.profile.personal_information;

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
                    <BiPencil />
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
                <button
                  onClick={handleEditClick}
                  className="flex items-center bg-white text-gray-600 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100"
                >
                  Edit
                  <BiPencil className="text-lg ml-2" />
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

      {/* Slider for Editing */}
      {isEditing && (
        <>
          {/* Background Blur */}
          <div className="fixed top-0 left-0 w-full h-full bg-blue-500 bg-opacity-10 backdrop-blur-sm z-40" />
          
          <div className="fixed top-0 right-0 w-1/2 h-full bg-white shadow-xl z-50 p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Edit Personal Information</h2>
              <button onClick={handleCloseSlider} className="text-lg font-semibold text-gray-500">
                X
              </button>
            </div>

            <div className="text-lg">
              <label className="block mb-2">
                <strong>First Name:</strong>
                <input
                  type="text"
                  name="first_name"
                  value={editedUser.first_name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </label>
              <label className="block mb-2">
                <strong>Last Name:</strong>
                <input
                  type="text"
                  name="last_name"
                  value={editedUser.last_name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </label>
              <label className="block mb-2">
                <strong>Age:</strong>
                <input
                  type="number"
                  name="age"
                  value={editedUser.age}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </label>
              <label className="block mb-2">
                <strong>Gender:</strong>
                <input
                  type="text"
                  name="gender"
                  value={editedUser.gender}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </label>
              <label className="block mb-2">
                <strong>Address:</strong>
                <input
                  type="text"
                  name="address"
                  value={editedUser.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </label>

              <button
                onClick={handleSaveChanges}
                className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
