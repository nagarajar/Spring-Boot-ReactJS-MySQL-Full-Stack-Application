package com.employee.exception;

public class EmployeeAlreadyExistException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public EmployeeAlreadyExistException(String message) {
		super(message);
	}
	

}
