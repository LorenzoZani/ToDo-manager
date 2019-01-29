package it.keybiz.formazione.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

 


@Entity
public class ToDo {
	
	@Id
	@GeneratedValue
	private long id;
	private String description;
	private boolean done;
	
	
	//ENTITY DOESN'T NEED CONSTRUCTOR
	
	//GETTER&&SETTER
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public boolean isDone() {
		return done;
	}
	public void setDone(boolean done) {
		this.done = done;
	}
	

}
