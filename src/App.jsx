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
  const onSubmit=async(data)=>{
     try {
      const response = await fetch("http://localhost:3000/" , {
       method:"POST" , 
       headers:{"Content-Type": "application/json"  },
       body:JSON.stringify(data)

      })
      const result = await response.json();
      console.log(result)
      
     } catch (error) {
       console.log(error)
     }
  }
  return (
    <>
 <form action="" onSubmit={handleSubmit(onSubmit)} className='mt-20 mx-100 flex justify-center flex-col h-125 w-70 '>
<input type="text" {...register("username" ,{required: "This field is required" , minLength:{
  value:3 , message:"minimum length is 3"} ,maxLength:{value:8 , message:'max length is 8'}})} className='px-2 py-3 border border-black' placeholder='username'/>
  <p>{errors.username?.message}</p>
{/* pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        "Password must contain uppercase, lowercase, number, and special character",
    } */}
<input type="password" {...register("password" , {required:"this field is required", minLength:{value:3 , message:"password cannot be less than 3"} , maxLength:{
  value:8 , message:"password maxlenght is 8"
},})} className='px-2 py-3 mt-3 border border-black ' placeholder='password' />
<p>{errors.password?.message}</p>
  <button type='submit' className='px-4 py-3 border border-black  mt-3 bg-black text-white'>submit</button>
 </form>
    </>
  )
}

export default App
