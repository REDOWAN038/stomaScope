import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Detect from "./pages/Detect/Detect"
import FAQs from "./pages/FAQs"
import History from "./pages/History/History"
import PageNotFound from "./pages/PageNotFound"
import SignIn from "./pages/Auth/SignIn"
import SignUp from "./pages/Auth/SignUp"
import { AuthContextProvider } from "./context/authContext"
import ProtectedRoute from "./components/Protection/ProtectedRoute"
import Activate from "./pages/Auth/Activate"

function App() {
    return (
        <AuthContextProvider>
            <Routes>
                <Route path="/api/v1/" element={<Home />} />
                <Route path="/api/v1/faqs" element={<FAQs />} />
                <Route path="/api/v1/users/signin" element={
                    <ProtectedRoute accessBy="unauthorized">
                        <SignIn />
                    </ProtectedRoute>}
                />
                <Route path="/api/v1/users/signup" element={
                    <ProtectedRoute accessBy="unauthorized">
                        <SignUp />
                    </ProtectedRoute>}
                />
                <Route path="/api/v1/users/activate/:token" element={
                    <ProtectedRoute accessBy="unauthorized">
                        <Activate />
                    </ProtectedRoute>}
                />
                <Route path="/api/v1/users/detect" element={
                    <ProtectedRoute accessBy="authorized">
                        <Detect />
                    </ProtectedRoute>}
                />
                <Route path="/api/v1/users/history" element={
                    <ProtectedRoute accessBy="authorized">
                        <History />
                    </ProtectedRoute>}
                />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </AuthContextProvider>
    );
}

export default App;
