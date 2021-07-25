import React from 'react';
import AppBarNav from "./AppBar";
import { useStyles } from './StyleMaterialui/Home';
import { Typography, } from '@material-ui/core/';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';

let theme = createTheme();
theme = responsiveFontSizes(theme);
export default function Home() {
    const classes = useStyles();
        return (
        <React.Fragment> 
            <AppBarNav
            text= {'Gallery'}
            />
        <div className={classes.root}>
            <header>
            <ThemeProvider theme={theme}>
                <Typography variant='h4' component='h2' align='center' className={classes.title}>Mis Vacaciones</Typography>
            <p>Soy Cody, un aspirante a Dev, en 2019, organicé un viaje para desestresarme del código, y en esta página quiero compartirlo contigo.</p>
            </ThemeProvider>
            </header>

            <section>
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
            <section>
                <header>
                <ThemeProvider theme={theme}>
                    <Typography variant='h6' component='h2' className={classes.subTitle}>Ruta de aprendizaje 2021</Typography>
                </ThemeProvider>
                    <p> También me propuse aprender nuevas tecnologías durante 2021</p>
                </header>
                    <Typography className={classes.iconList}><ViewCompactIcon className={classes.iconMargin}/>Flexbox, y Grid</Typography>
                    <Typography className={classes.iconList}><CodeIcon className={classes.iconMargin}/>Animaciones con CSS y JavaScript</Typography>
                    <Typography className={classes.iconList}><CodeIcon className={classes.iconMargin}/>AJAX</Typography>
                    <Typography className={classes.iconList}><CodeIcon className={classes.iconMargin}/>HTML semántico</Typography>
                    <Typography className={classes.iconList}><CodeIcon className={classes.iconMargin}/>Entre otros</Typography>
            </section>
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
            <section>
                <header>
                <ThemeProvider theme={theme}>
                    <Typography variant='h6' component='h2' className={classes.subTitle}>Aquí te comparto algunas fotos de mis vacaciones</Typography>
                </ThemeProvider>
                    <p>¡Bien! Sé que estás aquí por mis vacaciones, aquí te comparto algunas fotos que tomé:</p>
                </header>
                <div className="fotos">
                    <img src={image1} alt="Cody en la playa" className={classes.img}/>
                    <img src={image2} alt="Cody acampando" className={classes.img}/>
                    <img src={image3} alt="Cody en una alberca" className={classes.img}/>
                    Puedes ver más, en la galería de fotos de mi página
                    <a href="/gallery">Ir a la galería</a>
                </div>
            </section>

            <section>
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
        </div>
        </React.Fragment>
    );
}