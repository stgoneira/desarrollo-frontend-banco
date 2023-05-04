const redirigirLogin = (router) => {
    //debugger;
    
    if( !router ) {
        window.location = '/admin/login';
    } else {
        router.push('/admin/login');
    }
}

const checkAuthentication = (router) => {
    if( typeof window === 'undefined') {return}
    const strUser = localStorage.getItem('usuario');
    if(strUser == null) {
        redirigirLogin(router);
    }
    const usuario = JSON.parse(strUser);
}

export {
    redirigirLogin,
    checkAuthentication
};