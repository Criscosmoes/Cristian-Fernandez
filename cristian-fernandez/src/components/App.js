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
  const [loading, setLoading] = useState(false);

  const override = `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    font-size: 10rem;
    background: #101010
    
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <BarLoader
          css={override}
          size={40}
          loading={loading}
          color={"#daaf66"}
        />
      ) : (
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
      )}
    </div>
  );
};

export default App;
