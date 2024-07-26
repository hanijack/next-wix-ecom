import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='p-8 flex flex-col sm:flex-row gap-8 bg-gray-100 text-sm mt-16'>
      <div className='flex flex-col sm:w-1/2  gap-4'>
        <h3 className=' text-xl tracking-wide'>DAMA</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus unde ut ea perferendis? Non asperiores suscipit nisi sit saepe.</p>
        <span className='font-semibold'>Hani.darklt@gmail.com</span>
        <span className='font-semibold'>+1212569843</span>
        <ul className='flex gap-2 justify-between w-full'>
          <li><Link href=""><Image src="/facebook.png" alt='' width={16} height={16}/></Link></li>
          <li><Link href=""><Image src="/instagram.png" alt='' width={16} height={16}/></Link></li>
          <li><Link href=""><Image src="/youtube.png" alt='' width={16} height={16}/></Link></li>
          <li><Link href=""><Image src="/pinterest.png" alt='' width={16} height={16}/></Link></li>
          <li><Link href=""><Image src="/x.png" alt='' width={16} height={16}/></Link></li>
        </ul>
      </div>
      <div className='flex flex-col  sm:w-1/2  gap-4'>
        <h3 className=' text-xl '>SUBSCRIBE</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus unde ut ea perferendis? Non asperiores suscipit nisi sit saepe.</p>
        <div className='flex'>
          <input placeholder='Email address' className='p-2 w-3/4'/>
          <button className='w-1/4 bg-[#F35C7A] text-white'>JOIN</button>
        </div>
        <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
      </div>
    
    </footer>
  )
}

export default Footer