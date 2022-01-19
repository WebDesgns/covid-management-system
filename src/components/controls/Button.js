import React from 'react';
import { Button as MuiButton } from "@mui/material";
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles({
    root: {
        margin: '4px',
        textTransform: 'none'
    }
});

export default function Button(props) {

    const { text, size, color, variant, onClick, ...other } = props
    const classes = useStyles();

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "large"}
            color={color || 'primary'}
            onClick={onClick}
            {...other}
            className={classes.root}>
            {text}
        </MuiButton>
    )
}
