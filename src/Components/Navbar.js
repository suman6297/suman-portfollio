import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react"
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import './navbar.css'

const data = [
    {
        label: 'HOME',
        to: '/'
    },

    {
        label: 'ABOUT ME',
        to: '/About'
    },

    {
        label: 'EDUCATION',
        to: '/education'
    },

    {
        label: 'SKILL',
        to: '/skill'
    },

    {
        label: 'CONTACT ME',
        to: '/contact'
    }
]



const Navbar = () => {

    
    const [toogleicon, settoogleicon] = useState(false)

    const handleclick=()=>{
        settoogleicon(!toogleicon)

    }
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__contaniar'>
                    <Link to={'/'} className='portfollio'>
                        PORTFOLIO

                    </Link>

                </div>
                <ul className={`navbar__contaniar-menu ${toogleicon ? 'active':" "}`}>
                    {
                        data.map((item,key)=>(
                            <li key={key} className='navbar__contaniar-menu-item'>
                                <Link to={item.to} className='navbar__contaniar-menu-item-links'>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className='nav-icon' onClick={handleclick}
                >
                    {toogleicon?<HiX size={30} />:<FaBars size={30} />}
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar