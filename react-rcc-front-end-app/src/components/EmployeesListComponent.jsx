import React, { Component } from 'react';
import employee from '../services/EmployeeService';

class EmployeesListComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            employees:[]
        }
        this.addEmployee = this.addEmployee.bind(this);
    }

    componentDidMount(){
        employee.getEmployees().then(res => {
            this.setState({employees: res.data});
        })
    }

    addEmployee(){
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className='text-center mt-2 mb-2'>Employees List</h2>
                <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                 <br></br>
                <div className='row'>
                    <table className='table table-striped table-boardered table-responsive'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(emp => (
                                    <tr key={emp.id}>
                                        <td>{emp.firstName}</td>
                                        <td>{emp.lastName}</td>
                                        <td>{emp.emailId}</td>
                                        <td>
                                                 <button className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} className="btn btn-info">View </button>
                                             </td>
                                    </tr>
                                ))
                            } 
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default EmployeesListComponent;