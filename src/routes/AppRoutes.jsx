


import Layout from "@/layouts/Layout";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import About from "@/pages/About";
import Camping from "@/pages/Admin/Camping";
import Dashboard from "@/pages/Admin/Dashboard";
import Manage from "@/pages/Admin/Manage";
import Home from "@/pages/Home";
import Notfound from "@/pages/Notfound";
import { BrowserRouter, Routes, Route} from "react-router";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public */}
                <Route  element={<Layout />}>

                    <Route path="/" element={<Home/> } />
                    <Route path="/about" element={<About />} />

                </Route>
                {/* Private */}
                <Route path="admin" element={<LayoutAdmin />} >

                    <Route index element={<Dashboard />} />
                    <Route path="manage" element={<Manage />} />
                    <Route path="camping" element={<Camping />} />

                </Route>
                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes