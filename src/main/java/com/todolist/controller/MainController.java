package com.todolist.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class MainController {

    @GetMapping("/main")
    public ModelAndView getMain() {

        ModelAndView mv = new ModelAndView();
        mv.setViewName("/main.html");

        return mv;
    }

    @PostMapping("/add")
    public ResponseEntity addPost(@RequestBody String content) {

        System.out.println(content);

        return new ResponseEntity<>(content, HttpStatus.OK);
    }
}
