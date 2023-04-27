import { useEffect, useState } from "react";
import Configuracion from "../libreria/config";

export default function CategoriaForm({compMessage, setCompMessage}) {
    const [id, setId]                   = useState('');
    const [nombre, setNombre]           = useState('');
    const [descripcion, setDescripcion] = useState('');

    /**
     * @param {SubmitEvent} eventoSubmit 
     */
    const procesarFormulario = async (eventoSubmit) => {        
        eventoSubmit.preventDefault();
        //debugger;
        try {
            const categoriaData = {
                nombre,
                descripcion
            }
            const baseUrl   = Configuracion.getBaseUrl();
            const url       = baseUrl + '/categoria';

            const respuesta = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(categoriaData)
            });
            const categoriaGuardada = await respuesta.json();
            console.dir( categoriaGuardada );
        } catch (error) {
            console.error( error );
        }
    };

    useEffect(() => {
        if( compMessage && compMessage.accion == 'nuevo') {
            setId(''); setNombre(''); setDescripcion('');
        } else if(compMessage && compMessage.accion == 'editar') {
            setId(compMessage.data.id);
            setNombre(compMessage.data.nombre);
            setDescripcion(compMessage.data.descripcion);
        }
    }, [compMessage]);

    return (
        <form action="index.html" method="post" onSubmit={procesarFormulario}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

            <label htmlFor="descripcion">Descripción</label>
            <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>

            {id.length > 3 ? (
                <button type="submit">Editar</button>
            ):(
                <button type="submit">Crear</button>
            )}
        </form>
        
    )
}