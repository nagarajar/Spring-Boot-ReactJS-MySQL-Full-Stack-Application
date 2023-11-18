import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddEmployee = () => {
  let navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const { firstName, lastName, emailId } = employee;

  const handleInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const saveEmployee = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:9090/api/v1/employee/create", employee)
      .then((res) => {
        if (res.data) {
          navigate("/view-employees-data-table");
        }
      });
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="text-center mt-2 mb-2">Add Employee</h2>
      <hr></hr>
      <form onSubmit={(e) => saveEmployee(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            id="firstName"
            name="firstName"
            required
            value={firstName}
            placeholder="Enter Your First Name"
            onChange={(e) => handleInputChange(e)}
          ></input>
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            id="lastName"
            name="lastName"
            required
            value={lastName}
            placeholder="Enter Your Last Name"
            onChange={(e) => handleInputChange(e)}
          ></input>
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="emailId">
            Email
          </label>
          <input
            className="form-control col-sm-6"
            type="email"
            id="emailId"
            name="emailId"
            required
            value={emailId}
            placeholder="Enter Your Email"
            onChange={(e) => handleInputChange(e)}
          ></input>
        </div>
        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>
          <div className="col-sm-2">
            <Link
              to={"/view-employees-data-table"}
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
