import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { loadAllCategory } from '../Services/CategoryService';
import { loadAllBlocks } from '../Services/BlockService';
import { createIssue } from '../Services/PostService';
import { toast } from 'react-toastify';

function Forms() {
     
    //structure
    const[post , setpost] = useState({
        username : "" , 
        regno : "",
        room : "",
        content : ""

    });
    const [category , setcategory] = useState([]);
    const [block , setblock] = useState([]);
    const handlechange = (event , property)=>{
          setpost({...post , [property] : event.target.value});
    }
    // load all categories

    const loadCategories = ()=>{
      loadAllCategory().then((data)=>{
        //console.log(data);
        setcategory(data);
      }).catch((err)=>{
        console.log(err);
      })
    }
    // load all blocks
    const loadBlocks = ()=>{
      loadAllBlocks().then((data)=>{
        setblock(data);
      }).catch((err)=>{
        console.log(err);
      })
    }
    useEffect(()=>{
      loadCategories();
      loadBlocks();
    })
    
    // set Ids
    const [categoryId , setCategoryId] = useState('');
    const [blockId , setblockId] = useState('');
    const reset = ()=>{
      setpost({
        username : "" , 
        regno : "",
        room : "",
        content : ""
      })
      setCategoryId('');
      setblockId('');
    }
    //submit button
    const handleSubmit = ()=>{
         createIssue(post , categoryId , blockId).then((data)=>{
          //console.log(data);
          toast.success("Issue created successfully")
          reset();
         }).catch((err)=>{
          console.log(err);
         })
    }


   

  return (
    <Box width="100%" sx={{ padding: "15px" , backgroundColor:"rgba(140, 203, 192, 0.87)"}}>
   

      <Stack spacing={3}>
      <Typography variant="h5" gutterBottom>
        Complain Form
      </Typography>
      <TextField id="outlined-basic" label="Name" variant="filled" value={post.username} onChange={(e)=>handlechange(e , "username")}/>
      <TextField id="outlined-basic" label="Registration Number" value={post.regno} variant="filled" onChange={(e)=>handlechange(e , "regno")} />
      <TextField id="outlined-basic" label="Room Number" variant="filled" value={post.room} onChange={(e)=>handlechange(e , "room")} />
      <TextField id="outlined-basic" label="Problem description" variant="filled" value={post.content} multiline rows={4} onChange={(e)=>handlechange(e , "content")} />

      <FormControl variant='filled' fullWidth>
        <InputLabel id="demo-simple-select-label">Category of Problem</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categoryId}
            label="Category of Problem"
            onChange={(e)=>setCategoryId(e.target.value)}
        >
            {category.map((cat) => (
                    <MenuItem key={cat.cid} value={cat.cid}>
                      {cat.categoryName}
                    </MenuItem>
             ))}
        </Select>
        </FormControl>

        <FormControl variant='filled' fullWidth>
        <InputLabel id="demo-simple-select-label">Block</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={blockId}
            label="Category of Problem"
            onChange={(e)=>setblockId(e.target.value)}
        >
            {block.map((cat) => (
                    <MenuItem key={cat.bid} value={cat.bid}>
                      {cat.blockname}
                    </MenuItem>
             ))}
        </Select>
        </FormControl>

        <Button variant="contained" color='success' onClick={()=>handleSubmit()}>Submit Form</Button>

      </Stack>
    </Box>
  )
}

export default Forms
