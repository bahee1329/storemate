import React from 'react'
import '../components/Bodypartsty.css'
import Selection from './Selection';
import { RxPerson } from "react-icons/rx";
import { AiOutlinePlusCircle, AiOutlineAppstore } from "react-icons/ai"
import Post from './Post';
import Api from '../Api';


function Bodypart() {
  return (
    <div className='container2'>
      <div className='leftbody'>
        <div className='lll'>
          <div className='leftbodyupper'>
            <div className='leftbodyuinner'>
              <button><RxPerson /></button>
              <Selection />
              <button><AiOutlinePlusCircle /></button>
            </div>

            <div className='leftbodyuinner'>
              <button><AiOutlineAppstore /></button>
              <Selection />
              <button><AiOutlinePlusCircle /></button>
            </div>
          </div>
          <div className='leftbodylower'>
            <Selection />
            <Selection />
            <Selection />
          </div>
        </div>
        <div className='details'>
          <div className='detailshead'>
            <div className='p'>PRODUCT</div>
            <div className='p'>QUANTITY</div>
            <div className='p'>UNIT PRICE</div>
            <div className='p'>LINE PRICE</div>
          </div>
          <div className='detailsbody'>
            Please Select The Product Item
          </div>
        </div>
      </div>
      <div className='rightbody'>

        <div className='rightbodyupper'>
          <Selection />
          <Selection />
          <Selection />
        </div>

        <div className='scroll'>

          {Api.map((element, index) => (
            <Post Api={element} key={index} />
            
          ))}
          


        </div>
      </div>
    </div>
  )
}

export default Bodypart