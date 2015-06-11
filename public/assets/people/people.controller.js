'use strict';

angular.module('angularAddresses').controller('PeopleCtrl', function ($rootScope, $location, Person) {
  var vm = this;

  Person.getAll(function (people) {
    vm.people = people;
  });

  vm.onModalLoad = function () {};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvcGVvcGxlL3Blb3BsZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNKLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUUxQixVQUFVLENBQUMsWUFBWSxFQUFFLFVBQVUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7QUFDakUsTUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDOztBQUVkLFFBQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxNQUFNLEVBQUU7QUFDOUIsTUFBRSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7R0FDcEIsQ0FBQyxDQUFDOztBQUVILElBQUUsQ0FBQyxXQUFXLEdBQUcsWUFBWSxFQUFFLENBQUM7Q0FDakMsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9hc3NldHMvcGVvcGxlL3Blb3BsZS5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxuICAubW9kdWxlKCdhbmd1bGFyQWRkcmVzc2VzJylcblxuICAuY29udHJvbGxlcignUGVvcGxlQ3RybCcsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkbG9jYXRpb24sIFBlcnNvbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICBQZXJzb24uZ2V0QWxsKGZ1bmN0aW9uIChwZW9wbGUpIHtcbiAgICAgIHZtLnBlb3BsZSA9IHBlb3BsZTtcbiAgICB9KTtcblxuICAgIHZtLm9uTW9kYWxMb2FkID0gZnVuY3Rpb24gKCkge307XG4gIH0pO1xuIl19
