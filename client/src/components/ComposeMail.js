import React, { useState } from "react";
import {Dialog,Box,Typography,styled,InputBase,TextField,Button} from "@mui/material";
import { Close, DeleteOutline } from "@mui/icons-material";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

const dialogStyle = {
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
  margin: 0,
};

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f2f6fe",
  "& > p": {
    fontSize: 14,
    fontWeight: 500,
  },
});

const InputWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "& > div": {
    fontSize: 14,
    borderBottom: "1px solid #f5f5f5",
  },
});

const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "5px 15px",
  alignItems: "center",
});

const SendButton = styled(Button)({
  background: "#0B57D0",
  color: "#fff",
  fontWeight: 500,
  testTransform: "none",
  borderRadius: "18px",
  width: 100,
  ":hover" :{
    background:'#051094'
  }
});

const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const [data,setData] = useState({});
  const sentEmailService = useApi(API_URLS.saveSentEmail);

  const config = {
    Host: "smtp.elasticemail.com",
    Username: process.env.REACT_APP_USERNAME,
    Password: process.env.REACT_APP_PASSWORD,
    Port: 2525
  };

  const closeComposeMail = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  };

  const sendMail = (e) => {
    e.preventDefault();
    if(window.Email){
        window.Email.send({
          ...config,
          To: data.recipients,
          From: "geetanshugarg39@gmail.com",
          Subject: data.subject,
          Body: data.body,
        }).then(
            message => alert(message)
        );
    }

    const payload = {
      to:data.recipients,
      from:"geetanshugarg39@gmail.com",
      subject:data.subject,
      body:data.body,
      date: new Date(),
      attachment: "",
      name:"Geetanshu Garg",
      starred:false,
      type:'sent'
    }

    sentEmailService.call(payload);

    if(!sentEmailService.error){
      setOpenDialog(false);
      setData({});
    }else{

    }

    setOpenDialog(false);
  };

  const onValueChange = (e) => {
    setData({...data,[e.target.name]:e.target.value});
  }

  return (
    <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <Button sx={{ padding: 0, width: "auto", minWidth: 0 }}>
          <Close
            color="action"
            fontSize="small"
            onClick={(e) => closeComposeMail(e)}
          />
        </Button>
      </Header>
      <InputWrapper>
        <InputBase name = "recipients" placeholder="Recipients" onChange={(e) => onValueChange(e)} />
        <InputBase name = 'subject' placeholder="Subject" onChange={(e) => onValueChange(e)} />
      </InputWrapper>

      <TextField
      name="body"
        multiline
        rows={18}
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
        sx={{padding:'0 16px'}}
        onChange={(e) => onValueChange(e)}
      />
      <Footer>
        <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
        <Button>
          <DeleteOutline color="action" onClick={() => setOpenDialog(false)} />
        </Button>
      </Footer>
    </Dialog>
  );
};

export default ComposeMail;
