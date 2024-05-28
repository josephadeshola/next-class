"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const [islogin, setLogin] = useState({
    email: "",
    password: "",
  });
  let Url = "Api/user/login";
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const loginBtn = (e) => {
    e.preventDefault();
    axios
      .post(Url, { email: islogin.email, password: islogin.password })
      .then((res) => {
        if(res.data.status === true ){
        console.log(res);
        toast.success(res.data.message);
        setTimeout(()=>{
          router.push("/dashboard")
        },6000)
        }
        else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        if(err.response){
          console.log(err);
          toast.error(err.response.data.message)
        }
        else{
          toast.error("Error setting up the request");
        }
      });
    console.log(islogin);
  };
  return (
    <div className="py-20 border px-10 md:w-1/2  mx-auto">
      <p className="text-center text-pink-500  font-bold text-xl">
        Login Account
      </p>
      <form> 
        <div>
          <input
            type="email"
            name="email"
            className="py-3 rounded border border-pink-500 px-2 shadow-md my-3 w-full "
            placeholder="Email"
            value={islogin.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            className="py-3 rounded border border-pink-500 px-2 shadow-md my-3 w-full "
            placeholder="Password"
            value={islogin.password}
            onChange={handleChange}
          />
          <br />
          <button
            type="submit" 
            className="bg-pink-500 w-full py-3 text-white font-bold rounded mt-3"
            onClick={loginBtn}
          >
            Login
          </button>
        </div>
      </form> 
    </div>
  );
};

export default Login;
