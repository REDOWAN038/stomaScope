import React from 'react'
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { Menu } from '@material-ui/icons'
import "../../css/tailwind.css"

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const isActive = (path) => {
        return location.pathname === path ? "border-b-2 border-sgreen-100 text-sgreen-100" : ""
    }
    return (
        <header className="bg-white w-screen h-20 flex justify-center items-center shadow-md fixed top-0 z-10" id="header">
            <nav className="w-full flex justify-between items-center px-9 lg:w-large text-xs lg:text-base">
                <NavLink to="/" className="nav__logo header-navlink">
                    <i class="fa-solid fa-leaf text-sgreen-100"></i><span className='ml-2 uppercase font-extrabold text-sm'> stomascope</span>
                </NavLink>
                <div className='flex gap-10'>
                    <ul className='md:flex gap-10 hidden'>
                        <li><NavLink to="/" className={`header-navlink hover:decoration-sgreen-100 hover:decoration-2  hover:text-sgreen-100 ${isActive('/')}`}>Home</NavLink></li>
                        <li><NavLink className={`header-navlink hover:decoration-sgreen-100 hover:decoration-2  hover:text-sgreen-100 ${isActive('/detect')}`}>Detect</NavLink></li>
                        <li><NavLink to="/history" className={`header-navlink hover:decoration-sgreen-100 hover:decoration-2  hover:text-sgreen-100 ${isActive('/history')}`}>History</NavLink></li>
                        <li><NavLink className={`header-navlink hover:decoration-sgreen-100 hover:decoration-2  hover:text-sgreen-100 ${isActive('/faqs')}`}>FAQs</NavLink></li>
                        <li><NavLink className='header-navlink  hover:decoration-sgreen-100 hover:decoration-2  hover:text-sgreen-100'>Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className='flex gap-10'>
                    <ul className='md:flex gap-3 hidden'>
                        <li><button className="bg-sgreen-100 border-2 border-sgreen-100 text-sm text-white px-3 py-2 rounded-md"><NavLink to='/signin'>Sign In</NavLink></button></li>
                        <li><button className="bg-white border-2 border-black text-sm text-black px-3 py-2 rounded-md"><NavLink to='/signup'>Sign Up</NavLink></button></li>
                    </ul>
                </div>
                <div className='md:hidden'><Menu /></div>
            </nav>
        </header>
    )
}

export default Header