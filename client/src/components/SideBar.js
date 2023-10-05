import React from "react";
import { Drawer} from "@mui/material";
import SideBarContent from "./SideBarContent";

const SideBar = () => {
  return (
    <Drawer
      anchor="left"
      open={true}
      hideBackdrop={true}
      variant="persistent"
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        '& .MuiDrawer-paper':{
            marginTop:'64px',
            width:250,
            background: '#F5F5F5',
            borderRight:'none'
        }
      }}
    >
      <SideBarContent />
    </Drawer>
  );
};

export default SideBar;
