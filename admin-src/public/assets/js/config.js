function getBaseUrl() {
    if( ['127.0.0.1', 'localhost'].includes(window.location.hostname) ) {
        return 'http://localhost:3000';
    } else {
        return 'https://dapper-shorthaired-doom.glitch.me';
    }
}