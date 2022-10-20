package com.todolist.mapper;

import com.todolist.dto.TodoPostDto;
import com.todolist.entity.Todo;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TodoMapper {

    @Mapping(target = "clearType", source = "clearType")
    @Mapping(target = "user.seq", source = "userSeq")
    Todo toEntityFrom(TodoPostDto todoPostDto);
}
