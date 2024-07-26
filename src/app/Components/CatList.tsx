import Image from "next/image"

const CatList = () => {
  return (
    <div className="">
        <h1 className='text-2xl font-semibold text-center'>Categories </h1>
        <div className="flex overflow-x-scroll gap-4 hidden-scroll mt-4">
            <div className="  flex gap-4 md:gap-8 w-full">
                <div className='relative flex-shrink-0  w-full sm:w-1/2 lg:w-1/4 xl:w-1/6  h-80 '>
                <Image fill alt='' sizes='20vw' src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800" className='absolute object-cover rounded-md w-full  '/>
              </div>
                
                <div className='relative flex-shrink-0  w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 h-80  '>
                <Image fill alt='' sizes='20vw' src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800" className='absolute object-cover rounded-md  w-full '/>
              </div>
                
                <div className='relative flex-shrink-0  w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 h-80 '>
                <Image fill alt='' sizes='20vw' src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800" className='absolute object-cover rounded-md  w-full '/>
              </div>
                
                <div className='relative  w-full flex-shrink-0  sm:w-1/2 lg:w-1/4 xl:w-1/6 h-80 '>
                <Image fill alt='' sizes='20vw' src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800" className='absolute object-cover rounded-md  w-full '/>
              </div>
                
                <div className='relative flex-shrink-0  w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 h-80 '>
                <Image fill alt='' sizes='20vw' src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800" className='absolute object-cover rounded-md  w-full '/>
              </div>
                <div className='relative flex-shrink-0  w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 h-80 '>
                <Image fill alt='' sizes='20vw' src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800" className='absolute object-cover rounded-md  w-full '/>
              </div>
                
            </div>
        </div>
    
    </div>
  )
}

export default CatList