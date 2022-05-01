package com.springboot.my.bank.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.my.bank.models.Transaction;
import com.springboot.my.bank.services.TransactionService;

@RestController
@RequestMapping("/transaction")
@CrossOrigin("http://localhost:4200")
public class TransactionController {

	@Autowired
	private TransactionService transactionService;

	@GetMapping("/deposit/{accNo}")
	public Boolean deposit(@RequestParam Double amount, @PathVariable Integer accNo) {
		return transactionService.deposit(amount, accNo);
	}

	@PostMapping("/withdraw")
	public Boolean withdraw(@RequestBody Map<String, String> body) {
		return transactionService.withdraw(Double.parseDouble(body.get("amount")), Integer.parseInt(body.get("accNo")));
	}

	@GetMapping("/showTransactions")
	public List<Transaction> showTransactions() {
		return transactionService.getAllTransactions();
	}
}
