import React, { useContext, useState } from 'react'
import"../component/Card.scss"
import axios from "axios"
import { MainContext } from '../Context/Context'
const Card = () => {
    const {basketItems,setBasketItems}=useContext(MainContext)
    const [data,setData]=useState([])
    
    axios.get("http://localhost:7075/").then((res)=>{
        setData(res.data)
    })
  return (
    <div>
      <div className="div">
        {
            data.map((item,index)=>{
                return (
                    <div className="div__card">
    <div className="div__card__img">
        <img id='imgs' src="data:image/jpeg;base64,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" alt="" />
    </div>
    <h1>{item.name}</h1>
    <p>{item.price}$</p>
    <button onClick={()=>{
        setBasketItems ([...basketItems,item])
    }}>Basket</button>
    <button onClick={()=>{
        axios.delete(`http://localhost:7075/${item._id}`).then((res)=>{
            console.log("delete")
        })
    }}>Delete</button>
</div>
                )
            })
        }

</div>
    </div>
  )
}

export default Card