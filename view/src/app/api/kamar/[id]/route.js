// Import library
import { NextResponse } from "next/server";
import Kamar from "@/app/model/kamar";
import dbConnect from "@/app/utils/dbConnect";

// Connect
dbConnect()

export async function PUT(request) {
    const id = request.url.split("/")[5];
    const {noKamar, foto, harga, lantai, status, fasilitas, luas, posisi, idUser, namaUser} = await request.json();
    const updatedKamar = await Kamar.findByIdAndUpdate({_id : id}, {
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
    return NextResponse.json({
        status: 200,
        message: "Berhasil mengubah kamar",
        updatedKamar
    });
}