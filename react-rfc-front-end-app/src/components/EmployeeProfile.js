import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmployeeProfile = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    await axios
      .get(`http://localhost:9090/api/v1/employee/${id}`)
      .then((res) => {
        if (res.data) {
          setEmployee(res.data);
          console.log("Employee: ", res.data);
        }
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Employee Profile Details</h2>
      <hr />
      <div className="row">
        <div className="col-lg-2">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img
                src="https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-employee-icon-vector-illustration-in-line-style-for-any-purpose-png-image_998326.jpg"
                alt="avatar"
                className="rounded-circle img-fluid"
                style={{ width: 120, height: 80 }}
              />
              <h5 className="my-3">
                {`${employee.firstName} ${employee.lastName}`}
              </h5>
            </div>
          </div>
        </div>

        <div className="col-lg-10">
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h5 className="mb-0">First Name</h5>
                </div>

                <div className="col-sm-9">
                  <p className="text-muted mb-0">{employee.firstName}</p>
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h5 className="mb-0">Last Name</h5>
                </div>

                <div className="col-sm-9">
                  <p className="text-muted mb-0">{employee.lastName}</p>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h5 className="mb-0">Email</h5>
                </div>

                <div className="col-sm-9">
                  <p className="text-muted mb-0">{employee.emailId}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <Link
          to={"/view-employees-data-table"}
          type="submit"
          className="btn btn-outline-warning btn-lg"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default EmployeeProfile;
