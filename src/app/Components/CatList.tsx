import Image from "next/image"
import { wixClientServer } from "../lib/wixServer";
import Link from "next/link";

const CatList = async() => {
  const wixClient = await wixClientServer()
  const res = await wixClient.collections.queryCollections().find();

  return (
    <div className="">
        <h1 className='text-2xl font-semibold text-center'>Categories </h1>
        <div className="flex overflow-x-scroll gap-4 hidden-scroll mt-4">
            <div className="flex gap-4 md:gap-8 w-full">
           { res.items.map(item =>(
          <Link key={item._id} href={`/list?cat=${item.name}`} className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"> 
                 <div className='relative bg-slate-100 w-full flex flex-col gap-4 h-80 '>
                 <Image fill alt='' sizes='25vw' src={item.media?.mainMedia?.image?.url} className=' absolute object-cover rounded-md w-full hover:opacity-90  '/>
               </div>
                 <h3 className=" mt-8 font-light text-center tracking-wide z-10">{item.name}</h3>
                 </Link>

           ))

                }
                
            </div>
        </div>
    
    </div>
  )
}

export default CatList