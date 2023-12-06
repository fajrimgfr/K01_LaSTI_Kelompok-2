import React from 'react'

function ListKamar() {
  return (
    <button className='w-[300px] h-[292px]'>
        <img src="" alt="Foto Kamar" className='w-full h-[225px]' />
        <div className="w-full h-[67px] p-2.5 flex flex-col justify-center items-start gap-[3px]">
            <div className="self-stretch h-[47px] flex flex-col justify-center items-center gap-[3px]">
                <div className="self-stretch text-base font-medium font-['Inter']">Kamar 5A</div>
                <div className="self-stretch h-[25px] flex justify-between items-start">
                <div className="grow shrink basis-0 text-red-600 text-xl font-semibold font-['Inter']">Rp1.xxx.xxx/Month</div>
                </div>
            </div>
        </div>
    </button>
  )
}

export default ListKamar