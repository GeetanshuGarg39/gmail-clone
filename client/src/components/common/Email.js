import {  Star, StarBorder } from '@mui/icons-material'
import { Box, Typography,Checkbox,styled } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { routes } from '../../routes/routes'
import useApi from '../../hooks/useApi'
import { API_URLS } from '../../services/api.urls'

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

const Email = ({email,selectedEmails,setRefreshScreen}) => {

    const navigate = useNavigate();
    const toggleStarredServices = useApi(API_URLS.toggleStarredEmail);
    const toggleStarredMails = () => {
        toggleStarredServices.call({id:email._id,value:!email.starred})
        setRefreshScreen(prevState => !prevState);
    }

  return (
      <Wrapper>
        <Checkbox 
            size='small'
            checked={selectedEmails.includes(email._id)}
        />
        {
            email.starred ? 
            <Star fontSize='small' style={{marginRight:10 ,color:"#fcd12a"} } onClick={() => toggleStarredMails()}/>
            :
        <StarBorder fontSize='small' style={{marginRight:10}} onClick={() => toggleStarredMails()} />
        
        }

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
