import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[7vh] bg-neutral-950 flex justify-between items-center px-[165px]'>
      <div className='flex justify-center items-center'>
        <button className='bg-white rounded-xl w-[140px] p-0 font-bold flex text-2xl justify-center items-center'>
          <span className='rounded-xl basis-1/2 bg-orange-500 text-white text-center pb-0.5' >Tech</span>
          <span className='basis-1/2 text-center pb-0.5'>Nest</span>
        </button>
      </div>
      <div className='flex justify-between items-center gap-[48px]'>
        <a href="/" className="text-center w-20 text-white hover:font-bold text-base font-['Inter']">Home</a>
        <a href="/rooms" className="text-center w-20 text-white hover:font-bold text-base font-['Inter']">Rooms</a>
        <button className="text-center w-20 whitespace-nowrap text-white hover:font-bold text-base font-['Inter']">Contact Us</button>
        <div className='flex justify-between items-center gap-[16px]'>
          <button className="w-[110px] text-center bg-neutral-950  border border-white py-0.5 rounded-lg text-white hover:text-black hover:bg-white text-base font-normal font-['Inter']">
            Register
          </button>
          <button className="w-[110px] text-center bg-neutral-950  border border-white py-0.5 rounded-lg text-white hover:text-black hover:bg-white text-base font-normal font-['Inter']">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar