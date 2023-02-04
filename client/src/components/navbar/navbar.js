import React from 'react'
import logo from '../../image/home-icon.svg'
import './navbar.css'
const Navbar = () => {
  return (
    <section className='navbar'>
        <nav>
            <div className="navbar-logo">
                <img src={logo} alt="" />
            </div>
            <ul className="navbar-items">
                <li>Home</li>
                <li>About Us</li>
                <li>Other Projects</li>
                <li>
                    <button>Sing in</button>
                </li>
            </ul>
        </nav>
        <h4>
        Find Your <span className='primary'>Dream Home</span> <br /> with Crypto
        </h4>
    </section>
  )
}

export default Navbar