import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import theme from "../theme/theme"
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/Job/JobCard";
import { Button, ThemeProvider, Grid, CircularProgress } from "@material-ui/core";
import NewJobModal from "../components/Job/NewJobModal";
import { firestore, app } from "../components/firebase/config";
import ViewJobModal from "../components/Job/ViewJobModal";
import Navbar from "../components/Navbar";
import {Close as CloseIcon } from '@material-ui/icons'
import JobForm from "../components/Job/JobForm";

export default props => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);
  const [newJobModal, setNewJobModal] = useState(false);
  const [viewJob, setViewJob] = useState({});

  const fetchJobs = async() =>{
    setCustomSearch(false);
    setLoading(true);
    const req = await firestore.collection("jobs").orderBy("postedOn", "desc").get();
    const tempJobs = req.docs.map((job) => ({...job.data(), id: job.id, postedOn: job.data().postedOn, }));
    setJobs(tempJobs)
    setLoading(false);
  };

  const postJob = async (jobDetails) => {
    const timestamp = Date.now()
     await firestore.collection("jobs").add({
       ...jobDetails,
       postedOn: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long',day: '2-digit'}).format(timestamp)
     });
     fetchJobs();
   };
   useEffect(() => {
    fetchJobs();
  }, []);
  const fetchJobsCustom = async(jobSearch) =>{
    setLoading(true);
    setCustomSearch(true);
    const req = await firestore
    .collection("jobs")
    .orderBy("title", "desc")
    .where("location", "==", jobSearch.location)
    .where("type", "==", jobSearch.type)
    .get();
    const tempJobs = req.docs.map((job) => ({...job.data(), id: job.id, postedOn: job.data().postedOn, }));
    setJobs(tempJobs)
    setLoading(false);
  };

    return(
        
      <ThemeProvider theme={theme}>
    <Navbar openNewJobModal={() => setNewJobModal(true)} />

    
    <JobForm closeModal={() => setNewJobModal(false)} newJobModal={newJobModal} postJob={postJob}/> 
    <ViewJobModal  job={viewJob} closeModal={() => setViewJob({})}/>
   
  </ThemeProvider>
  );
};