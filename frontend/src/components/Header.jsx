import Switch from '@mui/material/Switch';
import { styled, alpha } from '@mui/material/styles';
import {grey, blueGrey} from '@mui/material/colors';
import { useState, useEffect } from 'react';
import linkedinBlack from '../assets/InBug-Black.png';


const BGSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: blueGrey[500],
      '&:hover':{
        backgroundColor: alpha(blueGrey[500], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: blueGrey[500],
    },
}));

const GSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: grey[500],
      '&:hover':{
        backgroundColor: alpha(grey[500], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: grey[500],
    },
}));

function Header(){

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    
        const [checked, setChecked] = useState(false);
    
        const switchTheme = () => {
            setChecked(!checked);
        }
    
        useEffect(() => {
            //something for theme switch
            console.log("Theme switch")
        }, [checked])

    return(
<   header id = "header">
        <div id = "socials">
            <img src = {linkedinBlack} alt = "logo" className = "logo"/>
        </div>
        <div id = "name-title">
            <h1>Christopher Silva</h1>
        </div>
        <div id = "theme-mode">
            <GSwitch {...label} checked = {checked} onChange={switchTheme}/>
        </div>
    </header>
    );
}

export default Header;