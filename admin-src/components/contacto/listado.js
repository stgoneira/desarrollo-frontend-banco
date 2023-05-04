import { useEffect, useState } from "react";
import Configuracion from "../libreria/config";

export default function ContactoListado({}) {
    const [contactos, setContactos] = useState([]);

    const cargar = async () => {
        try {
            const url = Configuracion.getBaseUrl() + '/contacto';
            const respuesta = await fetch(url);
            if( !respuesta.ok ) throw new Error("Hubo problemas al traer las consultas");
            const consultas = await respuesta.json();
            setContactos( consultas );
        } catch (error) {
            console.error( error );
        }
    };

    useEffect(() => {
        cargar();
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        {/*<th>ID</th>*/}
                        <th>RUT</th>
                        <th>Nombre</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Motivo</th>
                        <th>Dirección</th>
                        <th>Comuna</th>
                        <th>Mensaje</th>
                    </tr>
                </thead>
                <tbody>
                    {contactos.length == 0 &&
                    <tr>
                        <td colSpan={8}>No hay consultas que mostrar.</td>
                    </tr>
                    }
                    {contactos.map(c => (
                        <tr key={c.id}>
                            {/*<td>{c.id}</td>*/}
                            <td>{c.rut}</td>
                            <td>{c.nombre}</td>
                            <td>{c.telefono}</td>
                            <td>{c.email}</td>
                            <td>{c.motivo}</td>
                            <td>{c.direccion}</td>
                            <td>{c.comuna}</td>
                            <td>{c.mensaje}</td>                
                        </tr>    
                    ))}
                </tbody>
            </table>
        </>
    );
}