import { loginUser } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";
const intialState = {
  email: "",
  password: "",
};
function AuthLogin() {
  const [formData, setFormData] = useState(intialState);
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      if (data.payload.success) {
        toast.success("Logged in successfully ");
      } else {
        toast.error("failed to login");
      }
    });
  };
  return (
    <div className="bg-slate-400 p-10 w-full rounded-lg">
      <form className="flex flex-col gap-3 ">
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-4xl text-black font-bold mb-5">Sign IN</h2>

          <div className="flex flex-col w-full gap-1">
            <label>Email</label>
            <input
              type="email"
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
            onClick={handleOnSubmit}
            className="w-full bg-slate-950 rounded-lg  px-4 py-2  text-white"
          >
            Submit
          </button>
        </div>
        <div>
          <h5 className="opacity-60">
            Don't have an account?{" "}
            <Link className="text-gray-900 font-bold" to={"/auth/register"}>
              Sign up
            </Link>
          </h5>
        </div>
      </form>
    </div>
  );
}

export default AuthLogin;
