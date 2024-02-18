import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from '@material-ui/icons'

const Header = () => {
  return(
    <header className="w-screen h-20 flex justify-center items-center shadow-md" id="header">
        <nav className="w-full flex justify-between items-center px-9 lg:w-large">
            <NavLink to='/' className="nav__logo">
            <i class="fa-solid fa-leaf text-sgreen-100"></i><span className='ml-2 uppercase font-extrabold text-sm'> stomascope</span>
            </NavLink>
            <div className='flex gap-10'>
                <ul className='md:flex gap-10 hidden'>
                    <li><NavLink to='/' className='hover:cursor-pointer hover:underline hover:decoration-sgreen-100 hover:decoration-2 hover:underline-offset-4 hover:text-sgreen-100'>Home</NavLink></li>
                    <li><NavLink className='hover:cursor-pointer hover:underline hover:decoration-sgreen-100 hover:decoration-2 hover:underline-offset-4 hover:text-sgreen-100'>Detect</NavLink></li>
                    <li><NavLink to='/' className='hover:cursor-pointer hover:underline hover:decoration-sgreen-100 hover:decoration-2 hover:underline-offset-4 hover:text-sgreen-100'>History</NavLink></li>
                    <li><NavLink className='hover:cursor-pointer hover:underline hover:decoration-sgreen-100 hover:decoration-2 hover:underline-offset-4 hover:text-sgreen-100'>FAQs</NavLink></li>
                    <li><NavLink className='hover:cursor-pointer hover:underline hover:decoration-sgreen-100 hover:decoration-2 hover:underline-offset-4 hover:text-sgreen-100'>Contact Us</NavLink></li>
                </ul>
                <div className='md:hidden'><Menu/></div>
            </div>
        </nav>
    </header>
  )
}

export default Header