"use client";

import React, { useState } from "react";
import room from "../../../../public/room.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import Registration from "@/components/Registration";

const DetilKamar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Registration open={open} setOpen={setOpen} />
      <div className="min-h-[54vh]">
        <div className="w-full h-[67px] px-[175px] py-6 justify-start items-center gap-10 inline-flex">
          <div>
            <span className="text-black text-base font-normal font-['Inter']">Home &gt; Rooms &gt; </span>
            <span className="text-black text-base font-bold font-['Inter']">Kamar 5A</span>
          </div>
        </div>
        <div className="w-full min-h-[416px] gap-[30px] flex-col md:flex-row px-[165px] py-6 justify-between items-start md:gap-1 flex">
          {/* <div className="w-80 h-[427px] flex-col justify-start items-start inline-flex"> */}
          {/* <div className="self-stretch h-80 origin-top-left -rotate-45 justify-start items-start inline-flex">
                <div className="w-[0px] self-stretch origin-top-left rotate-[3.48deg] border" />
              </div> */}
          <div className="flex justify-start">
            <img className="w-80 h-[240px] hidden xl:block" src={room.src} />
            {/* </div> */}
            <div className="px-4 flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch text-black text-2xl font-bold font-['Inter']">Kamar 5A</div>
              <div className="self-stretch text-red-600 text-2xl font-bold font-['Inter'] capitalize">Rp.1.xxx.xxx/month</div>
              <div className="self-stretch text-justify">
                <span className="text-neutral-950 text-xl font-semibold font-['Inter'] capitalize">
                  Deskripsi:
                  <br />
                  <br />
                </span>
                <span className="text-neutral-950 text-base font-normal font-['Inter'] capitalize">
                  Fasilitas : AC, Kamar mandi, <br />
                  Luas Kamar : 3m x 4m
                  <br />
                  Posisi Kamar : Lantai 3 Dekat tangga
                </span>
              </div>
            </div>
          </div>
          <div className="px-4 flex-col gap-[30px] md:gap-[100px] justify-between items-center inline-flex">
            <div className="w-full flex flex-col justify-start">
              <div className="md:text-right text-black text-opacity-50 text-sm font-normal font-['Poppins'] capitalize">This Room:</div>
              <div className="md:text-right text-black text-base font-medium font-['Poppins']">Available</div>
              <div className="md:justify-end items-center gap-1 inline-flex">
                <FontAwesomeIcon className="w-[10px]" icon={faLocationDot} />
                <div className="text-center text-black text-base font-normal font-['Poppins']">Lantai 4</div>
              </div>
            </div>
            <div className="h-[148px] w-[283px] flex-col justify-start items-start gap-4 flex">
              <div className="h-16 w-full flex-col justify-start items-start gap-1 flex">
                <button onClick={() => setOpen(true)} className="w-full h-16 bg-orange-500 rounded-lg border border-white justify-center items-center flex hover:bg-orange-800 active:bg-orange-900">
                  <div className="text-center text-white text-base font-bold font-['Inter'] capitalize">Register</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetilKamar;
