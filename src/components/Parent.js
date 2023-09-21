import React from 'react'
import "./Css.css"
import Child from './Child'
function Parent() {
  return (
    <div className='parent'>
        <h1>Parent Componet</h1>
        <Child/>
    </div>
  )
}

export default Parent