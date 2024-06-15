import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import LivroCard from './LivroCard'
import useLivrosData from '@/hook/useLivrosData'
import EditFilmeDialog from './EditFilmeDialog'

const MainContent = () => {

  const { data: livros, isError, isLoading } = useLivrosData();
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleEdit = () => {
    setOpenEditDialog(true);
  }


  return (
    <Card className='flex-1 border-primary'>
      <CardContent className='h-[100%] flex justify-center flex-wrap overflow-y-auto p-1 gap-3'>
        {livros ? livros.map((livro, index) => (
          <LivroCard handleEdit={handleEdit} livro={livro} key={index} />
        )) : <span>Não foram encontrados livros</span>}
        <EditFilmeDialog open={openEditDialog} setOpen={setOpenEditDialog} />
      </CardContent>
    </Card>
  )
}

export default MainContent
