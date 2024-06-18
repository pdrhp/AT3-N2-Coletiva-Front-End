import Livro from '@/interfaces/Livro'
import React from 'react'
import FormLivro from './FormLivro'
import { Dialog, DialogContent } from './ui/dialog'


type EditFilmeDialogProps = {
    open: boolean
    setOpen: (open: boolean) => void;
    actualLivro: Livro | undefined;
}

const LivroFormDialog: React.FC<EditFilmeDialogProps> = ({ open, setOpen, actualLivro }) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className='w-[50%] h-[70%]'>
                <FormLivro setOpen={setOpen} livro={actualLivro}/>
            </DialogContent>
        </Dialog>
    )
}

export default LivroFormDialog