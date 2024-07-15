import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import MobileNavbar from "../Pages/Shared/Navbar/MobileNavbar/MobileNavbar";

const Main = () => {
    return (
        <div className="relative md:pb-0 pb-9">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <div className="fixed bottom-0 w-full z-50 md:hidden">
                <MobileNavbar/>
            </div>
            
        </div>
    );
};

export default Main;