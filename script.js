
function SubTask(title, hours) {
  this.title = title;
  this.hours = hours;
};

function Task(title) {
  this.title = title;
  this.subTasks = [];
  this.addSubTask = function(subTask) {
    this.subTasks.push(subTask);
  };
};

const taskList = JSON.parse(localStorage.getItem('taskList')) ?? [];

const btnSubTaskCreate = document.querySelector('.section__button_create_subtask');

btnSubTaskCreate.onclick = () => {
  let createInputSubTask = document.createElement('div');
  createInputSubTask.className = 'new_div'
  createInputSubTask.innerHTML = 
  `<input class="section__input section__input_subtask_name" type="text" placeholder="Имя подзадачи">
  <input class="section__input section__input_subtask_hours" type="text" placeholder="Кол-во часов">
  <input class="section__button section__button_delete_subTask" type="button" value="X">`;
  div.append(createInputSubTask);
  let delEl = createInputSubTask.querySelector('.section__button_delete_subTask');
  delEl.addEventListener('click', () => createInputSubTask.remove());
};

const btnDelete = document.querySelector('.section__button_del');

const btnTaskCreate = document.querySelector('.section__button_create_task');

let putTolinkList = document.getElementById('task_list_title');

btnTaskCreate.onclick = () => {
  let taskTitle = document.querySelector('.section__input_task_name').value;
  let subTaskTitles = [...document.querySelectorAll('.section__input_subtask_name')].map(elem => elem.value);
  let subTaskHours = [...document.querySelectorAll('.section__input_subtask_hours')].map(elem => +elem.value);
  const task = createTask(taskTitle, subTaskTitles, subTaskHours);
  taskList.push(task);
  displayTask(task);
};

function createTask(title, subTaskTitles, subTaskHours) {
  let task = new Task(title);
  for (i = 0; i < subTaskTitles.length; i++) {
    const subTask = new SubTask(subTaskTitles[i], subTaskHours[i]);
    task.addSubTask(subTask);
  };

  return task;
};

function displayTask(task) {
  let listItem = document.createElement('li');
  listItem.className = 'list_item';
  listItem.innerHTML = `<a class="list_item__link" href="#" onclick="event.preventDefault()">${task.title}</a>`;
  putTolinkList.append(listItem);
  listItem.addEventListener('click', function() {
    let subTaskListTitle = document.querySelector('.subtask_list_title');
    let subTaskListScrin = document.createElement('div');
    subTaskListScrin.className = 'subtask_list_title';
    subTaskListScrin.innerHTML = 
      `<h2 class="section__list_title">${task.title}</h2>
      <ul class="section__list">
        ${task.subTasks.map(subTask => `<li class="list_item">${subTask.title}. Потребуется - ${subTask.hours} часов</li>`).join('')}
      </ul>`;
    subTaskListTitle.replaceWith(subTaskListScrin);
  });

  console.log(taskList);

  let dellItem = document.createElement('button');
  dellItem.className = "dell-item";
  dellItem.innerHTML = 'Удалить задачу';
  dellItem.onclick = () => {taskList.splice(listItem.remove(), 1); dellItem.remove(); subTaskListTitle.remove();};
  listItem.append(dellItem);
};

taskList.forEach(displayTask);

window.addEventListener('beforeunload', () => {
  localStorage.setItem('taskList', JSON.stringify(taskList));
});

btnDelete.onclick = () => {
  document.getElementById('task_name').reset();
  [...document.querySelectorAll('.new_div')].forEach(elem => elem.remove());
};