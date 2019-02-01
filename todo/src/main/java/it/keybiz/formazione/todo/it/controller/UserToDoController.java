package it.keybiz.formazione.todo.it.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.keybiz.formazione.todo.model.ToDo;
import it.keybiz.formazione.todo.model.UserToDo;
import it.keybiz.formazione.todo.repository.UserToDoRepository;

@RestController
@RequestMapping("/users")
public class UserToDoController {
	
	@Autowired
	UserToDoRepository userToDoRepository;
	
	@GetMapping("")
	public List<UserToDo> getAll(){
		return userToDoRepository.findAll();
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<UserToDo> get(@PathVariable long id){
		Optional<UserToDo> user= userToDoRepository.findById(id);
		if(user.isPresent()) {
			return new ResponseEntity<UserToDo>(user.get(), HttpStatus.OK);
		}else {
			return ResponseEntity.notFound().build();
		}
	}
	
	
	
	

}
