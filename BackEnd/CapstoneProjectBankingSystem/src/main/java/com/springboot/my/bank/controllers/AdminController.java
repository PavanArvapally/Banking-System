package com.springboot.my.bank.controllers;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.my.bank.models.Admin;
import com.springboot.my.bank.models.Customer;
import com.springboot.my.bank.models.Employee;
import com.springboot.my.bank.repository.AdminRepository;
import com.springboot.my.bank.repository.CustomerRepository;
import com.springboot.my.bank.repository.EmployeeRepository;

@RestController
@RequestMapping("/admin")
@CrossOrigin("http://localhost:4200")
public class AdminController {
	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private EmployeeRepository employeeRepository;

	@GetMapping()
	public Admin getAdminById(@RequestParam Integer adminId) {
		try {
			return adminRepository.getAdminById(adminId);
		} catch (SQLException e) {
			System.out.println(e);
			return null;
		}
	}

	@GetMapping("/allemployees")
	public List<Employee> showAllEmployees() {
		try {
			return employeeRepository.showAllEmployees();
		} catch (SQLException e) {
			return null;
		}
	}

	@PatchMapping("/employee/update")
	public Boolean updateEmployee(@RequestBody Map<String, String> map) {
		try {
			return employeeRepository.updateEmployee(Integer.parseInt(map.get("empId")), map.get("name"),
					map.get("branchCode"));
		} catch (SQLException | NumberFormatException e) {
			return false;
		}
	}

	@DeleteMapping("/employee/delete")
	public Boolean deleteEmployee(@RequestParam Integer empId) {
		try {
			return employeeRepository.deleteEmployee(empId);
		} catch (SQLException e) {
			return false;
		}
	}

	@PostMapping("/employee/create")
	public Boolean addEmployee(@RequestBody Employee emp) {
		try {
			return employeeRepository.createEmployee(emp);
		} catch (SQLException e) {
			return false;
		}
	}

	@GetMapping("/allcustomers")
	public List<Customer> showAllCustomers() {
		try {
			return adminRepository.showCustomers();
		} catch (SQLException e) {
			System.out.println(e);
			return null;
		}
	}

	@DeleteMapping("/customer/delete")
	public Boolean deleteCustomer(@RequestParam Integer customerId) {
		try {
			System.out.println("customer id" + customerId);
			return customerRepository.deleteCustomerById(customerId);
		} catch (SQLException e) {
			System.out.println(e);
			return false;
		}
	}

	@PatchMapping("/customer/update")
	public Boolean updateCustomer(@RequestBody Map<String, String> map) {
		try {
			return customerRepository.updateCustomerById(Integer.parseInt(map.get("customerId")), map.get("name"),
					map.get("address"));
		} catch (SQLException e) {
			System.out.println(e);
			return false;
		}
	}

	@PostMapping("/customer/create")
	public Boolean addEmployee(@RequestBody Map<String, String> map) {
		try {
			return customerRepository.createCustomer(map.get("name"), map.get("address"));
		} catch (SQLException e) {
			return false;
		}
	}

}
