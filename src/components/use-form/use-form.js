import React, { useState } from 'react';

import './styles/use-form.css';

export function useForm(initialFValues, validateOnChange = false, validate) {

    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    console.log(values);
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })
    }
    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }
    return {
        values,
        setValues,
        errors,
        setErrors,
        resetForm,
        handleInputChange,
    }
}

export function Form(props) {

    const { children, ...other } = props;
    return (
        <form className='use-form' autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}

