import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const handleForm = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to create task!");
      });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-amber-100">
      <div className="bg-white max-w-2xl mx-auto p-10 rounded-md shadow-lg">
        <form onSubmit={handleForm} className="w-full">
          <h2 className="text-2xl font-bold mb-4">Create New Task</h2>

          <input
            type="text"
            placeholder="Your name..."
            required
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className="w-full py-1.5 px-3 mb-2 border-amber-500 border focus:outline-none rounded-md bg-amber-50"
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            required
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className="w-full py-1.5 px-3 mb-2 border-amber-500 border focus:outline-none rounded-md bg-amber-50"
          />

          <input
            type="number"
            placeholder="Enter Your Phone Number..."
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            required
            className="w-full py-1.5 px-3 mb-2 border-amber-500 border focus:outline-none rounded-md bg-amber-50"
          />

          <button
            type="submit"
            className="bg-green-700 rounded-md mt-5 text-white p-2 w-full"
          >
            Create Task
          </button>
        </form>

        <Link
          to="/"
          className="block bg-red-700 rounded-md text-white p-2 w-full mt-2 text-center"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default Create;
