/**
 * 
 */
package com.springboot.my.bank.mappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.springboot.my.bank.models.Branch;

/**
 * @author Leona
 *
 */
public class BranchMapper implements RowMapper<Branch> {

	@Override
	public Branch mapRow(ResultSet rs, int rowNum) throws SQLException {
		Branch branch = new Branch();
		branch.setBranchCode(rs.getString("branchCode"));
		branch.setAddress(AddressHelper.processAddress(rs.getString("address")));
		branch.setManager(rs.getString("manager"));
		branch.setHeadOffice(Integer.parseInt(rs.getString("isHeadOffice")));
		branch.setBankCode(rs.getString("bankCode"));
		return branch;
	}

}
