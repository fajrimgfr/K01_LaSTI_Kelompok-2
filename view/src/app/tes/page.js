'use client'

import { useState } from 'react'

function App() {
  
  const [postImage, setPostImage] = useState( {
    noKamar:"99a", 
    foto:"", 
    harga: 100000, 
    lantai:"", 
    status: true, 
    fasilitas:"aa", 
    luas:"100x400", 
    posisi:"aaa", 
    idUser: "sfsdfs", 
    namaUser: "sdfsdf"});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded")
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setPostImage({ ...postImage, foto : base64 })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

        <label htmlFor="file-upload" className='custom-file-upload'>
          <img src={postImage.myFile } alt="" />
        </label>

        <input 
          type="file"
          name="myFile"
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