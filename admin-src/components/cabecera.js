import Link from "next/link";
import { useEffect, useState } from "react";
import { checkAuthentication } from "./libreria/login";

export default function Cabecera(props) {
    const blankUser = {
        user: {
            email: ''
        }
    };
    const [usuario, setUsuario] = useState(blankUser);

    const salir = () => {
        localStorage.removeItem('usuario');
        setUsuario(blankUser);
    }

    useEffect(() => {
        console.log("recuperando usuario localStorage");
        const usuarioRaw    = localStorage.getItem('usuario');
        if( !usuarioRaw ) return;
        setUsuario( JSON.parse(usuarioRaw) );
    }, []);

    
    return (
        <header style={{display: 'flex', justifyContent: 'space-between'}}>
            <img id="logo" src="/desarrollo-frontend-banco/img/isotipo2.svg" alt="logo" />

            <section style={{display: 'flex', alignItems: 'center', gap: '1em', width: '16em'}}>
                <span>Bienvenido {usuario.user.email}</span>
                <img className="user-profile" src="/desarrollo-frontend-banco/img/user-profile.svg" alt="usuario" />
                <Link href="/admin/login" onClick={salir}>Salir</Link>
            </section>
        </header>
    );
}