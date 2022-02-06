import React from "react";

import { Grid, Paper } from "@mui/material";
import { Form } from "../../components/use-form/use-form";
import WcIcon from '@mui/icons-material/Wc';

import './styles/user-detail-form.scss';

function UserDeatilForm({ item }) {
    
    return (
    <>
        <Form overflow-y='hidden'>
            <Grid container border='none' >
                <Grid item lg={12} xs={12}>
                    <div className="head">
                        <h1>{item.fullName}</h1>
                        <div className="head-details">
                            <Paper className="detail-card" elevation={0} square>
                                <p id='border'>21</p>
                                <div className="card-date">
                                    <p id='dob'>Date Of Birth</p>
                                    <p id='date'>March 7, 2000</p>
                                </div>
                            </Paper>
                            <Paper className="detail-card"elevation={0} square>
                                <WcIcon fontSize='large'/>{item?.gender}
                            </Paper>
                        </div>
                    </div>
                    <Grid container className="row1">
                        <Grid item lg={6} md={6} xs={12} paddingRight={2}>
                            <h3 id='heading'>Address</h3>
                            <p id='sub-heading'>606-3727 Ullamcorper. Street Roseville NH 11523 (786) 713-8616</p>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <h3 id='heading'>Vaccinated</h3>
                            <p id='sub-heading'>{item?.Vaccinated === true ? "Yes" : "No"}</p>
                        </Grid>
                    </Grid>
                    <Grid container className="row1">
                        <Grid item lg={4} md={4} xs={12} paddingRight={2}>
                            <h3 id='heading'>Society</h3>
                            <p id='sub-heading'>{item?.SocietyName}</p>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12}>
                            <h3 id='heading'>City</h3>
                            <p id='sub-heading'>{item?.city}</p>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12}>
                            <h3 id='heading'>Covid</h3>
                            <p id='sub-heading'>No</p>
                        </Grid>
                    </Grid>
                    <br/>
                    <h2>IN CASE OF EMERGENCY</h2>
                    <Grid container className="row1">
                        <Grid item lg={6} md={6} xs={12} paddingRight={2}>
                            <h3 id='heading'>YOUR GUARDIAN</h3>
                            <p id='sub-heading'>Prasun Bhunia</p>
                            <h3 id='heading'>ADDRESS</h3>
                            <p id='sub-heading'>711-2880 Nulla St.Mankato Mississippi 96522 (257) 563-7401</p>
                            <h3 id='heading'>Mobile No</h3>
                            <p id='sub-heading'>{item?.mobile}</p>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <h3 id='heading'>YOUR PROVIDER</h3>
                            <p>Ashby Medical Center<br/></p>
                            <p><br/></p>
                            <h3 id='heading'>ADDRESS</h3>
                            <p id='sub-heading'>5587 Nunc. Avenue Erie Rhode Island 24975 (660) 663-4518</p>
                        </Grid>
                    </Grid>
                    <br/>
                    <h2>ALLERGIES</h2>
                    <Grid container className="row1">
                        <Grid item lg={6} md={6} xs={12} paddingRight={2}>
                            <h3 id='heading'>PENICILLIN</h3>
                            <p id='sub-heading'><font size="3">Reaction:</font> Hives</p>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <h3 id='heading'>Codeine</h3>
                            <p id='sub-heading'><font size="3">Reaction:</font> Shortness of breath</p>
                        </Grid>
                    </Grid>
                    <br/>
                    <h2>MEDICAL HISTORY</h2>
                    <Grid container className="row1">
                        <Grid item lg={6} md={6} xs={12} paddingRight={2}>
                            <h3 id='heading'>PENICILLIN</h3>
                            <p id='sub-heading'><font size="3">Reaction:</font> Hives</p>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <h3 id='heading'>Codeine</h3>
                            <p id='sub-heading'><font size="3">Reaction:</font> Shortness of breath</p>
                        </Grid>
                    </Grid>
                    <br/>
                    <h2>MEDICAL INSURANCE</h2>
                    <Grid container className="row1">
                        <Grid item lg={6} md={6} xs={12} paddingRight={2}>
                            <h3 id='heading'>Name of Insurance Company</h3>
                            <p id='sub-heading'>Policybazaar Medical Insurance</p>
                            <h3 id='heading'>Policy Number</h3>
                            <p id='sub-heading'>48008</p>
                            <h3 id='heading'>Policy Type:</h3>
                            <p id='sub-heading'></p>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <h3 id='heading'>ADDRESS</h3>
                            <p id='sub-heading'>5587 Nunc. Avenue Erie Rhode Island 24975 (660) 663-4518</p>
                            <h3 id='heading'>Expiry Date:</h3>
                            <p id='sub-heading'>6/2/2022</p>
                            <h3 id='heading'>Policy Limit:</h3>
                            <p id='sub-heading'></p>
                        </Grid>
                    </Grid>
                    <h2>LIST ANY MEDICATION TAKEN REGULARLY:</h2>
                    <Grid container className="row1">
                        <Grid item lg={6} md={6} xs={12} paddingRight={2}>
                            <h3 id='heading'>Policy Type:</h3>
                            <p id='sub-heading'></p>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <h3 id='heading'>ADDRESS</h3>
                            <p id='sub-heading'>5587 Nunc. Avenue Erie Rhode Island 24975 (660) 663-4518</p>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Form>
    </>
    );
}

export default UserDeatilForm;
