


import { useContext, useEffect } from "react"
import CatList from "./Components/CatList"
import ProductList from "./Components/ProductList"
import Slider from "./Components/Slider"
import { WixClientContext } from "./context/wixContext"
import { wixClientServer } from "./lib/wixServer"

const HomePage =async () => {
  // const wixclient = useContext(WixClientContext)

  // useEffect(() => {
  //   const getProducts = async()=>{
  //     const res = await wixclient.products.queryProducts().find()
  //     console.log(res)

  //   }
  //   getProducts()
  
    
  // }, [wixclient])

  return (
    <div>
      <Slider/>
      <div className="mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className='text-2xl font-semibold text-center'>Featured Products </h1>
        <ProductList cat={process.env.WIX_CLIENT_FEATURED_CAT} limit={4}/>
      </div>
      <div className="mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <CatList/>
      </div>
      </div>
  )
}

export default HomePage