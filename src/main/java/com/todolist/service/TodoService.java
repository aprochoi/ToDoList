package com.todolist.service;

import com.todolist.entity.Todo;
import com.todolist.entity.User;
import com.todolist.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {

    private final TodoRepository todoRepository;

    public List<Todo> findTodos() {

        List<Todo> todos = List.of(
                new Todo(1L, "트라인4설치하기", true, new User()),
                new Todo(2L, "가나다라마바사", true, new User())
        );

        return todos;
    }

    public Todo create(Todo todo) {

        return todoRepository.save(todo);
    }
}
