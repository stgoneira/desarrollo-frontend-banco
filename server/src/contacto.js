const { admin } = require('./firebase');

const db = admin.firestore();
const coleccion = db.collection('contacto');

module.exports = async (req, res) => {
    switch( req.method ) {
        case 'GET': 
            const contactos = await coleccion.get();
            return contactos.docs.map(d => {
                const data = d.data();
                return {id: d.id, ...data};
            });
            break;
        case 'POST': 
            const accionPost = async () => {
                const {nombre, rut, telefono, email, motivo, mensaje, direccion, comuna} = req.body;
                const documento = {nombre, rut, telefono, email, motivo, mensaje, direccion, comuna};
                const docRef    = await coleccion.doc();
                await docRef.set(documento);
                documento.id = docRef.id;
                return {documento};
            }
            return await accionPost();
            break;
        case 'PUT':
            res.code(501).send({error: 'No implementado!'});
            break;
        case 'DELETE':
            res.code(501).send({error: 'No implementado!'});
            break;
        default: 
            res.code(500).send({error: 'Método incorrecto!'});
    }
};