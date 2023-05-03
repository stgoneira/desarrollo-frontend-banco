const {Request, Reply} = require('fastify');
const { admin } = require('./firebase');

module.exports = async (req /*: Request */, res /*:Reply */) => {    
    switch( req.method ) {
        case 'GET':
            return procesarGET(req, res);
        case 'POST':
            return procesarPOST(req, res);
        case 'PUT':
            return procesarPUT(req, res);
        case 'DELETE':
            return procesarDELETE(req, res);
        default:
            res.code(500).send({error: 'metodo no permitido'});
    }    
};

const getColeccion = () => admin.firestore().collection('categorias');

/**
 * 
 * @param {Request} req 
 * @param {Reply} res 
 */
async function procesarDELETE(req, res) {        
    try {
        const { id } = req.query; 
        const documento = await getColeccion().doc(id);
        await documento.delete();
        return {borrado: true};
    } catch (error) {
        res.code(500).send({error: JSON.stringify(error)});
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Reply} res 
 */
async function procesarGET(req, res) {    
    try {
        const snapshot = await getColeccion().get();
        const documentos = snapshot.docs.map( doc => { return {id: doc.id, ...doc.data()}; });
        return documentos;
    } catch (error) {
        res.send(500).send({error: JSON.stringify(error)});
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Reply} res 
 */
async function procesarPOST(req, res) {
    try {
        const {nombre, descripcion} = req.body;
        const categoria = {
            nombre, 
            descripcion
        };
        const documento = await getColeccion().doc();
        await documento.set(categoria);
        categoria.id = documento.id;
        return categoria;
    } catch (error) {
        res.code(500).send({error: JSON.stringify(error)});
    }
}

async function procesarPUT(req, res) {
    try {
        const {nombre, descripcion, id} = req.body;
        const categoria = {
            nombre, 
            descripcion
        };
        const documento = await getColeccion().doc(id);
        await documento.update(categoria);
        categoria.id = documento.id;
        return categoria;
    } catch (error) {
        res.code(500).send({error: JSON.stringify(error)});
    }
}
