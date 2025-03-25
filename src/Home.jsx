import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then(() => navigate("/"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-200 to-amber-50">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center pb-8 drop-shadow-lg">
        📋 List of Users
      </h1>
      <div className="max-w-5xl rounded-lg shadow-lg mx-auto bg-white w-full p-6">
        <div className="flex justify-between items-center pb-6 border-b border-gray-300">
          <div className="flex items-center text-lg font-semibold text-gray-700 gap-x-4">
            <span className="text-green-700">👥 Total Users:</span>
            <span className="text-lg text-gray-900">{data.length}</span>
          </div>
          <input
            type="text"
            placeholder="🔍 Search by Name"
            className="border border-gray-300 px-3 py-2 rounded-md bg-gray-100 focus:ring focus:ring-green-300 w-72"
          />
          <Link
            to="/create"
            className="bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out py-2 px-5 rounded-md text-white font-semibold shadow-md transform hover:scale-105"
          >
            ➕ Add New User
          </Link>
        </div>
        
        <div className="overflow-hidden rounded-lg mt-5">
          <table className="w-full border-collapse">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Phone</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={user.id} className={`border-b border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  <td className="px-6 py-4 text-sm text-gray-700">{user.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{user.phone}</td>
                  <td className="px-6 py-4 flex gap-x-3 text-sm">
                    <Link
                      to={`/read/${user.id}`}
                      className="bg-sky-600 hover:bg-sky-700 transition-transform transform hover:scale-105 py-1 px-4 rounded-md text-white font-medium"
                    >
                      📖 Read
                    </Link>
                    <Link
                      to={`/update/${user.id}`}
                      className="bg-green-600 hover:bg-green-700 transition-transform transform hover:scale-105 py-1 px-4 rounded-md text-white font-medium"
                    >
                      ✏️ Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-600 hover:bg-red-700 transition-transform transform hover:scale-105 py-1 px-4 rounded-md text-white font-medium"
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Home;
