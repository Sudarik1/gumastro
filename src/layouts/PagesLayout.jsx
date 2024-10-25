
import { Outlet } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const PagesLayout = () => {
      
    return(
        <div>
            <Header />
            <div className="page">
                <Navbar />
                <div className="page__content">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PagesLayout