import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditEmployee = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const { firstName, lastName, emailId } = employee;

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    axios.get(`http://localhost:9090/api/v1/employee/${id}`).then((res) => {
      if (res.data) {
        setEmployee(res.data);
      }
    });
  };

  const handleInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const updateEmployee = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:9090/api/v1/employee/update/${id}`, employee)
      .then((res) => {
        if (res.data) {
          navigate("/view-employees-data-table");
        }
      });
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="text-center mt-2 mb-2">Update Employee</h2>
      <hr></hr>
      <form onSubmit={(e) => updateEmployee(e)}>
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

export default EditEmployee;
