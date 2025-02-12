import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { MdSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemCount } = useSelector((state) => state.carts);
  const [theme, setTheme] = useState(<IoMoonSharp />);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const handleTheme = () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList == "dark") {
      setTheme(<MdSunny />);
    } else {
      setTheme(<IoMoonSharp />);
    }
  };

  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center  p-3 rounded-full bg-gray-200 dark:text-gray-800">
        <input
          className="bg-gray-200 outline-none "
          type="text"
          placeholder="Arama Yapınız..."
        />
        <BiSearch size={28} />
      </div>

      <AiOutlineHeart size={28} />
      <div onClick={() => navigate("cart")} className="relative cursor-pointer">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </div>
        <SlBasket size={28} />
      </div>

      <div
        className="text-xl ml-2 cursor-pointer text-black dark:text-white"
        onClick={handleTheme}
      >
        {theme}
      </div>
    </div>
  );
};

export default NavbarRight;
