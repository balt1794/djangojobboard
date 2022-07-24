import React from 'react';
import {Box, Grid, Typography, makeStyles, Button, Item, Card, CardContent} from "@material-ui/core"
import { useState } from "react";
import SignUp from '../SignUp';
import Typical from "react-typical";



const useStyles = makeStyles({
    wrapper2:{
        backgroundColor: "#fff",
        display: 'flex',
        boxShadow: "0px 1px 5px rgba(0, 0, 0.1)",
        borderRadius: "5px",
        justifyContent: "center",
        marginLeft: "25%" ,
        width:"50%",
        "& > *":{
            flex: 1,
            height: "45px",
            margin: "8px",
        },
    },
    heroBox: {
        width: '100%',
        display: 'flex',
        minHeight: '200px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#D5F591",
        
      
      },
      gridContainer: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '1300px',
        padding: '40px',
      },
      title: {
        paddingBottom: '20px',
      },
      subtitle: {
        
        paddingBottom: '5px',
      },
      largeImage: {
        
      },
});

export default props => 
{
    const classes = useStyles();
    return(


       <>
      <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
             <Typical
            steps={[
              "Hire Jr Devs",
              4000
            ]}
            loop={Infinity}
            wrapper="b"
          />
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            Start your developer journey with us and find opportunities at top companies who are willing to bet on you
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} className={classes.largeImage}>
        
        </Grid>
      </Grid>
    
    </Box>

</>
        
  
      
    )
}