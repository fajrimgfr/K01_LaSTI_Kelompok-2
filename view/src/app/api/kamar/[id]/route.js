// Import library
import { NextResponse } from "next/server";
import Kamar from "@/app/model/kamar";
import dbConnect from "@/app/utils/dbConnect";

// Connect
dbConnect()

// Read kamar by id
export async function GET(request) {
    try{
        const id = request.url.split('/')[5];
        let kamar =  await Kamar.find({"_id": id});
        return NextResponse.json(kamar);
    }
    catch (error){
        return NextResponse.json({message: "error"} );
    }
}

// Delete kamar
export async function DELETE(request){
    try{
        const id = request.url.split('/')[5];
        await Kamar.deleteOne({"_id": id});
        return NextResponse.json({message: "Kamar berhasil dihapus"} )
    }
    catch (error){
        return NextResponse.json({message: error} );
    }
}

// Update kamar
export async function PUT(request) {
    try {
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
            namaUser,
        });
        return NextResponse.json({
            status: 200,
            message: "Berhasil mengubah kamar",
            updatedKamar
        });
    } catch(error) {
        return NextResponse.json({message: error} );      
    }
}