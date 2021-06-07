package com.personal.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.personal.portfolio.entity.Mail;
import com.personal.portfolio.services.EmailService;

@Controller
public class WebController {
	

    @Autowired
    private EmailService emailService;
		
	@PostMapping("/sendEmail")
	public ResponseEntity sendMeEmail(@RequestBody Mail mail)
	{
		String result = emailService.sendSimpleMessage(mail);
		if(result.equals("oko")) {
			return ResponseEntity.ok(HttpStatus.OK); 
		} else {
			return new ResponseEntity<>(
          		"Error interno: " + result, 
          		HttpStatus.BAD_REQUEST);
		}
	}
}
