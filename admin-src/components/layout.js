import Cabecera from "./cabecera";
import { checkAuthentication } from "./libreria/login";
import Sidebar from "./sidebar";

export default function Layout({children}) {
    checkAuthentication();

    return (
        <div id="contenedor">
            <Cabecera />
            <Sidebar />
            <main style={{padding: '1em 2em'}}>
                {children}
            </main>
        </div>
    );
}