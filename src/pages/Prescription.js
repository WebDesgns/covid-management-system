import React from "react";

import { Grid, Paper } from "@mui/material";
import WcIcon from '@mui/icons-material/Wc';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

import './Prescription.scss';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
function Prescription() {
    
    return(
        <>
            <Grid container spacing={1} direction="row" backgroundColor="#808080" >
                <Grid item xs={12} container>
                    <Grid item xs={8}>
                        <p id="id"><b>Patient ID</b>: PPMSY70V, <b>App ID</b>: AS3L3VV22</p>
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={2}>
                         <p id="date"><b>Date</b>: 02/10/2022</p>
                    </Grid>
                </Grid>
            </Grid> 
            <br/>
            <Grid container spacing={1} direction="row" >
                <Grid item xs={12} container>
                    <Grid item xs={2}>
                        <p id="pname"><b>John Doye</b><br/>Eye Specialist<br/><b>Nephrology</b><br/>MBBS<br/>B25, London</p>
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={8}>
                         <p id="addr"><b>Demo Hospital Limited</b><br/>House#25, 4th Floor, Mannan Plaza, Khilkhet, 
                         Dhaka-1229, Bangladesh.<br/>bdtask@gmail.com<br/>1922296392</p>
                    </Grid>
                </Grid>
            </Grid>
            <br/>
            <Grid container spacing={1} direction="row" backgroundColor="#808080" >
                <Grid item xs={12} container>
                    <Grid item xs={12}>
                        <p id="detls"><b>Patient Name</b>: Symon Pum, <b>Age</b>: 34 Years 0 Months, <b>Sex</b>: Male, <b>Weight</b>: 65, <b>BP</b>: 12, <b>Insurance Name</b>: </p>
                    </Grid>
                </Grid>
            </Grid> 
            <br/>
            <Grid container spacing={1} direction="row" >
                <Grid item xs={12} container>
                    <Grid item xs={3}>
                        <p id="cname"><b>Chief Name</b>: None<br/><b>Patient Notes</b>: None</p>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={8}>
                    <TableContainer>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Medicine Name</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Days</StyledTableCell>
            <StyledTableCell align="right">Instruction</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <TableCell>Napa</TableCell>
              <TableCell align="right">Bio</TableCell>
              <TableCell align="right">5</TableCell>
              <TableCell align="right">None</TableCell>
            </StyledTableRow>
            <StyledTableRow>
              <TableCell>Astimin</TableCell>
              <TableCell align="right">Anti</TableCell>
              <TableCell align="right">5</TableCell>
              <TableCell align="right">None</TableCell>
            </StyledTableRow>
            <StyledTableRow>
              <TableCell>Sabril</TableCell>
              <TableCell align="right">Bio</TableCell>
              <TableCell align="right">5</TableCell>
              <TableCell align="right">None</TableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
                    </Grid>
                </Grid>
            </Grid> 
            <br/>
            <Grid container spacing={1} direction="row" >
                <Grid item xs={12} container>
                    <Grid item xs={3}/>
                    <Grid item xs={1} />
                    <Grid item xs={8}>
                    <TableContainer>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Diagnosis</StyledTableCell>
            <StyledTableCell>Instructions</StyledTableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
<br/>
<br/>
<br/>
<Grid container spacing={1} direction="row" >
                <Grid item xs={12} container>
                    <Grid item xs={3}/>
                    <Grid item xs={1} />
                    <Grid item xs={8}>
                    <p id="sname" align="center">--------------------------------------------------------<br/>Signature</p>
                    </Grid>
                </Grid>
            </Grid>          

    </>
    );
}

export default Prescription;