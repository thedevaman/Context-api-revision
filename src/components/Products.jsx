import React, { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../Context";
const Products = () =>{
  const {setProduct} = useContext(Context)
const [products,setProducts] = useState([]) 


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setProducts(data)
    })
    .catch((error)=>{
    console.log(error)
    })
   
  },[])

  return(
    <div className="bg-gray-100 min-h-screen flex justify-center p-8">
      <div className="bg-white rounded-lg p-8 shadow-lg w-[80%] text-center">
        <h1 className="text-6xl font-bold">Context API</h1>
        <div className="mt-12 grid grid-cols-4">
          {
            products.map((item,index)=>(
              <div key={index} className="bg-white shadow-lg rounded-lg p-4 border">
                <img src={item.image} alt="" />
                 <Link to="/details">
                  <h1 className="font-medium hover:underline hover:text-blue-500">{item.title}</h1>
                 </Link>
                <label className="text-gray-600 mt-3">Rs {item.price}</label>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )


}

export default Products


