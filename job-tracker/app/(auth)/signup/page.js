'use client'
import Image from "next/image";
import Link from "next/link";
export default function LogInPage() {
  return (
    <>
    <header className="text-5xl font-bold mb-5 pt-5 text-center justify-between pr-5">LogIn</header>
    <div className="p-20 gap-0 m-auto top-0 bottom-0">
   <div className="p-5 flex flex-col items-center justify-center gap-5 pt-10 border-1 w-80 m-auto rounded-2xl">
    <p>LogIn to continue</p>
    <input type="text" placeholder="Enter Your Name" className="p-5 gap-2 rounded-2xl" maxLength={30} />
    <input type="text" placeholder="Enter Your Email" className="p-5 gap-2 rounded-2xl"/>
    <input type="password" name="password" id="password" placeholder="Enter Your Password"  className="p-5 gap-2 rounded-2xl"/>
    <button className="p-3 rounded-xl hover:bg-blue-500 cursor-pointer justify-center pl-1">LogIn</button>
    <p>Already have an account, please SignIn <Link href='/signin' style={{color:"blue"}}>here</Link></p>
   </div>
   </div>
    </>
  );
}

