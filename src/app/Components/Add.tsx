"use client"

import { useState } from "react";

const Add = ({productId , variantId , quantity}) => {

  const [stockNumber, setStockNumber] = useState(1)

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && stockNumber > 1) {
      setStockNumber((prev) => prev - 1);
    }
    if (type === "i" && stockNumber < quantity) {
      setStockNumber((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
    <h4 className="font-medium">Choose a Quantity</h4>
    <div className="flex flex-col gap-4 md:flex-row md:justify-between ">
      <div className="flex items-center gap-4">
        <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
          <button
            className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
            onClick={() => handleQuantity("d")}
            disabled={stockNumber===1}
          >
            -
          </button>
          {stockNumber}
          <button
            className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
            onClick={() => handleQuantity("i")}
            disabled={quantity===stockNumber}
          >
            +
          </button>
        </div>
        {quantity < 1 ? (
          <div className="text-xs">Product is out of stock</div>
        ) : (
          <div className="text-xs">
            Only <span className="text-orange-500">{quantity} items</span>{" "}
            left!
            <br /> {"Don't"} miss it
          </div>
        )}
      </div>
      
      <button
        // onClick={() => addItem(wixClient, productId, variantId, quantity)}
        // disabled={isLoading}
        className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-[#f35c7a] hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none"
      >
        Add to Cart
      </button>
    </div>
  </div>
)
};

export default Add