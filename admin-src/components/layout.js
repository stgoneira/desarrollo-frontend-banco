import Cabecera from "./cabecera";
import { checkAuthentication } from "./libreria/login";
import Sidebar from "./sidebar";

export default function Layout({children}) {
    checkAuthentication();

    return (
        <>
            <Cabecera />
            <Sidebar />
            {children}
        </>
    );
}