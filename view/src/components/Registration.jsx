import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Registration(props) {
  const [login, setLogin] = useState({email: "", password: ""})
  const cancelButtonRef = useRef(null)

  function ubahLogin(event) {
    const {name, value} = event.target;

    setLogin(prevValue => ({...prevValue, [name]: value}));
  }

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={props.setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center text-center:items-center p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-0 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-0 scale-95"
            >
              <Dialog.Panel className="h-[293px] p-[24px] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-[480px]">
                <Dialog.Title as="h3" className="text-gray-800 text-xl font-bold font-['Open Sans'] leading-normal flex justify-between items-center">
                    <div>Room Registration Form</div>
                    <button
                        type="button"
                        onClick={() => props.setOpen(false)}
                        ref={cancelButtonRef}
                    >
                        <FontAwesomeIcon className='w-[12px]' icon={faX} />
                    </button>
                </Dialog.Title>
                <div className="w-full flex flex-col justify-start my-[24px] pl-4">
                    <div className="text-neutral-800 text-base font-bold font-['Inter']">Room 5A</div>
                    <div className="text-red-600 text-xl font-bold font-['Inter']">Rp1.xxx.xxx</div>
                    <div className="mb-[10px] flex justify-start items-center gap-[20px]">
                        <div className="text-neutral-800 text-base font-medium font-['Inter']">Proof of Payment</div>
                        <button className="h-[34px] p-2 gap-2 rounded border border-gray-300 justify-between items-center inline-flex">
                            <FontAwesomeIcon className='text-sky-600 w-[10px]' icon={faArrowUpFromBracket} />
                            <div className="text-sky-600 text-sm">Add file</div>
                        </button>
                    </div>
                    <div className="text-right text-red-600 text-base font-medium font-['Inter']">Form belum diisi lengkap (peringatan form kosong)</div>
                </div>
                <div className="flex flex-row-reverse">
                  <button
                    type="button"
                    className="h-10 text-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white font-['Open Sans'] leading-tight shadow-sm hover:bg-red-800 active:bg-orange-900 ml-3 w-auto"
                    onClick={() => props.setOpen(false)}
                  >
                    Submit
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
