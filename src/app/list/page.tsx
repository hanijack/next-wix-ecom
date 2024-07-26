"use client"
import Image from 'next/image'
import { useState } from 'react'

const Listpage = () => {
    const [index, setIndex] = useState(0)
  return (
    <div className='flex flex-col md:flex-row '>
        <div className='relative'>
            <Image src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' fill sizes='50vw' />
        </div>
        <div className='flex flex-col'>

        </div>
    </div>
  )
}

export default Listpage 