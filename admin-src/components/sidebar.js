import Link from "next/link"; 

export default function Sidebar(props) {
    return (
        <aside>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/consultas">Consultas</Link>
                    </li>
                    <li>
                        <Link href="/categoria">Categorías</Link>
                    </li>
                    <li>
                        <Link href="/productos">Productos</Link>
                    </li>
                    <li>
                        <Link href="/configuracion">Configuración</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}