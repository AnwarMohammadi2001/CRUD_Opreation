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
    const confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      axios.delete("http://localhost:3000/users/" + id).then((res) => {
        navigate("/");
      })
      .catch(err = console.log(err));
    }
  };
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center bg-amber-100">
      <h1 className="text-3xl font-bold text-center pb-10">List of Users</h1>
      <div className="max-w-5xl rounded-md shadow-md mx-auto min-h-[20px] bg-white w-full">
        <div className="flex justify-between py-5 px-5 items-center">
          <div className="flex items-center text-xl font-semibold gap-x-5">
            <span>Total Users: </span>
            <span>{data.length}</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search by Name"
              className="border px-2 py-1.5 rounded-md bg-amber-100 focus:outline-none w-[350px]"
            />
          </div>
          <Link
            to="/create"
            className="bg-green-700 py-2 px-5 rounded-md text-white font-semibold"
          >
            Add New User
          </Link>
        </div>
        <table className="w-full">
          <thead className="bg-amber-300">
            <tr className="">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Email
              </th>

              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Phone
              </th>

              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="border-b border-gray-300">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.phone}
                </td>

                <td className="px-6 py-4 flex gap-x-4 whitespace-nowrap text-sm text-gray-500">
                  <Link
                    to={`/read/${user.id}`}
                    className="bg-sky-700 cursor-pointer hover:scale-95 transition-transform duration-300 py-1 px-4 rounded-md text-white"
                  >
                    Read
                  </Link>
                  <Link
                    to={`/update/${user.id}`}
                    className="bg-green-700 cursor-pointer hover:scale-95 transition-transform duration-300 py-1 px-4 rounded-md text-white"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-700 cursor-pointer hover:scale-95 transition-transform duration-300 py-1 px-4 rounded-md text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
