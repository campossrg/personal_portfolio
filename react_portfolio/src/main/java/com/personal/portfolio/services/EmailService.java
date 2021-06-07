package com.personal.portfolio.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.personal.portfolio.controller.LoggingController;
import com.personal.portfolio.entity.Mail;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;
    
    Logger logger = LoggerFactory.getLogger(LoggingController.class);
    
    @Value("${mail.to}")
    private String to;
    @Value("${mail.from}")
    private String from;
    @Value("${mail.subject}")
    private String subject;
    
    public String sendSimpleMessage(final Mail mail){


    	try
        {
    		SimpleMailMessage message = new SimpleMailMessage();
    		
    		mail.setTo(to);
    		mail.setSubject(subject);
    		
    		message.setSubject(mail.getSubject() + " " + mail.getName() + " - " + mail.getFrom());
    		message.setText(mail.getName() + " from " + mail.getFrom() + " - " + mail.getPhone() + " sent you this text: \n" + mail.getContent());
    		message.setTo(mail.getTo());
    		message.setFrom(from);
    		
    		emailSender.send(message);
    		
    		return "ok";
    	}
    	catch(Exception e)
        {
			String error = e.getMessage();
    		logger.error(error);
    		return error;
    	}		
    }

}