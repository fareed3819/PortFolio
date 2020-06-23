import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avtar from '../static/images/avatar.svg'

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 100,
        fontWeight: 900,
        color: 'white'
    },
    tagline: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 500,
        color: 'white'
    },
    image: {
        height: 300,
        weight: 300,
        borderRadius: '50%'
    },
    center: {
        textAlign: 'center'
    }

}));

function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.center}>
            <div>
                <img src={Avtar} alt="" className={classes.image} />
            </div>
            <div className={classes.title}>Fareed Sheik</div>
            <div className={classes.tagline}>Intern at Zemoso Technologies</div>
        </div>
    )
}

export default HomePage
