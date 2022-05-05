import React from 'react'
import { Snackbar, Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
        top: "72px",
    }
})

export default function Notification(props) {

    const { notify, setNotify } = props;
    const classes = useStyles();
    let type = notify.type ? notify.type : "success"
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}>
            <Alert
                severity= {type.toString()}
                onClose={handleClose}>
                {notify.message}
            </Alert>
        </Snackbar>
    )
}
