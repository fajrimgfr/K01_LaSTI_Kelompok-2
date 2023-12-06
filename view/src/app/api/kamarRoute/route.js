// Import library
import { NextResponse } from "next/server";
import kamarSchema from "../../model/kamar";
import dbConnect from "../../utils/dbConnect";

// Connect
dbConnect()


export async function POST(request) {
    const {noKamar, foto, harga, lantai, status, fasilitas, luas, posisi, idUser, namaUser} = await request.json();
    const newKamar = new kamarSchema({
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
        message: "GET Success",
    });
}