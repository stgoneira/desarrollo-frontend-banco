import Cabecera from "./cabecera";
import Sidebar from "./sidebar";

export default function Layout({children}) {
    return (
        <>
            <Cabecera />
            <Sidebar />
            {children}
        </>
    );
}