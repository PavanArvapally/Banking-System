package com.springboot.my.bank.mappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.springboot.my.bank.models.BankAccount;
import com.springboot.my.bank.models.CurrentAccount;

public class CurrentAccountMapper implements RowMapper<BankAccount> {

	@Override
	public BankAccount mapRow(ResultSet rs, int rowNum) throws SQLException {
		BankAccount currentAccount = new CurrentAccount();
		currentAccount.setAccountNo(rs.getInt("accNo"));
		currentAccount.setBranchCode(rs.getString("branch"));
		currentAccount.setCustomerId(rs.getInt("customer"));
		currentAccount.setType(rs.getString("type"));
		currentAccount.setBalance(rs.getDouble("accBalance"));

		return currentAccount;
	}

}
