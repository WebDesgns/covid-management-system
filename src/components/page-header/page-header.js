import React from 'react';
import { Paper, Card, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
        backgroundColor: 'whitesmoke !important',
        maxWidth: "1100px",
        margin: 'auto',
    },
    pageHeader: {
        padding: '40px 32px 40px 50px',
        display: 'flex',
        margin: '24px 0px',
    },
    pageIcon:{
        display: 'inline-block',
        padding: '16px',
        color: '#3c44b1',
        borderRadius: '12px',
    },
    text: {
        paddingLeft: '32px',
    },
    subtitle: {
        opacity: '0.6',
    },
})

function PageHeader({ title, subTitle, icon }) {
    const classes = useStyles();
    return (
        <Paper elevation={6} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.text}>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div" className={classes.subtitle}>
                        {subTitle}</Typography>
                </div>
            </div>
        </Paper>
    )
}

export default PageHeader;
