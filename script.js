var addBtn = document.getElementById('add-btn');
var todo = document.getElementById('todo');
var searchInput = document.getElementById('search-input');
var form = document.getElementById('input-form');

//Eventos
addBtn.addEventListener('click', adicionarTarefa);

todo.addEventListener('click', removerTarefa);

searchInput.addEventListener('keyup', filtrarItems);


//Adicionar Tarefa
function adicionarTarefa(e){
    e.preventDefault();

    // Valor do Input pego
    var inputValue = document.getElementById('task-input').value; 

    var tskInput = document.getElementById('task-input');

    //Criando delete button para div
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'del-btn fas fa-trash-alt'

    //Criando h5 para div
    var taskName = document.createElement('h5');

    taskName.className = 'task-name'

    taskName.style.fontSize = '13px';
    taskName.style.fontWeight = '600';

    taskName.innerText = inputValue;

    if(taskName.innerText.length === 0){
        alert('Por favor escreva uma tarefa válida. ');

        createTask.style.display = 'none';
    }

    //Criando div para task
    var createTask = document.createElement('div');
    createTask.className = 'task';

    //Juntando Div de task e taskTitle
    createTask.appendChild(taskName); 

    //Juntando Div de task e button
    createTask.appendChild(deleteBtn); 


    var todoContainer = document.querySelector('.container #todo');

    todoContainer.insertBefore(createTask, form);
}


//Remover Tarefa
function removerTarefa(e) {
      if (e.target.classList.contains('del-btn')) {
      e.target.parentElement.classList.add('task--delete');
     setTimeout(function(){
      e.target.parentElement.style.position = 'absolute'; 
      e.target.parentElement.style.left = '-999999px'; 
     }, 300);
    }
  }


//Filtrar Texto

//Pegando a task
task = document.getElementsByClassName('task');
//Pegando input
searchValue = document.getElementById('search-input');
function filtrarItems(){
//Pegando valor do input  
filter = searchValue.value.toUpperCase();

  //Loop pelas task's
  for(i = 0; i <task.length; i++){
    h5 = task[i].getElementsByTagName('h5')[0];

    //Se combinarem
    if (h5.innerHTML.toUpperCase().indexOf(filter) > -1) {
      task[i].style.display = "";
    } else {
     task[i].style.display = "none";
    }
  } 
}


//Resetar Placeholder
var inputTask = document.getElementById('task-input');

form.addEventListener('click', restaurarPlaceholder);

function restaurarPlaceholder(e){
  e.preventDefault();

  inputTask.value  = '';
}







