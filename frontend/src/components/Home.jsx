import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import React from 'react';
import addtask from '../assets/react3.png';
import listask from '../assets/react2.png';

import '../styles/Home.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate()
    // 
    const handleCardClick=(path)=>{
        navigate(path)
    }

  return (
    <div className="background">
      <h1>Do It</h1>
      <Grid container direction="row" spacing={2} className="grid-container">
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={()=> handleCardClick('/addtask')}>
              <CardMedia
                component="img"
                height="140"
                image={addtask}
                alt="add task"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ADD NEW TASKS
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Didn't you start yet? If so, let's begin.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={()=> handleCardClick('/listask')}>
              <CardMedia
                component="img"
                height="140"
                image={listask}
                alt="task list"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  TASK LIST 
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  OH DEAR! See what all you did.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
