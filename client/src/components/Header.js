import React from 'react'
import {AppBar , Toolbar, Box,styled,InputBase,Button} from '@mui/material';
import {Menu,Search,Tune,SettingsOutlined,HelpOutlineOutlined,AppsOutlined,AccountCircleOutlined} from '@mui/icons-material';
import {gmailLogo} from '../constants/constants.js'

const StyledAppBar = styled(AppBar)({
    background: '#F5F5F5',
    boxShadow: 'none'
})

const SearchWrapper = styled(Box)({
    background:'#EAF1FB',
    marginLeft: 80,
    borderRadius:'3rem',
    minWidth:690,
    maxWidth:720,
    height:48,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'0 20px',

    '& > div':{
        width:'100%',
        padding:'0 10px'
    }
})

const IconWrapper = styled(Box)({
    width:'100%',
    display:'flex',
    justifyContent:'flex-end',
    gap:20
})

const Header = () => {
  return (
    <StyledAppBar position="static">
        <Toolbar>
            <Button sx={{padding:0,minWidth:'15px'}}><Menu color='action'/></Button>
            <img src={gmailLogo} alt = 'logo' style={{width:110, marginLeft:15}}/>
            
            <SearchWrapper>
                <Search color='action'/>
                <InputBase placeholder='Search mail'/>
                <Tune color='action'/>
            </SearchWrapper>
            <IconWrapper>
                <HelpOutlineOutlined color='action'/>
                <SettingsOutlined color='action'/>
                <AppsOutlined color='action'/>
                <AccountCircleOutlined color='action'/>
            </IconWrapper>
        </Toolbar>
    </StyledAppBar>
  )
}

export default Header
