import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';


const useStyles = makeStyles({
    button: {
        margin: '4px !important',
        textTransform: 'none',
    },
    dialog: {
        padding: "16px",
        position: 'absolute',
        top: "40px",
    },
    dialogTitle: {
        textAlign: 'center'
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogAction: {
        justifyContent: 'center !important'
    },
    titleIcon: {
        backgroundColor: 'lightpink',
        color: 'pink',
        '&:hover': {
            backgroundColor: 'lightgoldenrodyellow',
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem',
        }
    }
})

export default function ConfirmDialog(props) {

    const { confirmDialog, setConfirmDialog } = props;
    const classes = useStyles()

    return (
        <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <QuestionMarkOutlinedIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Button className={classes.button} variant='contained' color="error" onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}>No</Button>
                <Button className={classes.button} variant='contained' color="secondary" onClick={confirmDialog?.onConfirm} >Yes</Button>
            </DialogActions>
        </Dialog>
    )
}
