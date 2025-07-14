"use client";

import axios from "axios";
import { Eye, EyeClosed, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    username : "",
    email: "",
    password: "",
    confirmPassword : ""
  });

  console.log(user, "user");

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    
    
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-[400px] min-h-[400px] flex  flex-col justify-center items-center p-5 shadow-2xl bg-white mt-2 gap-6 rounded-2xl">
        <Image
          src={"/kland.png"}
          width={100}
          height={100}
          alt="Logo"
          title="logo"
          className="h-auto w-auto"
        />
        <form className="w-full h-full flex flex-col justify-center items-center gap-4">
          <input
            type="text"
            name="username"
            id="username"
            value={user.username}
            placeholder="Username *"
            className="w-full py-3 px-5 bg-gray-100 rounded-2xl outline-0"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            placeholder="Email *"
            className="w-full py-3 px-5 bg-gray-100 rounded-2xl outline-0"
            onChange={handleChange}
            required
          />
          <div className="w-full flex justify-center items-center gap-2 py-3 px-5 bg-gray-100 rounded-2xl">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={user.password}
              placeholder="Password *"
              className="w-full outline-0 "
              onChange={handleChange}
              required
            />
            <button type="button" onClick={togglePassword}>
              {showPassword ? (
                <Eye className="text-gray-400" />
              ) : (
                <EyeOff className="text-gray-400" />
              )}
            </button>
          </div>
          <div className="w-full flex justify-center items-center gap-2 bg-gray-100 rounded-2xl py-3 px-5">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              value={user.confirmPassword}
              placeholder="Confirm password *"
              className="w-full outline-0"
              onChange={handleChange}
              required
            />
            <button type="button" onClick={togglePassword}>
              {showPassword ? (
                <Eye className="text-gray-400" />
              ) : (
                <EyeOff className="text-gray-400" />
              )}
            </button>
          </div>
          <button
            type="submit"
            onClick={()=> router.push("/login")}
            className="w-full py-3 bg-teal-400 text-white hover:bg-teal-600 duration-300 ease-in rounded-2xl"
          >
            Register
          </button>
        </form>
        <p>
          Already have account ?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-teal-400 cursor-pointer hover:text-teal-600 duration-300 ease-in"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
