
import React from 'react'
import Apartment from '../Assets/apartment.png'
import { Box, Button, Stack, Typography } from '@mui/material'
import hostelites from '../Assets/hostelites.jpg'
import { useNavigate } from 'react-router-dom'

function Landing() {
  
  const navigate = useNavigate();
  const handleSubmit = ()=>{
         navigate("/complain");
  }
  return (
    <>

        <Box  sx={{width : {xs : "70vw" , md : "30vw"} , height :"70vh"}}>
            <Stack spacing={3}>
                <Stack direction="row" spacing={1}  alignItems="center">
                  <img src={Apartment} alt="" width="80px" />
                  <Typography 
                  variant='h3'
                   sx={{
                      fontSize: {xs : "3rem" , md : "4rem" },
                      fontFamily: '"Jersey 10"',
                      fontWeight: "400",
                      fontStyle: "normal",
                      letterSpacing : "0.2rem"
                  }}>
                    VITHostels
                  </Typography>
                </Stack>

                <Stack spacing={0.3} >
                <Typography variant='h3' sx={{
                      fontSize: {xs : "4rem" , md : "5rem" },
                      fontFamily: '"Jersey 10"',
                      fontWeight: "500",
                      fontStyle: "normal",
                     
                  }}>
                    Hostel
                  </Typography>
                  <Typography variant='h3' sx={{
                      fontSize: {xs : "4rem" , md : "5rem" },
                      fontFamily: '"Jersey 10"',
                      fontWeight: "500",
                      fontStyle: "normal",
                     
                  }} 
                  className="font">
                    Complaint
                  </Typography>
                  <Typography variant='h3' sx={{
                      fontSize: {xs : "4rem" , md : "4.8rem" },
                      fontFamily: '"Jersey 10"',
                      fontWeight: "500",
                      fontStyle: "normal",
                      
                  }}>
                    Make Easy
                  </Typography>

                </Stack>

                <Button variant="contained" size='large' onClick={handleSubmit} sx={{width : "300px"}}>Complain Here</Button>
                
            </Stack>
        </Box>

        <Box  sx={{width : {xs : "70vw" , md : "30vw"}}}>
            <img className='image' src={hostelites} alt="" width="500"/>
        </Box>
    </>
  
  )
}

export default Landing
