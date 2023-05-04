import { useRouter } from "next/router";
import Cabecera from "./cabecera";
import { checkAuthentication } from "./libreria/login";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";

export default function Layout({children}) {
    const router = useRouter();
    const [cargado, setCargado] = useState(''); // para transición opacity
    
    useEffect(() => {        
        checkAuthentication(router);
        setCargado('cargado');// para transición opacity
    },[]);

    return (
        <div id="contenedor" className={cargado}>
            <Cabecera />
            <Sidebar />
            <main style={{padding: '1em 2em'}}>
                {children}
            </main>
        </div>
    );
}