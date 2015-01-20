angular.module('toDoList', [
  // 'toDoList.showTasks',
  // 'toDoList.addTask'
])

// angular.module('toDoList.addTask', [])

.controller('addTaskController', function ($scope, Tasks) {
  $scope.tasks = {};

  $scope.addTask = function(){
    Tasks.addTask($scope.tasks);
  };
})

// angular.module('toDoList.showTasks', [])

.controller('showTasksController', function ($scope, Tasks) {
  $scope.data = {
    tasks: []
  };

  $scope.fetchTasks = function(){
    $scope.data.tasks = Tasks.getTasks();
  };

  $scope.deleteTask = function(param){
    $scope.data.tasks.splice(param, 1);
  };

  $scope.fetchTasks();
})

.factory('Tasks', function () {
  var taskList = ['stuff', 'more stuff', 'more other stuff'];

  var getTasks = function(){
    return taskList;
  };

  var addTask = function(tasks) {
  	taskList.push(tasks.task);
  };

  return {
    getTasks: getTasks,
    addTask: addTask
  };
});




