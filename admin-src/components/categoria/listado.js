import { useEffect, useState } from "react"

export default function CategoriaListado() {
    const [categorias, setCategorias] = useState([]);

    const baseUrl   = 'http://localhost:3000';
    const url       = baseUrl + '/categoria';

    const cargar = async () => {        
        const respuesta = await fetch(url);
        if( !respuesta.ok ) throw new Error("Problema al traer las categorías");
        const cats      = await respuesta.json();
        setCategorias(cats);
    }

    useEffect(() => {
        cargar();
    }, []);

    const borrar = async (categoria) => {        
        const respuesta = await fetch(url+'?id='+categoria.id, {
            method: 'DELETE'
        });
        await respuesta.json();
        await cargar();
    }

    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.nombre}</td>
                            <td>{c.descripcion}</td>
                            <td>
                                <button>Editar</button>
                                <button onClick={() => borrar(c)}>Eliminar</button>
                            </td>                            
                        </tr>    
                    ))}
                </tbody>
            </table>
        </>
    )
}