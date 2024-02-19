import { createContext, useState } from "react";
import axios from "axios"

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
            await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,
                {
                    email,
                    password,
                },
                {
                    withCredentials: true,
                }
            )

            const apiResponse = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/users/profile`, { withCredentials: true })

            setUser(apiResponse.data.payload)
            localStorage.setItem("user", JSON.stringify(apiResponse.data.payload))
        } catch (error) {
            console.log(error);
        }
    }
    return <AuthContext.Provider value={{ user, signinApiCall }}>{children}</AuthContext.Provider>
}


export default AuthContext