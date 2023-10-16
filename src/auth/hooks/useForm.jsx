import { useState } from "react"

export const useForm = ( initialValues = {} ) => {
    const [formValues, setFormValues] = useState(initialValues)

    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormValues({
            ...formValues,
             [name]: value})
    }
  return {
    formValues,
    ...formValues,
    handleChange
  } 
}
