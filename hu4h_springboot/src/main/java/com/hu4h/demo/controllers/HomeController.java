package com.hu4h.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/home")
    private String home() {
        return "Welcome to the secured home page!";
    }
}
