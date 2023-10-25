package com.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.entity.Employee;
import com.employee.service.IEmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/employee/")
public class EmployeeController {
	
	@Autowired
	IEmployeeService employeeService;
	
	@PostMapping("create")
	public Employee createEmplyee(@RequestBody Employee employee) {
		return employeeService.createEmployee(employee);
	}
	
	@PutMapping("update/{id}")
	public Employee updateEmployee(@PathVariable long id, @RequestBody Employee employee) { 
		return employeeService.updateEmployee(id, employee);
	}
	
	@GetMapping("{id}")
	public Employee getEmployeeById(@PathVariable long id) { 
		return employeeService.getEmployeeById(id);
	}
	
	@DeleteMapping("{id}")
	public String deleteEmployeeById(@PathVariable long id) { 
		return employeeService.deleteEmployeeById(id);
	}
	
	@GetMapping("all")
	public List<Employee> getAllEmployees() { 
		return employeeService.getAllEmployee();
	}
}
