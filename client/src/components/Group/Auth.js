import React from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
    const navigate = useNavigate()
    return (
        <ul className='md:flex gap-3 hidden'>
            <li><button className="bg-sgreen-100 border-2 border-sgreen-100 text-xs text-white px-3 py-1 rounded-full" onClick={() => navigate("/signin")}>Sign In</button></li>
            <li><button className="bg-white border-2 border-black text-xs text-black px-3 py-1 rounded-full" onClick={() => navigate("/signup")}>Sign Up</button></li>
        </ul>
    )
}

export default Auth