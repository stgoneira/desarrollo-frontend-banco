const redirigirLogin = () => {
    window.location = '/login2';
}

const checkAuthentication = () => {
    if( typeof window === 'undefined') {return}
    const strUser = localStorage.getItem('usuario');
    if(strUser == null) {
        redirigirLogin();
    }
    const usuario = JSON.parse(strUser);
}

export {
    redirigirLogin,
    checkAuthentication
};