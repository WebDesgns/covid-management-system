import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
        '& .MuiFormControl-root': {
            width: '85%',
            margin: '8px',
            border: 'none',
        },
        '& .MuiDialogContent-root': {
            border: 'none',
        }
    }
})

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
    const classes = useStyles();
    const { children, ...other } = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}

