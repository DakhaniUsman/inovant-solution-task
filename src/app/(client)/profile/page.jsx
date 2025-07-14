"use client";

import {
  AlignJustify,
  Camera,
  CircleQuestionMark,
  Eye,
  EyeOff,
  Headset,
  Instagram,
  LogOut,
  User,
  User2,
  UserX,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setUser({
      firstName: "test" || "",
      lastName: "test",
      email: "test@yopmail.com",
      number: "98563214",
    });
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className="bg-teal-600 py-5 px-4 text-white pb-10">
        <header className="w-full flex justify-between items-center  ">
          <Image
            src={"/kland.png"}
            width={100}
            height={100}
            alt="Logo"
            title="logo"
            className="h-auto w-auto"
          />
          <AlignJustify className="text-white" size={36} />
        </header>
        <div className="w-full text-center flex flex-col justify-center gap-4 ">
          <h2 className="text-4xl font-extrabold text-white uppercase italic">
            My Account
          </h2>
          <p>
            Manage Your Fun: View Tickets, Book Zones, and Track <br /> Your
            Adventure!
          </p>
        </div>
      </div>
      <div className="card w-[95%] md:w-[80%] shadow-2xl p-6 bg-white rounded-2xl flex justify-start gap-5 -mt-10 mx-auto">
        <div className="w-fit h-full rounded-[90px] shadow-2xl  shadow-gray-500 p-2">
          <User className="text-black" size={100} />
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="text-black font-bold">{user.firstName}</p>
          <p className="text-gray-600 font-bold">+965 {user.number}</p>
          <p className="text-gray-600 font-bold">{user.email}</p>
        </div>
      </div>
      <div className="w-[95%] md:w-[85%] flex flex-col md:flex-row justify-evenly mt-10 mx-auto mb-10">
        <div className="left w-full md:w-[30%] flex flex-col h-full shadow-2xl rounded-2xl p-6 text-gray-500 font-bold">
          <div className="w-full flex items-center text-teal-600 gap-3 border-b py-4 border-gray-300 cursor-pointer">
            <User /> <span>Edit Profile</span>
          </div>
          <div className="w-full flex items-center gap-3 border-b py-4 border-gray-300 cursor-pointer">
            <CircleQuestionMark /> <span>FAQS</span>
          </div>
          <div className="w-full flex items-center gap-3 border-b py-4 border-gray-300 cursor-pointer">
            <Headset /> <span>Contact Us</span>
          </div>
          <div className="w-full flex items-center gap-3 border-b py-4 border-gray-300 cursor-pointer">
            <UserX /> <span>Delete Account</span>
          </div>
          <div
            className="w-full flex items-center text-red-600 gap-3 py-4 pb-0 cursor-pointer"
            onClick={() => router.push("/login")}
          >
            <LogOut /> <span>Logout</span>
          </div>
        </div>
        <div className="right w-full md:w-[60%]">
          <div className="w-full h-full flex flex-col gap-4 mt-10 md:mt-0 px-2 md:px-0">
            <h2 className="text-2xl  font-bold uppercase">
              Personal Information
            </h2>
            <div className="w-full flex justify-start gap-5">
              <div className="relative w-fit h-full rounded-[90px] shadow-sm  shadow-gray-500 p-2">
                <User className="text-black" size={100} />
                <div className="absolute bottom-0 right-0 z-10 bg-white w-fit p-1.5 rounded-[90px] shadow-sm  shadow-gray-500">
                  <Camera />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start">
                <h3 className="text-2xl text-black font-bold capitalize">
                  Test Test
                </h3>
                <p className="text-gray-600 font-bold">{user.email}</p>
              </div>
            </div>
            <div>
              <form className="flex justify-between items-center flex-wrap gap-y-4 mt-4">
                <div className="w-full md:w-[48%]">
                  <label htmlFor="firstname">First Name</label>
                  <br />
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={user?.firstName}
                    className="w-full px-2 py-2 border-[1px] border-gray-400 rounded-md outline-0"
                    placeholder="Enter your first name"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-[48%]">
                  <label htmlFor="lastName">Last Name</label>
                  <br />
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={user?.lastName}
                    className="w-full px-2 py-2 border-[1px] border-gray-400 rounded-md outline-0"
                    placeholder="Enter your last name"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-[48%]">
                  <label htmlFor="email">Email Address</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={user?.email}
                    className="w-full px-2 py-2 border-[1px] border-gray-400 rounded-md outline-0"
                    placeholder="Enter your email address"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-[48%]">
                  <label htmlFor="number">Phone Number</label>
                  <br />
                  <div className="flex justify-start items-center border-[1px] border-gray-400 px-2 py-2 rounded-md">
                    <select
                      name=""
                      id=""
                      className="w-[180px] px-2 border-r-[1px] border-gray-500 outline-0"
                    >
                      <option value="965">965</option>
                    </select>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      value={user?.number}
                      className="w-full  px-2  outline-0"
                      onWheel={(e) => e.target.blur()}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-full md:w-[48%]">
                  <label htmlFor="email">Old Password</label>
                  <br />
                  <div className="w-full flex  px-2 py-2 border-[1px] border-gray-400 rounded-md ">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="oldPassword"
                      id="oldPassword"
                      className="w-full  outline-0"
                      placeholder="Enter your current password"
                    />
                    <button type="button" onClick={togglePassword}>
                      {showPassword ? (
                        <Eye className="text-gray-500" />
                      ) : (
                        <EyeOff className="text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-[48%]">
                  <label htmlFor="email">New Password</label>
                  <br />
                  <div className="w-full flex  px-2 py-2 border-[1px] border-gray-400 rounded-md ">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="newPassword"
                      id="newPassword"
                      className="w-full  outline-0"
                      placeholder="Enter your new password"
                    />
                    <button type="button" onClick={togglePassword}>
                      {showPassword ? (
                        <Eye className="text-gray-500" />
                      ) : (
                        <EyeOff className="text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-[48%]">
                  <label htmlFor="email">Confirm New Password</label>
                  <br />
                  <div className="w-full flex  px-2 py-2 border-[1px] border-gray-400 rounded-md ">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmNewPassword"
                      id="confirmNewPassword"
                      className="w-full  outline-0"
                      placeholder="Confirm your new password"
                    />
                    <button type="button" onClick={togglePassword}>
                      {showPassword ? (
                        <Eye className="text-gray-500" />
                      ) : (
                        <EyeOff className="text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full mt-4 py-3 bg-emerald-600 text-white hover:bg-emerald-800 duration-300 ease-in rounded-md"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full px-4 py-6 bg-emerald-800 text-white">
        <div className="text-center flex flex-col gap-4 justify-center items-center">
          <h3 className="text-2xl font-bold">Quick links</h3>
          <div className="w-full flex flex-col gap-2 justify-center items-center border-b-[1px] pb-6 border-gray-500">
            <div className="w-full flex justify-center gap-3">
              <p className="w-1/2 text-right">Press</p>{" "}
              <p className="w-1/2 text-left">FAQS</p>
            </div>
            <div className="w-full flex justify-center gap-3">
              <p className="w-1/2 text-right">Contact Us</p>{" "}
              <p className="w-1/2 text-left">About us</p>
            </div>
            <div className="w-full flex justify-center gap-3">
              <p className="w-1/2 text-right">Join the team</p>{" "}
              <p className="w-1/2 text-left">Terms & conditions</p>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center py-5 gap-y-6 md:gap-0">
            <div className="flex flex-col justify-center gap-4">
              <h4 className="text-xl uppercase">Privacy Policy</h4>
              <p>
                Copyright © 2024 K-Land.
                <br />
                All Rights Reserved.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center">
              <h4 className="text-xl uppercase">Follow Us</h4>
              <div className="p-2 bg-white/10 rounded-[50%]">
                <div className="bg-white text-emerald-800 p-1 rounded-[50%]">
                  <Instagram />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl uppercase">Presented By</h4>
              <Image
                src={"/kland.png"}
                width={100}
                height={100}
                alt="Logo"
                title="logo"
                className="h-auto w-auto"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
