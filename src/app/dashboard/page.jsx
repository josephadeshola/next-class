"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";


const Dashboard = () => {
    const router = useRouter();
    const [user, setUser] = useState("");
    useEffect(() => {
        const storedUser = localStorage.getItem("getUser");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser.firstname);
        }
    }, []);

    const handleLogout = ()=>{
        localStorage.removeItem("getUser");
        toast.success("User logout sucessful");
        setTimeout(()=>{
        router.push("/Login")  
        }, 3000)
    } 
    return (
        <>
            <div className='shadow-lg  px-4 py-4 mt-2 rounded md:w-1/2 mx-auto'>
                <div className='flex justify-between'>
                    <h5>Welcome: <span className='text-blue-500'>{user} </span></h5>
                    <div className=''>
                        <botton className="bg-red-500 rounded-lg cursor-pointer w-100 text-white  py-3 px-4" onClick={handleLogout}>LogOut</botton>
                        <botton className="bg-blue-500 ms-2 rounded-lg cursor-pointer w-100 text-white  py-3 px-4">Profile</botton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard