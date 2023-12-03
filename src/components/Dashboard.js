import React, { useEffect, useState } from "react";
import { DASHBOARD_API } from "../utils/constants";
import { Card, Typography } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { FaRegEdit } from "react-icons/fa";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { Button, IconButton } from "@material-tailwind/react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Header from "./Header";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [active, setActive] = useState(1);
  const [recPerPage, setRecPerPage] = useState(10);
  const [flag, setFlag] = useState(false);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [allData, setAllData] = useState([]);
  const searchData = useSelector((store) => store?.search?.filteredData);
  //paginations values
  const recordsPerPage = recPerPage;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1); //ex:- [1,2,3,4,5]
  let frstPage = numbers[0];
  let lstPage = numbers[numbers.length - 1];

  const toggleSelectAll = () => {
    if (selectedRows.length === records.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...records.map((row) => row.id)]);
    }
  };

  //checkbox to select oe descelect induvidual rows
  const toggleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const deleteSelectedRows = () => {
    const updatedData = data.filter((row) => !selectedRows.includes(row.id));
    setData(updatedData);
    // Clear selected rows after deletion
    setSelectedRows([]);
  };

  const handleEdit = (id) => {
    setEditId(id);
    const userToEdit = data.find((user) => user.id === id);
    setName(userToEdit.name);
    setEmail(userToEdit.email);
    setRole(userToEdit.role);
  };

  const handleSave = () => {
    const updatedData = data.map((user) => {
      if (user.id === editId) {
        return {
          ...user,
          name,
          email,
          role,
        };
      }
      return user;
    });
    setData(updatedData);
    setEditId(null);
  };

  const handleDelete = (id) => {
    // Filter out the user with the specified id and update the data
    const updatedData = data.filter((user) => user.id !== id);
    setData(updatedData);
  };

  const numberClick = (index) => {
    setCurrentPage(index);
    setActive(index);
  };

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => numberClick(index),
    className: "rounded-full",
  });

  const next = () => {
    if (currentPage !== lstPage) {
      setCurrentPage(currentPage + 1);
      setActive(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage !== frstPage) {
      setCurrentPage(currentPage - 1);
      setActive(currentPage - 1);
    }
  };

  const firstPage = () => {
    setCurrentPage(frstPage);
    setActive(frstPage);
  };

  const lastPage = () => {
    setCurrentPage(lstPage);
    setActive(lstPage);
  };

  //table headings
  const TABLE_HEAD = [
    <Checkbox
      id="ripple-on"
      ripple={true}
      checked={selectedRows.length === records.length}
      onChange={toggleSelectAll}
    />,
    "Name",
    "Email",
    "Role",
    "Actions",
  ];

  //fetching data from api
  const fetchData = async () => {
    const response = await fetch(DASHBOARD_API);
    const json = await response.json();
    console.log(json);
    setAllData(json);
    if (searchData.length === 0) {
      setData(json);
    } else {
      setData(searchData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getData = () => {
    if (searchData && searchData.length !== 0) {
      setData(searchData);
    }
  };

  useEffect(() => {
    getData();
  }, [searchData]);

  return (
    <>
      <Header deleteSelectedRows={() => deleteSelectedRows()} data={allData} />
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((body, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              const isSelected = selectedRows.includes(body.id);
              return (
                <tr key={body.id} className={isSelected ? "selected-row" : ""}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <Checkbox
                        id="ripple-off"
                        ripple={false}
                        checked={selectedRows.includes(body.id)}
                        onChange={() => toggleSelectRow(body.id)}
                      />
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {editId === body?.id ? (
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      ) : (
                        body?.name
                      )}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {editId === body?.id ? (
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      ) : (
                        body?.email
                      )}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {editId === body?.id ? (
                        <input
                          type="text"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        />
                      ) : (
                        body?.role
                      )}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      <div className=" flex gap-4">
                        {editId === body?.id ? (
                          <button
                            onClick={handleSave}
                            className="save md:text-lg bg-black text-white p-1  rounded-md shadow-sm"
                          >
                            save
                          </button>
                        ) : (
                          <button
                            onClick={() => handleEdit(body.id)}
                            className="edit md:text-xl"
                          >
                            <FaRegEdit />
                          </button>
                        )}
                        <button
                          className="delete md:text-xl"
                          onClick={() => handleDelete(body.id)}
                        >
                          <MdOutlineDeleteOutline />
                        </button>
                      </div>
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      {/* footer buttons */}
      <div className="flex flex-col-reverse items-center md:flex-row md: md:items-center md:justify-between md:mx-3 md:my-5">
        {/* //dropdown */}
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setFlag(!flag);
            }}
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
            type="button"
          >
            Records per page : &nbsp; <strong>{recPerPage}</strong>{" "}
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
            } z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setRecPerPage(5);
                    setFlag(!flag);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  5
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setRecPerPage(10);
                    setFlag(!flag);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  10
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setRecPerPage(20);
                    setFlag(!flag);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  20
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Typography color="gray" className="font-normal">
            Page <strong className="text-gray-900">{currentPage}</strong> of{" "}
            <strong className="text-gray-900">{lstPage}</strong>
          </Typography>
        </div>

        {/* //pagination */}
        <div className="flex items-center gap-0">
          <Button
            variant="text"
            className="first-page flex items-center  rounded-full text-xl"
            onClick={firstPage}
          >
            <MdKeyboardDoubleArrowLeft />
          </Button>
          <Button
            variant="text"
            className="previous-page flex items-center gap-0 rounded-full text-xl"
            onClick={prev}
          >
            <MdKeyboardArrowLeft />
          </Button>
          {numbers.map((n, i) => (
            <div className="flex items-center gap-1" key={i}>
              <IconButton {...getItemProps(n)}>{n}</IconButton>
            </div>
          ))}
          <Button
            variant="text"
            className="next-page flex items-center gap-0 rounded-full text-xl"
            onClick={next}
          >
            <MdKeyboardArrowRight />
          </Button>
          <Button
            variant="text"
            className="last-page flex items-center  rounded-full text-xl"
            onClick={lastPage}
          >
            <MdKeyboardDoubleArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
