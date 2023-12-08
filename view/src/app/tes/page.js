'use client'

import { useState } from 'react'

function App() {
  
  const [newKamar, setNewKamar] = useState( {
    noKamar:"99a", 
    foto:"", 
    harga: 100000, 
    lantai:"5", 
    status: true, 
    fasilitas:"aa", 
    luas:"100x400", 
    posisi:"aaa", 
    idUser: "sfsdfs", 
    namaUser: "sdfsdf"});

  const handleSubmit = async () => {
    const noKamar= newKamar.noKamar
    const foto = newKamar.foto
    const harga= newKamar.harga
    const lantai = newKamar.lantai
    const status= newKamar.status
    const fasilitas= newKamar.fasilitas
    const luas= newKamar.luas
    const posisi= newKamar.posisi
    const idUser= newKamar.idUser
    const namaUser= newKamar.namaUser
    try{
        console.log("Uploaded");
        const response = await fetch('http://localhost:3000/api/kamar',{
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
                namaUser
            }),
            headers: { "Content-Type": "application/json" },
        })
    }catch(error){
        console.log(error);
    }
    
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setNewKamar({ ...newKamar, foto : base64 })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

        <label htmlFor="file-upload" className='custom-file-upload'>
          <img src={newKamar.foto } alt="" />
        </label>
        <input 
          type="file"
          name="foto"
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
         />

         <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App


function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}