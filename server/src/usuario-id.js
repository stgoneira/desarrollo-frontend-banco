const { admin } = require('./firebase');

module.exports = async (req, res) => {
    const id = req.params.id;
    const usuario = await admin.auth().getUser(id);    
    const rol = usuario.customClaims.rol;
    return {rol, usuario};
};