'use client'
import Image from "next/image";
import Link from "next/link";
export default function SignInPage() {
  return (
    <>
    <header className="text-5xl font-bold mb-5 pt-5 text-center justify-between pr-5">Sign In</header>
    <div className="p-20 gap-0 m-auto top-0 bottom-0">
   <div className="p-10 flex flex-col items-center justify-center gap-5 pt-10 border-1 w-80 m-auto rounded-2xl">
    <p>SignIn to continue</p>
    <label htmlFor="email" className="p-0 pt-2">Email</label>
    <input type="text" placeholder="Enter Your Email" className="p-5 gap-2 rounded-2xl"/>
    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password" placeholder="Enter Your Password"  className="p-5 gap-2 rounded-2xl"/>
    <button className="p-3 rounded-xl hover:bg-blue-500 cursor-pointer justify-center pl-1">SignIn</button>
    <p>New User, please LogIn <Link href='/signup' style={{color:"blue"}}>here</Link></p>
   </div>
   </div>
    </>
  );
}


