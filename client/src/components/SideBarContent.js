import React, { useState } from "react";

import {Box,Button,styled,List,ListItemButton,ListItemIcon,ListItemText} from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";

import { SIDEBAR_DATA } from "../config/sidebar.config";

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
});

const SideBarContent = () => {

  return (
    <Container>
      <ComposeButton variant="contained" startIcon={<CreateOutlined />}>
        Compose
      </ComposeButton>

      <List>
        {SIDEBAR_DATA.map((data) => (
          <ListItemButton key={data.name} sx={{borderRadius:'2rem'}}>
            <ListItemIcon>
              <data.icon color="action" />
            </ListItemIcon>
            <ListItemText primary={data.title} />
          </ListItemButton>
        ))}
      </List>
    </Container>
  );
};

export default SideBarContent;
