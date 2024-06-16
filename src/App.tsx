import { useState } from 'react';
import LivroFormDialog from './components/LivroDialog';
import MainContent from './components/MainContent';
import SearchContainer from './components/SearchContainer';
import Livro from './interfaces/Livro';

function App() {
  
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [actualLivro, setActualLivro] = useState<Livro | undefined>(undefined)

  const handleOpenDialog = (livro?: Livro) => {
    if (livro) {
      setActualLivro(livro);
    } else {
      setActualLivro(undefined);
    }
    setOpenEditDialog(true);
  }


  return (
    <div className='h-screen w-screen bg-background flex flex-col p-3'>
      <SearchContainer handleAddLivro={handleOpenDialog}/>
      <MainContent handleEdit={handleOpenDialog}/>
      <LivroFormDialog actualLivro={actualLivro} open={openEditDialog} setOpen={setOpenEditDialog} />
    </div>
  )
}

export default App
