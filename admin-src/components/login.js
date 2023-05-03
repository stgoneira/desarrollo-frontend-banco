import React from 'react'
import Configuracion from './libreria/config';

export default function Login({urlSuccess}) {
    const [email, setEmail]             = React.useState('');
    const [contrasena, setContrasena]   = React.useState('');
    const [mensaje, setMensaje]         = React.useState('');

    const submitHandler = async (submitEvent) => {
        submitEvent.preventDefault();
        const baseUrl       = Configuracion.getBaseUrl();
        const url           = baseUrl + "/usuario/login";
        const datosLogin    = {email, contrasena};
        try {
            const respuesta     = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify( datosLogin )
            });
            if( !respuesta.ok ) throw new Error("Error al autenticar");
            const usuario       = await respuesta.json();
            localStorage.setItem('usuario', JSON.stringify(usuario));
            window.location = urlSuccess;
        } catch (error) {
            console.dir(error);
            setMensaje(error.message);
        }
    };

    const loginHTML = React.createElement('section', {className: 'login'}, 
        React.createElement('form', {onSubmit: submitHandler}, 
            React.createElement('p', {className: 'error'}, mensaje),

            React.createElement('label', {}, 'Email'),
            React.createElement('input', {type: 'email', value: email, onChange: (e)=>setEmail(e.currentTarget.value)}),

            React.createElement('label', {}, 'Contraseña'),
            React.createElement('input', {type: 'password', value: contrasena, onChange: (e) => setContrasena(e.currentTarget.value)}),

            React.createElement('button', {type: 'submit'}, 'Ingresar'),
        )
    );
    return loginHTML;
}