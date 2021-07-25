import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: '2em',
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
        ['@media (max-width:280px)']: { // eslint-disable-line no-useless-computed-key
          fontSize: '12px'      
        }
      },  
}));
export { useStyles }
