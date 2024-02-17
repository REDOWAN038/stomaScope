import React from 'react'
import { Menu } from '@material-ui/icons'

const Header = () => {
  return(
    <header className="w-screen h-14 flex justify-center items-center shadow-md" id="header">
        <nav className="w-full flex justify-between items-center px-9 lg:w-large">
            <a href="#" className="nav__logo">
            <i class="fa-solid fa-leaf text-sgreen-100"></i><span className='ml-2 uppercase font-extrabold text-sm'> stomascope</span>
            </a>
            <div className='flex gap-10'>
                <ul className='md:flex gap-10 hidden'>
                    <li><a className='hover:underline hover:decoration-sgreen-100 hover:decoration-2 hover:underline-offset-4 hover:text-sgreen-100'>Home</a></li>
                    <li><a className='hover:underline hover:decoration-sgreen-100 hover:decoration-2 hover:underline-offset-4 hover:text-sgreen-100'>About</a></li>
                    <li><a className='hover:underline hover:decoration-sgreen-100 hover:decoration-2 hover:underline-offset-4 hover:text-sgreen-100'>Procedure</a></li>
                    <li><a className='hover:underline hover:decoration-sgreen-100 hover:decoration-2 hover:underline-offset-4 hover:text-sgreen-100'>FAQs</a></li>
                    <li><a className='hover:underline hover:decoration-sgreen-100 hover:decoration-2 hover:underline-offset-4 hover:text-sgreen-100'>Contact Us</a></li>
                </ul>
                <div className='md:hidden'><Menu/></div>
            </div>
        </nav>
    </header>
  )
}

export default Header