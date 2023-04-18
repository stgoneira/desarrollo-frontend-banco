document.querySelector('form')
            .addEventListener('submit', async (e) => {
    
    e.preventDefault();
    const email      = document.querySelector("#email").value;
    const contrasena = document.querySelector("#contrasena").value;

    const baseUrl   = 'http://localhost:3000';
    const url       = baseUrl + '/usuario/login';

    try {        
        const respuesta = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, contrasena})
        });

        if( !respuesta.ok ) throw new Error('Usuario y/o contraseña incorrecta');

        const usuario = await respuesta.json();
        localStorage.setItem('usuario', JSON.stringify(usuario));
        window.location = 'dashboard.html';
    } catch (error) {
        console.error( error.message );
    }    
});