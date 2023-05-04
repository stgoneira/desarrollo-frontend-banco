const fs = require('fs').promises;

async function proceso() {
    const distFolder = "../docs";
    try {    
        await fs.rm(distFolder, {force: true, recursive: true});
        console.log('Carpeta borrada exitosamente');
    } catch (err) {
        console.error('Error al borrar carpeta: ', err);
    }

    try {    
        await fs.cp('out', distFolder, {force: true, recursive: true});
        console.log('Carpeta copiada exitosamente');
    } catch (err) {
        console.error('Error al copiar carpeta: ', err);
    }    
}

proceso();
