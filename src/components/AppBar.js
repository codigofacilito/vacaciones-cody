import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, } from '@material-ui/core/';
import { useStyles } from './StyleMaterialui/AppBar';
import LogoCodigo from '../iconsSvgImage/LogoCodigo.png';


  export default function AppBarNav(props) {
    const { text } = props;
    const history = useHistory();
    const classes = useStyles();
    const [value, setValue] = useState(text);

    useEffect(() => {
        if(text === '') {
            setValue('Inicio')        
        }
    }, [text]);

        return (
        <React.Fragment>
            <div className={classes.root}>
            <AppBar position="static" className={classes.fontText}>
                <Toolbar className={classes.fontText}>
                <img src={LogoCodigo} className={classes.logo}  alt='logo-icon'/>
                <Typography variant="h6" className={classes.title} align="center">
                </Typography>               
                <Button className={classes.subtitle} onClick={()=>{history.push(`/${text}`)}} align="right" id='text'>{value}</Button>
                </Toolbar>
            </AppBar>
            </div>
        </React.Fragment>
    );
}