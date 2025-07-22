import React, { useState } from 'react'

function ChangeHeading() {
    const[heading ,setHeading]=useState('Learned HTML CSS JavaScript')
    function handleChangeHeading()
    {
        setHeading('Now Learning React')

    }
  return (
    <div ><h1>{heading}</h1>
    <button onClick={handleChangeHeading} style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '5px'
          
        }}>ChangeHeading </button></div>
  )
}

export default ChangeHeading