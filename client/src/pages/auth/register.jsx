import { registerUser } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
const initialState = {
  userName: "",
  email: "",
  password: "",
};
function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(formData);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data.payload.success) {
        toast.success("Registration complet");
        navigate("/auth/login");
      } else {
        toast.error(
          data.payload.message || "Registration failed. Please try again."
        );
      }
    });
  };
  return (
    <div className="bg-slate-400 p-10 w-full rounded-lg">
      <form className="flex flex-col gap-3 ">
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-4xl text-black font-bold mb-5">Sign Up</h2>
          <div className="flex flex-col w-full gap-1">
            <label>User Name</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Enter the user name"
              name="userName"
              value={formData.userName}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label>Email</label>
            <input
              type="Email"
              placeholder="Enter the Email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label>Password</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              type="Password"
              placeholder="Enter the Password"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="w-full bg-slate-950 rounded-lg  px-4 py-2  text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div>
          <h5 className="opacity-60">
            Already have an account?{" "}
            <Link className="text-gray-900 font-bold" to={"/auth/login"}>
              Login
            </Link>
          </h5>
        </div>
      </form>
    </div>
  );
}

export default AuthRegister;
