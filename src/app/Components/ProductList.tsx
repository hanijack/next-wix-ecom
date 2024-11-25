import Image from 'next/image'
import Link from 'next/link'
import { wixClientServer } from '../lib/wixServer'
import Pagination from './Pagination'

const ProductList = async({cat ,limit ,  searchParams }:{cat:string , limit?:number}) => {
  const wixClient = await wixClientServer()
  console.log(searchParams)

  const res = await wixClient.products.queryProducts().eq("collectionIds" ,cat).limit(limit).skip(
    searchParams?.page
      ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
      : 0
  ).find()
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
        
      </div>
            {searchParams?.cat ? (
              <Pagination pageNumber={res.currentPage ||0} next={res.hasNext()} prev={res.hasPrev()}/>
            ):null}
    </div>
  )
}

export default ProductList