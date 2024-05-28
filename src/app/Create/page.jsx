"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import { toast } from "react-toastify";

const Create = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  let Url = "Api/user/register";
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const Submit = () => {
    console.log(user);
    axios.post(Url, {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
    }).then((result) => {
      const alluser = result.data.userInfo;
      localStorage.setItem("getUser", JSON.stringify(alluser))
      toast.success("Account created successfully")
      setTimeout(() => {
        router.push('/Login');
      }, 6000)
    })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <>
      <div className="py-20 border px-10 md:w-1/2 mx-auto">
        <p className="text-center text-pink-500 font-bold text-xl">Create Account</p>
        <div>
          <input
            type="text"
            name="firstname"
            className="py-3 rounded  border border-pink-500 px-2 shadow-md my-3 w-full "
            placeholder="First Name"
            value={user.firstname}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="lastname"
            className="py-3 rounded  border border-pink-500 px-2 shadow-md my-3 w-full "
            placeholder="Last Name"
            value={user.lastname}
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            name="email"
            className="py-3 rounded  border border-pink-500 px-2 shadow-md my-3 w-full "
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            className="py-3 rounded  border border-pink-500 px-2 shadow-md my-3 w-full "
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
          <br />
          <button type="submit" className="bg-pink-500 w-full py-3 text-white font-bold rounded mt-3" onClick={Submit}>Submit</button>
        </div>
      </div>

    </>
  );
};

export default Create;
