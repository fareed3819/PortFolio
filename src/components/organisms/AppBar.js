import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../atoms/Logo'
import NavList from '../molecules/NavList'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    navitems: {
        display: 'flex',
        justifyContent: 'space-between'

    }

}));

export default function DenseAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ padding: 6, backgroundColor: 'black' }}>
                <Toolbar className={classes.navitems}>
                    <div><Logo name="Fareed Sheik" /></div>
                    <NavList />
                </Toolbar>
            </AppBar>
        </div>
    );
}
