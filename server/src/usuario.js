const { admin } = require('./firebase');

module.exports = async (req, res) => {
    
    switch( req.method ) {
        case 'GET':    
        case 'POST':
        default: 
            res.code(404).send('404');
    }

};