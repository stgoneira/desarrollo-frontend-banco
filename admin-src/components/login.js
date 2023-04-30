import React from 'react'

export default function Login() {
    const loginHTML = React.createElement('section', {className: 'login'}, 
        React.createElement('form', {}, 
            React.createElement('label', {}, 'Email'),
            React.createElement('input', {type: 'email'}),

            React.createElement('label', {}, 'Contraseña'),
            React.createElement('input', {type: 'password'}),

            React.createElement('button', {type: 'submit'}, 'Ingresar'),
        )
    );
    return loginHTML;
    /*
    return (
        <section className="login">
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="contrasena">Contraseña</label>
                <input type="password" id="contrasena" name="contrasena" />

                <button>Ingresar</button>
            </form>
        </section>
    );
    */
}