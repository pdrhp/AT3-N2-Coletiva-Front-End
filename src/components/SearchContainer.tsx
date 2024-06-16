import Livro from '@/interfaces/Livro';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';


type SearchContainerProps = {
    handleAddLivro: (livro?: Livro) => void;
}

const SearchContainer: React.FC<SearchContainerProps> = ({handleAddLivro}) => {
    return (
        <div className='h-[10%] w-full gap-2 py-5 flex justify-center items-center'>
            <Input placeholder='Pesquise seu livro' className='rounded-lg border border-primary' />
            <Button  onClick={() => handleAddLivro()} variant="outline" className='w-[4%] border-primary'>
                <Plus className='h-4 w-4'/>
            </Button>
        </div>
    )
}

export default SearchContainer
