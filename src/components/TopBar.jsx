import React from 'react'
import Logo from '../../public/assets/img/logo.png'

const TopBar = () => {
    return (
        <div>
            <div className="offcanvas-menu-overlay" />
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__cart">

                </div>
                <div className="offcanvas__logo">
                    <a href="./index.html">
                        <img src={Logo} alt="" />
                    </a>
                </div>
                <div id="mobile-menu-wrap" />
                <div className="offcanvas__option">
                    
                </div>
            </div>
        </div>
    )
}

export default TopBar
