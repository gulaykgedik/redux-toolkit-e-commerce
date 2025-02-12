import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className=" max-h-[300px] flex items-center gap-4 ">
      <div
        className="border-b pb-1 px-2 text-xl font-bold cursor-pointer"
        onClick={() => setCategory((state) => state.categories)}
      >
        KATEGORİ
      </div>
      {categories?.map((category, i) => (
        <div
          className="text-lg cursor-pointer hover:bg-gray-200 hover:rounded-2xl py-2 px-4 hidden md:block hover:dark:text-black"
          key={i}
          onClick={() => setCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
