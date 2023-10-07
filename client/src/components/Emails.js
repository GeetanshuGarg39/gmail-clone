import React, { useEffect, useState } from 'react';
import { useOutletContext ,useParams} from 'react-router-dom';
import { API_URLS } from '../services/api.urls';
import useApi from '../hooks/useApi';
import {Box, Checkbox, List} from '@mui/material';
import {DeleteOutline} from '@mui/icons-material'
import Email from './common/Email';

const Emails = () => {
  const [selectedEmails,setSelectedEmails] = useState([]);
  const [refreshScreen,setRefreshScreen] = useState(false);
  const {openDrawer} = useOutletContext();
  const {type} = useParams();
  const getEmailsService = useApi(API_URLS.getEmailsFromType);
  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
  
  useEffect(() => {
    getEmailsService.call({},type);
  },[type,refreshScreen])

  const selectedAllEmails = (e) => {
    if(e.target.checked){
      const emails = getEmailsService?.response?.map(email => email._id)
      setSelectedEmails(emails);
    }else{
      setSelectedEmails([]);
    }
  }

  const deleteSelectedEmails = (e) =>{
    if(type==='bin'){

    }else{
      moveEmailsToBinService.call(selectedEmails);
    }
    setRefreshScreen(prevState => !prevState);
  }

    return (
    <div style={openDrawer ? {marginLeft:'250px', width:'calc(100%-250px)'}:{width:'100%'}}>
      <Box style={{padding:"20px 10px 0 10px", display:'flex', alignItems:'center'}}>
        <Checkbox size="small" onChange={(e)=>selectedAllEmails(e)} />
        <DeleteOutline onClick={(e) => deleteSelectedEmails(e)} />
      </Box>
      <Box >
        <List>
          {
            getEmailsService?.response?.map(email => (
              <Email 
              key={email._id} 
              email={email} 
              selectedEmails = {selectedEmails}
              setRefreshScreen={setRefreshScreen}
              />
            ))
          }
        </List>
      </Box>
    </div>
  )
}

export default Emails
