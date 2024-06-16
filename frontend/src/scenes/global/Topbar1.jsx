import { IconButton, useTheme } from "@mui/material";
import { useContext ,useState} from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import logo from './Mask group1.png'
import "./logo.css";
import { Link } from "react-router-dom";


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const menu=["+91-6237615438"];
  const[open,setopen]=useState(false);
  return (
    <div className='nav' >
      <div >
      <img src={logo} alt="Logo" className='logo' />
      </div>
      {/* <div display="flex"> */}
      <div className="subnav">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <div className="links">About Us</div>
        <div className="links"  onClick={()=>setopen(!open)}>Contact Us</div>
        {open &&(
                <div className='click'>
                    
                            {menu.map((item) => (<div  className='listitem' onClick={()=>setopen(false)} key={item}>{item}</div>)
                        )}
                    
                </div>)}
    
        <div className="links">Home</div>
        <div className="links">Login</div>
      </div>
    </div>
  );
};

export default Topbar;
