import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="h-screen flex justify-center items-center bg-amber-100">
      <div className="w-[600px] mx-auto bg-white  p-10  rounded-md shadow-lg">
        <h3 className="text-xl font-bold text-center">Details of user</h3>
        <div className="space-y-2">
          <div>
            <strong>Name :{data.name}</strong>
          </div>

          <div>
            <strong>Email :{data.email}</strong>
          </div>
          <div>
            <strong>Phone :{data.phone}</strong>
          </div>
        </div>
        <div className="flex items-center gap-x-5 py-2">
          {" "}
          <Link
            to={`/update/${id}`}
            className="block bg-green-700 rounded-md text-white py-2 px-4 mt-2 text-center"
          >
            Edit
          </Link>
          <Link
            to="/"
            className="block bg-red-700 rounded-md text-white py-2 px-4  mt-2 text-center"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Read;
