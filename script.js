const subTaskTitle = document.querySelector('.subtask_name');
const subTaskHours = document.querySelector('.subtask_hours');


function SubTask(title, hours) {
  this.title = subTaskTitle;
  this.hours = subTaskHours;
};

let subTask = new SubTask('title');
console.log(subTask);


function Task(title) {
  this.title = "Новая задача";
  this.subTaskList = [subTask];
  this.createSubTask = function() {};
  this.deleteSubTask = function() {};
}

let task = new Task('title');

let taskList = {
  taskList: [task],
  createTask(){},
};