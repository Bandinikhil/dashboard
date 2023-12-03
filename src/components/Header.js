import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { filterSearch, removeSearchData } from "../utils/searchFilter";

const Header = ({ deleteSelectedRows, data }) => {
  const [flag, setFlag] = useState(false);
  const [filter, setFilter] = useState("All");
  const dispatch = useDispatch();
  const handleDelete = () => {
    deleteSelectedRows();
  };

  const [query, setSearchQuery] = useState("");

  const handleFilter = (role) => {
    setSearchQuery("");
    dispatch(removeSearchData());
    if (role === "All") {
      dispatch(filterSearch(data));
    } else if (role === "member") {
      const filtered = data.filter((item) => item?.role === role);
      dispatch(filterSearch(filtered));
    } else if (role === "admin") {
      const filterrole = data.filter((item) => item?.role === role);
      dispatch(filterSearch(filterrole));
    }
  };

  const handleSearch = () => {
    dispatch(removeSearchData());
    const filteredData = data.filter(
      (item) =>
        item?.id.toLowerCase().includes(query.toLowerCase()) ||
        item?.email.toLowerCase().includes(query.toLowerCase()) ||
        item?.name.toLowerCase().includes(query.toLowerCase()) ||
        item?.role.toLowerCase().includes(query.toLowerCase())
    );
    console.log(filteredData);
    dispatch(filterSearch(filteredData));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col  md:flex-row items-center justify-between">
      <div className="flex items-center mx-3 my-4">
        <div className="flex space-x-1">
          <input
            type="text"
            className="block w-full px-4 py-2 shadow-lg text-black bg-white border rounded-full focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search"
            onKeyDown={handleKeyDown}
            value={query}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="search-icon px-4 text-white bg-gray-900 rounded-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* dropdown */}
      <div className="flex items-center justify-center">
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setFlag(!flag);
            }}
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm p-1 md:px-5 md:py-2.5 text-center inline-flex items-center "
            type="button"
          >
            <strong>{filter}</strong>{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdown"
            className={`${
              flag === true ? "block" : "hidden"
            }   bg-white divide-y absolute z-30 divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
          >
            <ul
              className="md:py-2 py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setFilter("All");
                    handleFilter("All");
                    setFlag(!flag);
                  }}
                  className="block px-2 py-1 md:px-4 md:py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  All
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setFilter("admin");
                    handleFilter("admin");
                    setFlag(!flag);
                  }}
                  className="block px-2 py-1 md:px-4 md:py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  admin
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setFilter("member");
                    handleFilter("member");
                    setFlag(!flag);
                  }}
                  className="block px-2 py-1 md:px-4 md:py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  member
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <button onClick={handleDelete} className="md:mr-16 mx-6 text-3xl">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
