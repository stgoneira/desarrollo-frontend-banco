import { useRouter } from 'next/router';

export default function PageCategoriaById() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            {id}
        </>
    )
}