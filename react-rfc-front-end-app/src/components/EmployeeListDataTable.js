import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmployeeListDataTable = () => {
  const [employees, setEmplyoees] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.emailId,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <Link
            to={`/employee-profile/${row.id}`}
            className="btn btn-info mr-2"
          >
            <FaEye />
          </Link>
          <Link
            to={`/edit-employee/${row.id}`}
            className="btn btn-warning mr-2"
          >
            <FaEdit />
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(row.id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    loadEmployees();
  }, []);

  useEffect(() => {
    const result = employees.filter((employee) => {
      return (
        employee.id.toString().includes(search) ||
        employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
        employee.emailId.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilter(result);
  }, [search]);

  const loadEmployees = async () => {
    await axios.get("http://localhost:9090/api/v1/employee/all").then((res) => {
      setEmplyoees(res.data);
      setFilter(res.data);
    });
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:9090/api/v1/employee/${id}`)
      .then((res) => {
        if (res.data) {
          loadEmployees();
        }
      });
  };

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "LightSkyBlue", // Set the background color of the header
        //color: "white", // Set the text color of the header
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
    rows: {
      style: {
        fontSize: "16px", // Set the font size for the rows
      },
    },
  };

  return (
    <section className="mt-0">
      <DataTable
        //title="Employees List"
        customStyles={customStyles}
        columns={columns}
        data={filter}
        responsive
        pagination
        selectableRows
        fixedHeader
        selectableRowsHighlight
        highlightOnHover
        fixedHeaderScrollHeight="400px"
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search....."
            className="w-25 mb-3 form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
        subHeaderAlign="right"
      />
    </section>
  );
};

export default EmployeeListDataTable;
