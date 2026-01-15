import React from "react";
import { useContext } from "react";
import Context from "../Context";
import { Navigate } from "react-router-dom";

const Details = () =>{

const {product} = useContext(Context)

if(!product)
  return <Navigate to="/products" />

  return(
    <div className="bg-rose-600 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-6/12">
      <img src={product.image} className="w-6/12" alt="" />
      <h1>{product.title}</h1>
      <p className="text-gray-500 text-center">{product.description}</p>
      </div>
    </div>
  )


}

export default Details


