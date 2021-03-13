import React from 'react';
import { Switch, Route } from 'react-router-dom';


import "../App.css"; 


// components

import Header from "./Header"; 
import AboutMe from "./AboutMe";
import Projects from './Projects';
import ContactForm from './ContactForm';





import { AnimatePresence } from 'framer-motion';



const App = () => {
    return (
        <div>
            <AnimatePresence>
                <Switch>

                    <Route path="/">
                        <Header />
                        <AboutMe />
                        <Projects />
                        <ContactForm />
                    </Route>

                </Switch>
            </AnimatePresence>
        </div>
    )
}

export default App
