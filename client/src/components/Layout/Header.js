import React from 'react'
import { Menu } from '@material-ui/icons'

const Header = () => {
  return(
    <header className="w-screen h-14 flex justify-center items-center shadow-md px-4" id="header">
        <nav className="nav container flex justify-between items-center">
            <a href="#" className="nav__logo">
            <i class="fa-solid fa-leaf text-sgreen-100"></i><span className='ml-2 uppercase font-extrabold text-sm'> stomascope</span>
            </a>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list hidden">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">Home</a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">About</a>
                    </li>
                    <li className="nav__item">
                        <a href="#products" className="nav__link">Products</a>
                    </li>
                    <li className="nav__item">
                        <a href="#faqs" className="nav__link">FAQs</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">Contact Us</a>
                    </li>
                </ul>

                <div className="nav__close" id="nav-close">
                    <i className="ri-close-line"></i>
                </div>
            </div>

            <Menu/>
        </nav>
    </header>
  )
}

export default Header