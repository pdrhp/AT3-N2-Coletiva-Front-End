import React from 'react'
import { Form, FormField } from './ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInput from './FormInput'
import { Button } from './ui/button'

const FormFilmeSchema = z.object({
    titulo: z.string(),
    genero: z.string(),
    autor: z.string(),
    quantidade: z.number(),
    capa: z.string()
})

const FormFilme = () => {

    const formFilme = useForm({
        resolver: zodResolver(FormFilmeSchema),
        defaultValues: {
            titulo: '',
            genero: '',
            autor: '',
            quantidade: 0,
            capa: ''
        }
    })

    const { control } = formFilme;

    return (
        <Form {...formFilme}>
            <form className="flex flex-col gap-8">
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

export default FormFilme