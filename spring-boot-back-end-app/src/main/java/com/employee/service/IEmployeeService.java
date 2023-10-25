package com.employee.service;

import java.util.List;

import com.employee.entity.Employee;

public interface IEmployeeService {
	Employee createEmployee(Employee employee);
	Employee updateEmployee(Long id, Employee employee);
	Employee getEmployeeById(Long id);
	String deleteEmployeeById(Long id);
	List<Employee> getAllEmployee();
}
