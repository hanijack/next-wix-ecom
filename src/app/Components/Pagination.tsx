"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"


const Pagination = ({prev , next , pageNumber}) => {
   
    const pathname= usePathname()
    const searchParams = useSearchParams()
    const {replace}= useRouter()
    
   const pageUrl = (Number)=>{
    const newSearchParama = new URLSearchParams(searchParams)
    newSearchParama.set("page" , Number.toString())
    replace(`${pathname}?${newSearchParama.toString()}`);

   }
  return (
 <div className=" mt-10 flex justify-between items-center w-full">
      <button className="bg-[#f35c7a] disabled:cursor-not-allowed disabled:bg-pink-200 rounded-md text-white text-sm p-2" onClick={()=>{pageUrl(pageNumber-1)}} disabled={!prev}>Previous</button>
      <button className="bg-[#f35c7a] disabled:cursor-not-allowed disabled:bg-pink-200 rounded-md text-white text-sm p-2" onClick={()=>{pageUrl(pageNumber+1)}} disabled={!next}>Next</button>
 </div>
 
  )
}

export default Pagination