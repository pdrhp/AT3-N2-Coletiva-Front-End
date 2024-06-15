import React from 'react'
import { Card } from './ui/card'
import Livro from '@/interfaces/Livro'
import { Button } from './ui/button'
import { Pencil, X } from 'lucide-react'

type LivroCardProps = {
  livro: Livro;
  handleEdit: () => void;
}


const LivroCard: React.FC<LivroCardProps> = ({ livro, handleEdit }) => {
  return (
    <Card className='h-[50%] w-[15%] flex flex-col items-center gap-3 p-2'>
      <img className=' object-scale-down h-[50%] rounded-lg' src='https://m.media-amazon.com/images/I/51VXYaKO-sL._SY445_SX342_.jpg' />
      <div>
        <h1>{livro.titulo}</h1>
        <p>{livro.autor}</p>
        <p>{livro.genero}</p>
      </div>
      <div className='flex gap-3 justify-center'>
        <Button onClick={() => handleEdit()} variant={"outline"} className="h-12 w-12">
          <Pencil className="h-6 w-6" />
        </Button>
        <Button variant={"outline"} className="h-12 w-12">
          <X className="h-6 w-6" />
        </Button>
      </div>
    </Card>
  )
}

export default LivroCard
