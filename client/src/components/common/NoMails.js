import { Box, Divider, Typography, styled } from '@mui/material'
import React from 'react'

const Container = styled(Box)({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop:50,
    opacity:'0.8',
    width:'100%'
})

const NoMails = ({message}) => {
  return (
    <Container>
        <Typography>{message.heading}</Typography>
        <Typography>{message.subHeading}</Typography>
        <Divider style={{marginTop:10,width:'100%'}}/>
    </Container>
  )
}

export default NoMails
