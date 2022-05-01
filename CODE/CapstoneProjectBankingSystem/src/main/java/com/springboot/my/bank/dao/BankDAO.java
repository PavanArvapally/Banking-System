/**
 * 
 */
package com.springboot.my.bank.dao;

import java.sql.SQLException;

import com.springboot.my.bank.models.Bank;

/**
 * @author Leona
 *
 */
public interface BankDAO {

	public Boolean createBank(Bank bank) throws SQLException;

	public Bank viewDetailsByIFSC(String ifscCode) throws SQLException;

}
