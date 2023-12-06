import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
  return (
    <>
      <div className="w-full h-[598px] px-[175px] bg-black bg-opacity-20 flex flex-col justify-center items-start gap-[16px]">
        <div className="w-[567px] h-[126px] flex items-center">
          <p className="text-white text-[58px] font-normal font-['DM Serif Text'] leading-[58px] tracking-tight">TechNest</p>
        </div>
        <div className="w-[567px] text-white text-2xl font-normal font-['Inter'] leading-normal tracking-tight">Welcome to TechNest. The first smart dormitory in Bandung</div>
      </div>
      <div className='w-full min-h-[612px] px-[165px] pt-[60px] pb-[186.5px] flex flex-col justify-center items-center gap-[16px]'>
        <h1 className="text-center text-black text-[58px] font-semibold font-['Inter']">FAQ</h1>
        <button className='w-full h-14 px-6 py-4 bg-white rounded-lg border border-neutral-400 flex justify-between items-center'>
          <p className="text-neutral-950 text-base font-semibold font-['Inter']">What is TechNest Dormitory?</p>
          <div className="w-6 h-6">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </button>
        <button className='w-full h-14 px-6 py-4 bg-white rounded-lg border border-neutral-400 flex justify-between items-center'>
          <p className="text-neutral-950 text-base font-semibold font-['Inter']">How to Rent in TechNest Dormitory?</p>
          <div className="w-6 h-6">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </button>
        <button className='w-full h-14 px-6 py-4 bg-white rounded-lg border border-neutral-400 flex justify-between items-center'>
          <p className="text-neutral-950 text-base font-semibold font-['Inter']">How to Pay?</p>
          <div className="w-6 h-6">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </button>
        <button className='w-full h-14 px-6 py-4 bg-white rounded-lg border border-neutral-400 flex justify-between items-center'>
          <p className="text-neutral-950 text-base font-semibold font-['Inter']">How to Contact us?</p>
          <div className="w-6 h-6">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </button>
      </div>
    </>
  )
}

export default HomePage