import axios from "axios"
import { useContext } from "react"
import AuthContext from "../../context/authContext"
import { useNavigate } from "react-router-dom"
import { message } from "antd"


const Logout = () => {
    const { setLoggedUser } = useContext(AuthContext)
    const navigate = useNavigate()

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

    return (
        <ul className='md:flex gap-3 hidden'>
            <li><button className="bg-sgreen-100 border-2 border-sgreen-100 text-sm text-white px-3 py-1 rounded-full" onClick={() => handleLogout()}>Log Out</button></li>
        </ul>
    )
}

export default Logout