package it.keybiz.formazione.todo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.keybiz.formazione.todo.model.UserToDo;

@Repository
public interface UserToDoRepository extends JpaRepository<UserToDo, Long>{

}
