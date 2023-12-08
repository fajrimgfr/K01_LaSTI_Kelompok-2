import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

export default function Register(props) {
  const [register, setRegister] = useState({email: "",name: "", phoneNumber: "", age: "", password: "", passwordConfirm: "",role: "customer"})
  const [warning, setWarning] = useState("");
  const cancelButtonRef = useRef(null)

  function ubahRegister(event) {
    const {name, value} = event.target;
    console.log(value.substring(value.length - 1).charCodeAt(0));
    
    // console.log(value.substring(value.length() - 1));

    if (name === "phoneNumber" || name === "age") {
      if (value.substring(value.length - 1).charCodeAt(0) >= 48 && value.substring(value.length - 1).charCodeAt(0) <= 57) {
        setRegister(prevValue => ({...prevValue, [name]: value}));
        setWarning("");
        console.log("duh");
      } else {
        setWarning("Hanya menerima input angka.")
        console.log("yeh")
      }
    } else {
      setRegister(prevValue => ({...prevValue, [name]: value}));
    }
    // setRegister(prevValue => ({...prevValue, [name]: value}));
  }

  const submitForm = async (event)=> {
    event.preventDefault();
    if (register.password !== register.passwordConfirm) {
      setWarning("Konfirmasi password salah.")
    } else {
      setWarning("");
      props.setOpen(false);
      const email= register.email;
      const nama= register.name;
      const phoneNumber= register.phoneNumber;
      const age= register.age;
      const password= register.password;
      const role= register.role;
      try{
        console.log("Uploaded");
        const response = await fetch('http://localhost:3000/api/user',{
            method: "POST",
            body: JSON.stringify({
              email,
              nama,
              phoneNumber,
              age,
              password,
              role
            }),
            headers: { "Content-Type": "application/json" },
        })
    }catch(error){
        console.log(error);
    }
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
              <Dialog.Panel className="h-[410px] p-[24px] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-[718px]">
                <Dialog.Title as="h3" className="text-gray-800 text-xl font-bold font-['Open Sans'] leading-normal flex justify-between items-center">
                    <div>Register</div>
                    <button
                        type="button"
                        onClick={() => props.setOpen(false)}
                        ref={cancelButtonRef}
                    >
                        <FontAwesomeIcon className='w-[12px]' icon={faX} />
                    </button>
                </Dialog.Title>
                <form onSubmit={submitForm}>
                  <div className="w-full flex justify-between items-center my-[24px] gap-[24px]">
                      <div className="basis-1/2">
                          <label for="email" className="block text-zinc-800 text-sm font-semibold font-['Open Sans'] leading-tight">Email</label>
                          <input required type="email" id="email" name="email" placeholder="Input your email" onChange={ubahRegister} value={register.email} className="w-full h-12 p-3.5 rounded-lg border border-neutral-500" />
                      </div>
                      <div className="basis-1/2">
                          <label for="name" className="block text-zinc-800 text-sm font-semibold font-['Open Sans'] leading-tight">Name</label>
                          <input required type="text" id="name" name="name" placeholder="Input your name" onChange={ubahRegister} value={register.name} className="w-full h-12 p-3.5 rounded-lg border border-neutral-500" />
                      </div>
                  </div>
                  <div className="w-full flex justify-between items-center mb-[24px] gap-[24px]">
                      <div className="basis-1/2">
                          <label for="phoneNumber" className="block text-zinc-800 text-sm font-semibold font-['Open Sans'] leading-tight">Phone Number</label>
                          <input required type="text" id="phoneNumber" name="phoneNumber" placeholder="Input your phone number" onChange={ubahRegister} value={register.phoneNumber} className="w-full h-12 p-3.5 rounded-lg border border-neutral-500" />
                      </div>
                      <div className="basis-1/2">
                          <label for="age" className="block text-zinc-800 text-sm font-semibold font-['Open Sans'] leading-tight">Age</label>
                          <input required type="text" id="age" name="age" placeholder="Input your age" onChange={ubahRegister} value={register.age} className="w-full h-12 p-3.5 rounded-lg border border-neutral-500" />
                      </div>
                  </div>
                  <div className="w-full flex justify-between items-center gap-[24px]">
                      <div className="basis-1/2">
                          <label for="password" className="block text-zinc-800 text-sm font-semibold font-['Open Sans'] leading-tight">Password</label>
                          <input required type="password" id="password" name="password" placeholder="Input your password" onChange={ubahRegister} value={register.password} className="w-full h-12 p-3.5 rounded-lg border border-neutral-500" />
                      </div>
                      <div className="basis-1/2">
                          <label for="passwordConfirm" className="block text-zinc-800 text-sm font-semibold font-['Open Sans'] leading-tight">Password Confirmation</label>
                          <input required type="password" id="passwordConfirm" name="passwordConfirm" placeholder="Reinput your password" onChange={ubahRegister} value={register.passwordConfirm} className="w-full h-12 p-3.5 rounded-lg border border-neutral-500" />
                      </div>
                  </div>
                  <div className='h-8 block'>
                    <p className='text-red-600'>
                      {warning}
                    </p>
                  </div>
                  <div className="flex flex-row-reverse">
                    <button
                      type="submit"
                      className="h-10 text-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white font-['Open Sans'] leading-tight shadow-sm hover:bg-red-800 active:bg-orange-900 ml-3 w-auto"
                    >
                      Register
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
