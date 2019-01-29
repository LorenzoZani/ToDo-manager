package it.keybiz.formazione.todo.dto;


//


public class ToDoCheckDTO {  
	
	private boolean done;
	
	//CONSTRUCTOR
	
	public ToDoCheckDTO() {}
	
	
	public ToDoCheckDTO(boolean done) {
		this.setDone(false);
	}

	//GETTER && SETTER
	
	public boolean isDone() {
		return done;
	}


	public void setDone(boolean done) {
		this.done = done;
	}
	

}
