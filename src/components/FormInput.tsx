import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'


type FormInputProps = {
    control: any;
    name: string;
    label: string;
    placeholder?: string;
    inputType?: string;
}

const FormInput: React.FC<FormInputProps> = ({ control, name, label, placeholder, inputType }) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input type={inputType} placeholder={placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default FormInput