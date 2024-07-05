import { CiSearch } from "react-icons/ci";

const SearchInput = ({ search, setSearch, onClick }) => {
  return (
    <div className="flex items-center rounded-full w-3/5 py-2 px-4 bg-white border">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full outline-none border-0"
        placeholder="Search"
      />
      <button type="button" onClick={onClick}>
        <CiSearch />
      </button>
    </div>
  );
};

export default SearchInput;
