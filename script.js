const TaskName = document.querySelector('.task_name');
let subTaskTitle;
let subTaskHours;


function SubTask(title, hours) {
  this.title = title;
  this.hours = hours;
};

const btn = document.querySelector('.create_task');



btn.onclick = () => {
  subTaskTitle = document.getElementById('subtask-name').value;
  subTaskHours = document.querySelector('.subtask_hours').value;
  //console.log(subTask);
  //return subTask;
  let subTask = new SubTask(subTaskTitle, subTaskHours);
  console.log(subTask);
};

function Task(title) {
  this.title = title;
  this.subTaskList = [];
  this.addSubTask = function(subTask) {
   this.subTaskList.push(subTask);
  };
};

const taskList = [];
const addTask = () => {};






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