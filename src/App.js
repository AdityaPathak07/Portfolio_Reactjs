import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Social from './components/Social';

 function App() {
    return (<>
      <Navbar />
      <Home />
      <About />
      <Social />
      <Portfolio />
      <Experience />
      <Contact />
    </>)
}
export default App;
