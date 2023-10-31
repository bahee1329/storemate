import React from 'react'
import '../components/Bottomboxsty.css'

function Bottombox(props) {
  return (
    //just do a display format not like a button
    <div className='bottombox'>
        {props.data}
        <br/>
        {props.price}      
    </div>
  )
}

export default Bottombox