import React from 'react'
import room from '../../public/room.jpg'

function ListKamar(props) {
  const {noKamar, harga, tautan, foto} = props;

  let fotoKamar =foto;

  if (fotoKamar === "") {
    fotoKamar = room.src;
  }

  //Algoritma pengubah rupiah
  const numberFormat = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);

  return (
    <a href={tautan} className='max-w-[300px] mx-auto h-[292px]'>
        <img src={fotoKamar} alt="Foto Kamar" className='w-full h-[225px]' />
        <div className="w-full h-[67px] p-2.5 flex flex-col justify-center items-start gap-[3px]">
            <div className="self-stretch h-[47px] flex flex-col justify-center items-center gap-[3px]">
                <div className="self-stretch text-base font-medium font-['Inter']">Kamar {noKamar}</div>
                <div className="self-stretch h-[25px] flex justify-between items-start">
                <div className="grow shrink basis-0 text-red-600 text-xl font-semibold font-['Inter']">{numberFormat(harga)}/Month</div>
                </div>
            </div>
        </div>
    </a>
  )
}

export default ListKamar