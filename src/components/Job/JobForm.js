import React from "react";
import { Box, Button, Grid, FilledInput, Select, MenuItem, Typography, makeStyles, CircularProgress } from "@material-ui/core";
import { useState } from "react";
import { Form } from 'react-bootstrap';



const useStyles = makeStyles((theme) => ({
    skillChip: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5 px",
        borderRadius: "5px",
        fontWeight: 600,
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        cursor: "pointer",

        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color:"#fff"
        }
    },
    included: {
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
    }
}));


const initState = { 
    title: "",
    type: "Full time",
    companyName: "",
    location: "Remote",
    companyUrl: "",
    country: "",
    city: "",
    state: "",
    zipcode: "",
    description: "",
    salarymin: "",
    salarymax: "",
    skills: [],
    }

export default (props) => {
    const [loading, setLoading ] = useState(false)
    const [jobDetails, setJobDetails] = useState(initState);
    const [jobs, setJobs] = useState([]);
    

    const handleChange = e => {
        e.persist();
        setJobDetails(oldState => ({
            ...oldState, [e.target.name]: e.target.value,
        }));
    };

    const addRemoveSkill = (skill) =>
     jobDetails.skills.includes(skill)
     ? setJobDetails((oldState) => ({
         ...oldState,
         skills: oldState.skills.filter((s) => s !== skill),
        }))
        : setJobDetails((oldState) => ({
            ...oldState,
            skills: oldState.skills.concat(skill),
        }));

    const handleSubmit = async () => {
        for( const field in jobDetails){
            if(typeof jobDetails[field] === "string" && !jobDetails[field])
                return;
        }
        if(!jobDetails.skills.length)
        return;
        setLoading(true);
        await props.postJob(jobDetails);
        closeModal();
    };

    const closeModal= () => {
        setJobDetails(initState)
        setLoading(false);
        props.closeModal();
    };

    const classes = useStyles();
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Go",
        "React",
        "Node",
        "Flutter",
        "Django",
        "Vue",
        "Firebase",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Docker",
        "AWS",
    ];
    
    return(
        <>
            <div className="container mt-5 mb-5 px-5 py-5">
            <Form >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name="title" value={jobDetails.title} autoComplete="off" placeholder="Job Title*" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Select onChange={handleChange} name="type" value={jobDetails.type} fullWidth disableUnderline variant = "filled">
                            <MenuItem value="Full time">Full time</MenuItem>
                            <MenuItem value="Part time">Part time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name="companyName" value={jobDetails.companyName} autoComplete="off" placeholder="Company Name*" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name="companyUrl" value={jobDetails.companyUrl} autoComplete="off" placeholder="Job URL*" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name="country" value={jobDetails.country} autoComplete="off" placeholder="Country" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name="city" value={jobDetails.city} autoComplete="off" placeholder="City" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={4}>
                        <FilledInput onChange={handleChange} name="state" value={jobDetails.state} autoComplete="off" placeholder="State" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={4}>
                        <FilledInput onChange={handleChange} name="zipcode" value={jobDetails.zipcode} autoComplete="off" placeholder="Zipcode" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={4}>
                        <Select onChange={handleChange} name="location" value={jobDetails.location} fullWidth disableUnderline variant = "filled" >
                            <MenuItem value="Remote">Remote</MenuItem>
                            <MenuItem value="In-office">In-office</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput onChange={handleChange} name="description" value={jobDetails.description} autoComplete="off" placeholder="Job Description *" disableUnderline fullWidth multiline  minRows={8}/>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography>Salary Min</Typography>
                        <Select onChange={handleChange} name="salarymin" value={jobDetails.salarymin} fullWidth disableUnderline variant = "filled" >
                            <MenuItem value="USD 10,000">USD 10,000/year</MenuItem>
                            <MenuItem value="USD 20,000">USD 20,000/year</MenuItem>
                            <MenuItem value="USD 30,000">USD 30,000/year</MenuItem>
                            <MenuItem value="USD 40,000">USD 40,000/year</MenuItem>
                            <MenuItem value="USD 50,000">USD 50,000/year</MenuItem>
                            <MenuItem value="USD 60,000">USD 60,000/year</MenuItem>
                            <MenuItem value="USD 70,000">USD 70,000/year</MenuItem>
                            <MenuItem value="USD 80,000">USD 80,000/year</MenuItem>
                            <MenuItem value="USD 90,000">USD 90,000/year</MenuItem>
                            <MenuItem value="USD 100,000">USD 100,000/year</MenuItem>
                            <MenuItem value="USD 110,000">USD 110,000/year</MenuItem>
                            <MenuItem value="USD 120,000">USD 120,000/year</MenuItem>
                            <MenuItem value="USD 130,000">USD 130,000/year</MenuItem>
                            <MenuItem value="USD 140,000">USD 140,000/year</MenuItem>
                            <MenuItem value="USD 150,000">USD 150,000/year</MenuItem>
                            <MenuItem value="USD 160,000">USD 160,000/year</MenuItem>
                            <MenuItem value="USD 170,000">USD 170,000/year</MenuItem>
                            <MenuItem value="USD 180,000">USD 180,000/year</MenuItem>
                            <MenuItem value="USD 190,000">USD 190,000/year</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography>Salary Max</Typography>
                    <Select onChange={handleChange} name="salarymax" value={jobDetails.salarymax} fullWidth disableUnderline variant = "filled" >
                            <MenuItem value="USD 10,000">USD 10,000/year</MenuItem>
                            <MenuItem value="USD 20,000">USD 20,000/year</MenuItem>
                            <MenuItem value="USD 30,000">USD 30,000/year</MenuItem>
                            <MenuItem value="USD 40,000">USD 40,000/year</MenuItem>
                            <MenuItem value="USD 50,000">USD 50,000/year</MenuItem>
                            <MenuItem value="USD 60,000">USD 60,000/year</MenuItem>
                            <MenuItem value="USD 70,000">USD 70,000/year</MenuItem>
                            <MenuItem value="USD 80,000">USD 80,000/year</MenuItem>
                            <MenuItem value="USD 90,000">USD 90,000/year</MenuItem>
                            <MenuItem value="USD 100,000">USD 100,000/year</MenuItem>
                            <MenuItem value="USD 110,000">USD 110,000/year</MenuItem>
                            <MenuItem value="USD 120,000">USD 120,000/year</MenuItem>
                            <MenuItem value="USD 130,000">USD 130,000/year</MenuItem>
                            <MenuItem value="USD 140,000">USD 140,000/year</MenuItem>
                            <MenuItem value="USD 150,000">USD 150,000/year</MenuItem>
                            <MenuItem value="USD 160,000">USD 160,000/year</MenuItem>
                            <MenuItem value="USD 170,000">USD 170,000/year</MenuItem>
                            <MenuItem value="USD 180,000">USD 180,000/year</MenuItem>
                            <MenuItem value="USD 190,000">USD 190,000/year</MenuItem>
                        </Select>
                    </Grid>
                   
                </Grid>
                <Box mt={2} mb={3}>
                    <Typography>Skills*</Typography>
                    <Grid container alignItems="center">
                        {skills.map((skill) => (
                            <Box display="flex" onClick={() => addRemoveSkill(skill)} className={`${classes.skillChip} ${jobDetails.skills.includes(skill) && classes.included}`} key={skill}>
                                {skill}
                            </Box>
                            
                        ))}
                   </Grid>
                </Box>
          
                <Box color="red" width="100%" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography>*Required Fields</Typography>
                    <Button onClick={handleSubmit}
                    variant="contained" disableElevation color="primary" disabled={loading}>
                        {loading ? ( <CircularProgress color="secondary" size={22} />
                            ) : ( 
                                "Post Job"
                            )}
                        </Button>
                </Box>
                </Form>
                </div>
              
           </>
    )
}