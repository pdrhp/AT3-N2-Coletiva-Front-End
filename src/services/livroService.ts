import Livro from "@/interfaces/Livro";
import Response from "@/interfaces/Response";
import client from "./client";



export const getLivros = async (titulo?: string): Promise<Response<Livro[]>> => {
    const response = await client.get(`/livros?titulo=${titulo ? titulo : ''}`);
    return response.data; 
}

export const createLivro = async (livro: Livro): Promise<Response<Livro>> => {
    const response = await client.post('/livros', livro);
    return response.data;
}

export const updateLivro = async (livro: Livro): Promise<Response<Livro>> => {
    const response = await client.put(`/livros/${livro.id}`, livro);
    return response.data;
}

