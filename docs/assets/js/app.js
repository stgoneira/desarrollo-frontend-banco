function checkLogin() {
    const usuario = localStorage.getItem('usuario');
    if( ! usuario ) redirigirLogin();

    const token = usuario.user.stsTokenManager.accessToken;
    if( !token && token.length < 10) redirigirLogin();

    checkToken(token);
}

function checkToken(token) {
    
}

function redirigirLogin() {
    window.location = 'login.html';
}