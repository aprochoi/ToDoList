package com.todolist.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long todoSeq;

    private String contents;

    private boolean clearType;

    @ManyToOne
    @JoinColumn(name = "USER_SEQ")
    private User user;
}