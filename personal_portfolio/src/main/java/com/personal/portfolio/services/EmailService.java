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
    
    @Value("${mail.from}")
    private String from;
    @Value("${mail.subject}")
    private String subject;
    
    public boolean sendSimpleMessage(final Mail mail){


    	try
        {
    		SimpleMailMessage message = new SimpleMailMessage();
    		
    		mail.setTo(from);
    		mail.setSubject(subject);
    		
    		message.setSubject(mail.getSubject() + " " + mail.getName() + " " + mail.getPhone());
    		message.setText(mail.getContent());
    		message.setTo(mail.getTo());
    		message.setFrom(mail.getFrom());
    		
    		emailSender.send(message);
    		
    		return true;
    	}
    	catch(Exception e)
        {
    		logger.error(e.getMessage());
    		return false;
    	}		
    }

}