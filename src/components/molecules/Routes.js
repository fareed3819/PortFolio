import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import ContactForm from '../organisms/ContactForm'
import About from '../organisms/About'

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/"><HomePage /></Route>
                <Route path="/home"><HomePage /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/gallery"><h1>Gallery</h1></Route>
                <Route path="/admingallery"><h1>Admin</h1></Route>
                <Route path="/contact"><ContactForm /></Route>
            </Switch>
        </div>
    )
}
export default Routes