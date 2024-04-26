import { Outlet } from "react-router-dom";
import Footer from "../Pages/shared/Footer/Footer";
import Navbar from "../Pages/shared/navbar/Navbar";


const Main = () => {
    return (
        <div className="mx-6">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;