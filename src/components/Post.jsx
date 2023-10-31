import React from 'react'
import '../components/Poststy.css'

function Post(props) {
  return (
    <div className='post'>
        <img className='image' src={props.Api.img} alt=''/>
        <h2 style={{color:'blue'}}>{props.Api.product}</h2>
        <h2>{props.Api.number}</h2>
        <h2 >{props.Api.price}</h2>
    </div>
  )
}

export default Post