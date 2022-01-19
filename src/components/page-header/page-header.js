import React from 'react';
import { Paper, Card, Typography } from "@mui/material";

import './styles/page-header.css';

function PageHeader({ title, subTitle, icon }) {
    return (
        <Paper elevation={0} square className='page-paper'>
            <div className='page-header'>
                <Card className='page-icon'>
                    {icon}
                </Card>
                <div className='text'>
                    <Typography
                        variant="h6"
                        component="div" className='title'>
                        {title}</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div" className='subtitle'>
                        {subTitle}</Typography>
                </div>
            </div>
        </Paper>
    )
}

export default PageHeader;
