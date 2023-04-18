const { admin } = require('./firebase');

module.exports = async (req, res) => {
    
    switch( req.method ) {
        case 'GET':
            const accion = req.query.accion;
            if( accion == 'crear' ) {
                const usuarioData = {email: 'juan@123.cl', password: '123456'};
                const usuario = await admin.auth().createUser(usuarioData);
                admin.auth().setCustomUserClaims(usuario.uid, {
                    rol: 'cliente'
                });
            
                const usuario2Data = {email: 'jorge@123.cl', password: '654321'};
                const usuario2 = await admin.auth().createUser(usuario2Data);
                admin.auth().setCustomUserClaims(usuario2.uid, {
                    rol: 'admin'
                });
            
                return {usuario, usuario2};
            }
        case 'POST':
        default: 
            res.code(404).send('404');
    }

    
};