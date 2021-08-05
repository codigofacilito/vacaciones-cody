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
        background: '#000',
        color: '#fff',
        paddingLeft: '10px',
        texAlign: 'right',
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
    subList: {
        display: 'flex',
        flexDirection:'row',
        fontWeight: 'bold',
        marginBottom: '1em',
        fontSize: '15px',
        WebkitTextStroke:'0.3px #000',
    },
    list: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        fontSize: '15px',
    }, 
    linkCourse : {
        listStyle: 'none',
        outline: 'none',
        color: '#000',
        listStyleType: 'none',
        textDecoration: 'none',
        backgroundColor: '#468b7a',
        padding: '2px 6px',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: '#59ab97',
          },
    },
    HealingIcon: {
        color:'#468b7a'
    },
    sectionText: {
        margin: '0',
        padding: '0',
    },
    footer: {
        backgroundColor: '#468b7a',
        color: '#202730',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:'3em',
        padding: '20px 25px'
    }, 
    imgLogo : {
        width: '13%',
        cursor: 'pointer',
    },
    textFooter: {
        fontWeight: 'bold',
        fontSize: '16px',
        cursor: 'pointer',
    }

}));
export { useStyles }