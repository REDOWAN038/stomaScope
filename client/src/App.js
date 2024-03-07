import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Upload from "./pages/Upload/Upload"
import FAQs from "./pages/FAQs/FAQs"
import PageNotFound from "./pages/PageNotFound/PageNotFound"
import SignIn from "./pages/Auth/SignIn"
import SignUp from "./pages/Auth/SignUp"
import { AuthContextProvider } from "./context/authContext"
import ProtectedRoute from "./components/Protection/ProtectedRoute"
import Activate from "./pages/Auth/Activate"
import ImageHistory from "./pages/History/ImageHistory"
import VideoHistory from "./pages/History/VideoHistory"
import ResetPassword from "./pages/Auth/ResetPassword"
import ResetPasswordConfirmation from "./pages/Auth/ResetPasswordConfirmation"

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
                <Route path="/users/reset-password" element={
                    <ProtectedRoute accessBy="unauthorized">
                        <ResetPassword />
                    </ProtectedRoute>}
                />
                <Route path="/users/reset-password-confirmation/:token" element={
                    <ProtectedRoute accessBy="unauthorized">
                        <ResetPasswordConfirmation />
                    </ProtectedRoute>}
                />
                <Route path="/users/upload" element={
                    <ProtectedRoute accessBy="authorized">
                        <Upload />
                    </ProtectedRoute>}
                />
                <Route path="/users/history/images" element={
                    <ProtectedRoute accessBy="authorized">
                        <ImageHistory />
                    </ProtectedRoute>}
                />
                <Route path="/users/history/videos" element={
                    <ProtectedRoute accessBy="authorized">
                        <VideoHistory />
                    </ProtectedRoute>}
                />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </AuthContextProvider>
    );
}

export default App;
