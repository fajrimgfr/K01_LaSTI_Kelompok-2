// Import library
import { NextResponse } from "next/server";
import Kamar from "../../../model/kamar";
import dbConnect from "../../../utils/dbConnect";

// Connect
dbConnect()
export async function GET(req) {
    try{
        const id = req.url.split('/')[5];
        let kamar =  await Kamar.find({"_id": id});
        return NextResponse.json(kamar);
    }
    catch (error){
        return NextResponse.json({message: "error"} );
    }
}

export async function DELETE(req){
    try{
        const id = req.url.split('/')[5];
        await Kamar.deleteOne({"_id": id});
        return NextResponse.json({message: "Kamar berhasil dihapus"} )
    }
    catch (error){

        return NextResponse.json({message: error} );
    }
}