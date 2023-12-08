'use client'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation';


export default function Login(props) {
  const [login, setLogin] = useState({email: "", password: ""});
  const cancelButtonRef = useRef(null);
  const router = useRouter();
  const [warning, setWarning] = useState("");

  function ubahLogin(event) {
    const {name, value} = event.target;

    setLogin(prevValue => ({...prevValue, [name]: value}));
  }

  const  submitForm = async(event)=> {
    event.preventDefault();
      const email= login.email;
      const password= login.password;
      try{
        console.log("Uploaded");
        const response = await fetch(`http://localhost:3000/api/${email}`,{
            method: "POST",
            body: JSON.stringify({
              password
            }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        if(data.redirect){
          router.push(`http://localhost:3000/${data.redirect}`)
          props.setIsLogin(true);
          props.setOpen(false);
          setLogin({email: "", password: ""})
          setWarning("");
        }else{
          if(data.message === "email salah") {
            setWarning("Email atau password salah.");
          }
        }
    }catch(error){
        console.log(error);
    }
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
              <Dialog.Panel className="h-[232px] max-h-[300px] p-[24px] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-[718px]">
                <Dialog.Title as="h3" className="text-gray-800 text-xl font-bold font-['Open Sans'] leading-normal flex justify-between items-center">
                    <div>Login</div>
                    <button
                        type="button"
                        onClick={() => props.setOpen(false)}
                        ref={cancelButtonRef}
                    >
                        <FontAwesomeIcon className='w-[12px]' icon={faX} />
                    </button>
                </Dialog.Title>
                <form onSubmit={submitForm}>
                <div className="w-full flex justify-between items-center mt-[24px] gap-[24px]">
                  <div className="basis-1/2">
                    <label for="email" className="block text-zinc-800 text-sm font-semibold font-['Open Sans'] leading-tight">Email</label>
                      <input required type="email" id="email" name="email" placeholder="Input your email" onChange={ubahLogin} value={login.email} className="w-full h-12 p-3.5 rounded-lg border border-neutral-500" />
                  </div>
                  <div className="basis-1/2">
                    <label for="password" className="block text-zinc-800 text-sm font-semibold font-['Open Sans'] leading-tight">Password</label>
                    <input required type="password" id="password" name="password" placeholder="Input your password" onChange={ubahLogin} value={login.password} className="w-full h-12 p-3.5 rounded-lg border border-neutral-500" />
                  </div>
                </div>
                <div className='h-1'>
                  <p className='text-red-500'>{warning}</p>
                </div>
                <div className="flex flex-row-reverse mt-8">
                  <button
                    type="submit"
                    className="h-10 text-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white font-['Open Sans'] leading-tight shadow-sm hover:bg-red-800 active:bg-orange-900 ml-3 w-auto"
                  >
                    Login
                  </button>
                </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
