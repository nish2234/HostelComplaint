import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
function Vitabout(props) {
  return (
    <Card sx={{ width: 700 , backgroundColor:"rgba(18, 51, 46, 0.87)"}} >
    <CardMedia
      sx={{ height: 500 }}
      image={props.image}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h4" component="div" color="rgb(234, 223, 176)">
       {props.title}
      </Typography>
      <Typography variant="body1" color="rgb(229, 220, 181)">
       {props.content}
      </Typography>
    </CardContent>
 
  </Card>
  )
}

export default Vitabout
