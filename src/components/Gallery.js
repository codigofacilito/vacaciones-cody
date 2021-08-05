import React from 'react';
import AppBarNav from "./AppBar";
import Slider from './SliderGallery/Slider';
import { useStyles } from './StyleMaterialui/Home';



export default function Gallery() {
    const classes = useStyles();
    return (
        <div style={{background: '#000'}}>
            <AppBarNav
            text= {''}
            />
            <Slider/>
            <footer className={classes.footer}>
                <p className={classes.textFooter}>Vacaciones Cody</p>
                <img src='https://codigofacilito.com/assets/logo-cbf2a784ebee5d642aa7b8182df3e388d4feba0a23577eed1d2747fa05861f73.png' alt='logo-códigoFacilito' className={classes.imgLogo} onClick={()=> window.open("https://codigofacilito.com/", "_blank")}/>
                <p className={classes.textFooter} onClick={()=> window.open("https://github.com/CarlaSanchezCorrea", "_blank")}>@carlasanchezcorrea</p>
            </footer>

        </div>
    );
}
