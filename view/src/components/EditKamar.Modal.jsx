"use client";

import { useState, useEffect } from "react";
import React from "react";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export default function EditKamarModal({ kamarId }) {
  const [editedKamar, setEditedKamar] = useState({
    noKamar: "",
    foto: "",
    harga: 0,
    lantai: "",
    status: true,
    fasilitas: "",
    luas: "",
    posisi: "",
    idUser: "12",
    namaUser: "ves",
  });

  useEffect(() => {
    // Fetch the existing Kamar data based on kamarId and set it to editedKamar
    const fetchKamarData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/kamar/${kamarId}`);
        const data = await response.json();
        setEditedKamar(data); // Assuming the API response returns the Kamar data
      } catch (error) {
        console.log(error);
      }
    };

    if (kamarId) {
      fetchKamarData();
    }
  }, [kamarId]);

  const handleSubmit = async () => {
    // ... (same as before)
    const noKamar = editedKamar.noKamar;
    const foto = editedKamar.foto;
    const harga = editedKamar.harga;
    const lantai = editedKamar.lantai;
    const status = editedKamar.status;
    const fasilitas = editedKamar.fasilitas;
    const luas = editedKamar.luas;
    const posisi = editedKamar.posisi;
    const idUser = editedKamar.idUser;
    const namaUser = editedKamar.namaUser;

    try {
      console.log("Updated");
      const response = await fetch(`http://localhost:3000/api/kamar/${kamarId}`, {
        method: "PUT", // Assuming you use PUT method for updating
        body: JSON.stringify(editedKamar),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setEditedKamar({ ...editedKamar, foto: base64 });
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="text-md text-center bg-orange-500 hover:bg-orange-800 font-medium text-white rounded-md p-2 cursor-pointer">Edit kamar</div>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white border rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="font-bold">Edit Kamar</div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-2">
                <label htmlFor="file-upload" className="custom-file-upload">
                  <input type="file" name="foto" accept=".jpeg, .png, .jpg" onChange={(e) => handleFileUpload(e)} className="flex py-1 px-2 rounded-md w-full cursor-pointer" />
                </label>
                <label htmlFor="noKamar">
                  <input type="text" name="noKamar" placeholder="Masukkan nomor kamar" onChange={(e) => setEditedKamar({ ...editedKamar, noKamar: e.target.value })} className="flex py-1 px-2 border-2 rounded-md w-full" />
                </label>
                <label htmlFor="harga">
                  <input type="number" name="lantai" placeholder="Masukkan harga" onChange={(e) => setEditedKamar({ ...editedKamar, harga: e.target.value })} className="flex py-1 px-2 border-2 rounded-md w-full" />
                </label>
                <label htmlFor="lantai">
                  <input type="text" name="lantai" placeholder="Masukkan lantai" onChange={(e) => setEditedKamar({ ...editedKamar, lantai: e.target.value })} className="flex py-1 px-2 border-2 rounded-md w-full" />
                </label>
                <label htmlFor="fasilitas">
                  <input type="text" name="fasilitas" placeholder="Masukkan fasilitas" onChange={(e) => setEditedKamar({ ...editedKamar, fasilitas: e.target.value })} className="flex py-1 px-2 border-2 rounded-md w-full" />
                </label>
                <label htmlFor="luas">
                  <input type="text" name="luas" placeholder="Masukkan luas" onChange={(e) => setEditedKamar({ ...editedKamar, luas: e.target.value })} className="flex py-1 px-2 border-2 rounded-md w-full" />
                </label>
                <label htmlFor="posisi">
                  <input type="text" name="posisi" placeholder="Masukkan posisi" onChange={(e) => setEditedKamar({ ...editedKamar, posisi: e.target.value })} className="flex py-1 px-2 border-2 rounded-md w-full" />
                </label>
                <label htmlFor="status">
                  <input type="text" name="status" placeholder="Masukkan status" onChange={(e) => setEditedKamar({ ...editedKamar, status: e.target.value })} className="flex py-1 px-2 border-2 rounded-md w-full" />
                </label>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <AlertDialogCancel className="w-full hover:bg-gray-200">Cancel</AlertDialogCancel>
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-800 text-white rounded-md p-2 cursor-pointer">
                  Submit
                </button>
              </div>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
