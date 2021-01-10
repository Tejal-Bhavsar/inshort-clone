import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';


export default function Footer() {
    return (
        <div className="footer">
             <span className="name">
                 inshorts clone  made by -{" "}
                 <a href="https://www.linkedin.com/in/tejal-bhavsar-ba0130173/">Tejal Bhavsar</a>
             </span>
             <hr />
             <Box px={4} className="footercontainer">
                 <a href="https://github.com/Tejal-Bhavsar" ><GitHubIcon fontSize="large"  /></a>
                 <a href="https://www.linkedin.com/in/tejal-bhavsar-ba0130173/"><LinkedInIcon fontSize="large"  /></a>
             </Box>
        </div>
    )
}
