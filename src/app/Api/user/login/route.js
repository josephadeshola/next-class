import dbConnection from "@/dbConfig/dbconnection";
import User from '@/Model/userModel'
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

dbConnection();
export async function POST(NextRequest) {
  const reqBody = await NextRequest.json();
  const { email, password } = reqBody;
  try {

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found", status: 400 })
    }

    const passwordConfirm = await bcryptjs.compare(password, user.password)
    if (!passwordConfirm) {
      return NextResponse.json({ message: "Incorrect details", status: 400 })
    }

    return NextResponse.json({ message: "User login successfully", status: true , userData: reqBody })
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error', status: 500 });
  }
}
