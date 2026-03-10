import Switch from '@mui/material/Switch';
import { styled, alpha } from '@mui/material/styles';
import {grey, blueGrey} from '@mui/material/colors';
import { useState, useEffect } from 'react';
import linkedinBlack from '../assets/InBug-Black.png';
import linkedinWhite from '../assets/InBug-White.png';

// const BGSwitch = styled(Switch)(({ theme }) => ({
//     '& .MuiSwitch-switchBase.Mui-checked': {
//       color: blueGrey[500],
//       '&:hover':{
//         backgroundColor: alpha(blueGrey[500], theme.palette.action.hoverOpacity),
//       },
//     },
//     '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
//       backgroundColor: blueGrey[500],
//     },
// }));

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

    const [linkedin, setLinkedin] = useState(linkedinBlack);


        const [theme, setTheme] = useState(() => {
            const savedTheme = localStorage.getItem('theme');
            return savedTheme === "true";
        });
        const switchTheme = () => {
            setTheme(!theme);
        }
    
        useEffect(() => {
            //something for theme switch
            console.log("Theme switch")
            if(theme){
                document.documentElement.setAttribute('date-theme', 'dark');
                setLinkedin(linkedinWhite);
            } else {
                document.documentElement.removeAttribute('date-theme');
                setLinkedin(linkedinBlack);
            }

            localStorage.setItem('theme', theme);
        }, [theme])

    return(
<   header id = "header">
        <div id = "socials">
            <a href = "https://www.linkedin.com/in/christopher-silva-4b9902325/">
            <img src = {linkedin} alt = "logo" className = "logo"/>
            </a>
        </div>
        <div id = "name-title">
            <h1>Christopher Silva</h1>
        </div>
        <div id = "theme-mode">
            <GSwitch {...label} checked = {theme} onChange={switchTheme}/>
        </div>
    </header>
    );
}

export default Header;