import React, { useState } from 'react'
const Calculator=()=>{
    const[result, setResult]=useState(0)
    const[n1,setN1]=useState()
    const[n2,setN2]=useState()


function addition() {
    setResult(Number(n1)+Number(n2))
}
function subtract() {
    setResult(Number(n1)-Number(n2))
}
function multiply() {
    setResult(Number(n1)*Number(n2))
}
function division() {
   
    if(n2==0){
        setResult("can't divide 0 ")
    }else{
         setResult(Number(n1)/Number(n2))
    }
}
  return (
   <div className="calculator">
      <h2>Calculator</h2>
      <div className="input-group">
        <input
          type="number"
          value={n1}
          onChange={(e) => setN1(e.target.value)}
          placeholder="First number"
        />
        <input
          type="number"
          value={n2}
          onChange={(e) => setN2(e.target.value)}
          placeholder="Second number"
        />
      </div>
      <div className="result">
        Result: {result}
      </div>
      <div className="button-group">
        <button onClick={addition}>+</button>
        <button onClick={subtract}>−</button>
        <button onClick={multiply}>×</button>
        <button onClick={division}>÷</button>
      </div>
    </div>
  )
}

export default Calculator