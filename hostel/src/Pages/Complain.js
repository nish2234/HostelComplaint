import React from 'react'
import Navbar from '../Components/Navbar'
import Forms from '../Components/Forms'
import { Container } from '@mui/material'

function Complain() {
  return (
    <div>
      <Navbar/>
      <Container sx={{marginTop : "20px" , display:"flex" , justifyContent:"center" }}>
         <Forms/>
    </Container>
    </div>
  )
}

export default Complain
