import { useEffect, useState } from "react";
import CategoriaForm from "./form";
import CategoriaListado from "./listado";
import Configuracion from "../libreria/config";

export default function CategoriaManager() {
    const [categorias, setCategorias]   = useState([]);
    const [compMessage, setCompMessage] = useState(null); 

    const baseUrl   = Configuracion.getBaseUrl();
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

    return (
        <>
            <CategoriaForm 
                url={url}
                compMessage={compMessage}
                setCompMessage={setCompMessage}
                categorias={categorias} 
                setCategorias={setCategorias}
            />

            <hr />

            <CategoriaListado 
                url={url}
                categorias={categorias} 
                setCategorias={setCategorias}
                compMessage={compMessage}
                setCompMessage={setCompMessage}
            />
        </>
    );
}