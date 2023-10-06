import React, { useEffect } from 'react';
import { useOutletContext ,useParams} from 'react-router-dom';
import { API_URLS } from '../services/api.urls';
import useApi from '../hooks/useApi';

const Emails = () => {
  const {openDrawer} = useOutletContext();
  const {type} = useParams();
  const getEmailsService = useApi(API_URLS.getEmailsFromType);

  useEffect(() => {
    getEmailsService.call({},type)
  },[type])
  
    return (
    <div style={openDrawer ? {marginLeft:'250px', width:'100%'}:{width:'100%'}}>
      Mails
    </div>
  )
}

export default Emails
