import React from "react";
import { Drawer} from "@mui/material";

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
    </Drawer>
  );
};

export default SideBar;
