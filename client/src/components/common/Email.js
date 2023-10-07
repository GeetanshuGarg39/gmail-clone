import {  StarBorder } from '@mui/icons-material'
import { Box, Typography,Checkbox,styled } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { routes } from '../../routes/routes'

const Wrapper = styled(Box)({
    background:'#f2f6fc',
    padding:'0 10px 0 10px',
    height:30,
    cursor:'pointer',
    display:'flex',
    alignItems:'center',
    '& > div':{
        display:'flex',
        width:'100%',
        '& > p':{
            fontSize:14
        }
    }
})

const Indicator = styled(Typography)({
    fontSize:'12px !important',
    background:'#ddd',
    color:'#222',
    padding:'0 4px',
    borderRadius:'4px',
    marginRight:'6px'
})

const Date = styled(Typography)({
    marginLeft:'auto',
    fontSize:12,
    color:'#5f6368'
})

const Email = ({email,selectedEmails}) => {

    const navigate = useNavigate();

  return (
      <Wrapper>
        <Checkbox 
            size='small'
            checked={selectedEmails.includes(email._id)}
        />
        <StarBorder fontSize='small' style={{marginRight:10}} />
        <Box onClick={() => navigate(routes.view.path,{state:{email:email}})}>
            <Typography style={{width:200 , overflow:'hidden'}}>{email.name}</Typography>
            <Indicator>Inbox</Indicator>
            <Typography>{email.subject} {email.body && "-"}{email.body}</Typography>
            <Date>
                {(new window.Date(email.date)).getDate()}
                {(new window.Date(email.date)).toLocaleString('default',{month:'long'})}
            </Date>
        </Box>
      </Wrapper>
    
  )
}

export default Email
