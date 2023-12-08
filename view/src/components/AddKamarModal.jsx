"use client";

import { useState } from "react";
import React from "react";
export default function AddKamarModal() {
  const [newKamar, setNewKamar] = useState({
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

  return (
    <div className="App">
      <img src={newKamar.foto} alt="" />
      <div>{`noKamar: ${newKamar.noKamar}`}</div>
      <div>{`harga: ${newKamar.harga}`}</div>
      <div>{`lantai: ${newKamar.lantai}`}</div>
      <div>{`status: ${newKamar.status}`}</div>
      <div>{`fasilitas: ${newKamar.fasilitas}`}</div>
      <div>{`luas: ${newKamar.luas}`}</div>
      <div>{`posisi: ${newKamar.posisi}`}</div>
      <div>{`idUser: ${newKamar.idUser}`}</div>
      <div>{`namaUser: ${newKamar.namaUser}`}</div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="file-upload" className="custom-file-upload">
          <input type="file" name="foto" accept=".jpeg, .png, .jpg" onChange={(e) => handleFileUpload(e)} />
        </label>
        <label htmlFor="noKamar">
          <input type="text" name="noKamar" placeholder="Masukkan nomor kamar" onChange={(e) => setNewKamar({ ...newKamar, noKamar: e.target.value })} className="py-1 px-2 border-2 rounded-md" />
        </label>
        <label htmlFor="harga">
          <input type="number" name="lantai" placeholder="Masukkan harga" onChange={(e) => setNewKamar({ ...newKamar, harga: e.target.value })} className="py-1 px-2 border-2 rounded-md" />
        </label>
        <label htmlFor="lantai">
          <input type="text" name="lantai" placeholder="Masukkan lantai" onChange={(e) => setNewKamar({ ...newKamar, lantai: e.target.value })} className="py-1 px-2 border-2 rounded-md" />
        </label>
        <label htmlFor="fasilitas">
          <input type="text" name="fasilitas" placeholder="Masukkan fasilitas" onChange={(e) => setNewKamar({ ...newKamar, fasilitas: e.target.value })} className="py-1 px-2 border-2 rounded-md" />
        </label>
        <label htmlFor="luas">
          <input type="text" name="luas" placeholder="Masukkan luas" onChange={(e) => setNewKamar({ ...newKamar, luas: e.target.value })} className="py-1 px-2 border-2 rounded-md" />
        </label>
        <label htmlFor="posisi">
          <input type="text" name="posisi" placeholder="Masukkan posisi" onChange={(e) => setNewKamar({ ...newKamar, posisi: e.target.value })} className="py-1 px-2 border-2 rounded-md" />
        </label>

        <button type="submit" className="bg-orange-500 hover:bg-orange-800 text-white rounded-md p-2 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}
