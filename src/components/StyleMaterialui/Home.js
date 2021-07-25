import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 16px',
    },
    title: {
        marginBottom: '1em',
        fontWeight: 'bold',
    },
    subTitle: {
        fontWeight: 'bold',
        marginBottom: '-10px',
    },
    iconList: {
        display: 'flex',
        flexDirection: 'row ',
        alignItems: 'center',
    },
    iconMargin: {
        marginRight: '5px',
    },
    img: {
        width: '100%',
        marginBottom: '10px',
    }
}));
export { useStyles }