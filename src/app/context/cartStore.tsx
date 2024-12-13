import { create } from 'zustand'
import { currentCart } from "@wix/ecom";
import { useContext } from 'react';
import { WixClientContext } from './wixContext';






export const CartStore= ()=>{

  const wix = useContext(WixClientContext)
  const useCartStore = create((set) => ({
      cart: [],
      isLoading: true,
      counter: 0,
      getCart: async (wix) => {
        try {
          const cart = await wix.currentCart.getCurrentCart();
          set({
            cart: cart || [],
            isLoading: false,
            counter: cart?.lineItems.length || 0,
          });
        } catch (err) {
          set((prev) => ({ ...prev, isLoading: false }));
        }
      },
      addItem: async (wix, productId, variantId, quantity) => {
        set((state) => ({ ...state, isLoading: true }));
        const response = await wix.currentCart.addToCurrentCart({
          lineItems: [
            {
              catalogReference: {
                appId: process.NEXT_PUBLIC_WIX_CLIENT,
                catalogItemId: productId,
                ...(variantId && { options: { variantId } }),
              },
              quantity: quantity,
            },
          ],
        });
    
        set({
          cart: response.cart,
          counter: response.cart?.lineItems.length,
          isLoading: false,
        });
      },
      removeItem: async (wix, itemId) => {
        set((state) => ({ ...state, isLoading: true }));
        const response = await wix.currentCart.removeLineItemsFromCurrentCart(
          [itemId]
        );
    
        set({
          cart: response.cart,
          counter: response.cart?.lineItems.length,
          isLoading: false,
        });
      },
    }));
    return useCartStore
}