
"use client"
import Image from 'next/image'
import { useState } from 'react'


const NavIcons = () => {
    const [isLogged, setIsLogged] = useState(false)
  return (
    <div className='flex justify-between items-center gap-4'>
        <Image src="/profile.png" alt='profile-logo' width={22} height={22} className='cursor-pointer'/>
        <Image src="/cart.png" alt='cart-logo' width={22} height={22} className='cursor-pointer'/>
        <Image src="/notification.png" alt='notification-logo' width={22} height={22} className='cursor-pointer'/>
    </div>
  )
}

export default NavIcons