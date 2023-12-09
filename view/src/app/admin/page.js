import AddKamarModal from "@/components/AddKamarModal";
import TableKamar from "@/components/TableKamar";
import React from "react";

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

export default async function page() {
  const kamars = await getKamars();
  return (
    <>
      <div className='h-[9vh] bg-neutral-950 flex justify-between items-center px-[80px] lg:px-[165px]'>
        <div className='flex justify-center items-center'>
          <div className='bg-white rounded-xl w-[140px] p-0 font-bold flex text-2xl justify-center items-center'>
            <span className='rounded-xl basis-1/2 bg-orange-500 text-white text-center pb-0.5' >Tech</span>
            <span className='basis-1/2 text-center pb-0.5'>Nest</span>
          </div>
        </div>
        <div className='hidden lg:flex justify-between items-center gap-[48px]'>
        <div className='flex justify-between items-center gap-[16px]'>
        <button href="/" className="w-[110px] text-center bg-neutral-950  border border-white py-0.5 rounded-lg text-white hover:text-black hover:bg-white text-base font-normal font-['Inter']">
              Sign out
            </button>
            
          </div>
        </div>
        </div>
    
    <div className="flex justify-center items-center">
      <div className="container py-5 gap-5">
        <div className="flex justify-between">
          <div className="text-2xl font-bold">Daftar Kamar</div>
          <div className="flex gap-2 items-center text-md text-red-500 font-medium">
            <div>Klik button dikanan untuk menambah kamar</div>
            <AddKamarModal />
          </div>
        </div>
        <TableKamar />
      </div>
    </div>
    </>
  );
}
