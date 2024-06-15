import React from 'react'
import { Dialog, DialogContent } from './ui/dialog'


type EditFilmeDialogProps = {
    open: boolean
    setOpen: (open: boolean) => void
}

const EditFilmeDialog: React.FC<EditFilmeDialogProps> = ({ open, setOpen }) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className='w-[50%] h-[70%]'>

            </DialogContent>
        </Dialog>
    )
}

export default EditFilmeDialog