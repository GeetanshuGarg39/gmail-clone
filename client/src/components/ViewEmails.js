import React from 'react'
import { useOutletContext } from 'react-router-dom'

const ViewEmails = () => {
    const {openDrawer} = useOutletContext();
  return (
    <div style={openDrawer ? {marginLeft:'250px', width:'100%'}:{width:'100%'}}>
      View Emails
    </div>
  )
}

export default ViewEmails
