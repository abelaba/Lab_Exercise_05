
const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

const card = document.querySelector(".card-title");

const reloadIcon = document.querySelector('.fa');


// Event Listener for reload
reloadIcon.addEventListener('click', reloadPage);


// Reload Page Function
function reloadPage() {
    //using the reload fun on location object
    location.reload();
}





form.addEventListener('submit',addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//   Filter Task
filter.addEventListener('keyup', filterTasks);


function pendingTask(){
  const li = document.createElement('li');
  li.className = "collection-item";

  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement('a');
    // Add class and the x marker for a
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //link.addEventListener('click',removeTask())


  li.appendChild(link);

  taskList.appendChild(li);


}




function addNewTask(e) {


    e.preventDefault(); //disable form submission
    if (taskInput.value === '')
     {
        taskInput.style.borderColor = "red";
        return;     //avoiding else statement

     }
     taskInput.style.borderColor = "black";

     pendingTask()


}

function clearAllTasks() {

  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild)
  }

}

function removeTask(e) {



    if (e.target.parentElement.classList.contains('delete-item'))
        {
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }

    }

}
