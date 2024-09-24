import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { wixClientServer } from '../lib/wixServer'

const ProductList = async({cat ,limit , searchParams}:{cat:string , limit?:number}) => {
  const wixClient = await wixClientServer()
  // console.log(searchParams)
  const res = await wixClient.products.queryProducts().eq("collectionIds" ,cat).limit(limit).find()
  return (
    <div className=" flex flex-col">
      
      <div className=' mt-4 flex justify-between gap-6 flex-wrap'>
        {res.items.map((product:products.product)=> 
          (<Link href={`/${product._id}`} key={product._id} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
          <div className='relative w-full h-80 bg-slate-100 '>
          <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
        </Link>))}
        {/* <Link href="" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
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
        </Link> */}
        
      </div>
    </div>
  )
}

export default ProductList