function logService($delegate, appName) {
    let logFn = $delegate.log;
    let infoFn = $delegate.info;
    let warnFn = $delegate.warn;
    let errorFn = $delegate.error;
    let debugFn = $delegate.debug;

    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth();
    
    month = (month < 10) ? `0${month}` : month; 
    
    let year =now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let date = `${day}.${month}.${year}`;
    let time = `${hours}:${minutes}:${seconds}`;

    $delegate.log = function(msg) {
        logFn(`${date} ${time} ${msg}`);
    };

    $delegate.info = function(msg) {
        infoFn(`${date} ${time} ${msg}`);
    };
    
    $delegate.warn = function(msg) {
        warnFn(`${date} ${time} ${msg}`);
    };
    
    $delegate.error = function(msg) {
        errorFn(`${date} ${time} ${msg}`);
    };

    $delegate.debug = function(msg) {
        debugFn(`${date} ${time} ${msg}`);
    };

    $delegate.myLog = function(msg) {
       logFn(`"${appName}" ${msg}`);
    }
    
    return $delegate;
}