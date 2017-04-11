var app = angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	
	.when("/",{
		templateUrl : "ex1/view/home.html",
		controller : "HomeController"
			
	})
	
	.when("/blog",{
		templateUrl : "ex1/view/blog.html",
		controller : "BlogController"
	})
	
	.when("/friend",{
		templateUrl : "ex1/view/friend.html",
		controller : "FriendController"
	})
	
	.when("/job",{
		templateUrl : "ex1/view/job.html",
		controller : "JobController"
	})
	
	.otherwise({redirectTo:"/"});
});

