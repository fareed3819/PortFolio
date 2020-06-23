import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    title: { textAlign: 'left', fontWeight: 900, color: 'white', marginBottom: 20, marginLeft: 20, marginTop: '100px' },
    content: { display: 'flex', flexDirection: 'row', width: 800 },
    font: { fontSize: 20, margin: 20, fontStyle: 'italic' },
}));
function About() {
    const classes = useStyles();
    return (
        <div classname={classes.center}>
            <Typography variant="h3" className={classes.title}>About Me</Typography>
            <div className={classes.content}>
                <div className={classes.font}>This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.</div>
                <div className={classes.font}>This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.</div>
            </div>

        </div>
    )
}

export default About
