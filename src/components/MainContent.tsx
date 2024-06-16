import useLivrosData from '@/hook/useLivrosData';
import Livro from '@/interfaces/Livro';
import LivroCard from './LivroCard';
import { Card, CardContent } from './ui/card';


type MainContentProps = {
  handleEdit: (livro?: Livro) => void;
}

const MainContent: React.FC<MainContentProps> = ({handleEdit}) => {

  const { data: livros } = useLivrosData();

 


  return (
    <Card className='flex-1 border-primary'>
      <CardContent className='h-[100%] flex justify-center flex-wrap overflow-y-auto p-1 gap-3'>
        {livros ? livros.map((livro, index) => (
          <LivroCard handleEdit={handleEdit} livro={livro} key={index} />
        )) : <span>Não foram encontrados livros</span>}
      </CardContent>
    </Card>
  )
}

export default MainContent
