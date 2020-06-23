import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    color: {
        color: 'white',
        textTransform: 'none',
        backgroundColor: 'green',
        '&:hover': {
            color: 'white',
            backgroundColor: 'green'
        },
    }
});

function RButton() {
    const classes = useStyles();
    return (
        <div>
            <Button variant="contained" classes={{ root: classes.color }}>Send</Button>
        </div >
    )
}

export default RButton
