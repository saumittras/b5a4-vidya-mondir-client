import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { ModeToggle } from "../ui/mode-toggler";
import { NavigationMenu, NavigationMenuItem } from "../ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="flex w-full ">
      <div className="manu-bar w-11/12 mx-auto flex items-center justify-between">
        <div>
          <div className="logo w-52 h-20">
            <img src={logo} alt="" className="h-full w-full" />
          </div>
        </div>

        <div className="div flex items-center">
          <NavigationMenu className="list-none self-end gap-5 ">
            <NavigationMenuItem>
              <NavLink to={"/"}>Home</NavLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavLink to={"/all-books"}>All Books</NavLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavLink to={"/add-book"}>Add Book</NavLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavLink to={"/borrow"}>Borrow Summary</NavLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <ModeToggle></ModeToggle>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
