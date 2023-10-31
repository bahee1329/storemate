import React from 'react'
import './Navbarsty.css'
import Selection from './Selection'
import { BsFillBrightnessHighFill } from "react-icons/bs";
import Profilepto from './Profilepto';

function Navbar() {
    const Api = [1, 2, 3, 4, 5, 6];
    return (
        <div className='container'>
            <div className='leftconer'>
                <BsFillBrightnessHighFill className='ln' style={{fontSize:'20',}}/>
                <Selection className='ln' />
                <div className='ln'>11/1/2023 | Wednesday</div>
            </div>

            <div className='center'>
                <h1>STOREMATE</h1>
            </div>

            <div className='rightconer'>
                {Api.map((item, index) => (
                    <Profilepto />
                ))}

                <div>Attanayaka</div>

                <Profilepto/>
                
            </div>

        </div>
    )
}

export default Navbar