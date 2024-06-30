import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { WEATHER_URL } from "./data";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch(`${WEATHER_URL}&q=${search}`);

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex items-center border rounded-full w-3/5 py-2 px-4 bg-white">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full outline-none border-0"
        placeholder="Search"
      />
      <button type="button" onClick={handleClick}>
        <CiSearch />
      </button>
    </div>
  );
};

export default SearchInput;
