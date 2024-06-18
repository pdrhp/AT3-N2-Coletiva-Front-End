import useLivrosData from '@/hook/useLivrosData';
import Livro from '@/interfaces/Livro';
import { useQueryClient } from '@tanstack/react-query';
import { Frown } from 'lucide-react';
import LivroCard from './LivroCard';
import { Card, CardContent } from './ui/card';


type MainContentProps = {
  handleEdit: (livro?: Livro) => void;
}

const MainContent: React.FC<MainContentProps> = ({handleEdit}) => {

  const queryClient = useQueryClient();
  const { data: livros, isLoading, error } = useLivrosData();

 


  return (
    <Card className='flex-1 border-primary'>
      <CardContent className='h-[100%] flex justify-center flex-wrap overflow-y-auto p-1 gap-3'>
        {livros && !isLoading ? livros.map((livro, index) => (
          <LivroCard queryClient={queryClient} handleEdit={handleEdit} livro={livro} key={index} />
        )) : (
          <div className='flex h-full w-full flex-col items-center justify-center'>
            <Frown className='h-[10rem] w-[10rem]'/>
            <h1 className='text-3xl font-bold'>Nenhum livro encontrado</h1>
          </div>
        )}
        
        {isLoading && (
          <div className='flex h-full w-full flex-col items-center justify-center'>
            <Frown className='h-[10rem] w-[10rem] animate-spin'/>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default MainContent
