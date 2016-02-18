
var app = angular.module('chatroom');

app.filter('time', function($filter)
{
 return function(input)
 {
  if(input == null){ return ""; }

  var _date = $filter('date')(new Date(input), 'HH:mm:ss');

  return _date.toUpperCase();

 };
});
