import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Upload from "./pages/Upload/Upload"
import FAQs from "./pages/FAQs/FAQs"
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
                <Route path="/" element={<Home />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/users/signin" element={
                    <ProtectedRoute accessBy="unauthorized">
                        <SignIn />
                    </ProtectedRoute>}
                />
                <Route path="/users/signup" element={
                    <ProtectedRoute accessBy="unauthorized">
                        <SignUp />
                    </ProtectedRoute>}
                />
                <Route path="/users/activate/:token" element={
                    <ProtectedRoute accessBy="unauthorized">
                        <Activate />
                    </ProtectedRoute>}
                />
                <Route path="/users/upload" element={
                    <ProtectedRoute accessBy="authorized">
                        <Upload />
                    </ProtectedRoute>}
                />
                <Route path="/users/history" element={
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
