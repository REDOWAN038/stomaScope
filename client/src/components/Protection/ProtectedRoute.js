import { useContext } from 'react'
import AuthContext from '../../context/authContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, accessBy }) => {
    const { user } = useContext(AuthContext)
    if (accessBy === "unauthorized") {
        if (!user) {
            return children
        } else {
            return <Navigate to="/"></Navigate>
        }
    } else if (accessBy === "authorized") {
        if (user) {
            return children
        } else {
            return <Navigate to="/signin"></Navigate>
        }
    }
}

export default ProtectedRoute