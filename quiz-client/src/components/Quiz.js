import React, { useEffect, useState } from 'react'
import { createAPIEndpoint, ENDPOINTS } from '../api';
import { Card, CardContent, CardMedia, CardHeader, List, ListItemButton, Typography, Box, LinearProgress } from '@mui/material'

export default function Quiz() {

  
  const [ qns, setQns ] = useState([]);
  const [qnIndex, setQnIndex] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  // For reference only
  let timer;

  // Every 1000ms the callback function will be invoked
  const startTimer = () => {
    setInterval(()=> {
      // It is easier to pass timeTaken + 1, but setTimeTaken function is async,
      // meaning the previuos operation might be not completed
      timer = setTimeTaken(prev => prev + 1 ); // prev is for previous value
    }, [1000])
  }

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.question)
      .fetch()
      .then(res => {
          setQns(res.data);
          startTimer()
      })
      .catch(err => {console.log("Error: " + err);})
      // Stop the timer 
      return () => { clearInterval(timer)}
  }, [])

  return (
    qns.length != 0
      ? <Card 
        sx={{maxWidth: 640, mx:'auto', mt:5}}>
          <CardContent>
            <CardHeader title={'Question ' + (qnIndex + 1) + ' of ' + qns.length}></CardHeader>
            <Typography variant="h6">
              {qns[qnIndex].qnInWords}
            </Typography>
            <List>
                {qns[qnIndex].options.map((item, index) => 
                  <ListItemButton key={index} disableRipple>
                    <div>
                      {/* Get the ASCII code of letter A and increment it by the index of 
                        questions array,fetched from server */}
                      <b>{String.fromCharCode(65 + index)+ ". "} </b> {item}
                    </div>
                  </ListItemButton>
                )}
              
            </List>
          </CardContent>
      </Card>
      : null
  )

}
