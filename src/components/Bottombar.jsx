import React from 'react'
import './Bottombarsty.css'
import Bottombox from './Bottombox'
import Button from './Button'
import { AiOutlineDownload } from "react-icons/ai";

function Bottombar() {
    return (
        <div className='container1'>
            <div className='left'>
                <div className='leftb'>

                    <Bottombox data={"New Button"} price={'Rs.1000.00'} />
                    <Bottombox data={"Discount"} price={'Rs.0.00'} />
                    <Bottombox data={"Tax"} price={'Rs.90.00'} />
                    <h3 className='price'>item count:400</h3>
                </div>

                <div className='leftb'>

                    <Bottombox data={"New Button"} price={'Rs.1000.00'} />
                    <Bottombox data={"Shipping"} price={'Rs.1000.00'} />
                    <Bottombox data={"Packaging"} price={'Rs.1000.00'} />
                    <div className='price1'>
                        <Bottombox data={"Total"} price={'Rs.199,999.00'} />
                    </div>

                </div>

            </div>
            <div className='right'>
                <Button inner1={<AiOutlineDownload/>} inner={'Cash'} backgroundColor={"rgb(22, 160, 0)"}/>
                <Button inner1={<AiOutlineDownload/>} inner={'Pay'} backgroundColor={"rgba(253, 236, 0, 0.902)"}/>
                <Button inner1={<AiOutlineDownload/>} inner={'Card'} backgroundColor={"rgba(253, 236, 0, 0.902)"}/>
                <Button inner1={<AiOutlineDownload/>} inner={'Credit'}  backgroundColor={"rgba(253, 236, 0, 0.902)"}/>
                <Button inner={'Button'} backgroundColor={"blue"} color={'white'}/>
                <Button inner={'Button'} backgroundColor={"blue"} color={'white'}/>
                <Button inner={'Button'} backgroundColor={"blue"} color={'white'}/>
                <Button inner={'Button'} backgroundColor={"blue"} color={'white'}/>
            </div>
        </div>
    )
}

export default Bottombar