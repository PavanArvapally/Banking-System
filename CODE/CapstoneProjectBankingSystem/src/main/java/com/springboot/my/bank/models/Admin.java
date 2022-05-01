/**
 * 
 */
package com.springboot.my.bank.models;

/**
 * @author Leona
 *
 */
public class Admin {
	private Integer adminId;
	private String name;
	private String bankCode;

	/**
	 * 
	 */
	public Admin() {
	}

	/**
	 * @param adminId
	 * @param name
	 * @param bankCode
	 */
	public Admin(Integer adminId, String name, String bankCode) {
		this.adminId = adminId;
		this.name = name;
		this.bankCode = bankCode;
	}

	/**
	 * @return the adminId
	 */
	public Integer getAdminId() {
		return adminId;
	}

	/**
	 * @param adminId the adminId to set
	 */
	public void setAdminId(Integer adminId) {
		this.adminId = adminId;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the bankCode
	 */
	public String getBankCode() {
		return bankCode;
	}

	/**
	 * @param bankCode the bankCode to set
	 */
	public void setBankCode(String bankCode) {
		this.bankCode = bankCode;
	}

	@Override
	public String toString() {
		return "Admins [adminId=" + adminId + ", name=" + name + ", bankCode=" + bankCode + "]";
	}

}
