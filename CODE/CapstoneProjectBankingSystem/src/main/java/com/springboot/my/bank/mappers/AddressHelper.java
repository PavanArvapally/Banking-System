/**
 * 
 */
package com.springboot.my.bank.mappers;

import com.springboot.my.bank.models.Address;

/**
 * @author Leona
 *
 */
public class AddressHelper {

	public static Address processAddress(String address) {
		String[] addressArray = address.split(",");

		return new Address(addressArray[0].trim(), addressArray[1].trim(), addressArray[2].trim(),
				addressArray[3].trim(), Integer.parseInt(addressArray[4].trim()));
	}

}
