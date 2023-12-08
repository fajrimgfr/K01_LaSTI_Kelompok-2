// Import library
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/model/user";
import dbConnect from "@/app/utils/dbConnect";

// Connect
dbConnect()

export async function GET(req) {
    const email = req.url.split("/")[4];
    console.log(email);
    let user =  await User.find({
        "email": email
    });
    return NextResponse.json(user);
}

export async function POST(req) {
    try{
        const email = req.url.split("/")[4];
        const { password } = await req.json();
        let user =  await User.find({
            "email": email
        });
        if (user[0] === undefined){
            return NextResponse.json({
                status: 400,
                message: "email salah",
            });
        }else if(user[0].password !== password){
            return NextResponse.json({
                status: 400,
                message: "password salah",
            });
        }else if (user[0] !== undefined && user[0].role === "customer"){
            return NextResponse.json({
                redirect: "/rooms",
                role: "customer",
            });
        } else if (user[0] !== undefined && user[0].role === "admin"){
            return NextResponse.json({
                redirect: "/admin",
                role: "admin",
            });
        } 
    }catch(error){
        console.log(error);
    }
    console.log(user);
}