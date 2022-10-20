package com.todolist.controller;

import com.todolist.dto.TodoPostDto;
import com.todolist.entity.Todo;
import com.todolist.mapper.TodoMapper;
import com.todolist.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MainController {

    private final TodoService todoService;
    private final TodoMapper mapper;

    @GetMapping("/main")
    public ModelAndView getMain() {

        ModelAndView mv = new ModelAndView();
        mv.setViewName("/main.html");

        return mv;
    }

    @PostMapping("/add/{userSeq}")
    public ResponseEntity addPost(@RequestBody TodoPostDto todoPostDto,
                                  @PathVariable("userSeq") long userSeq) {

        todoPostDto.setUserSeq(userSeq);
        todoPostDto.setClearType(true);
        Todo todo = mapper.toEntityFrom(todoPostDto);
        Todo entity = todoService.create(todo);

        return new ResponseEntity<>(entity, HttpStatus.OK);
    }

    @GetMapping("/get")
    public ResponseEntity getList() {
        List<Todo> todos = todoService.findTodos();

        return new ResponseEntity<>(todos, HttpStatus.OK);
    }
}
