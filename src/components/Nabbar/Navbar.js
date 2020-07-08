import React from 'react'
import { IoMdBasket } from "react-icons/io"
import Style from './Navbar.module.css'

function Navbar() {
    return (
        <div>
            <div className={Style.menu}>
                <div className={Style.menu__Container}>
                    <div className='pull-right'>
                        <ul>
                            <li><IoMdBasket style={{ fontSize: '30px' }} /></li>
                            <li><a href='#'>Sign Up</a></li>
                            <li><a href='#'>Login</a></li>
                            <li><a href='#'> Locations</a></li>
                            <li><a href='#'>Order</a></li>
                        </ul>
                    </div>
                    <div className='pull-left'><h3>Logo_Test</h3></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
