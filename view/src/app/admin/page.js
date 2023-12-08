"use client";
import AddKamarModal from "@/components/AddKamarModal";
import ListKamarAdmin from "@/components/ListKamarAdmin";
import { Axios } from "axios";
import React, { useState } from "react";

// GET
const getKamars = async () => {
  const response = await fetch("http://localhost:3000/api/kamar", {
    next: {
      revalidate: 0,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

export default async function Admin() {
  const kamars = await getKamars();

  const [noKamar, setNoKamar] = useState("");
  const [foto, setFoto] = useState("");
  const [harga, setHarga] = useState("");
  const [lantai, setLantai] = useState("");
  const [status, setStatus] = useState("");
  const [fasilitas, setFasilitas] = useState("");
  const [luas, setLuas] = useState("");
  const [posisi, setPosisi] = useState("");

  const [kamarArr, setKamarArr] = useState([]);

  const handleSubmit = async () => {
    const kamarObj = {
      noKamar: noKamar,
      foto: foto,
      harga: harga,
      lantai: lantai,
      status: status,
      fasilitas: fasilitas,
      luas: luas,
      posisi: posisi,
    };
    await Axios.post("/api/kamar", kamarObj).then(() => {
      alert("Kamar berhasil ditambah");
    });
  };

  return (
    <div>
      <div className="container p-2 content-end items-end">
        <AddKamarModal />
      </div>
      <main>
        <form className="mt-5">
          <label htmlFor="noKamar">
            <input type="text" name="noKamar" id="noKamar" placeholder="masukkan nomor kamar" value={noKamar} onChange={(e) => setNoKamar(e.target.value)} className="flex py-1 px-2 border-2 rounded-md w-full" />
          </label>
          <label htmlFor="foto">
            <input type="text" name="foto" id="foto" placeholder="masukkan url foto kamar" value={foto} onChange={(e) => setFoto(e.target.value)} className="flex py-1 px-2 border-2 rounded-md w-full" />
          </label>
          <label htmlFor="harga">
            <input type="text" name="harga" id="harga" placeholder="masukkan harga" value={harga} onChange={(e) => setHarga(e.target.value)} className="flex py-1 px-2 border-2 rounded-md w-full" />
          </label>
          <label htmlFor="lantai">
            <input type="text" name="lantai" id="lantai" placeholder="masukkan lantai" value={lantai} onChange={(e) => setLantai(e.target.value)} className="flex py-1 px-2 border-2 rounded-md w-full" />
          </label>
          <label htmlFor="status">
            <input type="text" name="status" id="status" placeholder="masukkan status ketersediaan" value={status} onChange={(e) => setStatus(e.target.value)} className="flex py-1 px-2 border-2 rounded-md w-full" />
          </label>
          <label htmlFor="fasilitas">
            <input type="text" name="fasilitas" id="fasilitas" placeholder="masukkan fasilitas" value={fasilitas} onChange={(e) => setFasilitas(e.target.value)} className="flex py-1 px-2 border-2 rounded-md w-full" />
          </label>
          <label htmlFor="luas">
            <input type="text" name="luas" id="luas" placeholder="masukkan luas kamar" value={luas} onChange={(e) => setLuas(e.target.value)} className="flex py-1 px-2 border-2 rounded-md w-full" />
          </label>
          <label htmlFor="posisi">
            <input type="text" name="posisi" id="posisi" placeholder="masukkan posisi kamar" value={posisi} onChange={(e) => setPosisi(e.target.value)} className="flex py-1 px-2 border-2 rounded-md w-full" />
          </label>
          <button className="w-full bg-orange-500 hover:bg-orange-800 text-white rounded-md p-2 cursor-pointer" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <div>
          {kamarArr.map((element) => {
            return (
              <ul className="flex justify-between" key={element._id}>
                <li>{element.noKamar}</li>
                <li>{element.foto}</li>
                <li>{element.harga}</li>
              </ul>
            );
          })}
        </div>
      </main>
      <div>
        {/* <ListKamarAdmin /> */}
        {kamars.length > 0 &&
          kamars.map((kamar) => (
            <ul className="flex justify-between" key={kamar._id}>
              <li>{kamar.noKamar}</li>
              <li>{kamar.harga}</li>
              <li>{kamar.posisi}</li>
            </ul>
          ))}
      </div>
    </div>
  );
}
