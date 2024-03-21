import React from "react";
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="flex-1 mt-20 min-h-screen">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout