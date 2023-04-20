import React from 'react'
import { useForm } from "react-hook-form";
import { TOKEN, USER } from '../../const';


import {Slide, ToastContainer, toast } from 'react-toastify';
import "../../sass/login.scss"
import { NavLink } from 'react-router-dom';
import { sendData } from '../../server/common';




const Register = () => {
  
  const {register,handleSubmit}= useForm ();
  const onSubmitt = (values)=>{
sendData("auth/register",values)
   .then((res)=>{
      toast.success("xush Kelibsiz")
    localStorage.setItem(TOKEN, res.data.token);
    localStorage.setItem(USER, JSON.stringify(res.data.user));

   window.location.href="/"
   })
    
  }
  return (
    <>
<div className='bg'>
      <ToastContainer  transition={Slide}/>
    <form className='formm'  onSubmit={handleSubmit(onSubmitt)}>
      <h2>My Partfolios</h2>
      <input  {...register("firstName", { required: true})} type="text" placeholder='Fist name' required />
      
      <input  {...register("lastName", { required: true})} type="text" placeholder='Last Name' required />
      <input  {...register("username", { required: true})} type="text" placeholder='username' required />
      <input  {...register("password", { required: true })} type="password" placeholder='password' required />
    <div className="clients"> 
    {/* <label htmlFor="client">Siz partfolio yaratmoqchimisiz</label> */}
    <input type="checkbox"  {...register("client")}  />
    
    </div>

      <input className='btn' value="Register" type="submit"/>
      <NavLink  to="/">Login </NavLink>

    </form>
</div>
    </>
  )
}

export default Register