import { useEffect, useState } from "react";
import Configuracion from "../libreria/config";

export default function CategoriaForm({compMessage, setCompMessage, url, categorias, setCategorias}) {
    const [id, setId]                   = useState('');
    const [nombre, setNombre]           = useState('');
    const [descripcion, setDescripcion] = useState('');

    const [mensaje, setMensaje]             = useState('');
    const [mensajeClass, setMensajeClass]   = useState('');

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

            let metodo = 'POST';
            if( compMessage.accion == 'editar') {
                metodo = 'PUT';
                categoriaData.id = compMessage.data.id;
            }
            const respuesta = await fetch(url, {
                method: metodo,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(categoriaData)
            });
            
            if( !respuesta.ok ) throw new Error("No se pudo guardar la categoría");

            const categoriaGuardada = await respuesta.json();
            console.dir( categoriaGuardada );
            setMensaje("Categoría guardada con ID "+categoriaGuardada.id);
            setMensajeClass('success');

            if( compMessage.accion == 'editar') {
                const categoriasFiltradas = categorias.filter(c => c.id != compMessage.data.id );
                setCategorias([...categoriasFiltradas, categoriaGuardada]);
            } else {
                setCategorias([...categorias, categoriaGuardada]);
                setCompMessage({
                    accion: 'editar',
                    data: categoriaGuardada
                });
            }
        } catch (error) {
            console.error( error );
            setMensaje(error.message);
            setMensajeClass('error');
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
        <>
        <p className={mensajeClass}>{mensaje}</p>
        <form action="index.html" method="post" onSubmit={procesarFormulario} style={{gap: '1em', display: 'grid', gridTemplateColumns: '1fr 3fr'}}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

            <label htmlFor="descripcion">Descripción</label>
            <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>

            <div>
            {id.length > 3 ? (
                <button type="submit">Editar</button>
            ):(
                <button type="submit">Crear</button>
            )}
            </div>
        </form>
        </>
    )
}