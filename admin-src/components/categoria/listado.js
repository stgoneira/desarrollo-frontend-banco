
export default function CategoriaListado({categorias, setCategorias, compMessage, setCompMessage}) {
    const borrar = async (categoria) => {        
        const respuesta = await fetch(url+'?id='+categoria.id, {
            method: 'DELETE'
        });
        await respuesta.json();
        await cargar();
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