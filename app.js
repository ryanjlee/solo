angular.module('toDoList', [
  'ngAnimate'
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

.controller('showTasksController', function ($scope, $timeout, Tasks) {
  $scope.data = {
    tasks: []
  };

  $scope.fetchTasks = function(){
    $scope.data.tasks = Tasks.getTasks();
  };

  $scope.completeTask = function(index){
    var msg = Tasks.congratulate();
    $scope.data.tasks.splice(index, 1, msg);
    $timeout(function(){
      $scope.data.tasks.splice(index, 1);
    }, 1000);
  };

  $scope.deleteTask = function(index){
    $scope.data.tasks.splice(index, 1);
  };

  $scope.fetchTasks();
})

.factory('Tasks', function (){
  var taskList = ['eat', 'sleep', 'brush teeth', 'take a shower', 'buy bananas', 'stuff', 'more stuff', 'more other stuff'];
  var feelGoodQuotes = ['Complete!', 'Good job!', 'Niiiiice!', 'Grrrrrrrreat!', 'You did it!', 'Kick ass!', 'Boom, there it is!', 'Awwwwww yeaaaaaaah!', 'You\'re awesome!', 'Holy shit, you\'re killing it!', 'Fuck yeah!', 'Don\'t have to deal with that shit anymore!'];

  var getTasks = function(){
    return taskList;
  };

  var addTask = function(tasks){
  	taskList.push(tasks.task);
  };

  var congratulate = function(){
    var num = Math.floor(Math.random() * feelGoodQuotes.length);
    return feelGoodQuotes[num];
  };

  return {
    getTasks: getTasks,
    addTask: addTask,
    congratulate: congratulate
  };
});




