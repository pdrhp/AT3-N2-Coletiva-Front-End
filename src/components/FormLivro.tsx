import Livro from '@/interfaces/Livro'
import { createLivro, updateLivro } from '@/services/livroService'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import FormInput from './FormInput'
import { Button } from './ui/button'
import { Form } from './ui/form'

const FormFilmeSchema = z.object({
    id: z.number(),
    titulo: z.string(),
    genero: z.string(),
    autor: z.string(),
    quantidade: z.number(),
    capa: z.string()
})

type FormFilmeProps = {
    livro?: Livro
}

type FormFilmeSchema = z.infer<typeof FormFilmeSchema>;


const FormLivro: React.FC<FormFilmeProps> = ({livro}) => {

    const formFilme = useForm<FormFilmeSchema>({
        resolver: zodResolver(FormFilmeSchema),
        defaultValues: {
            id: livro?.id || 0,
            titulo: livro?.titulo || '',
            genero: livro?.genero || '',
            autor: livro?.autor || '',
            quantidade: livro?.quantidade || 0,
            capa: ''
        }
    })

    const {mutate, isPending, isSuccess, isError} = useMutation({
        mutationFn: livro?.id ? createLivro: updateLivro
    })

    useEffect(() => {

    }, [isSuccess, isError])
    
    const formSubmit = (data: FormFilmeSchema) => {
        mutate(data as Livro)
    }

    const { control, handleSubmit } = formFilme;

    return (
        <Form {...formFilme}>
            <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-8">
                <div className='flex flex-col gap-3'>
                    <FormInput control={control} name='titulo' label='Titulo' inputType='text' />
                    <FormInput control={control} name='genero' label='Genero' inputType='text' />
                    <FormInput control={control} name='autor' label='Autor' inputType='text' />
                    <FormInput control={control} name='quantidade' label='Quantidade' inputType='number' />
                    <FormInput control={control} name='capa' label='Capa (URL)' inputType='text' />
                </div>
                <div className='flex justify-end gap-4'>
                    <Button>Salvar</Button>
                    <Button>Cancelar</Button>
                </div>

            </form>
        </Form>
    )
}

export default FormLivro