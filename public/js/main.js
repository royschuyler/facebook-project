'use strict';

angular.module('facebook-project', []).controller('Main', function () {
      var vm = this;
      vm.user = {};

      vm.login = function () {
            main.login(vm.user, function (err, authData) {
                  if (err) {
                        console.log('Error logging in user', err);
                  } else {
                        console.log('Log in successfull', authData);
                        $rootScope.user = authData;
                  }
            });
      };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNKLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FDOUIsVUFBVSxDQUFDLE1BQU0sRUFBRSxZQUFXO0FBQzlCLFVBQUksRUFBRSxHQUFHLElBQUksQ0FBQztBQUNkLFFBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDOztBQUViLFFBQUUsQ0FBQyxLQUFLLEdBQUcsWUFBWTtBQUNyQixnQkFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLFVBQVUsR0FBRyxFQUFFLFFBQVEsRUFBQztBQUMzQyxzQkFBSSxHQUFHLEVBQUU7QUFDUiwrQkFBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQzttQkFDeEMsTUFBTTtBQUNOLCtCQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLGtDQUFVLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQzttQkFDM0I7YUFDSCxDQUFDLENBQUM7T0FDSixDQUFBO0NBQ0QsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9qcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxuICAubW9kdWxlKCdmYWNlYm9vay1wcm9qZWN0JywgW10pXG4gIC5jb250cm9sbGVyKCdNYWluJywgZnVuY3Rpb24gKCl7XG4gIFx0dmFyIHZtID0gdGhpcztcbiAgXHR2bS51c2VyID0ge307XG5cbiAgXHR2bS5sb2dpbiA9IGZ1bmN0aW9uICgpIHtcbiAgXHQgIG1haW4ubG9naW4odm0udXNlciwgZnVuY3Rpb24gKGVyciwgYXV0aERhdGEpe1xuICBcdCAgXHRpZiAoZXJyKSB7XG4gIFx0ICBcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGxvZ2dpbmcgaW4gdXNlcicsIGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIFx0Y29uc29sZS5sb2coJ0xvZyBpbiBzdWNjZXNzZnVsbCcsIGF1dGhEYXRhKTtcbiAgICAgICAgXHQkcm9vdFNjb3BlLnVzZXIgPSBhdXRoRGF0YTtcbiAgICAgICAgfVxuICBcdCAgfSk7XG4gIFx0fVxuICB9KTtcbiJdfQ==
