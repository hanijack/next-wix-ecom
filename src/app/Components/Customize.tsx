"use client";

import { useState } from "react";

const Customize = ({ variants, options, id }) => {
  const [choicee, setChoicee] = useState({});

  const updateChoicee = (option, value) => {
    console.log( option , value)

    setChoicee((prev) => ({ ...prev, [option]: value }));
  };
  console.log(choicee)
  
  const availability = (c) => {
    return variants.some((variant) => {
      const varaiantsChoices = variant.choices;
      if (!varaiantsChoices) {
        return false;
      }
      return (
        Object.entries(c).every(
          ([key, value]) => varaiantsChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };
  console.log(choicee)
 
  return <div className="flex flex-col gap-4">
    {options.map(option =>(
      <div key={option.name}>
        <h3 className="font-bold">{option.name}</h3>
        <ul className="flex items-center gap-3">
          {option.choices?.map(choice =>{
             const disabled = !availability({
              ...choicee,
              [option.name!]: choice.description!,
            });

            const selected =
              choicee[option.name!] === choice.description;

            const clickHandler = disabled
              ? undefined
              : () => updateChoicee(option.name!, choice.description!);

            
              return option.name === "Color" ? (
                <li
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                  key={choice.description}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </li>
              ) : (
                <li
                  className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm"
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disabled
                      ? "#FBCFE8"
                      : "white",
                    color: selected || disabled ? "white" : "#f35c7a",
                    boxShadow: disabled ? "none" : "",
                    
                  }}
                  key={choice.description}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
          })}
        </ul>
      </div>
      
    )

    )}
      
  </div>;
};

export default Customize;