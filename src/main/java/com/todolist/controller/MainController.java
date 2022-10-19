package com.todolist.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class MainController {

    @GetMapping("/main")
    public ModelAndView getMain() {

        ModelAndView mv = new ModelAndView();
        mv.setViewName("/main.html");

        return mv;
    }
}
