import React from 'react'
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Control, Controller, FieldValue, FieldValues, Path } from 'react-hook-form';


interface FormfieldProps<T extends FieldValues> {
  control : Control<T>,
  name: Path<T>,
  label: string,
  placeholder?: string,
  type?: 'text' |'email' |'password' |'file'
}


const FormField = ({name , control , label , placeholder , type ='text'} : FormfieldProps<T>) => (
    <Controller name={name}
    control={control}
    render={({ field }) => (
        <FormItem>
        <FormLabel className='label'>{label}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} className='input' type={type} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField