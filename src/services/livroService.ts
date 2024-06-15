import client from "./client"



export const getLivros = async (titulo?: string) => {
    const response = await client.get(`livros?titulo=${titulo}`);
    console.log(response);
    return response.data; 
}