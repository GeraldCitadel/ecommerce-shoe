import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../Asset/logo.png'
import cart_logo from '../Asset/cart_logo.png'
import Nav_icon from '../Asset/Menu_bar_icon.png'
import cancel_icon from '../Asset/Cancel_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu, setMenu] = useState('shop');
    const [showMenu, setShowMenu] = useState(false)
    const { getTotalCartItems } = useContext(ShopContext)

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>CitShop</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link to="/">Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("nike") }}><Link to="/nike">Nike</Link>{menu === "nike" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("crocs") }}><Link to="/crocs">Crocs</Link>{menu === "crocs" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_logo} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            <img src={Nav_icon} alt='Nav menu icon' onClick={() => setShowMenu(true)} className="bar" />

            <div className={"wrapper"}>

                {/* ......... Mobile menu ............... */}

                {showMenu && (
                    <div className={`${showMenu ? "mobile" : "mobilehide"}`}>
                        <div className={'logo-wrapper'}>
                            <div className={"logo"}>
                                {/* <img src={assets.logo} alt="Company logo" /> */}
                                <p>CitShop</p>
                            </div>
                            <div className={"right"}>
                                <img src={cancel_icon} alt='close icon' className={"hide"} onClick={() => setShowMenu(false)} />
                            </div>
                        </div>
                        <ul className={"navlink"}>
                            <Link to='/'><li onClick={() => setShowMenu(false)}>Shop</li></Link>
                            <Link to='/nike'><li onClick={() => setShowMenu(false)}>Nike</li></Link>
                            <Link to='/crocs'><li onClick={() => setShowMenu(false)}>Crocs</li></Link>
                            <Link to='/kids'><li onClick={() => setShowMenu(false)}>Kids</li></Link>
                            <Link to="login"><button onClick={() => setShowMenu(false)}>Login</button></Link>
                        </ul>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbar