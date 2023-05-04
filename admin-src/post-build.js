const fs = require('fs').promises;

async function borrar(carpeta) {
    try {    
        await fs.rm(carpeta, {force: true, recursive: true});
        console.log('Carpeta borrada exitosamente');
    } catch (err) {
        console.error('Error al borrar carpeta: ', err);
    }
}

async function copiar(carpeta) {
    try {    
        await fs.cp('out', carpeta, {force: true, recursive: true});
        console.log('Carpeta copiada exitosamente');
    } catch (err) {
        console.error('Error al copiar carpeta: ', err);
    }    
}

async function _proceso(carpeta) {
    await borrar(carpeta);
    await copiar(carpeta);
}

async function proceso() {    
    await _proceso("../docs");
    await _proceso("../desarrollo-frontend-banco");
}

proceso();
