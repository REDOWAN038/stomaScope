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

function App() {
    return (
        <AuthContextProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/signin" element={
                    <ProtectedRoute accessBy="unauthorized">
                        <SignIn />
                    </ProtectedRoute>}
                />
                <Route path="/signup" element={
                    <ProtectedRoute accessBy="unauthorized">
                        <SignUp />
                    </ProtectedRoute>}
                />
                <Route path="/detect" element={
                    <ProtectedRoute accessBy="authorized">
                        <Detect />
                    </ProtectedRoute>}
                />
                <Route path="/history" element={
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
