import React, { useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { AiOutlineShoppingCart,AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Navbar = ({cart}) => {
    const [isOpen,setIsOpen]= useState(true)

    return (
        <nav>
            <div className="navbar">
                <div className="header">
                    <p className="logo"><Link to="/">salahlok@ <span>STORE</span></Link></p>
                    <div className="header-logo" onClick={()=> setIsOpen(!isOpen)}>{isOpen ?<AiOutlineClose className="fas-icon"/>:<FaBars className="fas-icon"/>}</div>
                </div>
                <div className={'links '+(isOpen && 'active')}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Product</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="navbar-shopping">
                        <span className='counter'>{cart.length === 0 ? "0" : cart.length}</span>
                        <Link to="/cart"><AiOutlineShoppingCart className="fas-icon"/></Link>
                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Navbar
