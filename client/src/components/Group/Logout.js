import React, { useContext } from 'react'
import axios from "axios"
import AuthContext from '../../context/authContext'

const Logout = () => {
    const { setUser } = useContext(AuthContext)

    const handleLogout = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/auth/logout`,
                { withCredentials: true }
            )

            if (response?.data?.success) {
                localStorage.removeItem("user")
                console.log("hey");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ul className='md:flex gap-3 hidden'>
            <li><button className="bg-sgreen-100 border-2 border-sgreen-100 text-xs text-white px-3 py-1 rounded-full" onClick={() => handleLogout()}>Log Out</button></li>
        </ul>
    )
}

export default Logout