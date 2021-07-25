import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, } from '@material-ui/core/';
import { useStyles } from './StyleMaterialui/AppBar';

  export default function AppBarNav(props) {
    const { text } = props;
    const history = useHistory();
    const classes = useStyles();

        return (
        <React.Fragment>
            <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.fontText}>
                <Typography variant="h6" className={classes.title} align="center">
                    Vacaciones de Cody
                </Typography>
                <Typography color="inherit" className={classes.subtitle} onClick={()=>{history.push(`/${text}`)}} align="right" id='text'>{text}</Typography>
                </Toolbar>
            </AppBar>
            </div>
            </React.Fragment>
    );
}