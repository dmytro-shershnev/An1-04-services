(function() {
    "use strict";

    // app
    angular.module("app", ["services"])
        .controller("Simple", Simple)
        .config(appConfig);

    function appConfig(userGreetingServiceProvider) {
        console.log(userGreetingServiceProvider);
    }

    function Simple(userService, personService, userGreetingService) {
        console.log("controller");
        // console.log(userService);
        // userService.setCurrentUser("Vitaliy");
        // console.log(userService.getCurrentUser());
        // console.log(personService);
        // personService.setAge(16);
        // console.log(personService.getAge());
        // console.log(personService2);
        console.log(userGreetingService);
        userGreetingService.greet("Vitaliy");
    }

    // bootstrap app
    angular.element(document).ready(function() {
        angular.bootstrap(document, ["app"]);
    });
})();