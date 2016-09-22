(function() {
    "use strict";

    angular.module("services", [])
        .factory("userService", userService)
        .provider("localStorageService", localStorageService)
        .provider("userGreetingService", userGreetingService)
        .service("personService", Person)
        .constant("defaultGreeting", "Hi")
        .constant("officialGreeting", "Good morning")
        .value("userName", "Vitaliy")
        .constant("defaultRankSymbol", "*")
        .provider("rankService", rankService)
        .factory("rankService2", rankService2)
        .service("rankService3", RankService3)
        .factory("generatorService", generatorService);

    function generatorService() {
        return {
            generateString
        };

        function generateString(count) {
            let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            let result = "";
            
            for (let i = 0; i < count; i++) {
                let randomPos = Math.floor(Math.random() * chars.length);
                
                result += chars.substring(randomPos,randomPos + 1);
            }

            return result;
        }
    }

    function rankService(defaultRankSymbol) {
        let rankSymbol = defaultRankSymbol;

        return {
            $get
        };

        function $get() {
            return {
                showRank
            };

            function showRank(count) {
                let result = rankSymbol;

                if (count >= 0 && count < 100) {
                    result = rankSymbol.repeat(1);
                } else if (count >= 100 && count < 200) {
                    result = rankSymbol.repeat(2);
                } else if (count >= 200 && count < 500) {
                    result = rankSymbol.repeat(3);
                } else if (count >= 500 && count < 1000) {
                    result = rankSymbol.repeat(4);
                } else if (count >= 1000) {
                    result = rankSymbol.repeat(5);
                }

                return result;
            }
        }
    }

    function rankService2(defaultRankSymbol) {
        let rankSymbol = defaultRankSymbol;

        return {
            showRank
        };

        function showRank(count) {
            let result = rankSymbol;

            if (count >= 0 && count < 100) {
                result = rankSymbol.repeat(1);
            } else if (count >= 100 && count < 200) {
                result = rankSymbol.repeat(2);
            } else if (count >= 200 && count < 500) {
                result = rankSymbol.repeat(3);
            } else if (count >= 500 && count < 1000) {
                result = rankSymbol.repeat(4);
            } else if (count >= 1000) {
                result = rankSymbol.repeat(5);
            }

            return result;
        }
    }

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

    function localStorageService() {
        return {
            $get
        }

        function $get($window) {
            return {
                setStorageItem,
                getStorageItem,
                deleteStorageItem
            };

            function setStorageItem(itemName, itemVal) {
                $window.localStorage.setItem(itemName, itemVal);
                console.log(`Local Storage set item "${itemName}": ${$window.localStorage[itemName]}`);
            }

            function getStorageItem(itemName) {
                console.log(`Local Storage get item "${itemName}": ${$window.localStorage[itemName]}`);
                return $window.localStorage.getItem(itemName);
            }

            function deleteStorageItem(itemName) {
                $window.localStorage.removeItem(itemName);
                console.log(`Local Storage delete item "${itemName}": + ${$window.localStorage[itemName]}`);
            }
        }
    }

    function userGreetingService(defaultGreeting) {
        let greetingMsg = defaultGreeting; //"Hi";

        return { // provider object
            $get,
            configGreeting
        };

        function $get() {
            return { // service object
                greet
            };

            function greet(user) {
                console.log(`${greetingMsg}, ${user}`);
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