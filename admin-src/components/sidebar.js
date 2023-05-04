import Link from "next/link"; 

export default function Sidebar(props) {
    return (
        <aside>
            <nav style={{display: 'flex', flexDirection: 'column', gap: '0.5em'}}>
                <Link href="/">Inicio</Link>
                <Link href="/consultas">Consultas</Link>
                <Link href="/categoria">Categorías</Link>
                <Link href="/productos">Productos</Link>
                <Link href="/configuracion">Configuración</Link>
            </nav>
        </aside>
    );
}