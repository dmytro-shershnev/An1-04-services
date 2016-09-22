(function() {
    "use strict";

    // app
    angular.module("app", ["services"])
        .controller("Simple", Simple)
        .constant("appName", "Simple Application")
        .config(appConfig)
        .config(decoration)
        .config(decorationLog);

    function appConfig(userGreetingServiceProvider, officialGreeting) {
        // console.log(userGreetingServiceProvider);
        userGreetingServiceProvider.configGreeting(officialGreeting);
    }

    function decoration($provide) {
        $provide.decorator("userService", userServiceLog);
    }

    function decorationLog($provide) {
        $provide.decorator("$log", logService);
    }

    //function Simple(userService, personService, userGreetingService, userName) {
    function Simple(localStorageService, rankService, rankService2, rankService3, $log, generatorService) {
        console.log("controller");
        // console.log(localStorageService);
        localStorageService.setStorageItem("TestItem", "Test Value");
        localStorageService.getStorageItem("TestItem");
        localStorageService.deleteStorageItem("TestItem");

        console.log(`Show rank: ${rankService.showRank(350)}`);
        console.log(`Show rank2: ${rankService2.showRank(550)}`);
        console.log(`Show rank3: ${rankService3.showRank(750)}`);

        $log.log("Log message.");
        $log.info("Info message.");
        $log.warn("Warn message.");
        $log.error("Error message.");
        $log.debug("Debug message.");
        $log.myLog("My log message.");

        console.log(generatorService.generateString(10));
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