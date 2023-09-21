import React, { useState } from 'react'
import './Css.css'
function Child() {
   const [h,setH]=useState("");
   const [p,setP]=useState("");
    const show=()=>{
        setH("Model Content");
        setP("This is the  modal content");
    }
  return (
    <div className='Child'>
<h1>Child Componet</h1>
<button onClick={show}>Show Model</button>

{
    h&&<h1>{h}</h1>
}
{
    p&&<p>{p}</p>
}
    </div>
  )
}

export default Child