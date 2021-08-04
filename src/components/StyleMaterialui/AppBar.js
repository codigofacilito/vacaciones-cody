import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: '2em',
    },
    fontText:{
      background: 'inherit',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,   
      ['@media (max-width:280px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: '14px'      
      }
    },
    subtitle: {
      backgroundColor: 'rgb(163,163,163, 0.1)',
      color: '#fff',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: 'rgb(26,26,26)',
      },
        ['@media (max-width:280px)']: { // eslint-disable-line no-useless-computed-key
          fontSize: '12px'      
        }
      },
    logo : {
      width: '40px',
    }  
}));
export { useStyles }
