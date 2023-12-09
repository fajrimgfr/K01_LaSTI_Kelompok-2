"use client";

import { useState } from "react";
import React from "react";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export default function AddKamarModal() {
  const [newKamar, setNewKamar] = useState({
    noKamar: "",
    foto: "",
    harga: 0,
    lantai: "",
    status: "",
    fasilitas: "",
    luas: "",
    posisi: "",
    idUser: "-",
    namaUser: "-",
  });

  const handleSubmit = async () => {
    const noKamar = newKamar.noKamar;
    const foto = newKamar.foto;
    const harga = newKamar.harga;
    const lantai = newKamar.lantai;
    const status = newKamar.status;
    const fasilitas = newKamar.fasilitas;
    const luas = newKamar.luas;
    const posisi = newKamar.posisi;
    const idUser = newKamar.idUser;
    const namaUser = newKamar.namaUser;
    try {
      console.log("Uploaded");
      const response = await fetch("http://localhost:3000/api/kamar", {
        method: "POST",
        body: JSON.stringify({
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
        }),
        headers: { "Content-Type": "application/json" },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setNewKamar({ ...newKamar, foto: base64 });
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

  function setStatus(event) {
    const {name, value} = event.target;
    if (value !== "") {
      setEditedKamar((prevValue) => ({ ...prevValue, [name]: value }))
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="text-lg text-center bg-orange-500 hover:bg-orange-800 font-semibold text-white rounded-md px-4 py-2 cursor-pointer">add kamar</div>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white border rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="font-bold">Add Kamar Baru</div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-2">
                <label htmlFor="file-upload" className="custom-file-upload">
                  <input required type="file" name="foto" accept=".jpeg, .png, .jpg" onChange={(e) => handleFileUpload(e)} className="flex py-1 px-2 rounded-md w-full cursor-pointer" />
                </label>
                <label htmlFor="noKamar">
                  <input required type="text" name="noKamar" placeholder="Masukkan nomor kamar" onChange={(e) => setNewKamar({ ...newKamar, noKamar: e.target.value })} className="flex py-1 px-2 border-2 rounded-md w-full" />
                </label>
                <label htmlFor="harga">
                  <input required type="number" name="lantai" placeholder="Masukkan harga" onChange={(e) => setNewKamar({ ...newKamar, harga: e.target.value })} className="flex py-1 px-2 border-2 rounded-md w-full" />
                </label>
                <label htmlFor="lantai">
                  <input required type="text" name="lantai" placeholder="Masukkan lantai" onChange={(e) => setNewKamar({ ...newKamar, lantai: e.target.value })} className="flex py-1 px-2 border-2 rounded-md w-full" />
                </label>
                <label htmlFor="fasilitas">
                  <input required type="text" name="fasilitas" placeholder="Masukkan fasilitas" onChange={(e) => setNewKamar({ ...newKamar, fasilitas: e.target.value })} className="flex py-1 px-2 border-2 rounded-md w-full" />
                </label>
                <label htmlFor="luas">
                  <input required type="text" name="luas" placeholder="Masukkan luas" onChange={(e) => setNewKamar({ ...newKamar, luas: e.target.value })} className="flex py-1 px-2 border-2 rounded-md w-full" />
                </label>
                <label htmlFor="posisi">
                  <input required type="text" name="posisi" placeholder="Masukkan posisi" onChange={(e) => setNewKamar({ ...newKamar, posisi: e.target.value })} className="flex py-1 px-2 border-2 rounded-md w-full" />
                </label>
                <label htmlFor="status">
                  <select required name="status" placeholder="Masukkan status" onChange={setStatus} className="flex py-1 px-2 border-2 rounded-md w-full">
                    <option value="">Select One</option>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
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
