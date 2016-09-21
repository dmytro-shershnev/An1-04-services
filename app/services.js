(function() {
    "use strict";

    angular.module("services", [])
        .factory("userService", userService)
        .provider("userGreetingService", userGreetingService)
        .service("personService", Person);
        // .service("personService2", Person2);

    function userService() {
        let currentUser;
        // API
        return {
            getCurrentUser,
            setCurrentUser
        };
        // IMPL
        function getCurrentUser() {
            return currentUser;
        }

        function setCurrentUser(user) {
            currentUser = user;
            return this;
        }
    }

    function userGreetingService() {
        let greetingMsg = "Hi";

        return { // provider object
            $get,
            configGreeting
        };

        function $get() {
            return { // service object
                greet
            };

            function greet(user) {
                console.log(`Hi, ${user}`);
            }
        }

        function configGreeting(greeting) {
            if (greeting) {
                greetingMsg = greeting;

                return this;
            } else {
                return greetingMsg;
            }
        }
    }
})();