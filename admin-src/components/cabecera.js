import Link from "next/link";

export default function Cabecera(props) {
    return (
        <header style={{display: 'flex', justifyContent: 'space-between'}}>
            <img id="logo" src="/img/isotipo.svg" alt="logo" />

            <section style={{display: 'flex', alignItems: 'center', gap: '1em', width: '6em'}}>
                <img className="user-profile" src="/img/user-profile.svg" alt="usuario" />
                <Link href="/">Salir</Link>
            </section>
            
        </header>
    );
}