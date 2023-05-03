import Link from "next/link";

export default function Cabecera(props) {
    const salir = () => {
        localStorage.removeItem('usuario');
    }

    const usuarioRaw = localStorage.getItem('usuario');
    const usuario = JSON.parse(usuarioRaw);
    return (
        <header style={{display: 'flex', justifyContent: 'space-between'}}>
            <img id="logo" src="/img/isotipo.svg" alt="logo" />

            <section style={{display: 'flex', alignItems: 'center', gap: '1em', width: '16em'}}>
                <span>Bienvenido {usuario.user.email}</span>
                <img className="user-profile" src="/img/user-profile.svg" alt="usuario" />
                <Link href="/" onClick={salir}>Salir</Link>
            </section>
            
        </header>
    );
}