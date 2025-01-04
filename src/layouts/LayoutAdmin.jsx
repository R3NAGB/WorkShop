import Navbar from "@/components/Navbar/Navbar"
import { Outlet } from "react-router"


const LayoutAdmin = () => {
  return (
    <main className="container" >
        <Navbar />
        <hr />
        <Outlet />
    </main>
  )
}

export default LayoutAdmin
