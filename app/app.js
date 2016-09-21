(function() {
    "use strict";

    // app
    angular.module("app", ["services"])
        .controller("Simple", Simple)
        .config(appConfig)
        .config(decoration);

    function appConfig(userGreetingServiceProvider, officialGreeting) {
        // console.log(userGreetingServiceProvider);
        userGreetingServiceProvider.configGreeting(officialGreeting);
    }

    function decoration($provide) {
        $provide.decorator("userService", userServiceLog);
    }

    function Simple(localStorageService, rankService) {
        console.log("controller");
        // console.log(localStorageService);
        localStorageService.setStorageItem("TestItem", "Test Value");
        localStorageService.getStorageItem("TestItem");
        localStorageService.deleteStorageItem("TestItem");

        console.log(`Show rank: ${rankService.showRank(350)}`);
        // console.log(userService);
        // userService.setCurrentUser("Vitaliy");
        // console.log(userService.getCurrentUser());
        // console.log(personService);
        // personService.setAge(16);
        // console.log(personService.getAge());
        // console.log(personService2);
        // console.log(userGreetingService);
        // userGreetingService.greet(userName);
    }

    // bootstrap app
    angular.element(document).ready(function() {
        angular.bootstrap(document, ["app"]);
    });
})();