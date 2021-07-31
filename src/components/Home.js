import React from 'react';
import AppBarNav from "./AppBar";
import { useStyles } from './StyleMaterialui/Home';
import { Typography, } from '@material-ui/core/';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Slider from './Slider/Slider';

import FlexBoxGrid from '../iconsSvgImage/FlexBoxGrid.svg';
import Css from '../iconsSvgImage/Css.svg';
import Ajax from '../iconsSvgImage/AJAX.svg';
import Html from '../iconsSvgImage/HTML.svg';
import Other from '../iconsSvgImage/Other.svg';
import { useHistory } from 'react-router-dom';



let theme = createTheme();
theme = responsiveFontSizes(theme);
export default function Home() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <React.Fragment> 
        <div className={classes.imagebackground}>
            <AppBarNav
            text= {'Gallery'}
            />
            <div className={classes.sizeBox}>
                <div style={{marginBottom:'3em'}}>
                    <Typography variant='h1' component='h2' align='center' className={classes.title}>vacaciones</Typography>
                    <Typography variant='h3' component='h2' align='center' className={classes.title}>cody</Typography>
                </div>
                    <Typography variant='h6' component='h2' align='center' className={classes.subTitleFontBox}>
                    Soy Cody, un aspirante a Dev, en 2019, organicé un viaje para desestresarme del código, y en esta página quiero compartirlo contigo.
                    </Typography>
            </div>
        </div>
        <div className={classes.root}>


        <div className={classes.container}>
            <section className={classes.sizeSection}>
            <header>
            <ThemeProvider theme={theme}>
                <Typography variant='h6' component='h2' className={classes.subTitle}>Mis vacaciones Frontend</Typography>
            </ThemeProvider>
            </header>
            <p> Durante el verano de 2019, decidí comenzar a aprender desarrollo frontend, por lo que durante mi viaje, estuve aprendiendo HTML, CSS, y JavaScript </p>
            <p> Cada tarde, después de conocer nuevos lugares en mis vacaciones, practicaba mis habilidades en tecnologías frontend, construyendo esta página </p>
            <p> Estos son los cursos que estuve tomando </p>
            <div className="cursos">
                <div>
                <p>Curso profesional de Desarrollo Web</p>
                </div>
                <div>
                <p>Curso para crear mi primera página web</p>
                </div>
            </div>
            </section>
            <section className={classes.sizeSection}>
                <header>
                <ThemeProvider theme={theme}>
                    <Typography variant='h6' component='h2' className={classes.subTitle}>Ruta de aprendizaje 2021</Typography>
                </ThemeProvider>
                    <p> También me propuse aprender nuevas tecnologías durante 2021</p>
                </header>
                    <Typography className={classes.iconList}><img src={FlexBoxGrid} alt='icon-FlexBox-Grid' className={classes.iconMargin}/>Flexbox, y Grid</Typography>
                    <Typography className={classes.iconList}><img src={Css} alt='icon-CSS' className={classes.iconMargin}/>Animaciones con CSS y JavaScript</Typography>
                    <Typography className={classes.iconList}><img src={Ajax} alt='icon-AJAX' className={classes.iconMargin}/>AJAX</Typography>
                    <Typography className={classes.iconList}><img src={Html} alt='icon-HTML' className={classes.iconMargin}/>HTML semántico</Typography>
                    <Typography className={classes.iconList}><img src={Other} alt='icon-Other' className={classes.iconMargin}/>Entre otros</Typography>
            </section>
            <section className={classes.sizeSection}>
            <header>
            <ThemeProvider theme={theme}>
                <Typography variant='h6' component='h2' className={classes.subTitle}>La importancia de las vacaciones</Typography>
            </ThemeProvider>
                <p>Aprender a programar y escribir código, puede ser estresante, por eso es muy importante que periódicamente nos desconectemos y descansemos apropiadamente</p>
                <p>Durante mis vacaciones aprendí que existen distintos beneficios de descansar:</p>
                <ol>
                <li>Mejora la salud mental</li>
                <li>Incrementa la motivación</li>
                <li>Reduce el burnout</li>
                <li>Mejora tu productividad y creatividad</li>
                </ol>
            </header>       
            </section>
            <section className={classes.sizeSection}>
                <header>
                <ThemeProvider theme={theme}>
                    <Typography variant='h6' component='h2' className={classes.subTitle}>Algunas fotos de mis vacaciones</Typography>
                </ThemeProvider>
                    <p>¡Bien! Sé que estás aquí por mis vacaciones, aquí te comparto algunas fotos que tomé:</p>
                </header>
                    <Slider/>
                    Puedes ver más, en la galería de fotos de mi página
                    <Typography onClick={() =>{history.push('/gallery')}}>Ir a la galería <ExitToAppIcon/></Typography>
            </section>
    </div>
            <section>
                <header>
                <ThemeProvider theme={theme}>    
                    <Typography variant='h6' component='h2' className={classes.subTitle}>Colabora en mi página</Typography>
                </ThemeProvider>    
                </header>
                <p>
                Como parte de mi formación Frontend, aprendí acerca de Git y GitHub, por lo que decidí subir mi código a GitHub <GitHubIcon/>
                </p>
                <p>
                    Puedes ayudarme a mejorar mi página, haciendo un fork de mi página, y enviando un pull request.
                </p>
                <p>
                    Si nunca antes has colaborado con un repositorio, en Código Facilito hay un tutorial que lo explica
                    <a href="" target="_blank" >Ir al tutorial</a>
                </p>
            </section>
        </div>
        </React.Fragment>
    );
}