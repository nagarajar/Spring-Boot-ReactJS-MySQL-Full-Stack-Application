import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmployeeListComponent = () => {
  const [employees, setEmplyoees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    await axios.get("http://localhost:9090/api/v1/employee/all").then((res) => {
      setEmplyoees(res.data);
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

  return (
    <section>
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
              <td>
                <Link
                  to={`/employee-profile/${employee.id}`}
                  className="btn btn-info"
                >
                  <FaEye />
                </Link>
              </td>
              <td>
                <Link
                  to={`/edit-employee/${employee.id}`}
                  className="btn btn-warning"
                >
                  <FaEdit />
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(employee.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EmployeeListComponent;
