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
    private Long seq;

    private String contents;

    private boolean isCleared;

    @ManyToOne
    @JoinColumn(name = "USER_SEQ")
    private User user;
}