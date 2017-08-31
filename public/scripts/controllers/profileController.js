var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/partials/work.html',
    controller: 'profileController as pc'
  }).when('/about', {
    templateUrl: 'views/partials/about.html',
  }).when('/contact', {
    templateUrl: 'views/partials/contact.html',
  }).when('/work', {
    templateUrl: 'views/partials/work.html',
  }).when('/work/yogacenter-catalog', {
    templateUrl: 'views/partials/content/yogacatalog.html',
  }).when('/work/surescripts-brandguide', {
    templateUrl: 'views/partials/content/surescripts.html',
  }).when('/work/solsounds', {
    templateUrl: 'views/partials/content/solsounds.html',
  }).when('/work/bauhausmanifesto', {
    templateUrl: 'views/partials/content/bauhaus.html',
  }).when('/work/yogagurus', {
    templateUrl: 'views/partials/content/yogagurus.html',
  }).when('/work/foundforage', {
    templateUrl: 'views/partials/content/foundforage.html',
  });
  $locationProvider.html5Mode(true);
});


myApp.controller('profileController', ['MailService', function(MailService) {


  var vm = this;
  vm.mailObject = {};





  vm.submitForm = function(mailObject) {
    console.log(mailObject);
    if (mailObject.name !== undefined && mailObject.email !== undefined && mailObject.subject !== undefined && mailObject.message !== undefined) {
      MailService.sendEmail(mailObject).then(function() {
        // vex.defaultOptions.className = 'vex-theme-os';
        // vex.dialog.alert({
        //   message: 'THANK YOU FOR CONTACTING ME',
        //   className: 'vex-theme-flat-attack' // Overwrites defaultOptions
        //
        // });
        alert('Thank You Message!');
        mailObject.name = undefined;
        mailObject.email = undefined;
        mailObject.subject = undefined;
        mailObject.message = undefined;
        console.log(mailObject);


      });


    } else {
      // alert('fill em out');
      //
      // vex.defaultOptions.className = 'vex-theme-os';
      // vex.dialog.alert({
      //   message: 'PLEASE FILL OUT ENTIRE FORM',
      //   className: 'vex-theme-flat-attack' // Overwrites defaultOptions
      // });
      alert('fill out all fields message');
    }
  };


}]);


myApp.service('MailService', ['$http', function($http) {
  // return {
  this.sendEmail = function(info) {
    return $http.post('/', info).then(function(response) {
      console.log("Email has been sent: ", response.data);
      return response;
    });
  };
  // };
}]); //end of controller
