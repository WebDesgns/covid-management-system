import React from 'react'
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        minWidth: 0,
        margin: "8px !important"
    },
    secondary: {
        backgroundColor: '#f1c0c0 !important',
        '& .MuiButton-label': {
            color: 'black !important',
        }
    },
    primary: {
        backgroundColor: '#c5d687  !important',
        '& .MuiButton-label': {
            color: 'black !important',
        }
    },
})

export default function ActionButton(props) {

    const { color, children, onClick } = props;
    const classes = useStyles();

    return (
        <Button
            className={`${classes.root} ${classes[color]}`}
            onClick={onClick}>
            {children}
        </Button>
    )
}
