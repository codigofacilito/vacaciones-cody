import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 16px',
    },
    sizeBox:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60%',
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        WebkitTextStroke:' 3px #fff',
        letterSpacing: '4px',
        ['@media (max-width:414px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '45px'      
        },
        ['@media (max-width:360px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '40px'      
        },
        ['@media (max-width:280px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '28px'      
        }    
    },
    subTitleFontBox: {
        maxWidth:'70%',

        ['@media (max-width:414px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '15px',
            maxWidth:'90%',    
        },
        ['@media (max-width:360px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '12px'      
        },
        ['@media (max-width:280px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '11px',
            maxWidth:'87%',          
        }    
    },
    subTitle: {
        fontWeight: 'bold',
        marginBottom: '-10px',
    },
    iconList: {
        display: 'flex',
        flexDirection: 'row ',
        alignItems: 'center',
        marginBottom: '18px',
    },
    iconMargin: {
        marginRight: '5px',
        width: '22px',
    },
    img: {
        width: '100%',
        marginBottom: '10px',
    },
    imagebackground: {
        backgroundImage:
        `url(https://images.unsplash.com/photo-1610987067729-4c3d2e98eb57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1037&q=80)`,
        backgroundPosition: 'center', /* Center the image */
        backgroundRepeat: 'no-repeat', /* Do not repeat the image */
        backgroundSize: 'cover',
        filter: 'grayscale(100%)',
        color:'#fff',
        height:'100vh'
    },
    container: {
        display: 'flex',
        flexFlow:'row wrap',
        justifyContent: 'space-around',
        margin: '2em 2em',
        ['@media (max-width:414px)']: { // eslint-disable-line no-useless-computed-key
            flexFlow:'column wrap',
            margin: '2em 1.2em',
            maxWidth:'100%',    
        },
        ['@media (max-width:280px)']: { // eslint-disable-line no-useless-computed-key
            flexFlow:'column wrap',
            margin: '2em 1em',
        },
    },
    sizeSection: {
        maxWidth: '40%',
        marginTop: '2em',
        ['@media (max-width:414px)']: { // eslint-disable-line no-useless-computed-key
            flexFlow:'column wrap',
            maxWidth:'100%',    
        },
    },
}));
export { useStyles }