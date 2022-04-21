import React from "react";

import { Grid, Paper } from "@mui/material";
import WcIcon from '@mui/icons-material/Wc';


import '../assets/styles/user-detail-form.scss';

function UserDeatilForm({ item }) {

    return (
        <>
            <Grid container border='none'>
                <Grid item lg={12} xs={12}>
                    <div className="head">
                        <h1>{item?.fullName}</h1>
                        <div className="head-details">
                            <Paper className="detail-card" elevation={0} square>
                                <p id='border'>{item?.age}</p>
                                <div className="card-date">
                                    <p id='dob'>Date Of Birth</p>
                                    <p id='date'>{item?.dob}</p>
                                </div>
                            </Paper>
                            <Paper className="detail-card" elevation={0} square>
                                <WcIcon fontSize='large' />{item?.gender}
                            </Paper>
                        </div>
                    </div>
                    <Grid container className="row1">
                        <Grid item lg={6} md={6} xs={12} paddingRight={2}>
                            <h3 id='heading'>Address</h3>
                            <p id='sub-heading'>{item?.address}</p>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <h3 id='heading'>Vaccinated</h3>
                            <p id='sub-heading'>{item?.vaccinated}</p>
                        </Grid>
                    </Grid>
                    <Grid container className="row1">
                        <Grid item lg={4} md={4} xs={12} paddingRight={2}>
                            <h3 id='heading'>Society</h3>
                            <p id='sub-heading'>{item?.societyName}</p>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12}>
                            <h3 id='heading'>City</h3>
                            <p id='sub-heading'>{item?.city}</p>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12}>
                            <h3 id='heading'>Covid</h3>
                            <p id='sub-heading'>{item?.covid}</p>
                        </Grid>
                    </Grid>
                    <br />
                    <h2>IN CASE OF EMERGENCY</h2>
                    <Grid container className="row1">
                        <Grid item lg={6} md={6} xs={12} paddingRight={2}>
                            <h3 id='heading'>YOUR GUARDIAN</h3>
                            <p id='sub-heading'>{item?.guardianName}</p>
                            <h3 id='heading'>ADDRESS</h3>
                            <p id='sub-heading'>{item?.guardianAddress}</p>
                            <h3 id='heading'>Mobile No</h3>
                            <p id='sub-heading'>{item?.guardianNo}</p>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <h3 id='heading'>YOUR PROVIDER</h3>
                            <p>{item?.medicalCareProvider}<br /></p>
                            <p><br /></p>
                            <h3 id='heading'>ADDRESS</h3>
                            <p id='sub-heading'>{item?.medicalCareProviderAdress}</p>
                        </Grid>
                    </Grid>
                    <br />
                    <h2>ALLERGIES</h2>
                    <Grid container className="row1">
                        {
                            item?.allergies.map((item) => (
                                <Grid key={Math.random()} item lg={6} md={6} xs={12} paddingRight={2}>
                                    <h3 id='heading'>ALLERGIES</h3>
                                    <p id='sub-heading'>{item}</p>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <br />
                    <h2>MEDICAL HISTORY</h2>
                    <Grid container className="row1">
                        {
                            item?.diseases.map(item => (
                                <Grid key={Math.random()} item lg={6} md={6} xs={12} paddingRight={2}>
                                    <h3 id='heading'>ALLERGIES</h3>
                                    <p id='sub-heading'>{item}</p>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid container className="row1">
                        {
                            item?.symptoms.map(item => (
                                <Grid key={Math.random()} item lg={6} md={6} xs={12} paddingRight={2}>
                                    <h3 id='heading'>SYMPTOMS</h3>
                                    <p id='sub-heading'>{item}</p>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <br />
                    <h2>MEDICAL INSURANCE</h2>
                    <Grid container className="row1">
                        <Grid item lg={6} md={6} xs={12} paddingRight={2}>
                            <h3 id='heading'>Name of Insurance Company</h3>
                            <p id='sub-heading'>{item?.insuranceCompany}</p>
                            <h3 id='heading'>Policy Number</h3>
                            <p id='sub-heading'>{item?.policyNo}</p>
                            <h3 id='heading'>Policy Type:</h3>
                            <p id='sub-heading'></p>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <h3 id='heading'>ADDRESS</h3>
                            <p id='sub-heading'>{item?.insuranceCompanyAddress}</p>
                            <h3 id='heading'>Expiry Date:</h3>
                            <p id='sub-heading'>{item?.policyExpiryDate}</p>
                            <h3 id='heading'>Policy Limit:</h3>
                            <p id='sub-heading'></p>
                        </Grid>
                    </Grid>
                    <h2>LIST ANY MEDICATION TAKEN REGULARLY:</h2>
                    {
                        item?.medicines.map(item => (
                            <Grid key={Math.random()} item lg={6} md={6} xs={12} paddingRight={2}>
                                <h3 id='heading'>Medicines</h3>
                                <p id='sub-heading'>{item}</p>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </>
    );
}

export default UserDeatilForm;
