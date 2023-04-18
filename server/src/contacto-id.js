const { admin } = require('./firebase');

module.exports = async (req, res) => {
    const id = req.params.id;
    const db = admin.firestore();
    const coleccion = db.collection('contacto');

    const doc = await coleccion.doc(id).get();
    if( doc.exists ) {
        return {id: doc.id, data: doc.data() };
    }

    res.code(404).send({msje: 'Documento no existe'});
};