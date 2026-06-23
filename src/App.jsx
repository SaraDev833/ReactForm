import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const [count, setCount] = useState(0)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
const userName = watch('username');
  const onSubmit=(data)=>{
console.log(data)
  }
  return (
    <>
 <form action="" onSubmit={handleSubmit(onSubmit)} className='mt-20 mx-100 flex justify-center flex-col h-125 w-70 '>
<input type="text" {...register("username")} className='px-2 py-3 border border-black' placeholder='username'/>


<input type="password" {...register("password")} className='px-2 py-3 mt-3 border border-black ' placeholder='password' />
  <button type='submit' className='px-4 py-3 border border-black  mt-3 bg-black text-white'>submit</button>
 </form>
    </>
  )
}

export default App
