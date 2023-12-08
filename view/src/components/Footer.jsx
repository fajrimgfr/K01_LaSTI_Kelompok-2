import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='w-full min-h-[37vh]  bg-neutral-950'>
      <div className='w-3/4 m-auto py-10 flex flex-col'>
          <h1 className='text-white text-center text-5xl basis-1/3 mb-5' style={{fontFamily: "'Abhaya Libre', serif"}}>Smart Dorm, Smart Residents</h1>
          <button className='basis-1/3 text-white w-44 rounded py-3 m-auto mb-9 bg-orange-500 hover:bg-orange-800 active:bg-orange-900' style={{fontFamily: "'Poppins', sans-serif"}}>Contact Us</button>
          <div className='flex flex-col md:flex-row gap-3 border-t py-3 justify-between items-center'>
            <div className='w-60 pt-4 flex justify-center'>
              <a href="/" className='bg-white rounded-2xl w-52 p-0 font-bold flex text-4xl justify-center'>
                <span className='rounded-2xl basis-1/2 bg-orange-500 text-white text-center pb-1' >Tech</span>
                <span className='basis-1/2 text-center'>Nest</span>
              </a>
            </div>
            <div className='text-center'>
              <p className='text-white' style={{fontFamily: "'Poppins', sans-serif"}}>© {new Date().getFullYear()} TechNest</p>
            </div>
            <div className='w-60 text-white flex justify-between items-center'>
              <button className='p-2 border hover:bg-orange-500 active:bg-orange-900 border-white rounded-full'>
                <FontAwesomeIcon className='w-4 h-4' icon={faLinkedinIn} />
              </button>
              <button className='p-2 border hover:bg-orange-500 active:bg-orange-900 border-white rounded-full'>
                <FontAwesomeIcon className='w-4 h-4' icon={faFacebookF} />
              </button>
              <button className='p-2 border hover:bg-orange-500 active:bg-orange-900 border-white rounded-full'>
                <FontAwesomeIcon className='w-4 h-4' icon={faInstagram} />
              </button>
              <button className='p-2 border hover:bg-orange-500 active:bg-orange-900 border-white rounded-full'>
                <FontAwesomeIcon className='w-4 h-4' icon={faYoutube} />
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer