
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
  createInputSubTask.className = 'new_div'
  createInputSubTask.innerHTML = 
  `<input class="subtask_name" type="text" placeholder="имя подзадачи" value="sub">
  <input class="subtask_hours" type="text" placeholder="кол-во часов" value="50">
  <input class="delete_subTask" id="butt_del" type="button" value="удалить подзадачу">`;
  div.append(createInputSubTask);
  
  let delEl = createInputSubTask.querySelector('.delete_subTask');

  delEl.addEventListener('click', () => createInputSubTask.remove());
};

const btnDelete = document.querySelector('.del');
btnDelete.onclick = () => {
  document.querySelector('.task').reset();
  [...document.querySelectorAll('.new_div')].forEach(elem => elem.remove());
};


const btnTaskCreate = document.querySelector('.create_task');

let putTolinkList = document.getElementById('task_list_title');

btnTaskCreate.onclick = () => {
  let taskTitle = document.querySelector('.task_name').value;
  let subTaskTitles = [...document.querySelectorAll('.subtask_name')].map(elem => elem.value);
  let subTaskHours = [...document.querySelectorAll('.subtask_hours')].map(elem => +elem.value);

  const task = createTask(taskTitle, subTaskTitles, subTaskHours);
  taskList.push(task);

  let listItem = document.createElement('li');
  for (i = 0; i < taskList.length; i++) {
    listItem.innerHTML = `<a href="#" onclick="event.preventDefault()">${taskList[i].title}</a>`;
    putTolinkList.append(listItem);
  };

  listItem.addEventListener('click', function() {
    let subTaskListTitle = document.querySelector('.subtask_list_title');
    let subTaskListScrin = document.createElement('div');
    subTaskListScrin.className = 'subtask_list_title';
    subTaskListScrin.innerHTML =  `<h2>${task.title}</h2><ul>`;
    for (const subTask of task.subTaskList) {
      subTaskListScrin.innerHTML += `<li>${subTask.title}</li>`;
    }
    subTaskListScrin.innerHTML += '</ul>'
    subTaskListTitle.replaceWith(subTaskListScrin);
  });

};

function createTask(title, subTaskTitles, subTaskHours) {
  let task = new Task(title);
  for (i = 0; i < subTaskTitles.length; i++) {
    const subTask = new SubTask(subTaskTitles[i], subTaskHours[i]);
    task.addSubTask(subTask);
  };

  return task;
}

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