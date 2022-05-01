/**
 * 
 */
package com.springboot.my.bank.mappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.springboot.my.bank.models.BankAccount;
import com.springboot.my.bank.models.SavingsAccount;

/**
 * @author Leona
 *
 */
public class SavingsAccountMapper implements RowMapper<BankAccount> {

	@Override
	public BankAccount mapRow(ResultSet rs, int rowNum) throws SQLException {
		BankAccount savingsAccount = new SavingsAccount();
		savingsAccount.setAccountNo(rs.getInt("accNo"));
		savingsAccount.setBranchCode(rs.getString("branch"));
		savingsAccount.setCustomerId(rs.getInt("customer"));
		savingsAccount.setBalance(rs.getDouble("accBalance"));
		savingsAccount.setType(rs.getString("type"));
		return savingsAccount;
	}

}
