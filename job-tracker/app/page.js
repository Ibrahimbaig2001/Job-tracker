'use client'
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-15 gap-2 m-2 py-10">
      <span><input type="text" placeholder="Search Your Required work" className="border border-gray-300 rounded-md w-75"/>
      <button className="cursor-pointer mx-2 border border-1 px-1 rounded-md h-7 hover:bg-gray-200">Search</button></span>
    </div>
    </>
  );
}
