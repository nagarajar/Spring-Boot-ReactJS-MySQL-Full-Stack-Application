import axios from 'axios';

const EMPLOYEE_BASE_URL = "http://localhost:9090/api/v1/employee/"

class EmployeeService {
    getEmployees(){
        console.log('enter into employee service')
        return axios.get(EMPLOYEE_BASE_URL+'all');
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_URL+employeeId);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_URL+'create', employee);
    }
}

const employee = new EmployeeService();

export default employee;