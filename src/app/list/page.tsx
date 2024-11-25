
import Image from 'next/image'
import ProductList from '../Components/ProductList'
import { wixClientServer } from '../lib/wixServer';
import { Suspense } from 'react';

const Listpage = async ({searchParams}) => {
  const wixClient = await wixClientServer()
  const res = await wixClient.collections.queryCollections().eq("name",searchParams.cat || "All Products" ).find();


  return (
    <div className='flex flex-col w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <div className='hidden bg-[#a59da5] px-l-4 sm:flex justify-between h-64 lg:h-96'>
          <div className='flex flex-col justify-center items-center w-2/3 gap-4'>
            <h1 className='font-semibold text-lg text-center'> Grab up to 50% off on <br/>Selected Products</h1>
            <button className='bg-[#F35C7A] rounded-2xl  text-white w-max py-3 px-5 text-sm hover:bg-[#ee7890]'>Shop Now</button>
          </div>
            <div className='relative w-1/3'>
              <Image src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' fill sizes='50vw' className='absolute rounded-md object-cover ' />
            </div>
        </div>
        <div className='flex flex-col'>
   <ProductList cat={res.items[0]._id} limit={4} searchParams={searchParams}/>
        </div>
    </div>
  )
}

export default Listpage 