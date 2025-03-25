import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Update = () => {
  //   const [data, setData] = useState([]);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((response) => setValues(response.data))
      .catch((error) => console.error(error));
  }, []);
  const upadedHandleForm = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/users/" + id, values)
      .then((response) => {
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
        <form onSubmit={upadedHandleForm} className="w-full">
          <h2 className="text-2xl font-bold mb-4">Create New Task</h2>

          <input
            type="text"
            placeholder="Your name..."
            required
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className="w-full py-1.5 px-3 mb-2 border-amber-500 border focus:outline-none rounded-md bg-amber-50"
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            required
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className="w-full py-1.5 px-3 mb-2 border-amber-500 border focus:outline-none rounded-md bg-amber-50"
          />

          <input
            type="number"
            placeholder="Enter Your Phone Number..."
            required
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            className="w-full py-1.5 px-3 mb-2 border-amber-500 border focus:outline-none rounded-md bg-amber-50"
          />

          <button
            type="submit"
            className="bg-green-700 rounded-md mt-5 text-white p-2 w-full"
          >
            Update Task
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

export default Update;
