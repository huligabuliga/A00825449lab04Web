// 1 obtener las referencias de los elementos a intaractuar

let post = document.getElementById("buttonPost")
let clear = document.getElementById("buttonClear")
let mark = document.getElementById("buttonMark")
let del = document.getElementById("buttonDelete")

//registrar el Evento

post.addEventListener("click",TodoPost)
clear.addEventListener("click",TodoClear)
mark.addEventListener("click",TodoMark)
del.addEventListener("click", TodoDel)

//create functions

function TodoPost(e){
    e.preventDefault()

    let todo = document.getElementById("todoText").value
    let list = document.getElementById("todoList")

   let div = document.createElement("div")
   let input = document.createElement("input")
   let label = document.createElement("label")
   input.type = "checkbox"
   input.name = "todo"

   label.textContent = todo

   div.appendChild(input)
   div.appendChild(label)

   list.append(div)





}

function TodoClear(){

    let todos = document.getElementsByName("todo")
    for(let i = 0; i< todos.length; i++){
        todos[i].checked = false
    }
}

function TodoMark(){

    let todos = document.getElementsByName("todo")
    for(let i = 0; i< todos.length; i++){
        todos[i].checked = true
    }
}

function TodoDel(){
    
    let todos = document.getElementsByName("todo")
 
    for(let i = 0; i< todos.length; i++){
  
    if (todos[i].checked){
        todos[i].parentElement.remove()
    }
 
    }
   

}