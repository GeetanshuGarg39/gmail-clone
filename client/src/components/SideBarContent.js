import React, { useState } from "react";
import {Box,Button,styled,List,ListItemButton,ListItemIcon,ListItemText} from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import { SIDEBAR_DATA } from "../config/sidebar.config";
import {useParams,NavLink} from 'react-router-dom';
import ComposeMail from "./ComposeMail";
import {routes} from '../routes/routes'

const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  borderRadius: 15,
  padding: '14px 18px',
  textTransform: "none",
  boxShadow: "none",
  fontWeight: 500,
  fontSize: 14,
  ":hover": {
    background: "#c2e7ff",
  },
});

const Container = styled(Box)({
  padding: 8,
  fontWeight: 500,
  '& > ul > a':{
    textDecoration:'none',
    color:'inherit'
  }
});

const SideBarContent = () => {

  const [openDialog,setOpenDialog] = useState(false);
  const {type} = useParams();

  return (
    <Container>
      <ComposeButton variant="contained" startIcon={<CreateOutlined />} onClick={() => setOpenDialog(true)}>
        Compose
      </ComposeButton>

      <List>
        {SIDEBAR_DATA.map((data) => (
          <NavLink key = {data.name} to={`${routes.emails.path}/${data.name}`}>
          <ListItemButton  style={type === data.name.toLowerCase() ? {
            borderRadius:' 0 2rem 2rem 0',
            background:'#d3e3fd'
            }:{}}>
            <ListItemIcon>
              <data.icon color="action" />
            </ListItemIcon>
            <ListItemText primary={data.title} />
          </ListItemButton>
          </NavLink>
        ))}
      </List>
      <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Container>
  );
};

export default SideBarContent;
