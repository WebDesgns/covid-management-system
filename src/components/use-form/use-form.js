import React, { useState } from 'react';
import moment from 'moment';
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

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })
    }
    const handleChange = e => {
        const { name, value, checked } = e.target

        if (checked === true) {
            setValues((old) => ({
                ...values,
                [name]: [...old[name], value]
            }))
        }else{
            setValues({
                ...values,
                [name] : values[name].filter(item => item !== value)
            })
        }
    }
    const handleDateChange1 = (e) => {
        setValues({
            ...values,
            dob: moment(e).format('MMMM D, YYYY')
        })
    }
    const handleDateChange2 = (e) => {
        setValues({
            ...values,
            policyExpiryDate: moment(e).format('MMMM D, YYYY')
        })
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
        handleChange,
        handleDateChange1,
        handleDateChange2,
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

