package com.todolist.dto;

import lombok.*;

@AllArgsConstructor
@Getter
@Setter
@Builder
@NoArgsConstructor
public class TodoPostDto {

    private long userSeq;

    private String contents;
}
