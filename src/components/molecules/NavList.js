import React from 'react'
import NavItem from '../atoms/NavItem'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Routes from '../molecules/Routes'
const useStyles = makeStyles((theme) => ({
    navitems: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    linkclass: {
        textDecoration: 'none'
    }

}));

function NavList() {
    const classes = useStyles();
    return (
        <div className={classes.navitems}>
            <Link to="/home" className={classes.linkclass}><NavItem name="Home" /></Link>
            <Link to="/about" className={classes.linkclass}><NavItem name="About" /></Link>
            <Link to="/gallery" className={classes.linkclass}><NavItem name="Gallery" /></Link>
            <Link to="admingallery" className={classes.linkclass}><NavItem name="AdminGallery" /></Link>
            <Link to="contact" className={classes.linkclass}><NavItem name="Contact" /></Link>
        </div>
    )
}

export default NavList
