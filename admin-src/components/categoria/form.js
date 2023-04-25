import { useState } from "react";

export default function CategoriaForm({categoria}) {
    const [id, setId]                   = useState('');
    const [nombre, setNombre]           = useState('');
    const [descripcion, setDescripcion] = useState('');

    /**
     * @param {SubmitEvent} eventoSubmit 
     */
    const procesarFormulario = async (eventoSubmit) => {        
        eventoSubmit.preventDefault();
        try {
            const categoriaData = {
                nombre,
                descripcion
            }
            const baseUrl   = 'http://localhost:3000';
            const url       = baseUrl + '/categoria';

            const respuesta = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(categoria)
            });
            const categoriaGuardada = await respuesta.json();
            console.dir( categoriaGuardada );
        } catch (error) {
            console.error( error );
        }
    };
    return (
        <form action="index.html" method="post" onSubmit={procesarFormulario}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

            <label htmlFor="descripcion">Descripción</label>
            <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>

            <button type="submit">Guardar</button>
        </form>
    )
}