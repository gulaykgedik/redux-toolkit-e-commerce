import NavbarLeft from "./navbarItem/NavbarLeft";
import NavbarRight from "./navbarItem/NavbarRight";

const Navbar = () => {
  return (
    <div className="shadow-md relative z-50 dark:bg-gray-900">
      <div className="flex items-center justify-between py-5  w-10/12 m-auto">
        <NavbarLeft />
        <NavbarRight />
      </div>
    </div>
  );
};

export default Navbar;
