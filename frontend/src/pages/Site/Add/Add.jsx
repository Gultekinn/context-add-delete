import React, { useState } from 'react'
import {Formik,Form,Field} from 'formik'
import axios from 'axios'
import "../Add/Add.scss"
const Add = () => {
    const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const item={
        name,
        price
    }
  return (



    <div className="forms">

<div className="heart">
    
</div>


        <div className="form">
    <Formik onSubmit={async()=>{
      await axios.post('http://localhost:7075/',item).then((res)=>{

        })
    }} initialValues={{name:"",price:""}}>
        <Form> 
            <label htmlFor="textt">Name:</label> <br />

            <Field onChange={(e)=>{
                setName(e.target.value)
            }}  id='textt' value={name}type='text'/> <br />
            <label htmlFor="pricee">Price:</label> <br />
            <Field onChange={(e)=>{
                setPrice(e.target.value)
            }} id='pricee' value={price} type='Number'/> <br />
            <button id='btnn' type='submit'>Submit</button>
        </Form>
    </Formik>
    </div>
    </div>
  )
}

export default Add
