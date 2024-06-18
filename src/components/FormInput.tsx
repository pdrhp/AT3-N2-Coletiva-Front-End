import React from 'react';
import { Control, ControllerRenderProps } from 'react-hook-form';
import { FormLivroSchema } from './FormLivro';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';


type FormInputProps = {
    control: Control<FormLivroSchema>;
    name: keyof FormLivroSchema;
    label: string;
    placeholder?: string;
    inputType?: string;
}

const FormInput: React.FC<FormInputProps> = ({ control, name, label, placeholder, inputType }) => {

    function handleChanger<TField extends keyof FormLivroSchema>(e: React.ChangeEvent<HTMLInputElement>, field: ControllerRenderProps<FormLivroSchema, TField>){
        if(inputType === "number"){
            if(e.target.value === "" ){
                field.onChange("");
                return;
            }
            field.onChange(Number(e.target.value));
            return
        }
        field.onChange(e.target.value);
    }

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input {...field} type={inputType} onChange={(e) => handleChanger(e, field)} placeholder={placeholder}  />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default FormInput