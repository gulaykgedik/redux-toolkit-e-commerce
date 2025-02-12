import { Link } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <div className="navleft text-6xl font-semibold cursor-pointer">
      <Link to="/">ShopTime</Link>
    </div>
  );
};

export default NavbarLeft;
