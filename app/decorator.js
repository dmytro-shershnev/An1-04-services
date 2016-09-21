function userServiceLog($delegate, $log) {
    let getCurrentUser = $delegate.getCurrentUser;

    $delegate.getCurrentUser = function() {
        $log.info(`Call method getCurrentUser at ${new Date()}`);
        return getCurrentUser();
    };

    return $delegate;
}