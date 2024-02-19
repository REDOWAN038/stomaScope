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

    const setLoggedUser = (props) => {
        setUser(props)
    }

    return <AuthContext.Provider value={{ user, setLoggedUser }}>{children}</AuthContext.Provider>
}


export default AuthContext