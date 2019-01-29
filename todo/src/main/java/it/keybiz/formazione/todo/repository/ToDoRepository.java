package it.keybiz.formazione.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import it.keybiz.formazione.todo.model.ToDo;

public interface ToDoRepository extends JpaRepository<ToDo, Long> {

}
