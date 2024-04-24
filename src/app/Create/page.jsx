"use client";
import axios from "axios";
import React, { useState } from "react";

const Create = () => {
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
    }).then((result)=>{
      console.log(result);
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={user.firstname}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={user.lastname}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit" onClick={Submit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Create;
