"use client";

import React, { useState } from 'react'
import room from '../../../../public/room.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faArrowUpFromBracket, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'next/navigation'

const getDetailKamar = async () => {
  const params = useParams();
  const response = await fetch(`http://localhost:3000/api/kamar/${params.id}`, {
      next: {
          revalidate: 0,
      }
  })
  // console.log(params.id)

  if (!response.ok) {
      throw new Error('Failed to fetch data')
  }
  return response.json();
}

const daftar = async (detailKamar) => {
  // const params1 = useParams();
  try {

    // Perform the PUT request
    detailKamar[0].status = "Unavailable";
    const updateResponse = await fetch(`http://localhost:3000/api/kamar/${detailKamar[0]._id}`, {
      method: "PUT",
      body: JSON.stringify(detailKamar[0]),
      headers: { "Content-Type": "application/json" },
    });

    if (!updateResponse.ok) {
      throw new Error('Failed to update data');
    }

    // Handle the response accordingly
    console.log("Updated successfully");
  } catch (error) {
    console.log(error);
  }

  window.location.reload();
};

const DetilKamar = async () => {
  const detailKamar = await getDetailKamar();
  // console.log(detailKamar[0].noKamar);

  //Algoritma pengubah rupiah
  const numberFormat = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);

  return (
    <>
      <div className='min-h-[54vh]'>
        <div className="w-full h-[67px] px-[175px] py-6 justify-start items-center gap-10 inline-flex">
          <div><span className="text-black text-base font-normal font-['Inter']">Home &gt; Rooms &gt; </span><span className="text-black text-base font-bold font-['Inter']">Kamar {detailKamar[0].noKamar}</span></div>
        </div>
        <div className="w-full min-h-[416px] gap-[30px] flex-col md:flex-row px-[165px] py-6 justify-between items-start md:gap-1 flex">
          {/* <div className="w-80 h-[427px] flex-col justify-start items-start inline-flex"> */}
          {/* <div className="self-stretch h-80 origin-top-left -rotate-45 justify-start items-start inline-flex">
                <div className="w-[0px] self-stretch origin-top-left rotate-[3.48deg] border" />
              </div> */}
            <div className='flex justify-start'>
              <img className="w-80 h-[240px] hidden xl:block" src={room.src} />
              {/* </div> */}
              <div className="px-4 flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch text-black text-2xl font-bold font-['Inter']">Kamar {detailKamar[0].noKamar}</div>
                <div className="self-stretch text-red-600 text-2xl font-bold font-['Inter'] capitalize">{numberFormat(detailKamar[0].harga)}/month</div>
                <div className="self-stretch text-justify"><span className="text-neutral-950 text-xl font-semibold font-['Inter'] capitalize">Deskripsi:<br/><br/></span><span className="text-neutral-950 text-base font-normal font-['Inter'] capitalize">Fasilitas : {detailKamar[0].fasilitas} <br/>Luas Kamar : {detailKamar[0].luas}<br/>Posisi Kamar : {detailKamar[0].posisi}</span></div>
              </div>
            </div>
            <div className="px-4 flex-col gap-[30px] md:gap-[30px] justify-between items-center inline-flex">
              <div className='w-full flex flex-col justify-start'>
                <div className="md:text-right text-black text-opacity-50 text-sm font-normal font-['Poppins'] capitalize">This Room:</div>
                <div className="md:text-right text-black text-base font-medium font-['Poppins']">{detailKamar[0].status}</div>
                <div className="md:justify-end items-center gap-1 inline-flex">
                  <FontAwesomeIcon className='w-[10px]' icon={faLocationDot} />
                  <div className="text-center text-black text-base font-normal font-['Poppins']">Lantai {detailKamar[0].lantai}</div>
                </div>
              </div>
              <div className="min-h-[148px] w-[283px] flex-col justify-start items-end flex">
                {/* <button className="h-[34px] p-2 gap-2 rounded border border-gray-300 justify-between items-center inline-flex">
                  <FontAwesomeIcon className='text-sky-600 w-[10px]' icon={faArrowUpFromBracket} />
                  <div className="text-sky-600 text-sm">Add file</div>
                </button> */}
                <form onSubmit={() => daftar(detailKamar)}>
                <p>Masukkan bukti pembayaran:</p>
                <input
                  className='w-full mb-3'
                  type="file"
                  name="foto"
                  accept='.jpeg, .png, .jpg'
                  required
                />
                <br/>
                {detailKamar[0].status === "Available" ?
                <></> :
                <p className='text-red-500'>Kamar tidak tersedia</p>}
                <div className="h-16 w-full flex-col justify-start items-start gap-1 flex">
                  {detailKamar[0].status === "Available" ?
                  <button type='submit' className="w-full h-16 bg-orange-500 rounded-lg border border-white justify-center items-center flex hover:bg-orange-800 active:bg-orange-900">
                    <div className="text-center text-white text-base font-bold font-['Inter'] capitalize">Register</div>
                  </button> :
                <>
                <button type='submit' disabled className="w-full h-16 bg-orange-200 rounded-lg border border-white justify-center items-center flex">
                  <div className="text-center text-white text-base font-bold font-['Inter'] capitalize">Register</div>
                </button>
                </>
                }
                  
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default DetilKamar;
