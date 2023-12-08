// Import library
import { NextResponse } from "next/server";
import User from "@/app/model/user";
import dbConnect from "@/app/utils/dbConnect";

// Connect
dbConnect()

// Create kamar
export async function POST(request) {
    const {email, nama, phoneNumber, age, password,role} = await request.json();
    const newUser = new User({
        email, 
        nama, 
        phoneNumber, 
        age, 
        password,
        role
    });
    await newUser.save();
    return NextResponse.json({
        status: 200,
        message: "Berhasil menambahkan user",
    });
}

// Read all kamar
export async function GET(req) {
    let user =  await User.find({});
    return NextResponse.json(user);
}