import React, { useState } from 'react'
import vegiesData from '../../vegiesData'
const Vegetables = () => {
  const[vegies, setvegies]=useState(['karle','dodka','Bhopla','Sevga'])
  console.log(vegiesData)
  return (
    <div>
      <table>
        <thead>
          <th>sr.No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Availablity</th>
          <th>Action</th>
        </thead>
        <tbody>
          {vegiesData.map((veg,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{veg.name}</td>
              <td>{veg.price}</td>
              <td>{veg.quantity > 0 ?<p>In Stock</p>:<p>Not Available in Stock</p>}</td>
              <td><button><img src={veg.image} alt={veg.name} style={{width:"200px", height:"200px"}}/></button></td>
            </tr>
          ))}
        </tbody>

      </table>
      <ul>
        {vegies.map((veg,index)=>{
          <li>{veg}</li>
        })}
      </ul>
    </div>
  )
}

export default Vegetables