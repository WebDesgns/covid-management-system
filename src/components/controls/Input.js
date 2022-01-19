import { TextField } from '@mui/material';
import React from 'react'


export default function Input(props) {

    const { name, label, error=null, value, onChange, ...restProps} = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...restProps}
            {...(error && {error:true,helperText:error})}
        />
    )
}
