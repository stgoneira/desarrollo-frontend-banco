import CategoriaForm from "@/components/categoria/form"; 
import CategoriaListado from "@/components/categoria/listado";

export default function PageCategoriaIndex() {
    return (
        <>
            <CategoriaForm />

            <CategoriaListado />
        </>
    ); 
}