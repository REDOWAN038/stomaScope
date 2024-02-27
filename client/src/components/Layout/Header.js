import React, { useContext, useState } from 'react'
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { Menu, Close } from '@material-ui/icons'
import "../../css/tailwind.css"
import AuthContext from '../../context/authContext'
import Auth from '../Group/Auth'
import Logout from '../Group/Logout'
import { message } from "antd"
import "../../css/header.css"
import axios from 'axios'

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { user, setLoggedUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    const navId = isNavOpen ? 'navbar' : 'navbar-closed'

    const handleLogout = async () => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/api/v1/auth/logout`, {},
                { withCredentials: true }
            )

            if (response?.data?.success) {
                localStorage.removeItem("user")
                setLoggedUser(null)
                message.success(response?.data?.message)
                navigate("/users/signin/")
            }
        } catch (error) {
            message.error("something went wrong. try again!!!")
        }
    }

    const isActive = (path) => {
        return location.pathname === path ? "border-b-2 border-sgreen-100 text-sgreen-100" : ""
    }

    return (
        <header className="bg-white w-screen h-14 flex justify-center items-center shadow-md fixed top-0 z-10" id="header">
            <nav className="w-full flex justify-between items-center px-9 lg:w-large text-xs ">
                <NavLink to="/" className="nav__logo header-navlink">
                    <i class="fa-solid fa-leaf text-sgreen-100"></i><span className='ml-2 uppercase font-extrabold text-sm'> stomascope</span>
                </NavLink>
                <div className='flex gap-10'>
                    <ul className='md:flex gap-10 hidden' id={navId}>
                        <li><NavLink to="/" className={`header-navlink hover:decoration-sgreen-100 hover:decoration-2  hover:text-sgreen-100 ${isActive('/')}`}>Home</NavLink></li>

                        <li><NavLink to="/users/upload" className={`header-navlink hover:decoration-sgreen-100 hover:decoration-2  hover:text-sgreen-100 ${isActive('/users/upload')}`}>Upload</NavLink></li>

                        <li className="relative">
                            <div
                                className={`header-navlink cursor-pointer hover:decoration-sgreen-100 hover:decoration-2 hover:text-sgreen-100 ${isActive('/users/history')}`}
                                onMouseEnter={handleDropdownToggle}
                                onMouseLeave={handleDropdownToggle}
                            >
                                History
                                {isDropdownOpen && (
                                    <div className="absolute text-xs top-full -left-3 bg-white rounded-md p-2">
                                        <NavLink to="/users/history/images" className="block text-black p-1 hover:text-sgreen-100 hover:bg-sgreen-50">Images</NavLink>
                                        <NavLink to="/users/history/videos" className="block text-black p-1 hover:text-sgreen-100 hover:bg-sgreen-50">Videos</NavLink>
                                    </div>
                                )}
                            </div>
                        </li>

                        <li><NavLink to='/faqs' className={`header-navlink hover:decoration-sgreen-100 hover:decoration-2  hover:text-sgreen-100 ${isActive('/faqs')}`}>FAQs</NavLink></li>


                        {/* <li><NavLink className='header-navlink  hover:decoration-sgreen-100 hover:decoration-2  hover:text-sgreen-100'>Contact Us</NavLink></li> */}

                        {
                            !user ? (
                                <li><NavLink to='/users/signin' className={`md:hidden header-navlink hover:decoration-sgreen-100 hover:decoration-2  hover:text-sgreen-100 ${isActive('/users/signin')}`}>Sign In</NavLink></li>
                            ) : (
                                <li onClick={handleLogout}><NavLink to='' className={`md:hidden header-navlink hover:decoration-sgreen-100 hover:decoration-2  hover:text-sgreen-100 ${isActive('/users/signin')}`}>Log Out</NavLink></li>
                            )
                        }

                    </ul>
                </div>
                <div className='flex gap-10'>

                    {
                        !user ? <Auth /> : <Logout />
                    }

                </div>
                <div className='md:hidden cursor-pointer' onClick={handleNavToggle}>
                    {
                        !isNavOpen ? <Menu /> : <Close />
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header