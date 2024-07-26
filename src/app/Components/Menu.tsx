"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <Image src="/menu.png" alt="menu-icon" width={28} height={28} className="cursor-pointer " onClick={()=> setOpen(prev => !prev)}/>
        {open && (
            <div className="absolute bg-black text-white left-0 top-20 h-[calc(100vh-80px)] w-full flex flex-col justify-center gap-8 items-center text-lg z-10">
                <Link href="">Home</Link>
                <Link href="">About</Link>
                <Link href="">Contact</Link>
                <Link href="">Deals</Link>
                <Link href="">Shop</Link>
                <Link href="">Logout</Link>
                <Link href="">Cart(1)</Link>
            </div>
        )}
    </div>
  )
}

export default Menu