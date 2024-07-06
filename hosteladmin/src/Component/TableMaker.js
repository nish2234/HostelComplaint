import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { deletePosts, loadAllPosts } from '../Services/GetService';
import { toast } from 'react-toastify';



function TableMaker(props) {
  const [rows , setRows] = useState([]);

   useEffect(()=>{
    loadAllPosts(props.cid , props.bid).then((data)=>{
      setRows(data);
      //console.log(data);
    }).catch((err)=>{
      console.log(err);
    })
   })

   const handleSolved = (pid)=>{
    deletePosts(pid).then((data)=>{
      
      let newcontent = rows.filter(p => pid != p.pid);
      setRows(newcontent);
      toast.success("Issue solved")
    
      }).catch((err)=>{
        console.log(err);
      })
   }
  
  return (
    <Box width="100%"  sx={{ padding: "15px"}}>
      <TableContainer sx={{backgroundColor : "rgba(140, 203, 192, 0.87)"}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell classeName ='heading'>Issue Id</TableCell>
            <TableCell align="left">Username</TableCell>
            <TableCell align="left">Registration No.</TableCell>
            <TableCell align="left">Room No.</TableCell>
            <TableCell align="left">Content</TableCell>
            <TableCell align="left">Solved</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.pid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.pid}
              </TableCell>
              <TableCell align="left">{row.username}</TableCell>
              <TableCell align="left">{row.regno}</TableCell>
              <TableCell align="left">{row.room}</TableCell>
              <TableCell align="left">{row.content}</TableCell>

              <TableCell align="left">
                <Button  variant='contained' color='error' onClick={(e)=>{handleSolved(row.pid)}} >Solved</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
      
    
    </Box>
  )
}

export default TableMaker

