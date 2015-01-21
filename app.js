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
  var taskList = ['eat', 'sleep', 'write a blog', 'brush teeth', 'buy bananas', 'get paid', 'stuff', 'more stuff', 'more other stuff'];
  var feelGoodQuotes = ['Nice!', 'Great job!', 'You did it!', 'You\'re awesome!', 'Awwwwww yeaaaaaaah!', 'Fuck yeah!', 'Don\'t have to deal with that shit anymore!', 'Kick ass!', 'Grrrrrrrreat!', 'Holy shit, you\'re killing it!', 'Complete!', 'Boom, there it is!'];

  var getTasks = function(){
    return taskList;
  };

  var addTask = function(tasks){
    taskList.push(tasks.task);
  };

  var counter = 0;
  var congratulate = function(){
    counter++;
    var num = counter;
    // var num = Math.floor(Math.random() * feelGoodQuotes.length);
    return feelGoodQuotes[num];
  };

  return {
    getTasks: getTasks,
    addTask: addTask,
    congratulate: congratulate
  };
});




