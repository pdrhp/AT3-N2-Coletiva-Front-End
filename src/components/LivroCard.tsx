import React from 'react'
import { Card } from './ui/card'
import Livro from '@/interfaces/Livro'

type LivroCardProps = {
  livro: Livro
}


const LivroCard: React.FC<LivroCardProps> = ({ livro }) => {
  return (
    <Card className='h-[50%] w-[15%] flex flex-col items-center gap-3 p-2'>
      <img className=' object-scale-down h-[50%] rounded-lg' src='https://m.media-amazon.com/images/I/51VXYaKO-sL._SY445_SX342_.jpg' />
      <div>
        <h1>{livro.titulo}</h1>
        <p>{livro.autor}</p>
        <p>{livro.genero}</p>
      </div>
    </Card>
  )
}

export default LivroCard
