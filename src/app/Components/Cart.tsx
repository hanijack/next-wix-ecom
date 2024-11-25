"use client"

import React, { useContext, useEffect } from 'react'
import { currentCart } from "@wix/ecom";
import { WixClientContext } from '../context/wixContext';

const Cart = () => {
    const wix = useContext(WixClientContext)


      useEffect(() => {
        
          const getCart = async ()=>{

            const cartStore =await wix.currentCart.getCurrentCart()
            // console.log(cartStore)
          }
          getCart()
      
      }, [wix])
  return (
    <div>Cart</div>
  )
}

export default Cart