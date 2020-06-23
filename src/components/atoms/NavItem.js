import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        fontWeight: 400,
        fontSize: 18,
        textTransform: 'none',
        color: 'white',
        marginLeft: 20
    }
}));

function NavItem(props) {
    const classes = useStyles();
    return (
        <div>
            <Button className={classes.button}>{props.name}</Button>
        </div>
    )
}

export default NavItem
