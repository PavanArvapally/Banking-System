package com.springboot.my.bank.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.my.bank.models.BankAccount;
import com.springboot.my.bank.models.CurrentAccount;
import com.springboot.my.bank.models.SavingsAccount;
import com.springboot.my.bank.repository.BankAccountRepository;

@RestController
@RequestMapping("/bankaccount")
@CrossOrigin("http://localhost:4200")
public class BankAccountController {
	@Autowired
	private BankAccountRepository bankAccountRepository;

	@PostMapping("/create")
	public Boolean insertBankAccount(@RequestBody Map<String, String> bankMap) {
		BankAccount bankaccount = null;
		if (bankMap.get("type").equals("savings")) {
			bankaccount = new SavingsAccount(Integer.parseInt(bankMap.get("accountNo")),
					Integer.parseInt(bankMap.get("customerId")), bankMap.get("branchCode"),
					Double.parseDouble(bankMap.get("accBalance")), bankMap.get("type"));
		} else if (bankMap.get("type").equals("current")) {
			bankaccount = new CurrentAccount(Integer.parseInt(bankMap.get("accountNo")),
					Integer.parseInt(bankMap.get("customerId")), bankMap.get("branchCode"),
					Double.parseDouble(bankMap.get("accBalance")), bankMap.get("type"));
		} else
			return false;
		return bankAccountRepository.createAccount(bankaccount);
	}

	@DeleteMapping("/delete/{accNo}")
	public Boolean deleteBankAccount(@PathVariable Integer accNo) {
		return bankAccountRepository.deleteBankAccount(accNo);
	}

	@PatchMapping("/update")
	public boolean updateBankAccount() {
		return false;
	}
}
