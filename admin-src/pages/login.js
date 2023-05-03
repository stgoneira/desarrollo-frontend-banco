import { useState } from "react";

export default function PageLogin() {
    const [email, setEmail]             = useState('');
    const [contrasena, setContrasena]   = useState('');
    const [mensajes, setMensajes]       = useState('');

    const manejaSubmit = async (eventoSubmit) => {
        eventoSubmit.preventDefault();
        const datosLogin    = {email, contrasena};
        const baseUrl       = 'http://localhost:3000';
        const url           = baseUrl + '/usuario/login';
        try {
            const respuesta = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify( datosLogin )
            });
            if( ! respuesta.ok ) {
                const mensajeError = await respuesta.json();
                throw new Error(mensajeError.codigo + ":" + mensajeError.mensaje);
            }
            const usuario = await respuesta.json();   
            localStorage.setItem('usuario', JSON.stringify(usuario));
            window.location = '/';
        } catch (error) {
            setMensajes( error.message );
        }        
    };

    return (
        <main>
            <form action="login" method="POST" onSubmit={manejaSubmit}>
                <output style={{color: 'red'}}>{mensajes}</output><br />

                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} /> <br />
                <input type="password" placeholder="password" value={contrasena} onChange={(e) => setContrasena(e.currentTarget.value)} /> <br />

                <button type="submit">Ingresar</button>

                <br />
                <output>{email}</output><br />
                <output>{contrasena}</output>
            </form>
        </main>
    );
}