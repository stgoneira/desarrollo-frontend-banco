const formulario = document.querySelector("form");
formulario.addEventListener('submit', (evento) => {
    // cancela la propagación del evento 'submit'
    evento.preventDefault();
    // recuperar datos del formulario 
    const email = document.querySelector("#email").value;
    const contrasena = document.querySelector("#contrasena").value;
    // configurar el objeto que se enviar por POST 
    const usuario = {
        email, // email: email
        contrasena// contrasena: contrasena
    };  
    // llamada remota 
    fetch('https://alluring-grape-robe.glitch.me/registro-usuario', {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => console.dir(data))
        .catch(error => console.error(error))
    ;
});