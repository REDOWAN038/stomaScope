import { createContext, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({})

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        let userProfile = localStorage.getItem("user")
        if (userProfile) {
            return JSON.parse(userProfile)
        } else {
            return null
        }
    })

    const signinApiCall = async (email, password) => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,
                {
                    email,
                    password,
                },
                {
                    withCredentials: true,
                }
            )

            if (res?.data?.success) {
                const apiResponse = await axios.get(
                    `${process.env.REACT_APP_API}/api/v1/users/profile`,
                    { withCredentials: true }
                )

                if (apiResponse?.data?.success) {
                    setUser(apiResponse.data.payload)
                    localStorage.setItem("user", JSON.stringify(apiResponse.data.payload))
                }
            }

        } catch (error) {
            console.log(error);
        }
    }

    const logoutApiCall = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/logout`,
                { withCredentials: true }
            )

            console.log(res);
            localStorage.removeItem("user")
            setUser(null)
        } catch (error) {
            console.log(error);
        }
    }
    return <AuthContext.Provider value={{ user, signinApiCall, logoutApiCall }}>{children}</AuthContext.Provider>
}


export default AuthContext