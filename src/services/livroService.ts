import Response from "@/interfaces/Response";
import client from "./client"
import Livro from "@/interfaces/Livro";



export const getLivros = async (titulo?: string): Promise<Response<Livro[]>> => {
    const response = await client.get(`livros?titulo=${titulo ? titulo : ''}`);
    return response.data; 
}