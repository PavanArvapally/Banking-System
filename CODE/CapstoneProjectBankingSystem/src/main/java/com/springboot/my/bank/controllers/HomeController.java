/**
 * 
 */
package com.springboot.my.bank.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Leona
 *
 */

@RestController
public class HomeController {

	@CrossOrigin("http://localhost:4200")
	@GetMapping("/")
	public String xyz() {
		return "Working";
	}

}
