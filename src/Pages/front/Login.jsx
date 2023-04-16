import React from 'react'
import { useForm } from "react-hook-form";
import { TOKEN } from '../../const';
import { sendData } from '../../const/common';
import {Slide, ToastContainer, toast } from 'react-toastify';
import "../../sass/login.scss"
import { NavLink } from 'react-router-dom';



const Login = () => {
  
  const {register,handleSubmit}= useForm ();
  const onSubmit = (values)=>{
   sendData("auth/login",values)
   .then(res=>{
    localStorage.setItem(TOKEN, res.data.token);
   window.location.href="/dashboard"
   }).catch(()=>{
    toast.error("UserNamae yoki password xato !",{ autoClose: 1000, })
   })
    
  }
  return (
    <>
<div className='bg'>
      <ToastContainer  transition={Slide}/>
    <form  onSubmit={handleSubmit(onSubmit)}>
      <h2>My Partfolios</h2>
      <input  {...register("username", { required: true})} type="text" placeholder='username' required />
      <input  {...register("password", { required: true })} type="password" placeholder='password' required />
      <input className='btn' value="Login" type="submit"/>
      <NavLink  to="register">Register </NavLink>

    </form>
</div>
    </>
  )
}

export default Login