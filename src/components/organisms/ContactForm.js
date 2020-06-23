import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NameField from '../molecules/NameField'
import EmailField from '../molecules/EmailField'
import TextArea from '../atoms/TextArea'
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import Button from '../atoms/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 346,
        padding: 20,
        justifyContent: 'center',
        border: '1px solid grey',
        borderRadius: 7,
        boxShadow: '0px 0px 2px 2px #eeeeee',

    },
    margin: { marginBottom: 30 },
    padding: { padding: 20 },
    title: { textAlign: 'left', fontWeight: 900, color: '#2C3E50', marginBottom: 20 },
    center: { alignSelf: 'center', marginLeft: '35%' }
}));
function ContactForm() {
    const classes = useStyles();
    return (
        <div className={classes.center}>
            <Typography variant="h3" className={classes.title}>Contact Me</Typography>
            <Card className={classes.root}>
                <form className={classes.padding} noValidate autoComplete="off">
                    <NameField />
                    <EmailField /><div className={classes.margin}></div>
                    <TextArea /><div className={classes.margin}></div>
                    <Button />
                </form>
            </Card>
        </div>
    )
}

export default ContactForm
