"use client"
import React, { useContext, useEffect } from 'react'
import { currentCart } from "@wix/ecom";
import { WixClientContext } from '../context/wixContext';
import { CartStore } from '../Context/cartStore';

const Cart = () => {
  const wix = useContext(WixClientContext)
  const cartStore = CartStore()
  const {cart , isLoading , removeItem}=cartStore()
  console.log(cart )
      useEffect(() => {
        
          const getCart = async ()=>{
            const cartStore =await wix.currentCart.getCurrentCart()
            console.log(cartStore)
          }
          getCart()
      }, [wix])
  return (
    <>
    <div>Cart</div>
    </>
  )
}

export default Cart