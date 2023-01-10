import { CardContent, Grid, TextField } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import './ContactForm.css'; 

function ContactForm() {
    return(
        <div className="ContactForm">
            <div className="content-container">
                <div className="content-stuff">
                    <Card>
                        <CardContent>
                                <Grid container justifyContent="center" alignItems="center" spacing={4} >
                                    <Grid xs={6} sm={6} item>
                                        <h1>First Name</h1>
                                        <TextField label="First Name" placeholder="Please Enter First name" variant="outlined" fullWidth required/>                                  
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="center" alignItems="center"spacing={3}>
                                    <Grid xs={6} sm={6} item>

                                        <h1>Last Name</h1>
                                        <TextField label="First Name" placeholder="Please Enter First name" variant="outlined" fullWidth required/>                                  
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="center" alignItems="center" spacing={3}>
                                    <Grid xs={6} sm={6} item>
                                        <h1>Email Adress</h1>
                                        <TextField type={"email"} label="Email" placeholder="Please Enter Email" variant="outlined" fullWidth required/>                                  
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid xs={32} item>
                                        <h1>Message</h1>
                                        <TextField label="Message" multiline rows={5} placeholder="Please Enter Message" variant="outlined" fullWidth required/>                                  
                                    </Grid>
                                </Grid>





                        </CardContent>


                    </Card>


                </div>



            </div>




        </div>
    );
}
export default ContactForm;