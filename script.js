

function SubTask(title, hours) {
  this.title = title;
  this.hours = hours;
};

function Task(title) {
  this.title = title;
  this.subTaskList = [];
  this.addSubTask = function(subTask) {
    this.subTaskList.push(subTask);
  };
};

const taskList = [];

const btnSubTaskCreate = document.querySelector('.create_subtask');

btnSubTaskCreate.onclick = () => {
  let createInputSubTask = document.createElement('div');
  createInputSubTask.innerHTML = 
`<input class="subtask_name" type="text" placeholder="имя подзадачи" value="sub">
<input class="subtask_hours" type="text" placeholder="кол-во часов" value="50">
<input type="button" value="удалить подзадачу">`;

  div.after(createInputSubTask);
}

const btnTaskCreate = document.querySelector('.create_task');
/* 
  создаёт задачу
  создаёт подзадачу
*/
btnTaskCreate.onclick = () => {
  let taskName = document.querySelector('.task_name').value;
  let subTaskTitle = document.getElementById('subtask-name').value;
  let subTaskHours = document.querySelector('.subtask_hours').value;
  let subTask = new SubTask(subTaskTitle, subTaskHours);
  console.log(subTask);
  let task = new Task (taskName);
  task.addSubTask(subTask);
  console.log(task);
  taskList.push(task);
  console.log(taskList);
};






//let subTask98769876 = new SubTask('новая ' + 'подзадача', 1);

//let task = new Task('новая задача');
//let task2 = new Task('вторая задача');

//task.addSubTask();
//console.log(task.title);

//task2.addSubTask(new SubTask('yjjhkjah', 43));





//let taskList = {
//  taskList: [task],
//  createTask(){},
//};