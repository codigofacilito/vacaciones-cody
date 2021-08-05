import React from 'react';
import AppBarNav from './AppBar';
import { useStyles } from './StyleMaterialui/Home';
import { Typography, } from '@material-ui/core/';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import HealingIcon from '@material-ui/icons/Healing';

import Slider from './Slider/Slider';

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
            <p> Durante el verano de 2019, decidí comenzar a aprender desarrollo frontend, por lo que durante mi viaje, estuve aprendiendo HTML, CSS, y JavaScript. <br/>
             Cada tarde, después de conocer nuevos lugares en mis vacaciones, practicaba mis habilidades en tecnologías frontend, construyendo esta página. </p>
            <Typography className={classes.subList}><ArrowDropDownIcon/>Estos son los cursos que estuve tomando</Typography>
            <div>
                <Typography className={classes.list} style={{marginBottom:'5px'}}><BookmarksIcon/><a href='https://codigofacilito.com/cursos/frontend-profesional' target='_blank' rel="noopener noreferrer" className={classes.linkCourse}>Curso profesional de Desarrollo Web</a></Typography>
                <Typography className={classes.list}><BookmarksIcon/><a href='https://codigofacilito.com/cursos/primera-pagina-2019' target='_blank' rel="noopener noreferrer" className={classes.linkCourse}>Curso para crear mi primera página web</a></Typography>
            </div>
            </section>
            <section className={classes.sizeSection}>
                <header>
                <ThemeProvider theme={theme}>
                    <Typography variant='h6' component='h2' className={classes.subTitle}>Ruta de aprendizaje 2021</Typography>
                </ThemeProvider>
                    <p> También me propuse aprender nuevas tecnologías durante 2021</p>
                </header>
                    <Typography className={classes.list}><BookmarkIcon/>Flexbox, y Grid</Typography>
                    <Typography className={classes.list}><BookmarkIcon/>Animaciones con CSS y JavaScript</Typography>
                    <Typography className={classes.list}><BookmarkIcon/>AJAX</Typography>
                    <Typography className={classes.list}><BookmarkIcon/>HTML semántico</Typography>
                    <Typography className={classes.list}><BookmarkIcon/>Entre otros</Typography>
            </section>
            <section className={classes.sizeSection}>
            <header>
            <ThemeProvider theme={theme}>
                <Typography variant='h6' component='h2' className={classes.subTitle}>La importancia de las vacaciones</Typography>
            </ThemeProvider>
                <p>Aprender a programar y escribir código, puede ser estresante, por eso es muy importante que periódicamente nos desconectemos y descansemos apropiadamente</p>
                <p>Durante mis vacaciones aprendí que existen distintos beneficios de descansar:</p>
                <ol>
                <Typography className={classes.list}><HealingIcon className={classes.HealingIcon}/>Mejora la salud mental</Typography>
                <Typography className={classes.list}><HealingIcon className={classes.HealingIcon}/>Incrementa la motivación</Typography>
                <Typography className={classes.list}><HealingIcon className={classes.HealingIcon}/>Reduce el burnout</Typography>
                <Typography className={classes.list}><HealingIcon className={classes.HealingIcon}/>Mejora tu productividad y creatividad</Typography>
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
                    <Typography onClick={() =>{history.push('/gallery')}} className={classes.list}>Ir a la galería <ExitToAppIcon/></Typography>
            </section>
    </div>
            <section>
                <header>
                <ThemeProvider theme={theme}>    
                    <Typography variant='h6' component='h2' className={classes.subTitle}>Colabora en mi página</Typography>
                </ThemeProvider>    
                </header>
                <div>
                <p className={classes.sectionText}>
                Como parte de mi formación Frontend, aprendí acerca de Git y GitHub, por lo que decidí subir mi código a GitHub <GitHubIcon/>
                </p>
                <p className={classes.sectionText}>
                    Puedes ayudarme a mejorar mi página, haciendo un fork de mi página, y enviando un pull request.
                </p>
                <p className={classes.sectionText}>
                    Si nunca antes has colaborado con un repositorio, en Código Facilito hay un tutorial que lo explica
                    <a href="https://vimeo.com/577246176" target="_blank" rel="noopener noreferrer" className={classes.linkCourse} style={{marginLeft:'8px'}}>Ir al tutorial</a>
                </p>
                </div>
            </section>
            </div>
            <footer className={classes.footer}>
                <p className={classes.textFooter}>Vacaciones Cody</p>
                <img src='https://codigofacilito.com/assets/logo-cbf2a784ebee5d642aa7b8182df3e388d4feba0a23577eed1d2747fa05861f73.png' alt='logo-códigoFacilito' className={classes.imgLogo} onClick={()=> window.open("https://codigofacilito.com/", "_blank")}/>
                <p className={classes.textFooter} onClick={()=> window.open("https://github.com/CarlaSanchezCorrea", "_blank")}>@carlasanchezcorrea</p>
            </footer>
        </React.Fragment>
    );
}