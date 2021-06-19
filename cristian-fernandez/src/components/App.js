import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";

import "../App.css";

// components

import Header from "./Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

import { AnimatePresence } from "framer-motion";

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
            <Footer />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
