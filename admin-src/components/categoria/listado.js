import { useState } from "react";

export default function CategoriaListado({categorias, setCategorias, compMessage, setCompMessage, url}) {
    const [mensaje, setMensaje]             = useState('');
    const [mensajeClase, setMensajeClase]   = useState('');

    const borrar = async (categoria) => {    
        try {
            const respuesta = await fetch(url+'?id='+categoria.id, {
                method: 'DELETE'
            });
            await respuesta.json();
            setMensaje("Se borró la categoría: "+categoria.nombre);
            setMensajeClase("exito");
            
            setCategorias( categorias.filter(c => c.id != categoria.id) );

            setTimeout(() => {
                setMensaje("");
                setMensajeClase("");
            }, 5000);    
        } catch (error) {
            setMensaje("Hubo un error al borrar la categoría: "+error.message);
            setMensajeClase("error");
        }    
        
    }
    const nuevo = () => {
        setCompMessage({accion: 'nuevo'});
    };
    const editar = (categoria) => {
        setCompMessage({
            accion: 'editar',
            data: categoria
        });
    };

    return (
        <>
            <button onClick={nuevo}>Nuevo</button>
            <p className={mensajeClase}>{mensaje}</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.length == 0 &&
                    <tr>
                        <td colSpan={4}>No hay categorías que mostrar.</td>
                    </tr>
                    }
                    {categorias.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.nombre}</td>
                            <td>{c.descripcion}</td>
                            <td className="botones">
                                <button onClick={() => editar(c)}>Editar</button>
                                <button onClick={() => borrar(c)}>Eliminar</button>
                            </td>                            
                        </tr>    
                    ))}
                </tbody>
            </table>
        </>
    )
}