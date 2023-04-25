import Cabecera from "./cabecera";
import PiePagina from "./pie-pagina";

export default function Layout({children}) {
    return (
        <>
            <Cabecera />
            {children}
            <PiePagina />
        </>
    );
}