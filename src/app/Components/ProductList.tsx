import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className="  flex flex-col">
      <h1 className='text-2xl font-semibold text-center'>Featured Products </h1>
      <div className=' mt-4 flex justify-between gap-6 flex-wrap'>
        <Link href="" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
          <div className='relative w-full h-80 '>
            <Image fill alt='' sizes='25vw' src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800" className='absolute object-cover rounded-md hover:opacity-0 ease-in-out transition-opacity z-10 duration-500'/>
            <Image fill alt='' sizes='25vw' src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800" className='absolute object-cover rounded-md '/>
          </div>
        </Link>
        <Link href="" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
          <div className='relative w-full h-80 '>
            <Image fill alt='' sizes='25vw' src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800" className='absolute object-cover rounded-md hover:opacity-0 ease-in-out transition-opacity z-10 duration-500'/>
            <Image fill alt='' sizes='25vw' src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800" className='absolute object-cover rounded-md '/>
          </div>
        </Link>
        <Link href="" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
          <div className='relative w-full h-80 '>
            <Image fill alt='' sizes='25vw' src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800" className='absolute object-cover rounded-md hover:opacity-0 ease-in-out transition-opacity z-10 duration-500'/>
            <Image fill alt='' sizes='25vw' src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800" className='absolute object-cover rounded-md '/>
          </div>
        </Link>
        <Link href="" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
          <div className='relative w-full h-80 '>
            <Image fill alt='' sizes='25vw' src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800" className='absolute object-cover rounded-md hover:opacity-0 ease-in-out transition-opacity z-10 duration-500'/>
            <Image fill alt='' sizes='25vw' src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800" className='absolute object-cover rounded-md '/>
          </div>
        </Link>
        
      </div>
    </div>
  )
}

export default ProductList