"use client"


import { useContext, useEffect } from "react"
import CatList from "./Components/CatList"
import ProductList from "./Components/ProductList"
import Slider from "./Components/Slider"
import { WixClientContext } from "./context/wixContext"

const HomePage = () => {
  const wixclient = useContext(WixClientContext)

  useEffect(() => {
    const getProducts = async()=>{
      const res = await wixclient.products.queryProducts().find()
      console.log(res)

    }
    getProducts()
  
    
  }, [wixclient])
  
  return (
    <div>
      <Slider/>
      <div className="mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <ProductList/>
      </div>
      <div className="mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <CatList/>
      </div>
      </div>
  )
}

export default HomePage