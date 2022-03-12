import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import React from "react";

const Email = () => {
  return (
    <div>
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography gutterBottom fontSize="25px" fontWeight="bold">
            Send Mail
          </Typography>
          <form>
            <Grid xs={12} container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  label="Email"
                  placeholder="Enter Email"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Subject"
                  placeholder="Enter subject"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  multiline
                  rows={5}
                  placeholder="type your Message"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default Email;
