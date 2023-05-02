const {admin} = require('./firebase');

module.exports = async function(req, res) {
    const listaUsuario = await admin.auth().listUsers();
    const cantidadUsuarios = listaUsuario.users.length;
    if( cantidadUsuarios > 0) {
        return res.code(404).send();
    }

    // SETUP INICIAL

    // 1. crea usuario admin 
    const userAdmin = await admin.auth().createUser({
        email: 'admin@example.com',
        password: '123456'
    });
    await admin.auth().setCustomUserClaims(userAdmin.uid, {
        rol: 'admin'
    });

    // 2. crea usuarios banco 
    const userClient = await admin.auth().createUser({
        email: 'cliente@123.cl',
        password: '654321'
    });
    await admin.auth().setCustomUserClaims(userClient.uid, {
        rol: 'cliente'
    });

    return {setup: 'ok'};
};