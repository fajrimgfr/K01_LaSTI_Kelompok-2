'use client';
import React, { useState, Fragment } from 'react'
import Login from './Login'
import Register from './Register';
import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const router = useRouter();

  function signOut() {
    setIsLogin(false)
    router.push(`http://localhost:3000/`)
  }

  return (
    <>
      <Register open={open2} setOpen={setOpen2} />
      <Login open={open} setOpen={setOpen} setIsLogin={setIsLogin}  />
      <div className='h-[9vh] bg-neutral-950 flex justify-between items-center px-[80px] lg:px-[165px]'>
        <div className='flex justify-center items-center'>
          <a href="/" className='bg-white rounded-xl w-[140px] p-0 font-bold flex text-2xl justify-center items-center'>
            <span className='rounded-xl basis-1/2 bg-orange-500 text-white text-center pb-0.5' >Tech</span>
            <span className='basis-1/2 text-center pb-0.5'>Nest</span>
          </a>
        </div>
        <div className='hidden lg:flex justify-between items-center gap-[48px]'>
          <a href="/" className="text-center w-20 text-white hover:font-bold text-base font-['Inter']">Home</a>
          {isLogin ? 
            <a href="/rooms" className="text-center w-20 text-white hover:font-bold text-base font-['Inter']">Rooms</a> :
            <></>
          }
          <a href="/" className="text-center w-20 whitespace-nowrap text-white hover:font-bold text-base font-['Inter']">Contact Us</a>
          <div className='flex justify-between items-center gap-[16px]'>
            {!isLogin ? 
            <>
              <button onClick={() => setOpen2(true)} className="w-[110px] text-center bg-neutral-950  border border-white py-0.5 rounded-lg text-white hover:text-black hover:bg-white text-base font-normal font-['Inter']">
                Register
              </button>
              <button onClick={() => setOpen(true)} className="w-[110px] text-center bg-neutral-950  border border-white py-0.5 rounded-lg text-white hover:text-black hover:bg-white text-base font-normal font-['Inter']">
                Login
              </button>
            </> :
            <button onClick={signOut} className="w-[110px] text-center bg-neutral-950  border border-white py-0.5 rounded-lg text-white hover:text-black hover:bg-white text-base font-normal font-['Inter']">
              Sign out
            </button>}
            
          </div>
        </div>
        <Menu as="div" className="lg:hidden relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center text-white">
              <FontAwesomeIcon className='w-[12px]' icon={faBars} />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={`${
                        active ? 'bg-orange-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Home
                    </a>
                  )}
                </Menu.Item>
                {isLogin ? 
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/rooms"
                        className={`${
                          active ? 'bg-orange-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Room
                      </a>
                    )}
                  </Menu.Item> :
                  <></>
                }
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={`${
                        active ? 'bg-orange-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Contact Us
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                {!isLogin ? <>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setOpen2(true)}
                      className={`${
                        active ? 'bg-orange-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Register
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setOpen(true)}
                      className={`${
                        active ? 'bg-orange-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Login
                    </button>
                  )}
                </Menu.Item> </> :
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={signOut}
                      className={`${
                        active ? 'bg-orange-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
                }
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  )
}

export default Navbar