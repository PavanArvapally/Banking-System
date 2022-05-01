
/**
 * 
 */
package com.springboot.my.bank.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.my.bank.mappers.AddressHelper;
import com.springboot.my.bank.models.Branch;
import com.springboot.my.bank.models.Customer;
import com.springboot.my.bank.services.BranchService;

/**
 * @author Leona
 *
 */

@RestController
@RequestMapping("/branches")
@CrossOrigin("http://localhost:4200")
public class BranchController {

	@Autowired
	BranchService branchService;
//	@Autowired
//	CustomerRepository customerRepository;

	@GetMapping("/all")
	public List<Branch> showBranches() {
		return branchService.getBranches();

	}

	@PostMapping("/create")
	public Boolean createNewBranch(@RequestBody Map<String, String> map) {
		System.out.println("map" + map);
		return branchService.createBranch(new Branch(map.get("branchCode"), map.get("bankCode"), map.get("manager"),
				AddressHelper.processAddress(map.get("address")), Integer.parseInt(map.get("headOffice"))));
	}

	@GetMapping("/getBranchDetails")
	public Branch showBranchByIFSC(@RequestParam String ifscCode) {
		System.out.println("ifscCode from showBrnahc " + ifscCode);
		return branchService.getBranchByIFSC(ifscCode);
	}

//	@GetMapping("/{customerId}")
//	public String getCustomerName(@PathVariable Integer customerId) {
//		try {
//			Customer c = customerRepository.getCustomerById(customerId);
//			return c.getName();
//		} catch (SQLException e) {
//			System.out.println(e);
//			return null;
//		}
//	}

	@PatchMapping("/update")
	public Boolean updateBranch(@RequestBody Map<String, String> map) {
		return branchService
				.updateBranchManagerName(new Branch(map.get("branchCode"), map.get("bankCode"), map.get("manager"),
						AddressHelper.processAddress(map.get("address")), Integer.parseInt(map.get("headOffice"))));
	}

	@GetMapping("/customers")
	public List<Customer> showCustomersByBranchCode(@RequestParam String branchCode) {
		return branchService.getCustomersByBranch(branchCode);
	}

//	@DeleteMapping("/{ifscCode}")
//	public String deleteBranchUsingIFSC(@PathVariable String ifscCode) {
//		return branchService.deleteBranchByIFSC(ifscCode);
//	}
}
