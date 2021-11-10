import React from 'react'

import CartLogo from '../static/images/cart.svg'
// import NavLogo from '../static/images/burger.svg'
import Logo from '../static/images/logo.png'

export default function Header(props) {
    const { name, cart, onToggleCart } = props
    return (
        <header>
            <div className='container'>
                {/* <div className='navbar-handler'>
                    <img onClick={props.onShowNavbar} src={NavLogo} alt="navbar" />
                </div> */}

                <div className='logo'>
                    <a href='#'>
                        <img src={Logo} />
                        {name}
                    </a>
                </div>

                <div className='right-side'>

                    <div className={`cart-handler ${cart ? 'cart-not-empty' : null}`}>
                        <img onClick={onToggleCart} src={CartLogo} alt="React Logo" />
                    </div>
                    <div className='language-handler'>
                        <select onChange={props.onLanguageChange}>
                            <option value='english'>English</option>
                            <option className='arabic' value='arabic'>عربي</option>
                            <option value='german'>Deutsch</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    )
}