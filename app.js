angular.module('toDoList', [
  // 'toDoList.showTasks',
  // 'toDoList.addTask'
])

// angular.module('toDoList.addTask', [])

.controller('addTaskController', function ($scope, Tasks) {
  $scope.tasks = {};

  $scope.addTask = function(){
    Tasks.addTask($scope.tasks);
    $scope.tasks.task = '';
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

  $scope.completeTask = function(index){
    $scope.data.tasks.splice(index, 1, Tasks.congratulate());
  };


  $scope.deleteTask = function(index){
    $scope.data.tasks.splice(index, 1);
  };

  $scope.fetchTasks();
})

.factory('Tasks', function (){
  var taskList = ['stuff', 'more stuff', 'more other stuff'];
  var feelGoodQuotes = ['Complete!', 'Good job!', 'Niiiiice!', 'You did it!', 'Awwwwww yeaaaaaaah!', 'You\'re awesome!', 'Holy shit, you\'re killing it!', 'Fuck yeah!', 'Don\'t have to deal with that shit anymore!'];

  var getTasks = function(){
    return taskList;
  };

  var addTask = function(tasks){
  	taskList.push(tasks.task);
  };

  var congratulate = function(){
    return feelGoodQuotes[Math.random() * feelGoodQuotes.length];
  };

  return {
    getTasks: getTasks,
    addTask: addTask
  };
});




