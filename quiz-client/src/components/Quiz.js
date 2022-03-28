import React, { useEffect, useState } from 'react'
import { createAPIEndpoint, ENDPOINTS } from '../api';
import { Card, CardContent, CardMedia, CardHeader, List, ListItemButton, Typography, Box, LinearProgress } from '@mui/material'

export default function Quiz() {

  
  const [ qns, setQns ] = useState([]);
  const [qnIndex, setQnIndex] = useState(0);

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.question)
      .fetch()
      .then(res => {
          setQns(res.data);
      })
      .catch(err => {console.log("Error: " + err);})
  }, [])

  return (
    qns.length != 0
      ? <Card>
          <CardContent>
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
