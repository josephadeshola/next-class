import dbConnection from "@/dbConfig/dbconnection";
import User from '@/Model/userModel'
import { NextRequest, NextResponse } from "next/server";

dbConnection()

export async function POST(NextRequest){
    try {
        const reqBody = await NextRequest.json();
        const { firstname, lastname, email, password } = reqBody
        console.log(reqBody);
        const user = await User.findOne({ email })

        if (user) {
            console.log("user already exist");
            return NextResponse.json({ error: "user already exist" }, { status: 400 })
        }
        else{    
            const newUser = new User({ firstname, lastname, email , password})
            const  savedUser=  await newUser.save()
            if(savedUser){
                console.log("save user");
                return NextResponse.json({message:"user successfully signed up", success:true})
            }
            else{
                console.log("error saving ");
            }
        }
    } catch (err) {
        console.log(err);
        return NextResponse.json({err:err.message})
    }
}