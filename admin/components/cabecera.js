import Link from "next/link";

export default function Cabecera(props) {
    return (
        <header>
            Logo

            <nav>
                <ul>
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/consultas">Consultas</Link>
                    </li>
                    <li>
                        <Link href="/configuracion">Configuración</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}