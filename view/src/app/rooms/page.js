import React from 'react'
import ListKamar from '@/components/ListKamar'

function Rooms() {
  return (
    <div className='min-h-[54vh]'>
        <div className="w-full h-[67px] px-[175px] py-6 justify-center sm:justify-start items-center gap-10 inline-flex">
            <div className="text-black text-base font-['Inter']">Home &gt; <span className="font-bold">Catalogue</span></div>
        </div>
        <div className='px-[60px] py-[32px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[40px] justify-center'>
            {[1,2,3,4,5,6,7,8].map(() => <ListKamar />)}
        </div>
        <div className="h-[87px] px-[175px] py-6 justify-center sm:justify-end items-center gap-4 flex">
            <button className="w-[100px] px-2.5 py-1 rounded-lg border border-neutral-400 text-center">
                <p className="text-neutral-950 text-base font-normal font-['Inter'] capitalize">Prev</p>
            </button>
            <button className="w-[100px] px-2.5 py-1 rounded-lg border border-neutral-400 text-center">
                <p className="text-neutral-950 text-base font-normal font-['Inter'] capitalize">Next</p>
            </button>
        </div>
    </div>
  )
}

export default Rooms