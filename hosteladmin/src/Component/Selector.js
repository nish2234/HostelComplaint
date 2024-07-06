import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { loadAllCategory } from '../Services/CategoryService';
import { loadAllBlocks } from '../Services/BlockService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Selector() {

        const [category , setcategory] = useState([]);
        const [block , setblock] = useState([]);

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


    const [categoryId , setCategoryId] = useState('');
    const [blockId , setblockId] = useState('');
    
    const navigate = useNavigate();
    const handleSubmit = ()=>{
        //    console.log(categoryId);
        //    console.log(blockId);
        if(categoryId === '' || blockId === ''){
          toast.warning("Fill both credentials")
          return;
        }
        navigate(`/category/${categoryId}/block/${blockId}`);
    }
   


  return (
    <Box width="100%"  sx={{backgroundColor:"rgba(140, 203, 192, 0.87)" , height:"30vh" ,  padding: "15px"}}>
        <Stack spacing={2}>
        <Typography variant="h5" gutterBottom>
            Select Category And Block
        </Typography>
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

export default Selector
