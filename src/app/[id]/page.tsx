
import Image from 'next/image'
import { wixClientServer } from '../lib/wixServer'
import ProductGallery from '../Components/ProductGallery';
import Customize from '../Components/customize';

const SingleProduct = async ({params }) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products.queryProducts().eq("id",params.id).find()

  if (!res.items[0]) {
    return notFound();
  }
  const product = res.items[0]


  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-8'>
      <div className='w-full lg:w-1/2  '>
        <ProductGallery images={product.media?.items}/>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col gap-4'>
          <h1 className='text-4xl font-medium '>{product.name}</h1>
          <p className='text-gray-500'>{product.description}</p>
          <div>
          {product.price?.price === product.price?.discountedPrice ? (
          <h2 className="font-medium text-2xl">${product.price?.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.price?.price}
            </h3>
            <h2 className="font-medium text-2xl">
              ${product.price?.discountedPrice}
            </h2>
          </div>
        )}
          </div>
          <Customize variants={product.variants} options={product.productOptions} id={product._id}/>
        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p>{section.description}</p>
          </div>
              ))}
        </div>
    </div>
  )
}

export default SingleProduct