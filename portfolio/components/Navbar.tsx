"use client"

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState, useEffect } from 'react'
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  const navigate_data = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'About',
      href:'/about'
    },
    {
      label:'Projects',
      href:'/projects'
    },
    {
      label:'Contact',
      href:'/contact'
    }
  ]
    useEffect(() => {
    setMounted(true);
    },[])

    if(!mounted) return null
  return (
    <div className='flex justify-between p-8'> 
      <ul className='flex items-center space-x-10'>
        {navigate_data.map(item =>(
          <Link key={item.href} href={item.href} className={`font-semibold hover:border-blue-400 border rounded-full px-3 py-2 transition-all`}>
            <li>{item.label}</li>
          </Link>
        ))}
      </ul>
      <div >
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <FaRegMoon/> : <CiSun/>}</button>
      </div>
    </div>
  )
}

export default Navbar
