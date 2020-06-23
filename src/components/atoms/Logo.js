import React from 'react'
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    logo: {
        paddingRight: 20,
        fontWeight: 900
    }
}));

function Logo(props) {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h5" className={classes.logo}>{props.name}</Typography>
        </div>
    )
}

export default Logo
