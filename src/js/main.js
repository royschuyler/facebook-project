angular
  .module('facebook-project', [])
  .controller('Main', function (){
  	var vm = this;
  	vm.user = {};

  	vm.login = function () {
  	  main.login(vm.user, function (err, authData){
  	  	if (err) {
  	  		console.log('Error logging in user', err);
        } else {
        	console.log('Log in successfull', authData);
        	$rootScope.user = authData;
        }
  	  });
  	}
  });
