"use client";

import axios from "axios";
import { Eye, EyeClosed, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  console.log(user, "user");

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://dev-api.wanasti.com/api/v1/user/login?lang=en&currencyCode=KW",
        {
          email: "eddy@yopmail.com",
          phone: "",
          phoneCode: "965",
          password: "123123",
          deviceToken: "",
          deviceType: "",
          deviceModel: "",
          appVersion: "",
          osVersion: "",
        },
        {
          headers: {
            auth: "dAwMpo/TAWLhFrwwr3Wzcmc8XTdmAgp6zmGLsFmJ9HAnEbTQAg937i/hqKFjtFVQ4TnQ2y6xlVSeTKy3VWcxvalwvmPq6qF7+UcLd3wBXYoVQ2Puj49mTweKh/v2Rvj9zyVjfbexFkjMNZ5XyGucmdOI6XMmI98Zvu38Jh1fOo8157YxlgCozKkonixczjGIn3RKLuv7v3gXDRl4irzRcS6lYKGJB8vfA847GUppsVjdZV9bAjADfqUP2Iyl6Nz8MOWrSHNy8tWqhM6mI165rCwH3xMv7HEexmsMO7Mi36c=s",
            sessiontoken: "abc123",
          },
        }
      );

      if (res.data) {
        toast.success("Login Successfull");
        router.push("/profile")
      }
    } catch (error) {
      console.log("Error in login : " + error);
      toast.error("Login Failed");
    }
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-3">
      <div className="max-w-[400px] min-h-[400px] flex  flex-col justify-center items-center p-5 shadow-2xl bg-white mt-2 gap-6 rounded-2xl">
        <Image
          src={"/kland.png"}
          width={100}
          height={100}
          alt="Logo"
          title="logo"
          className="h-auto w-auto"
        />
        <h2 className="text-md font-extralight uppercase">
          Enter your email to continue
        </h2>
        <form className="w-full h-full flex flex-col justify-center items-center gap-4">
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
            onClick={handleSubmit}
            className="w-full py-3 bg-teal-400 text-white hover:bg-teal-600 duration-300 ease-in rounded-2xl"
          >
            Login
          </button>
        </form>
        <p>
          Don't have an account ?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-teal-400 cursor-pointer hover:text-teal-600 duration-300 ease-in"
          >
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
