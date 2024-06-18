import Livro from "@/interfaces/Livro";
import { addALivro, buyALivro, deleteLivro } from "@/services/livroService";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Pencil, Plus, ShoppingCart, X } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

type LivroCardProps = {
  livro: Livro;
  handleEdit: (livro?: Livro) => void;
  queryClient: QueryClient;
};

const LivroCard: React.FC<LivroCardProps> = ({
  livro,
  handleEdit,
  queryClient,
}) => {
  const [animacao, setAnimacao] = React.useState("");

  const increment = () => {
    setAnimacao("animate-up");
    setTimeout(() => setAnimacao(""), 500); // Reset da animação após 500ms
  };

  const decrease = () => {
    setAnimacao("animate-down");
    setTimeout(() => setAnimacao(""), 500); // Reset da animação após 500ms
  };

  const { mutate: deleteBook } = useMutation({
    mutationFn: deleteLivro,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["livros-data"],
      });
      toast.success("Livro deletado com sucesso", {
        richColors: true,
        style: {
          backgroundColor: "#a86c1d",
          color: "#fff",
        },
      });
    },
    onError: () => {
      toast.error("Erro ao deletar livro");
    },
  });

  const { mutate: buyBook } = useMutation({
    mutationFn: buyALivro,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["livros-data"],
      });
      toast.success("Livro comprado com sucesso", {
        richColors: true,
        style: {
          backgroundColor: "#a86c1d",
          color: "#fff",
        },
      });
      decrease()
    },
    onError: (e: AxiosError) => {
      const errorResponse = JSON.parse(e.request.response)
      console.log(errorResponse)
      toast.error(errorResponse.message, {
        richColors: true,
        style: {
          backgroundColor: "#FF0000",
        },
      });
    }
  });

  const { mutate: addBook } = useMutation({
    mutationFn: addALivro,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["livros-data"],
      });
      toast.success("Livro adicionado ao estoque com sucesso", {
        richColors: true,
        style: {
          backgroundColor: "#215e31",
          color: "#fff",
        },
      });
      increment()
    },
    onError: (error) => {
      console.log(error)
    }
  });

  return (
    <Card className="h-[58%] w-[15%] flex flex-col items-center gap-3 p-2">
      <img className=" object-scale-down h-[50%] rounded-lg" src={livro.capa} />
      <div className="flex flex-col items-center gap-1">
        <h1>{livro.titulo}</h1>
        <p>{livro.autor}</p>
        <p>{livro.genero}</p>
        <div
          className={`p-4 border rounded-lg flex justify-center items-center flex-col `}
        >
          <span className={`${animacao}`}>{livro.quantidade}</span>
        </div>
      </div>
      <div className="flex gap-3 justify-center">
        <Button
          onClick={() => handleEdit(livro)}
          variant={"outline"}
          className="h-12 w-12"
        >
          <Pencil className="h-6 w-6" />
        </Button>
        <Button
          onClick={() => deleteBook(livro.id)}
          variant={"outline"}
          className="h-12 w-12"
        >
          <X className="h-6 w-6" />
        </Button>
        <Button
          onClick={() => buyBook(livro.id)}
          variant={"outline"}
          className="h-12 w-12"
        >
          <ShoppingCart className="h-6 w-6" />
        </Button>
        <Button
          onClick={() => addBook(livro.id)}
          variant={"outline"}
          className="h-12 w-12"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </Card>
  );
};

export default LivroCard;
