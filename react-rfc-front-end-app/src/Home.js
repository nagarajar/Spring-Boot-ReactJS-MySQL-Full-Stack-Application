import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2 className="text-center mb-5">Welcome to Employee Management App</h2>
      <div className="d-flex justify-content-center">
        <div>
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Employee List</h5>
                  <p className="card-text">
                    To view the list of employees, click on "Employees or
                    Employes Data Table" in Navigation Bar. Else click on below
                    button.
                  </p>
                  <Link
                    to={"/view-employees"}
                    className="btn btn-outline-primary"
                  >
                    Employees
                  </Link>
                  <Link
                    to={"/view-employees-data-table"}
                    className="btn btn-outline-primary ms-2"
                  >
                    Employees Data Table
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Add Employee</h5>
                  <p className="card-text">
                    To create a new employee, click on "Add Employee" in
                    Navigation Bar. Else click on below button.
                  </p>
                  <Link
                    to={"/add-employee"}
                    className="btn btn-outline-success"
                  >
                    Add Employee
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Source Code</h5>
                  <p className="card-text">
                    To view the information about souce code details from the
                    Git Hub Repository, please click on the below button.
                  </p>
                  <a
                    href="https://github.com/nagarajar/Spring-Boot-ReactJS-MySQL-Full-Stack-Application"
                    className="btn btn-outline-dark"
                  >
                    Git Hub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
