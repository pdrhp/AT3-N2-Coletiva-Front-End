import React from 'react'
import { Form, FormField } from './ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

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

    return (
        <Form {...formFilme}>
            <form className="space-y-8">

            </form>
        </Form>
    )
}

export default FormFilme