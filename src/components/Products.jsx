import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../Context";
const Products = () =>{
  const navigate = useNavigate()
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

  const openProduct = (item) =>{

    setProduct(item)

    navigate('/details')

  }

  return(
    <div className="bg-gray-100 min-h-screen flex justify-center p-8">
      <div className="bg-white rounded-lg p-8 shadow-lg w-[80%] text-center">
        <h1 className="text-6xl font-bold">Context API</h1>
        <div className="mt-12 grid grid-cols-4">
          {
            products.map((item,index)=>(
              <div key={index} className="bg-white shadow-lg rounded-lg p-4 border">
                <img src={item.image} alt="" />
                 <button onClick={()=>openProduct(item)} className="hover:underline hover:text-blue-500">
                  <h1 className="font-medium text-lg mt-6">{item.title}</h1>
                 </button>
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


