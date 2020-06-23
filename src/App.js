import React from 'react';
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Routes from './components/molecules/Routes'
import TextField from './components/atoms/RTextField'
import NameField from './components/molecules/NameField'
import EmailField from './components/molecules/EmailField'
import TextArea from './components/organisms/ContactForm'
import ContactForm from '../src/components/organisms/ContactForm'

function App() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
