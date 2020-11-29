package com.personal.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.personal.portfolio.entity.Mail;
import com.personal.portfolio.services.EmailService;

@Controller
public class WebController {
	
    @Autowired
    private EmailService emailService;
	
    @GetMapping("/")
	public String index(Model model)
	{
	    model.addAttribute("mail", new Mail());
	    		return "index";
	}
	
	@PostMapping("/sendEmail")
	public String sendMeEmail(@ModelAttribute("email") Mail mail, Model theModel)
	{
		if(emailService.sendSimpleMessage(mail)) {
			return "redirect:/";
		} else {
			return "sendEmailResultKO";
		}
	}
}
