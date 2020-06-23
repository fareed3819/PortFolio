import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppBar from '../components/organisms/AppBar'
import Routes from '../components/molecules/Routes'

function LandingPage() {
    return (
        <div>
            <Router>
                <AppBar />
                <div style={{ paddingTop: 40, height: '560px', backgroundColor: '#1ABC9C' }}><Routes /></div>
            </Router>
        </div>
    )
}

export default LandingPage
