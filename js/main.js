window.addEventListener("load", init);

var todos =[];

function init(){
  var add = document.querySelector("#add");
  add.addEventListener("click", addTodo);
 }

function addTodo(event){
  event.preventDefault();
  if(document.querySelector("#todo").value ==="") return;

  var li =
  {
    index: todos.length + 1,
    value: document.querySelector("#todo").value
  };
  todos.push (li);
  displayTodos (li);
}

function displayTodos(li){
  var node = document.createElement("li");
  node.classList.add("col-md-12");
  node.id = "todo" + li.index;

  var textnode = document.createTextNode(li.value);
  node.appenChild(textnode);
  document.querySelector("#todoList").appenChild(node);
  document.querySelector("#todo").value = "";

  var deleteButton = createButton (li);
  node.appenChild(deleteButton);
}

function createButton(li){
  var todo = document.createElement("input");
  todo.type = "button";
  todo.style.marginTop = "12px";
  todo.style.float = "right";
  todo.value = "Eliminar";
  todo.style.marginLeft = "15px";
  todo.classList.add("removeTodo", "btn", "btn-danger");
  todo.onclick = function()
  {
    var toDelete = document.querySelector('#todo'+li.index);
    toDelete.parentNode.removeChild(toDelete);
  };
  
  return todo;
}

