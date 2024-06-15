import React, { useEffect } from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import LivroCard from './LivroCard'
import useLivrosData from '@/hook/useLivrosData'

const MainContent = () => {

  const { data: livros, isError, isLoading } = useLivrosData();


  return (
    <Card className='flex-1 border-primary'>
      <CardContent className='h-[100%] flex justify-center flex-wrap overflow-y-auto p-1 gap-3'>
        {livros ? livros.map((livro, index) => (
          <LivroCard livro={livro} key={index} />
        )) : <span>Não foram encontrados livros</span>}
      </CardContent>
    </Card>
  )
}

export default MainContent
