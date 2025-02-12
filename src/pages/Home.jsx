import { useState } from "react";
import Category from "../components/home/Category";
import Products from "../components/home/Products";
import SliderComp from "../components/home/SliderComp";
import Sorting from "../components/home/Sorting";

const Home = () => {
  const [sort, setSort] = useState(" ");
  const [category, setCategory] = useState("");

  return (
    <div className="w-10/12 m-auto">
      <SliderComp />
      <div className="bg-gray-100 my-5 p-5 flex items-center rounded-md justify-between dark:bg-gray-800">
        <Category setCategory={setCategory} />
        <Sorting setSort={setSort} />
      </div>
      <div className="flex">
        <Products category={category} sort={sort} />
      </div>
    </div>
  );
};

export default Home;
