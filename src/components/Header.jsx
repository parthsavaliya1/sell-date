import React from 'react'
import { FaBars } from "react-icons/fa";
import Logo from '../../public/assets/img/logo.png'


const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header__top__inner">
                                    <div className="header__top__left">
                                       <div className='logo-word'>SPDC BITES</div>
                                    </div>
                                    {/* <div className="header__logo">
                                        <a href="./index.html">
                                            <img src={Logo} alt="" />
                                        </a>
                                    </div> */}
                                    <div className="header__top__right">
                                        
                                        <div className="header__top__right__cart">
                                            <button className='enquiry-btn'>Enquiry</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="canvas__open">
                           <FaBars/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li className="active">
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about">About</a>
                                    </li>
                                    {/* <li>
                                        <a href="./shop.html">Shop</a>
                                    </li>
                                  
                                    <li>
                                        <a href="./blog.html">Blog</a>
                                    </li> */}
                                    <li>
                                        <a href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
