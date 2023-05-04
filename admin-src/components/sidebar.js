import Link from "next/link"; 

export default function Sidebar(props) {
    return (
        <aside>
            <nav style={{display: 'flex', flexDirection: 'column', gap: '0.5em'}}>
                <Link href="/admin">Inicio</Link>
                <Link href="/admin/consultas">Consultas</Link>
                <Link href="/admin/categoria">Categorías</Link>
                <Link href="/admin/productos">Productos</Link>
                <Link href="/admin/configuracion">Configuración</Link>
            </nav>
        </aside>
    );
}