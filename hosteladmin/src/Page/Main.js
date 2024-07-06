import React from 'react'
import Navbar from '../Component/Navbar'

import { Container } from '@mui/material'
import TableMaker from '../Component/TableMaker'
import { useParams } from 'react-router-dom';

function Main() {
    const {categoryId , blockId} = useParams();
  return (
    <div>
       <Navbar/>
       <Container sx={{marginTop : "20px" , display:"flex" , justifyContent:"center"}}>
        <TableMaker cid={categoryId} bid={blockId}/>
       </Container>
    </div>
  )
}

export default Main
