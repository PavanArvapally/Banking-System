/**
 * 
 */
package com.springboot.my.bank.dao;

import java.sql.SQLException;
import java.util.List;

import com.springboot.my.bank.models.Admin;
import com.springboot.my.bank.models.Customer;
import com.springboot.my.bank.models.Transaction;

/**
 * @author Leona
 *
 */
public interface AdminDAO {

	public Admin getAdminById(Integer adminId) throws SQLException;

	public List<Transaction> showTransactions() throws SQLException;

	public List<Customer> showCustomers() throws SQLException;

//	public Boolean approveReversal() throws SQLException;
//
//	public Boolean rejectRevesal() throws SQLException;
}
