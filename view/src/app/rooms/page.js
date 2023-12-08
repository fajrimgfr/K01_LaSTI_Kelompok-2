import React from 'react'
import ListKamar from '@/components/ListKamar'

const getKamars = async () => {
    const response = await fetch('http://localhost:3000/api/kamar', {
        next: {
            revalidate: 0,
        }
    })

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return response.json();
}


async function Rooms() {
    const kamars = await getKamars();
    // console.log(kamars);

  return (
    <div className='min-h-[54vh]'>
        <div className="w-full h-[67px] px-[175px] py-6 justify-center sm:justify-start items-center gap-10 inline-flex">
            <div className="text-black text-base font-['Inter']">Home &gt; <span className="font-bold">Catalogue</span></div>
        </div>
        <div className='px-[60px] py-[32px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[40px] justify-center'>
            {kamars.length > 0 && kamars.map((kamar) => (
                <ListKamar foto={kamar.foto} noKamar={kamar.noKamar} harga={kamar.harga} key={kamar._id} tautan={`/rooms/${kamar._id}`} />
            ))}
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