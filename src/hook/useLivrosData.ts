import { getLivros } from "@/services/livroService";
import { useQuery } from "@tanstack/react-query";



function useLivrosData(titulo?: string) {
    const query = useQuery({
        queryFn: () => getLivros(titulo),
        queryKey: ['livros-data']
    })

    return query;
}

export default useLivrosData;