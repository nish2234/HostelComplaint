import React from 'react'
import Navbar from '../Component/Navbar'
import { Container } from '@mui/material'
import Selector from '../Component/Selector'

function Home() {
  return (
   <>
    <Navbar/>
    <Container>
    <Container sx={{marginTop : "20px" , display:"flex" , justifyContent:"center"}}>
         <Selector/>
    </Container>
    </Container>
   
   </>
       
      
   
  )
}

export default Home
