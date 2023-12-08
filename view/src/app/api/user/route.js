// Import library
import { NextResponse } from "next/server";
import User from "@/app/model/user";
import dbConnect from "@/app/utils/dbConnect";

// Connect
dbConnect()

// Create kamar
export async function POST(request) {
    const {email, nama, phoneNumber, age, password} = await request.json();
    const newUser = new User({
        email, 
        nama, 
        phoneNumber, 
        age, 
        password
    });
    await newUser.save();
    return NextResponse.json({
        status: 200,
        message: "Berhasil menambahkan user",
    });
}

// Read all kamar
export async function GET(req) {
    const {email, password} = await req.json();
    let user =  await User.find({
        "email": email,
        "password": password
    });
    if (user !== undefined && user.role === "customer"){
        NextResponse.redirect("http://localhost:3000/rooms");
    } else if (user !== undefined && user.role === "admin"){
        NextResponse.redirect("http://localhost:3000/rooms");
    } 
    console.log(user);
    return NextResponse.json(user);
}