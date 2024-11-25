"use client"
import Image from 'next/image'
import {useState} from 'react'

const ProductGallery = ({images}) => {
    const [index , setIndex]= useState(0)
  return (
    <>
    <div className='h-[450px] relative '>
        <Image fill src={images[index].image?.url} alt='' sizes='50vw' className='object-cover rounded-r-md'/>
    </div>
    <div className='flex justify-between gap-4 mt-4'>
        {images.map((item , index) =>(
            <div key={item._id} onClick={()=> setIndex(index)} className="relative w-1/4 h-32 cursor-pointer">
            <Image fill alt='' sizes='25vw' src={item.image.url}/>
            </div>
        ))}
    </div>
    </>
  )
}

export default ProductGallery