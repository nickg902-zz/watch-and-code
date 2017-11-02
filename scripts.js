/*
---store todos---
var todos = ["item 1", "item 2", "item 3"];

---display todos---
function displayTodos {
  console.log("My Todos: ", todos);
}

---add todos---
function addTodos(todo) {
  todos.push(todo);
  displayTodos();
}

---change todos---
function changeTodos(position, newValue){
  todos[position] = newValue;
  displayTodos();
}

---delete todos---
function deleteTodos(position) {
  todos.splice(position, 1);
  displayTodos();
}
*/

var todoList = {
  todos: ["item 1", "item 2", "item 3"],
  displayTodos: function() {
    console.log("My todos: ", this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
