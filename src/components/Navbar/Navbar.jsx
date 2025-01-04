import DropdownListMenu from "./DropdownListMenu"
import Logo from "./Logo"
import Search from "./SearchBar"


const Navbar = () => {
    return (
        <nav>
            <div className="flex flex-col items-center
            py-8  gap-4
            sm:justify-between  sm:flex-row
             
             ">
                <Logo />
                <Search />
                <DropdownListMenu />
            </div>
        </nav>
    )
}

export default Navbar
