"use client"

import React, { useState } from 'react'
import room from '../../../../public/room.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import Registration from '@/components/Registration'

const DetilKamar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Registration open={open} setOpen={setOpen}  />
      <div className='min-h-[54vh]'>
        <div className="w-full h-[67px] px-[175px] py-6 justify-start items-center gap-10 inline-flex">
          <div><span className="text-black text-base font-normal font-['Inter']">Home &gt; Rooms &gt; </span><span className="text-black text-base font-bold font-['Inter']">Kamar 5A</span></div>
        </div>
        <div className="w-full h-[416px] px-[165px] py-6 flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch py-6 justify-between items-start inline-flex">
            {/* <div className="w-80 h-[427px] flex-col justify-start items-start inline-flex"> */}
              {/* <div className="self-stretch h-80 origin-top-left -rotate-45 justify-start items-start inline-flex">
                <div className="w-[0px] self-stretch origin-top-left rotate-[3.48deg] border" />
              </div> */}
            <img className="w-80 h-[240px]" src={room.src} />
            {/* </div> */}
            <div className="grow shrink basis-0 px-4 flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[74px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch h-[29px] flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch text-black text-2xl font-bold font-['Inter']">Kamar 5A</div>
                </div>
                <div className="self-stretch text-red-600 text-2xl font-bold font-['Inter'] capitalize">Rp.1.xxx.xxx/month</div>
              </div>
              <div className="self-stretch text-justify"><span className="text-neutral-950 text-xl font-semibold font-['Inter'] capitalize">Deskripsi:<br/><br/></span><span className="text-neutral-950 text-base font-normal font-['Inter'] capitalize">Fasilitas         : AC, Kamar mandi, <br/>Luas Kamar   : 3m x 4m<br/>Posisi Kamar : Lantai 3 Dekat tangga</span></div>
            </div>
            <div className="w-[283px] flex-col justify-start items-center gap-8 inline-flex">
              <div className="h-[77px] relative">
                <div className="w-[95.77px] left-[55.87px] top-0 absolute text-center text-black text-opacity-50 text-sm font-normal font-['Poppins'] capitalize">This Room:</div>
                <div className="w-[207.50px] left-0 top-[25px] absolute text-center text-black text-base font-medium font-['Poppins']">Available</div>
                <div className="w-[207.50px] h-6 left-0 top-[53px] absolute justify-center items-center gap-1 inline-flex">
                  <FontAwesomeIcon className='w-[10px]' icon={faLocationDot} />
                  <div className="text-center text-black text-base font-normal font-['Poppins']">Lantai 4</div>
                </div>
              </div>
              <div className="self-stretch h-[148px] flex-col justify-start items-start gap-4 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-[99px] h-3 text-black text-base font-normal font-['Inter'] capitalize">Date</div>
                  <button className="w-[283px] h-12 px-4 bg-white rounded border border-neutral-950 justify-between items-center inline-flex">
                    <div className="text-center text-neutral-950 text-base font-normal font-['Inter'] capitalize">1 Aug 2023 - 31 Dec 2023</div>
                    <FontAwesomeIcon className="w-[16px]" icon={faCalendarDay}/>
                  </button>
                </div>
                <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
                  <button onClick={() => setOpen(true)} className="self-stretch h-16 bg-orange-500 rounded-lg border border-white justify-center items-center flex hover:bg-orange-800 active:bg-orange-900">
                    <div className="text-center text-white text-base font-bold font-['Inter'] capitalize">Register</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetilKamar