package com.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.entity.Employee;
import com.employee.exception.EmployeeAlreadyExistException;
import com.employee.exception.EmployeeNotFoundException;
import com.employee.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements IEmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public Employee createEmployee(Employee employee) {
		if(employeeAlreadyExists(employee.getEmailId())) {
			throw new EmployeeAlreadyExistException(employee.getEmailId()+ "already exist..!");
		}
		return employeeRepository.save(employee);
	}

	private boolean employeeAlreadyExists(String emailId) {
		return employeeRepository.findByEmailId(emailId).isPresent();
	}

	@Override
	public Employee updateEmployee(Long id, Employee employeeRequest) {
		Employee employee = getEmployeeById(id);
		employee.setFirstName(employeeRequest.getFirstName());
		employee.setLastName(employeeRequest.getLastName());
		employee.setEmailId(employeeRequest.getEmailId());
		return employeeRepository.save(employee);
	}

	@Override
	public Employee getEmployeeById(Long id) {
		return employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee Not Found With Id: "+id));
	}

	@Override
	public String deleteEmployeeById(Long id) {
		Employee employee = getEmployeeById(id);
		employeeRepository.delete(employee);
		return "Employee Deleted Successfully";
	}

	@Override
	public List<Employee> getAllEmployee() {
		return employeeRepository.findAll();
	}

}
