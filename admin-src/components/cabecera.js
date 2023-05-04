import Link from "next/link";
import { useEffect, useState } from "react";

export default function Cabecera(props) {
    const [usuario, setUsuario] = useState({
        user: {
            email: ''
        }
    });

    const salir = () => {
        localStorage.removeItem('usuario');
    }

    useEffect(() => {
        const usuarioRaw    = localStorage.getItem('usuario');
        setUsuario( JSON.parse(usuarioRaw) );
    }, []);

    
    return (
        <header style={{display: 'flex', justifyContent: 'space-between'}}>
            <img id="logo" src="/img/isotipo2.svg" alt="logo" />

            <section style={{display: 'flex', alignItems: 'center', gap: '1em', width: '16em'}}>
                <span>Bienvenido {usuario.user.email}</span>
                <img className="user-profile" src="/img/user-profile.svg" alt="usuario" />
                <Link href="/" onClick={salir}>Salir</Link>
            </section>
        </header>
    );
}