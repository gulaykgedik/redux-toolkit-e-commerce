const Sorting = ({ setSort }) => {
  return (
    <div className="">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-white py-3 px-5 dark:bg-gray-900"
        name=""
        id=""
      >
        <option disabled value="">
          SEÇİNİZ
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
