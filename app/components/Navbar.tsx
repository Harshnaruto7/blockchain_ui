"use client"
import { useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Navbar() {

  const pathname = usePathname();

  const isActive = (path:String) => pathname === path;


  return (
    <div>
    <nav className="bg-gray-800 text-white p-4 my-2 rounded-lg max-w-[45rem] mx-auto">
      <ul className="flex justify-between">
        <li className={`hover:text-gray-200 hover:bg-black p-[22px] rounded-lg ${isActive('/Monitor') ? 'bg-blue-500' : ''}`}>
          <Link href="/Monitor">Monitor</Link>
        </li>
        <li className={`hover:text-gray-200 hover:bg-black p-[22px] rounded-lg ${isActive('/Hardware') ? 'bg-blue-500' : ''}`}>
          <Link href="/Hardware">Hardware</Link>
        </li>
        <li className={`hover:text-gray-200 hover:bg-black p-[22px] rounded-lg ${isActive('/Pools') ? 'bg-blue-500' : ''}`}>
          <Link href="/Pools">Pools</Link>
        </li>
      </ul>
    </nav>
  </div>
  );
}















