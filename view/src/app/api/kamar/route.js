// Import library
import { NextResponse } from "next/server";
import Kamar from "@/app/model/kamar";
import dbConnect from "@/app/utils/dbConnect";

// Connect
dbConnect()

// Create kamar
export async function POST(request) {
    const {noKamar, foto, harga, lantai, status, fasilitas, luas, posisi, idUser, namaUser} = await request.json();
    const newKamar = new Kamar({
        noKamar,
        foto,
        harga,
        lantai,
        status,
        fasilitas,
        luas,
        posisi,
        idUser,
        namaUser
    });
    await newKamar.save();
    return NextResponse.json({
        status: 200,
        message: "Berhasil menambahkan kamar",
    });
}

// Read all kamar
export async function GET(req) {
    let kamar =  await Kamar.find({});
    return NextResponse.json(kamar);
}