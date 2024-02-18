import { createContext } from "react";
import axios from "axios"

const AuthContext = createContext({})

export const AuthContextProvider = ({ children }) => {
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
            console.log(apiResponse);
        } catch (error) {
            console.log(error);
        }
    }
    return <AuthContext.Provider value={{ signinApiCall }}>{children}</AuthContext.Provider>
}


export default AuthContext