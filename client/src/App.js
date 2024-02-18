import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Detect from "./pages/Detect"
import FAQs from "./pages/FAQs"
import History from "./pages/History/History"
import PageNotFound from "./pages/PageNotFound"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/detect" element={<Detect />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
