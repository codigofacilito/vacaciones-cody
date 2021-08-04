import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%',
        filter: 'grayscale(75%)',
        '&:hover': {
            filter: 'none',
          },
    
    }
}))
const Image = ({ src, alt }) => {
    const classes = useStyles();
    return (
        <img src={src} alt={alt} className={classes.img}/>
    )
}

export default Image
