import Livro from '@/interfaces/Livro'
import { createLivro, updateLivro } from '@/services/livroService'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import FormInput from './FormInput'
import { Button } from './ui/button'
import { Form } from './ui/form'

const FormFilmeSchema = z.object({
    id: z.number(),
    titulo: z.string().min(1, 'O titulo deve ter pelo menos 1 caracter'),
    genero: z.string().min(1, 'O genero deve ter pelo menos 1 caracter'),
    autor: z.string().min(1, 'O autor deve ter pelo menos 1 caracter'),
    quantidade: z.number().transform(value => Number(value)),
    capa: z.string().transform(value => {
        if(value === ''){
            return undefined
        }

        return value
    })
})

type FormFilmeProps = {
    livro?: Livro,
    setOpen: (open: boolean) => void;
}

export type FormLivroSchema = z.infer<typeof FormFilmeSchema>;


const FormLivro: React.FC<FormFilmeProps> = ({livro, setOpen}) => {

    const formFilme = useForm<FormLivroSchema>({
        resolver: zodResolver(FormFilmeSchema),
        defaultValues: {
            id: livro?.id || 0,
            titulo: livro?.titulo || '',
            genero: livro?.genero || '',
            autor: livro?.autor || '',
            quantidade: livro?.quantidade || 0,
            capa: livro?.capa || ''
        }
    })

    const queryClient = useQueryClient();

    const {mutate, isPending, isSuccess, isError} = useMutation({
        mutationFn: livro?.id ? updateLivro: createLivro,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['livros-data']
            })
            setOpen(false)
            toast.success(livro?.id ? 'Livro atualizado com sucesso' : 'Livro criado com sucesso', {
                richColors: true,
                style: {
                    backgroundColor: '#215e31',
                }
            })
        },
        onError: (error: AxiosError) => {
            const errorResponse = JSON.parse(error.request.response)
            errorResponse.message.map((teste: {message: string}) => {
                toast.error(teste.message, {
                    richColors: true,
                    style: {
                        backgroundColor: '#FF0000',
                    }
                })
            })
        }
    })

    useEffect(() => {

    }, [isSuccess, isError])
    
    const formSubmit = (data: FormLivroSchema) => {
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
                    <Button>{isPending ? (
                        <Loader2 className=' animate-spin'></Loader2>
                    ) : (
                        'Salvar'
                    ) }</Button>
                    <Button>Cancelar</Button>
                </div>
            </form>
        </Form>
    )
}

export default FormLivro