import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((response) => setValues(response.data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]); // Dependency added to avoid warning

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/users/${id}`, values)
      .then(() => navigate("/"))
      .catch((error) => {
        console.error("Update failed:", error);
        alert("Failed to update user!");
      });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-amber-100 to-amber-300">
      <div className="bg-white max-w-lg w-full p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Update User
        </h2>
        <form onSubmit={handleUpdate} className="w-full">
          <div className="mb-4">
            <label className="text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name..."
              required
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email..."
              required
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-700 font-semibold">Phone Number</label>
            <input
              type="number"
              placeholder="Enter your phone number..."
              required
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
          >
            Update User
          </button>
        </form>

        <Link
          to="/"
          className="block mt-4 text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default Update;
